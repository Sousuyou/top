/*
 * TOPページの起動スクリプト。
 * CSP（script-src 'self'）でもインラインを使わずに動くよう、外部ファイル化している。
 *  1) 収録ツール数を、ツールカードの実数から自動表示（数字の直し忘れ防止）
 *  2) Service Worker 登録（アプリ化・オフライン対応）
 */
(function () {
  "use strict";

  // 1) 収録ツール数の自動表示
  function setCount() {
    var countEl = document.getElementById("tool-count");
    if (!countEl) return;
    var cards = document.querySelectorAll(".tool-grid .tool-card");
    if (cards.length) countEl.textContent = cards.length;
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setCount);
  } else {
    setCount();
  }

  // 2) Service Worker 登録
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("service-worker.js");
    });
  }
})();
