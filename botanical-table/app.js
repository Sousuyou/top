/*
 * ボタニカル表：ジンで使われる植物素材と代表的な香気成分を検索・集計する。
 * 成分は一般的な精油・香味素材の代表例で、銘柄や抽出条件により変動する。
 */
(function () {
  "use strict";

  var STORAGE_KEY = "soutsu_botanical_table_selected";

  var BOTANICAL_DATA = window.SOUTSU_BOTANICAL_DATA || {};
  var COMPONENTS = BOTANICAL_DATA.components || {};
  var BOTANICALS = BOTANICAL_DATA.botanicals || [];
  var PLANT_FAMILIES = BOTANICAL_DATA.families || {};
  var STOCK_DATA_URLS = ["/gin-stock/gins.json", "/gin-stock-repo/gins.json", "../../gin-stock-repo/gins.json"];
  var usageCounts = {};
  var STOCK_BOTANICAL_ALIASES = {
    "ジュニパー": "ジュニパーベリー",
    "コリアンダー": "コリアンダーシード",
    "アンジェリカ": "アンジェリカルート",
    "リコリスルート": "リコリス",
    "オリス": "オリスルート",
    "アイリス": "オリスルート",
    "レモン": "レモンピール",
    "オレンジ": "オレンジピール",
    "グレープフルーツ": "グレープフルーツピール",
    "ライム": "ライムピール",
    "ベルガモット": "ベルガモットピール",
    "アニス": "アニスシード",
    "フェンネル": "フェンネルシード",
    "キャラウェイ": "キャラウェイシード",
    "カッシア": "カシア",
    "カシアバーク": "カシア",
    "カッシアバーク": "カシア",
    "クベブ": "クベブペッパー",
    "キュベブ": "クベブペッパー",
    "クベバ": "クベブペッパー",
    "クベバベリー": "クベブペッパー",
    "黒胡椒": "ブラックペッパー",
    "グリーンカルダモン": "カルダモン",
    "カルダモンシード": "カルダモン",
    "ベイリーフ": "ローレル",
    "ローリエ": "ローレル",
    "緑茶": "煎茶",
    "アールグレイ": "紅茶",
    "バラ": "ローズ",
    "ブルガリアンローズ": "ローズ",
    "メドウスウィート": "メドウスイート",
    "シーベリー": "シーバックソーン",
    "ストロベリー": "苺",
    "イチゴ": "苺",
    "紫蘇": "青紫蘇",
    "柚子ピール": "柚子",
    "ゆず": "柚子",
    "コースタルタイム": "タイム"
  };
  var STOCK_BOTANICAL_JUNK = {
    "不明": 1, "公式情報なし": 1, "非公開": 1, "情報なし": 1, "その他": 1,
    "スパイス": 1, "ハーブ": 1, "各種": 1, "数種": 1, "複数": 1, "各種ボタニカル": 1,
    "シトラス": 1, "柑橘": 1, "柑橘ピール": 1, "核果": 1, "ストーンフルーツ": 1
  };

  var els = {};
  var selected = loadSelected();

  function $(id) { return document.getElementById(id); }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function norm(s) {
    return String(s == null ? "" : s).normalize("NFKC").toLowerCase().replace(/[ァ-ヶ]/g, function (ch) {
      return String.fromCharCode(ch.charCodeAt(0) - 0x60);
    });
  }

  function compactName(name) {
    return norm(name).replace(/[ー\s・･]/g, "");
  }

  function stockTokenToBotanical(name) {
    if (!name || STOCK_BOTANICAL_JUNK[name]) return null;
    var wanted = STOCK_BOTANICAL_ALIASES[name] || name;
    if (name.indexOf("ジュニパー") >= 0) wanted = "ジュニパーベリー";
    var key = compactName(wanted);
    for (var i = 0; i < BOTANICALS.length; i++) {
      if (compactName(BOTANICALS[i].name) === key) return BOTANICALS[i].name;
    }
    for (var j = 0; j < BOTANICALS.length; j++) {
      var bkey = compactName(BOTANICALS[j].name);
      if (bkey.indexOf(key) >= 0 || key.indexOf(bkey) >= 0) return BOTANICALS[j].name;
    }
    return null;
  }

  function stockBotTokens(text) {
    if (!text) return [];
    var parts = String(text).split(/[、,／/・\n]+/);
    var seen = {}, out = [];
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i].replace(/（[^）]*）/g, "").replace(/\([^)]*\)/g, "").trim();
      p = p.replace(/(など|等|ほか|他)$/, "").trim();
      var name = stockTokenToBotanical(p);
      if (name && !seen[name]) {
        seen[name] = 1;
        out.push(name);
      }
    }
    return out;
  }

  function fetchStockJson(index) {
    if (index >= STOCK_DATA_URLS.length) return Promise.reject(new Error("stock data not found"));
    return fetch(STOCK_DATA_URLS[index], { cache: "no-store" }).then(function (r) {
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.json();
    }).catch(function () {
      return fetchStockJson(index + 1);
    });
  }

  function loadStockUsage() {
    fetchStockJson(0).then(function (data) {
      var counts = {};
      ((data && data.gins) || []).forEach(function (g) {
        stockBotTokens(g.botanicals).forEach(function (name) {
          counts[name] = (counts[name] || 0) + 1;
        });
      });
      usageCounts = counts;
      renderList();
    }).catch(function () {
      renderList();
    });
  }

  function loadSelected() {
    try {
      var arr = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]");
      return new Set(Array.isArray(arr) ? arr : []);
    } catch (e) {
      return new Set();
    }
  }

  function saveSelected() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(selected)));
    } catch (e) {}
  }

  function byName(name) {
    for (var i = 0; i < BOTANICALS.length; i++) {
      if (BOTANICALS[i].name === name) return BOTANICALS[i];
    }
    return null;
  }

  function plantFamily(b) {
    return PLANT_FAMILIES[b.name] || "分類未設定";
  }

  function botanicalHay(b) {
    return norm([
      b.name, b.reading, b.latin, b.group, plantFamily(b), b.part, b.aroma, b.role, b.components.join(" ")
    ].join(" "));
  }

  function fillGroups() {
    var groups = [];
    var seen = {};
    BOTANICALS.forEach(function (b) {
      if (!seen[b.group]) {
        seen[b.group] = true;
        groups.push(b.group);
      }
    });
    els.groupFilter.innerHTML = '<option value="">すべて</option>' + groups.map(function (g) {
      return '<option value="' + esc(g) + '">' + esc(g) + '</option>';
    }).join("");
  }

  function fillFamilies() {
    var families = [];
    var seen = {};
    BOTANICALS.forEach(function (b) {
      var family = plantFamily(b);
      if (!seen[family]) {
        seen[family] = true;
        families.push(family);
      }
    });
    families.sort(function (a, b) { return a.localeCompare(b, "ja"); });
    els.familyFilter.innerHTML = '<option value="">すべて</option>' + families.map(function (family) {
      return '<option value="' + esc(family) + '">' + esc(family) + '</option>';
    }).join("");
  }

  function applyInitialQuery() {
    try {
      var params = new URLSearchParams(window.location.search);
      var q = params.get("q");
      if (q) els.search.value = q;
    } catch (e) {}
  }

  function compareReading(a, b) {
    return (a.reading || a.name).localeCompare(b.reading || b.name, "ja");
  }

  function sortBotanicals(rows) {
    return rows.slice().sort(function (a, b) {
      var au = usageCounts[a.name] || 0;
      var bu = usageCounts[b.name] || 0;
      if (bu !== au) return bu - au;
      return compareReading(a, b);
    });
  }

  function filteredBotanicals() {
    var q = norm(els.search.value.trim());
    var group = els.groupFilter.value;
    var family = els.familyFilter.value;
    return sortBotanicals(BOTANICALS.filter(function (b) {
      if (group && b.group !== group) return false;
      if (family && plantFamily(b) !== family) return false;
      if (q && botanicalHay(b).indexOf(q) < 0) return false;
      return true;
    }));
  }

  function renderList() {
    var rows = filteredBotanicals();
    els.resultCount.textContent = rows.length + "件表示 / 全" + BOTANICALS.length + "件";
    if (!rows.length) {
      els.botanicalList.innerHTML = '<p class="empty">条件に合うボタニカルがありません。</p>';
      return;
    }
    els.botanicalList.innerHTML = rows.map(function (b) {
      var on = selected.has(b.name);
      var family = plantFamily(b);
      var usage = usageCounts[b.name] || 0;
      return '<article class="botanical-card' + (on ? " is-selected" : "") + '">' +
        '<div class="botanical-head">' +
          '<div><h3 class="botanical-name">' + esc(b.name) + '</h3><p class="latin">' + esc(b.latin) + '</p></div>' +
          '<span class="group-badge">' + esc(b.group) + '</span>' +
        '</div>' +
        '<div class="meta-line">' +
          '<button type="button" class="family-btn" data-family="' + esc(family) + '">' + esc(family) + '</button>' +
          '<span class="meta">部位: ' + esc(b.part) + '</span>' +
          '<span class="meta">成分: ' + b.components.length + '</span>' +
          '<span class="meta">在庫: ' + usage + '</span>' +
        '</div>' +
        '<p class="aroma">' + esc(b.aroma) + '</p>' +
        '<p class="role">' + esc(b.role) + '</p>' +
        '<p class="components"><b>主成分:</b> ' + esc(b.components.slice(0, 6).join(" / ")) + '</p>' +
        '<button type="button" class="select-btn' + (on ? " is-active" : "") + '" data-name="' + esc(b.name) + '">' + (on ? "選択中" : "選択する") + '</button>' +
      '</article>';
    }).join("");
  }

  function selectedBotanicals() {
    return BOTANICALS.filter(function (b) { return selected.has(b.name); });
  }

  function aggregateComponents() {
    var map = {};
    selectedBotanicals().forEach(function (b) {
      b.components.forEach(function (name) {
        if (!map[name]) {
          var info = COMPONENTS[name] || { family: "その他", note: "代表成分。詳細メモ未登録" };
          map[name] = { name: name, family: info.family, note: info.note, botanicals: [] };
        }
        map[name].botanicals.push(b.name);
      });
    });
    return Object.keys(map).map(function (name) {
      return map[name];
    }).sort(function (a, b) {
      var mode = els.componentSort.value;
      if (mode === "name") return a.name.localeCompare(b.name, "ja");
      if (mode === "family") {
        return a.family.localeCompare(b.family, "ja") || a.name.localeCompare(b.name, "ja");
      }
      if (b.botanicals.length !== a.botanicals.length) return b.botanicals.length - a.botanicals.length;
      return a.name.localeCompare(b.name, "ja");
    });
  }

  function renderSelected() {
    var items = selectedBotanicals();
    if (!items.length) {
      els.selectedList.innerHTML = '<p class="empty">ボタニカルカードの「選択する」を押すと、ここに並びます。</p>';
      return;
    }
    els.selectedList.innerHTML = items.map(function (b) {
      return '<span class="selected-pill">' + esc(b.name) +
        '<button type="button" aria-label="' + esc(b.name) + 'を外す" data-remove="' + esc(b.name) + '">×</button></span>';
    }).join("");
  }

  function renderComponents() {
    var rows = aggregateComponents();
    els.componentNote.textContent = selected.size
      ? selected.size + "種のボタニカルから " + rows.length + "件の成分を集計"
      : "ボタニカルを選択してください";

    if (!rows.length) {
      els.familySummary.innerHTML = "";
      els.componentTable.innerHTML = '<tr><td colspan="4">選択すると香気成分がここにまとまります。</td></tr>';
      return;
    }

    var familyCounts = {};
    rows.forEach(function (r) {
      familyCounts[r.family] = (familyCounts[r.family] || 0) + 1;
    });
    els.familySummary.innerHTML = Object.keys(familyCounts).sort(function (a, b) {
      return familyCounts[b] - familyCounts[a] || a.localeCompare(b, "ja");
    }).map(function (family) {
      return '<span class="family-chip">' + esc(family) + ' ' + familyCounts[family] + '</span>';
    }).join("");

    els.componentTable.innerHTML = rows.map(function (r) {
      return '<tr>' +
        '<td><span class="component-name">' + esc(r.name) + '</span><span class="component-count">' + r.botanicals.length + '</span></td>' +
        '<td>' + esc(r.family) + '</td>' +
        '<td>' + esc(r.note) + '</td>' +
        '<td>' + esc(r.botanicals.join(" / ")) + '</td>' +
      '</tr>';
    }).join("");
  }

  function render() {
    renderSelected();
    renderComponents();
    renderList();
  }

  function toggle(name) {
    if (selected.has(name)) selected.delete(name); else selected.add(name);
    saveSelected();
    render();
  }

  function bind() {
    ["input", "change"].forEach(function (eventName) {
      els.search.addEventListener(eventName, renderList);
    });
    els.groupFilter.addEventListener("change", renderList);
    els.familyFilter.addEventListener("change", renderList);
    els.componentSort.addEventListener("change", renderComponents);
    els.botanicalList.addEventListener("click", function (e) {
      var familyBtn = e.target.closest("[data-family]");
      if (familyBtn) {
        els.familyFilter.value = familyBtn.getAttribute("data-family");
        renderList();
        return;
      }
      var btn = e.target.closest("[data-name]");
      if (!btn) return;
      toggle(btn.getAttribute("data-name"));
    });
    els.selectedList.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-remove]");
      if (!btn) return;
      selected.delete(btn.getAttribute("data-remove"));
      saveSelected();
      render();
    });
    els.resetFilters.addEventListener("click", function () {
      els.search.value = "";
      els.groupFilter.value = "";
      els.familyFilter.value = "";
      renderList();
    });
    els.clearSelection.addEventListener("click", function () {
      selected.clear();
      saveSelected();
      render();
    });
  }

  function init() {
    els = {
      search: $("search"),
      groupFilter: $("group-filter"),
      familyFilter: $("family-filter"),
      componentSort: $("component-sort"),
      resultCount: $("result-count"),
      botanicalList: $("botanical-list"),
      selectedList: $("selected-list"),
      componentTable: $("component-table"),
      familySummary: $("family-summary"),
      componentNote: $("component-note"),
      resetFilters: $("reset-filters"),
      clearSelection: $("clear-selection"),
    };
    fillGroups();
    fillFamilies();
    applyInitialQuery();
    bind();
    render();
    loadStockUsage();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
