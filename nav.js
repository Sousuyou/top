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

  // ── 自動更新（全ツール共通）────────────────────────────────────────────
  // PWA/Service Workerの古いキャッシュで最新が出ない問題への対策。
  //  ・新しいSWが有効化（制御を奪取）したら、画面を1回だけ自動リロードして最新へ。
  //  ・起動時／アプリに戻ってきた時に更新チェック（reg.update）を行い、
  //    新版があれば即時切替→リロードへつなげる（各SWは skipWaiting 済み）。
  //  ※この1か所だけで、nav.jsを読む全ツールが自動更新対応になる。
  (function setupAutoUpdate() {
    if (!("serviceWorker" in navigator)) return;
    var sw = navigator.serviceWorker;
    var hadController = !!sw.controller; // 初回インストール時(=null)はリロードしない
    var reloaded = false;

    sw.addEventListener("controllerchange", function () {
      if (reloaded || !hadController) return;
      reloaded = true;
      window.location.reload();
    });

    function checkUpdate() {
      if (!sw.getRegistrations) return;
      sw.getRegistrations().then(function (regs) {
        regs.forEach(function (reg) {
          if (reg && reg.update) reg.update().catch(function () {});
        });
      }).catch(function () {});
    }

    checkUpdate(); // 起動時
    // PWAは再起動でページが再読込されないことがあるため、復帰時に更新チェック
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "visible") checkUpdate();
    });
    window.addEventListener("focus", checkUpdate);
  })();

  // ここが共通メニューの定義。新ツールを足すときはこの配列に1行追加するだけ。
  var LINKS = [
    { label: "TOP",        path: "top/" },
    { label: "在庫カタログ", path: "gin-stock/" },
    { label: "ボタニカル表", path: "top/botanical-table/" },
    { label: "ジンニュース", path: "gin-news/" },
    { label: "ジン教本",    path: "gin-textbook/" },
    { label: "レシピ帳",    path: "cocktail-recipe-book/" },
    { label: "クイズ道場",  path: "gin-textbook/quiz/" },
    { label: "早見表",       path: "gin-textbook/cheatsheet/" },
    { label: "原価計算",    path: "cocktail-cost-tool/" },
    { label: "投稿メーカー", path: "post-maker/" },
  ];

  // スマホ表示ではナビを2段（グリッド）に折り返し、横スクロールせず全タブを見せる。
  // ※共通の単一ファイルなので、ここを直すと全ツールのナビに反映される。
  //   CSP（style-src 'self' 'unsafe-inline'）下なので<style>の注入は許可される。
  function injectStyle() {
    if (document.getElementById("site-nav-style")) return;
    var css =
      "@media (max-width:640px){" +
      "#site-nav.site-nav{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));overflow:visible;}" +
      "#site-nav .site-nav-link{box-sizing:border-box;min-width:0;padding:0 2px;min-height:36px;font-size:0.56rem;letter-spacing:0;justify-content:center;text-align:center;border-right:1px solid var(--line);border-bottom:1px solid var(--line);}" +
      "}";
    var s = document.createElement("style");
    s.id = "site-nav-style";
    s.textContent = css;
    document.head.appendChild(s);
  }

  function render() {
    var mount = document.getElementById("site-nav");
    if (!mount) return;
    injectStyle();

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
