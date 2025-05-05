const CACHE_NAME = "beautiful-timer-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./service-worker.js",
  "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.2/p5.min.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
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
