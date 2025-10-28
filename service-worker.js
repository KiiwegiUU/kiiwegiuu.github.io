//Every update change in the folders needs a new v# below to update for users.  Do this after change transfered.
const CACHE_NAME = 'tutorial-cache-v1-dynamic';
const urlsToCache = [
  'manifest.json',
  // (Optional: a few files you want guaranteed offline from the start)
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      const results = await Promise.all(
        urlsToCache.map(async (url) => {
          try {
            await cache.add(url);
            console.log(`✅ Cached during install: ${url}`);
          } catch (err) {
            console.warn(`❌ Failed to cache during install: ${url}`, err);
          }
        })
      );
      return results;
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log(`🗑️ Deleting old cache: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.open(CACHE_NAME).then(async cache => {
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) {
        // Use the cached response, but let the browser validate in the background
        return cachedResponse;
      }

      try {
        // Let the browser handle cache headers (ETag, etc.)
        const networkResponse = await fetch(event.request, { cache: 'default' });
        if (
          networkResponse &&
          networkResponse.status === 200 &&
          networkResponse.type === 'basic'
        ) {
          cache.put(event.request, networkResponse.clone());
          console.log(`📥 Cached dynamically: ${event.request.url}`);
        }
        return networkResponse;
      } catch (err) {
        console.warn(`❌ Network fetch failed: ${event.request.url}`, err);
        throw err;
      }
    })
  );
});
