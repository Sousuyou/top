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
  var MAX = 8;

  function esc(s) {
    return String(s).replace(/[&<>]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c];
    });
  }

  function render() {
    var el = document.getElementById("update-list");
    if (!el) return;
    var items = (window.UPDATES || []).slice(0, MAX);
    if (!items.length) {
      el.innerHTML = '<li class="update-empty">更新情報はまだありません。</li>';
      return;
    }
    el.innerHTML = items
      .map(function (u) {
        return (
          '<li class="update-item">' +
          '<span class="update-date">' + esc(u.date) + "</span>" +
          '<span class="update-tag">' + esc(u.tag) + "</span>" +
          '<span class="update-text">' + esc(u.text) + "</span>" +
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
