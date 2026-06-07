/*
 * TOPの全ツール横断検索。
 * ツール一覧・ジン教本の章・用語集を横串で検索する。
 * 章/用語のデータは gin-textbook の content.js / glossary.js を必要時に読み込む（同一ドメイン）。
 * ※カクテルレシピは現状データが別ファイル化されていないため対象外（モジュール化後に追加予定）。
 */
(function () {
  "use strict";
  var BASE = "https://sousuyou.github.io/";

  var TOOLS = [
    { name: "カクテル原価計算", url: BASE + "cocktail-cost-tool/", kw: "原価 コスト 値段 価格 原価率 売価" },
    { name: "カクテルレシピ帳", url: BASE + "cocktail-recipe-book/", kw: "レシピ カクテル 作り方 ジン" },
    { name: "ジン教本", url: BASE + "gin-textbook/", kw: "教本 学習 勉強 知識" },
    { name: "クイズ道場", url: BASE + "gin-textbook/quiz/", kw: "クイズ テスト 問題 道場" },
    { name: "早見表", url: BASE + "gin-textbook/cheatsheet/", kw: "早見表 チートシート 一覧" },
    { name: "ジンニュース", url: BASE + "gin-news/", kw: "ニュース 最新 新商品" },
  ];

  function esc(s) {
    return String(s).replace(/[&<>]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c];
    });
  }

  var INDEX = null, loaded = false, loading = false;

  function buildIndex() {
    var idx = [];
    TOOLS.forEach(function (t) {
      idx.push({ type: "ツール", label: t.name, sub: "", url: t.url, hay: (t.name + " " + t.kw).toLowerCase() });
    });
    (window.GIN_CONTENT || []).forEach(function (c) {
      var body = (c.html || "").replace(/<[^>]+>/g, " ");
      idx.push({
        type: "教本", label: "第" + c.num + "章 " + c.title,
        sub: (c.sections || []).slice(0, 3).join(" / "),
        url: BASE + "gin-textbook/#ch-" + c.num,
        hay: (c.title + " " + (c.sections || []).join(" ") + " " + body).toLowerCase(),
      });
    });
    (window.GIN_GLOSSARY || []).forEach(function (g) {
      idx.push({
        type: "用語", label: g.term, sub: (g.def || "").slice(0, 50),
        url: BASE + "gin-textbook/",
        hay: (g.term + " " + (g.reading || "") + " " + (g.def || "")).toLowerCase(),
      });
    });
    return idx;
  }

  function loadData(cb) {
    if (loaded) { cb(); return; }
    if (loading) return;
    loading = true;
    var n = 0;
    function done() { n++; if (n >= 2) { loaded = true; cb(); } }
    function add(src) { var s = document.createElement("script"); s.src = src; s.onload = done; s.onerror = done; document.head.appendChild(s); }
    add(BASE + "gin-textbook/content.js");
    add(BASE + "gin-textbook/glossary.js");
  }

  function render(q) {
    var box = document.getElementById("xsearch-results");
    if (!box) return;
    q = (q || "").trim().toLowerCase();
    if (!q) { box.innerHTML = ""; box.style.display = "none"; return; }
    if (!INDEX) INDEX = buildIndex();
    var hits = INDEX.filter(function (it) { return it.hay.indexOf(q) >= 0; }).slice(0, 24);
    box.style.display = "block";
    if (!hits.length) {
      box.innerHTML = '<div class="xs-empty">「' + esc(q) + '」に一致する項目は見つかりませんでした。</div>';
      return;
    }
    box.innerHTML = hits.map(function (h) {
      return '<a class="xs-item" href="' + h.url + '">' +
        '<span class="xs-type">' + esc(h.type) + "</span>" +
        '<span class="xs-label">' + esc(h.label) + "</span>" +
        (h.sub ? '<span class="xs-sub">' + esc(h.sub) + "</span>" : "") +
        "</a>";
    }).join("");
  }

  function init() {
    var inp = document.getElementById("xsearch-input");
    if (!inp) return;
    // 最初にフォーカスされたら章・用語データを読み込む（初期表示を軽く保つ）
    inp.addEventListener("focus", function () {
      loadData(function () { INDEX = buildIndex(); if (inp.value) render(inp.value); });
    }, { once: true });
    inp.addEventListener("input", function () { render(inp.value); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
