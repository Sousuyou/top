// Bar Soutsu ツールズ TOP — Service Worker
// 更新方針: ページ本体(HTML)・JSON・JSは「ネットワーク優先」で常に最新を取得し、
//   オフライン時のみキャッシュを使う。画像・CSSは「キャッシュ優先」で高速表示。
//   ※JSをネット優先にしたのは、nav.js等の更新を版上げなしで確実に反映するため。
const CACHE_NAME = "top-v23";
const CACHE_FILES = [
  "./",
  "./index.html",
  "./styles.css",
  "./theme.css",
  "./nav.js",
  "./updates.js",
  "./search.js",
  "./boot.js",
  "./manifest.json",
  "./cocktail-techniques/",
  "./cocktail-techniques/index.html",
  "./cocktail-techniques/styles.css",
  "./cocktail-techniques/theme.css",
  "./cocktail-techniques/app.js",
  "./cocktail-techniques/integration.js",
  "./cocktail-techniques/data.json",

  "./assets/icon.svg",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/og-image.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(CACHE_FILES))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => /^top-v\d+$/.test(k) && k !== CACHE_NAME).map((k) => caches.delete(k)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  const accept = req.headers.get("accept") || "";
  const fresh =
    req.mode === "navigate" ||
    accept.includes("text/html") ||
    url.pathname.endsWith(".json") ||
    url.pathname.endsWith(".js");

  if (fresh) {
    // ネットワーク優先（最新を表示。失敗時はキャッシュ）
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() =>
          caches.match(req).then(async (r) => {
            if (r) return r;
            if (req.mode === "navigate" && url.pathname.includes("/cocktail-techniques/")) {
              return caches.match("./cocktail-techniques/index.html");
            }
            return req.mode === "navigate" ? caches.match("./index.html") : Response.error();
          }),
        ),
    );
  } else {
    // キャッシュ優先（高速。無ければ取得してキャッシュ）
    event.respondWith(
      caches.match(req).then(
        (hit) =>
          hit ||
          fetch(req).then((res) => {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req, copy));
            return res;
          }),
      ),
    );
  }
});
