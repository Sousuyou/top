/*
 * TOPページの「更新情報（What's New）」データ。
 * ★更新したら、この UPDATES の先頭に1行追加する（新しいものが上）。
 *   date = 日付 "YYYY-MM-DD" / tag = どのツールか / text = 何をしたか（一言）
 *   表示は新しい順に最大 MAX 件。
 */
window.UPDATES = [
  { date: "2026-06-09", tag: "TOP", text: "上のメニューとツール一覧の並び順を揃え、トップを見やすく整えました。" },
  { date: "2026-06-09", tag: "ジン教本", text: "よりニッチな内容を深掘りした「研究編」を追加しました。" },
  { date: "2026-06-09", tag: "在庫カタログ", text: "画面デザインを見直し、さらに見やすくしました。" },
  { date: "2026-06-09", tag: "クイズ道場", text: "ボタニカルからジンを当てる新しい問題を追加しました（現在テスト運用中です）。" },
  { date: "2026-06-08", tag: "在庫カタログ", text: "店の在庫ジン約980銘柄を検索できる「ジン在庫カタログ」を新設しました。名前・産地・ボタニカルで検索、国や度数で絞り込めます。" },
  { date: "2026-06-07", tag: "全ツール", text: "セキュリティを強化しました（各ツールに不正スクリプトの実行を防ぐ仕組みを導入）。" },
  { date: "2026-06-07", tag: "TOP", text: "トップの検索窓を使いやすく刷新し、表示（ダーク表示・スマホ・更新情報のまとめ）を整えました。" },
  { date: "2026-06-07", tag: "TOP", text: "全ツール横断検索を追加。ツール名・教本の章・用語をまとめて検索できます。" },
  { date: "2026-06-07", tag: "原価計算", text: "入力の自動保存、レシピの保存・呼び出し、原価率の色分け、容量超過の警告などを追加しました。" },
  { date: "2026-06-07", tag: "レシピ帳", text: "スマホの「戻る」で一覧に戻れるように。お気に入り・「覚えた」チェックも追加しました。" },
  { date: "2026-06-07", tag: "ジン教本", text: "進捗バー・検索ハイライト・用語タップ辞書、章のお気に入り/覚えたを追加しました。" },
  { date: "2026-06-07", tag: "クイズ道場", text: "選択肢シャッフル・○×表示・解説から教本へのリンクなどを追加しました。" },
  { date: "2026-06-07", tag: "ジンニュース", text: "新着バッジと「今日のまとめ」を追加しました。" },
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
  var MAX = 50; // 読み込む項目（行）の最大件数
  var INITIAL = 3; // 最初に見せる件数（残りは「もっと見る」で展開）
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

    var rowIndex = 0; // 全グループ通しの行番号（先頭3件まで初期表示）
    el.innerHTML = groups
      .map(function (g) {
        var newBadge = isNewGroup(g.date)
          ? '<span class="update-new" aria-label="新着">NEW</span>'
          : "";
        var groupStart = rowIndex; // このグループ先頭の通し行番号
        var rows = g.items
          .map(function (u) {
            // 先頭 INITIAL 件以降は「もっと見る」で展開する控えめ行にする
            var extra = rowIndex >= INITIAL ? " is-extra" : "";
            rowIndex++;
            return (
              '<li class="update-row' + extra + '">' +
              '<span class="update-tag">' + esc(u.tag) + "</span>" +
              '<span class="update-text">' + esc(u.text) + "</span>" +
              "</li>"
            );
          })
          .join("");
        // グループ全体が初期表示の枠外なら、見出しごと折りたたむ
        var groupExtra = groupStart >= INITIAL ? " is-extra" : "";
        return (
          '<li class="update-group' + groupExtra + '">' +
          '<div class="update-group-head">' +
          '<span class="update-date">' + esc(g.date) + "</span>" +
          newBadge +
          "</div>" +
          '<ul class="update-rows">' + rows + "</ul>" +
          "</li>"
        );
      })
      .join("");

    // 「もっと見る」トグル（4件目以降があるときだけ表示）
    var section = el.closest(".updates-section");
    var btn = document.getElementById("update-more");
    var hidden = items.length - INITIAL;
    if (hidden > 0 && section) {
      if (!btn) {
        btn = document.createElement("button");
        btn.id = "update-more";
        btn.type = "button";
        btn.className = "update-more";
        el.insertAdjacentElement("afterend", btn);
      }
      section.classList.add("is-collapsed");
      function sync() {
        var collapsed = section.classList.contains("is-collapsed");
        btn.textContent = collapsed ? "もっと見る（+" + hidden + "件）" : "閉じる";
        btn.setAttribute("aria-expanded", collapsed ? "false" : "true");
      }
      sync();
      btn.onclick = function () {
        section.classList.toggle("is-collapsed");
        sync();
      };
    } else if (btn) {
      btn.remove();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
