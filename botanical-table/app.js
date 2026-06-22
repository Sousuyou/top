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
    var mode = els.sortFilter.value;
    return rows.slice().sort(function (a, b) {
      if (mode === "selected") {
        var sa = selected.has(a.name) ? 1 : 0;
        var sb = selected.has(b.name) ? 1 : 0;
        if (sb !== sa) return sb - sa;
        return compareReading(a, b);
      }
      if (mode === "family") {
        return plantFamily(a).localeCompare(plantFamily(b), "ja") || compareReading(a, b);
      }
      if (mode === "group") {
        return a.group.localeCompare(b.group, "ja") || compareReading(a, b);
      }
      if (mode === "part") {
        return a.part.localeCompare(b.part, "ja") || compareReading(a, b);
      }
      if (mode === "components-desc") {
        return b.components.length - a.components.length || compareReading(a, b);
      }
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
      return '<article class="botanical-card' + (on ? " is-selected" : "") + '">' +
        '<div class="botanical-head">' +
          '<div><h3 class="botanical-name">' + esc(b.name) + '</h3><p class="latin">' + esc(b.latin) + '</p></div>' +
          '<span class="group-badge">' + esc(b.group) + '</span>' +
        '</div>' +
        '<div class="meta-line">' +
          '<button type="button" class="family-btn" data-family="' + esc(family) + '">' + esc(family) + '</button>' +
          '<span class="meta">部位: ' + esc(b.part) + '</span>' +
          '<span class="meta">成分: ' + b.components.length + '</span>' +
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
    els.sortFilter.addEventListener("change", renderList);
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
      els.sortFilter.value = "reading";
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
      sortFilter: $("sort-filter"),
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
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
