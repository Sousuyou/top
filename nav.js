/*
 * Bar Soutsu 共通ナビ（全ツール共有の単一ファイル）
 * -------------------------------------------------------------
 * ★ナビを変えるときは、この LINKS を直すだけで全ツールに反映されます。
 *   （各ツールのHTMLを個別に編集する必要はありません）
 *
 * 使い方：各ページに次の2つを置くだけ
 *   1) <nav class="site-nav" id="site-nav"></nav>   ← ナビの表示場所
 *   2) <script src="https://sousuyou.github.io/top/nav.js" defer></script>
 */
(function () {
  "use strict";

  var BASE = "https://sousuyou.github.io/";

  // ここが共通メニューの定義。新ツールを足すときはこの配列に1行追加するだけ。
  var LINKS = [
    { label: "TOP", path: "top/" },
    { label: "原価計算", path: "cocktail-cost-tool/" },
    { label: "レシピ帳", path: "cocktail-recipe-book/" },
    { label: "ジン教本", path: "gin-textbook/" },
    { label: "クイズ道場", path: "gin-textbook/quiz/" },
    { label: "チートシート", path: "gin-textbook/cheatsheet/" },
    { label: "ジンニュース", path: "gin-news/" },
  ];

  function render() {
    var mount = document.getElementById("site-nav");
    if (!mount) return;

    var here = window.location.href;

    // 現在地の判定：URLが一致するもののうち「最も具体的（長い）」リンクをactiveにする。
    // （例：クイズ道場のページでは「ジン教本」ではなく「クイズ道場」だけを強調）
    var activeIndex = -1;
    var bestLength = -1;
    var i, url;
    for (i = 0; i < LINKS.length; i++) {
      url = BASE + LINKS[i].path;
      if (here.indexOf(url) === 0 && url.length > bestLength) {
        bestLength = url.length;
        activeIndex = i;
      }
    }

    var html = "";
    for (i = 0; i < LINKS.length; i++) {
      url = BASE + LINKS[i].path;
      var cls = "site-nav-link" + (i === activeIndex ? " active" : "");
      html +=
        '<a class="' + cls + '" href="' + url + '">' + LINKS[i].label + "</a>";
    }
    mount.innerHTML = html;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
