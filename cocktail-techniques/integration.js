/* ガイドから直接開いた場合も、本体と同じオフライン保存を使用します。 */
if ('serviceWorker' in navigator) {
  const base = new URL('../', document.currentScript.src);
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(new URL('service-worker.js', base), {scope: base.pathname}).catch(() => {});
  });
}
