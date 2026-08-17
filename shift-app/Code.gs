/**
 * ===== Bar Soutsu 勤怠管理 — 裏側のプログラム（Google Apps Script）=====
 *
 * これは「運び屋」です。アプリ画面からの指示を受けて、
 * このスプレッドシートにシフトなどを読み書きします。
 *
 * ★ 使う前に必ず1か所だけ変えてください ★
 *   下の OWNER_PIN を、あなただけが知っている数字（暗証番号）に変更します。
 *   おすすめは6桁以上。 例： var OWNER_PIN = "483920";
 *   ※ "0000"（初期値）や4桁未満のままだと、安全のため給料機能は動きません。
 */
var OWNER_PIN = "0000"; // ← ここをあなたの暗証番号（6桁以上推奨）に変えてください

// 各シートの列（さわらなくてOK）
var SHEETS = {
  shifts:   ["date", "staffId", "start", "end", "break", "off", "status"],
  staff:    ["id", "name", "role", "wage", "worker", "owner"],
  notes:    ["monthKey", "staffId", "text"],
  settings: ["key", "value"]
};

function doGet(e)  { return handle(e); }
function doPost(e) { return handle(e); }

// 入口：アプリからの指示(action)を受けて処理を振り分ける
function handle(e) {
  // 同時アクセスでデータが壊れないよう、処理中は鍵をかける
  var lock = LockService.getScriptLock();
  try { lock.waitLock(8000); } catch (lockErr) { /* 取得できなくても続行 */ }

  var req = {};
  try {
    if (e && e.postData && e.postData.contents) req = JSON.parse(e.postData.contents);
    else if (e && e.parameter) req = e.parameter;
  } catch (err) { req = (e && e.parameter) || {}; }

  var action = req.action || "load";
  var out;
  try {
    ensureSheets();
    if (action === "load")            out = { ok: true, data: loadData() };
    else if (action === "saveShift")  out = saveShift(req);
    else if (action === "deleteShift")out = deleteShift(req);
    else if (action === "confirmRange") out = confirmRange(req);
    else if (action === "saveNote")   out = saveNote(req);
    else if (action === "saveSettings") out = saveSettings(req);
    else if (action === "salary")     out = salary(req);   // 給料（PIN必須）
    else if (action === "saveStaff")  out = saveStaff(req); // メンバー編集（PIN必須）
    else out = { ok: false, error: "不明なaction: " + action };
  } catch (err) {
    out = { ok: false, error: String(err) };
  } finally {
    try { lock.releaseLock(); } catch (e2) {}
  }
  return ContentService.createTextOutput(JSON.stringify(out))
    .setMimeType(ContentService.MimeType.JSON);
}

function ss() { return SpreadsheetApp.getActiveSpreadsheet(); }

// 行を追加する前に、その行を「文字列」書式にしてから値を入れる。
// （日付 "2026-08-17" や時刻 "18:00" を Sheets が勝手に変換するのを防ぐ）
function appendRowText(sh, values) {
  var r = sh.getLastRow() + 1;
  sh.getRange(r, 1, 1, values.length).setNumberFormat("@").setValues([values]);
}

// シートが無ければ作る＋初期データを入れる
function ensureSheets() {
  var s = ss();
  Object.keys(SHEETS).forEach(function (name) {
    var sh = s.getSheetByName(name);
    if (!sh) { sh = s.insertSheet(name); }
    // 全体を「文字列」書式にしてから使う
    sh.getRange(1, 1, sh.getMaxRows(), SHEETS[name].length).setNumberFormat("@");
    if (sh.getLastRow() === 0) sh.getRange(1, 1, 1, SHEETS[name].length).setValues([SHEETS[name]]);
  });
  var setSh = s.getSheetByName("settings");
  if (setSh.getLastRow() < 2) {
    appendRowText(setSh, ["closingDay", "end"]);
    appendRowText(setSh, ["deadlineDay", "25"]);
  }
  var stSh = s.getSheetByName("staff");
  if (stSh.getLastRow() < 2) {
    [["owner", "店長", "オーナー", "0", "true", "true"],
     ["tanaka", "田中", "スタッフ", "1300", "true", "false"],
     ["sato", "佐藤", "スタッフ", "1200", "true", "false"],
     ["suzuki", "鈴木", "スタッフ", "1250", "true", "false"]]
      .forEach(function (r) { appendRowText(stSh, r); });
  }
}

function sheetRows(name) {
  var sh = ss().getSheetByName(name);
  var values = sh.getDataRange().getValues();
  var head = values.shift() || SHEETS[name];
  return values.filter(function (r) { return r.join("") !== ""; }).map(function (r) {
    var o = {}; head.forEach(function (h, i) { o[h] = r[i]; }); return o;
  });
}

function bool(v) { return v === true || v === "true" || v === "TRUE" || v === 1 || v === "1"; }

// アプリに渡すデータ一式（★給料(wage)とPINは絶対に含めない★）
function loadData() {
  var shifts = {};
  sheetRows("shifts").forEach(function (r) {
    var d = String(r.date); if (!d) return;
    if (!shifts[d]) shifts[d] = {};
    shifts[d][r.staffId] = {
      start: String(r.start), end: String(r.end),
      break: Number(r.break) || 0, off: bool(r.off), status: String(r.status)
    };
  });
  var staff = sheetRows("staff").map(function (r) {
    return { id: String(r.id), name: String(r.name), role: String(r.role), worker: bool(r.worker), owner: bool(r.owner) };
    // wage は含めない → スタッフ端末には給料が届かない
  });
  var notes = {};
  sheetRows("notes").forEach(function (r) {
    var mk = String(r.monthKey); if (!mk) return;
    if (!notes[mk]) notes[mk] = {}; notes[mk][r.staffId] = String(r.text);
  });
  var settings = {};
  sheetRows("settings").forEach(function (r) { settings[r.key] = String(r.value); });
  return { shifts: shifts, staff: staff, notes: notes, settings: settings };
}

// 条件に一致する行番号（1始まり）を返す。無ければ -1
function findRow(name, match) {
  var sh = ss().getSheetByName(name);
  var values = sh.getDataRange().getValues();
  var head = values[0];
  for (var i = 1; i < values.length; i++) {
    var ok = true;
    for (var key in match) {
      if (String(values[i][head.indexOf(key)]) !== String(match[key])) { ok = false; break; }
    }
    if (ok) return i + 1;
  }
  return -1;
}

function saveShift(req) {
  var sh = ss().getSheetByName("shifts");
  var rec = req.rec || {};
  var values = [String(req.date), String(req.staffId), String(rec.start || ""), String(rec.end || ""),
                String(rec.break || 0), rec.off ? "true" : "false", String(rec.status || "requested")];
  var row = findRow("shifts", { date: req.date, staffId: req.staffId });
  if (row > 0) sh.getRange(row, 1, 1, values.length).setValues([values]);
  else appendRowText(sh, values);
  return { ok: true };
}

function deleteShift(req) {
  var sh = ss().getSheetByName("shifts");
  var row = findRow("shifts", { date: req.date, staffId: req.staffId });
  if (row > 0) sh.deleteRow(row);
  return { ok: true };
}

// 指定期間(start〜end)の全シフトを confirmed にする
function confirmRange(req) {
  var sh = ss().getSheetByName("shifts");
  var values = sh.getDataRange().getValues(); var head = values[0];
  var di = head.indexOf("date"), si = head.indexOf("status");
  for (var i = 1; i < values.length; i++) {
    var d = String(values[i][di]);
    if (d >= req.start && d <= req.end && String(values[i][si]) !== "confirmed") {
      sh.getRange(i + 1, si + 1).setValue("confirmed");
    }
  }
  return { ok: true };
}

function saveNote(req) {
  var sh = ss().getSheetByName("notes");
  var values = [String(req.monthKey), String(req.staffId), String(req.text || "")];
  var row = findRow("notes", { monthKey: req.monthKey, staffId: req.staffId });
  if (row > 0) sh.getRange(row, 1, 1, values.length).setValues([values]);
  else appendRowText(sh, values);
  return { ok: true };
}

function saveSettings(req) {
  var sh = ss().getSheetByName("settings");
  ["closingDay", "deadlineDay"].forEach(function (k) {
    if (req[k] === undefined) return;
    var row = findRow("settings", { key: k });
    if (row > 0) sh.getRange(row, 2).setValue(String(req[k]));
    else appendRowText(sh, [k, String(req[k])]);
  });
  return { ok: true };
}

/**
 * PINの確認。安全弁つき：
 *  - PINが初期値/空/4桁未満なら、給料系は動かさない
 *  - 連続5回まちがえると15分ロック（総当たり対策）
 */
function checkPin(pin) {
  if (!OWNER_PIN || OWNER_PIN === "0000" || String(OWNER_PIN).length < 4) {
    return { ok: false, error: "PIN未設定：Code.gsのOWNER_PINを変更してください" };
  }
  var props = PropertiesService.getScriptProperties();
  var now = (new Date()).getTime();
  var until = Number(props.getProperty("lockUntil") || 0);
  if (until && now < until) return { ok: false, error: "試行が多いためロック中です。しばらく待ってください。" };

  if (String(pin) === String(OWNER_PIN)) {
    props.deleteProperty("pinFails"); props.deleteProperty("lockUntil");
    return { ok: true };
  }
  var fails = Number(props.getProperty("pinFails") || 0) + 1;
  if (fails >= 5) { props.setProperty("lockUntil", String(now + 15 * 60 * 1000)); props.deleteProperty("pinFails"); }
  else { props.setProperty("pinFails", String(fails)); }
  return { ok: false, error: "PINが違います" };
}

// 給料：PINが合っているときだけ、時給の一覧を返す
function salary(req) {
  var c = checkPin(req.pin);
  if (!c.ok) return c;
  var wages = {};
  sheetRows("staff").forEach(function (r) { wages[String(r.id)] = Number(r.wage) || 0; });
  return { ok: true, wages: wages };
}

// メンバー編集：PINが合っているときだけ、スタッフ一覧を丸ごと保存
function saveStaff(req) {
  var c = checkPin(req.pin);
  if (!c.ok) return c;
  var sh = ss().getSheetByName("staff");
  sh.clearContents();
  sh.getRange(1, 1, sh.getMaxRows(), SHEETS.staff.length).setNumberFormat("@");
  sh.getRange(1, 1, 1, SHEETS.staff.length).setValues([SHEETS.staff]);
  (req.staff || []).forEach(function (p) {
    appendRowText(sh, [String(p.id), String(p.name), String(p.role),
                       String(Number(p.wage) || 0), p.worker !== false ? "true" : "false", p.owner ? "true" : "false"]);
  });
  return { ok: true };
}

// （任意）エディタ上で実行して初期化を確認するためのテスト関数
function testSetup() {
  ensureSheets();
  Logger.log(JSON.stringify(loadData(), null, 2));
}
