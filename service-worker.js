
self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open("neon-vocab-cache-v4").then(cache => {
      
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./vocab.js",
        "./icon-192.png",
        "./icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
