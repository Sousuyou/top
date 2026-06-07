/*
 * TOPページの「更新情報（What's New）」データ。
 * ★更新したら、この UPDATES の先頭に1行追加する（新しいものが上）。
 *   date = 日付 "YYYY-MM-DD" / tag = どのツールか / text = 何をしたか（一言）
 *   表示は新しい順に最大 MAX 件。
 */
window.UPDATES = [
  { date: "2026-06-07", tag: "ジン教本", text: "第14章「ジンのフレーバーホイール大全」を新設。香りの系統と香気成分（におい分子）まで解説しました。" },
  { date: "2026-06-07", tag: "ジン教本", text: "章を再編（カクテル大全を削除し全14章に）。全体を監修し、事実と文体（です・ます調）を整えました。" },
  { date: "2026-06-07", tag: "ジン教本", text: "用語集を大幅に拡充（ボタニカル・製法・テイスティング用語など）。" },
  { date: "2026-06-07", tag: "ジン教本", text: "ジン・トニックの設計にトニック5製品（CAPI・フランクリン・サントリー・Q・神戸居留地）を追加しました。" },
  { date: "2026-06-07", tag: "レシピ帳", text: "各レシピに「グラス・ガーニッシュ」欄と、ジン教本への学習リンクを追加しました。" },
  { date: "2026-06-04", tag: "全ツール", text: "ダークモード・ホーム画面追加（アプリ化）・SNS共有画像に対応しました。" },
  { date: "2026-06-04", tag: "共通", text: "上部メニューを全ツールで統一し、公式HP・Instagram・Xへのリンクを追加しました。" },
  { date: "2026-06-04", tag: "TOP", text: "このTOPページを新設しました。" },
];

(function () {
  "use strict";
  var MAX = 8; // 表示する項目（行）の最大件数
  var NEW_DAYS = 7; // 直近この日数以内の項目に「NEW」バッジを付ける

  function esc(s) {
    return String(s).replace(/[&<>]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c];
    });
  }

  // "YYYY-MM-DD" を Date(ローカル0時) に変換。失敗時は null
  function parseDate(s) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(s));
    if (!m) return null;
    return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
  }

  // 2つの日付の差（日数）。a, b は Date
  function diffDays(a, b) {
    return Math.round((a.getTime() - b.getTime()) / 86400000);
  }

  function render() {
    var el = document.getElementById("update-list");
    if (!el) return;
    var items = (window.UPDATES || []).slice(0, MAX);
    if (!items.length) {
      el.innerHTML = '<li class="update-empty">更新情報はまだありません。</li>';
      return;
    }

    // 基準日（今日0時）と、データ内で最も新しい日付を求める
    var today = new Date();
    today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    var latestKey = null;
    items.forEach(function (u) {
      if (latestKey === null || String(u.date) > latestKey) latestKey = String(u.date);
    });

    // 表示順（新しい順）を維持したまま、同じ日付ごとにまとめる
    var groups = [];
    var indexByDate = {};
    items.forEach(function (u) {
      var key = String(u.date);
      if (!(key in indexByDate)) {
        indexByDate[key] = groups.length;
        groups.push({ date: key, items: [] });
      }
      groups[indexByDate[key]].items.push(u);
    });

    // その日付グループに NEW バッジを付けるか判定
    function isNewGroup(key) {
      if (key === latestKey) return true; // 最新日付グループは必ずNEW
      var d = parseDate(key);
      if (!d) return false;
      var diff = diffDays(today, d); // 今日との差（日数）
      return diff >= 0 && diff <= NEW_DAYS; // 直近N日以内
    }

    el.innerHTML = groups
      .map(function (g) {
        var newBadge = isNewGroup(g.date)
          ? '<span class="update-new" aria-label="新着">NEW</span>'
          : "";
        var rows = g.items
          .map(function (u) {
            return (
              '<li class="update-row">' +
              '<span class="update-tag">' + esc(u.tag) + "</span>" +
              '<span class="update-text">' + esc(u.text) + "</span>" +
              "</li>"
            );
          })
          .join("");
        return (
          '<li class="update-group">' +
          '<div class="update-group-head">' +
          '<span class="update-date">' + esc(g.date) + "</span>" +
          newBadge +
          "</div>" +
          '<ul class="update-rows">' + rows + "</ul>" +
          "</li>"
        );
      })
      .join("");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
