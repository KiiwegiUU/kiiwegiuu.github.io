//Every update change in the folders needs a new v# below to update for users.  Do this after change transfered.
const CACHE_NAME = 'tutorial-cache-v20-dynamic';
const urlsToCache = [
  'manifest.json',
  // (Optional: a few files you want guaranteed offline from the start)
];
  
self.addEventListener('install', (e) => {
    console.log("SW install — using cache:", CACHE_NAME);
});


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

  // Intercept missing thumbnails
  if (event.request.url.includes('/thumb_')) {
    // Respond with a tiny transparent PNG
    const emptyImage = new Uint8Array([137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,0,1,0,0,0,1,8,6,0,0,0,31,21,196,137,0,0,0,12,73,68,65,84,8,29,99,0,1,0,0,5,0,1,13,10,26,10,0,0,0,0,73,69,78,68,174,66,96,130]);
    event.respondWith(
      new Response(emptyImage, { headers: { 'Content-Type': 'image/png' } })
    );
    return; // stop further handling
  }

  // Original caching logic
  event.respondWith(
    caches.open(CACHE_NAME).then(async cache => {
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) {
        return cachedResponse;
      }

      try {
        const networkResponse = await fetch(event.request, { cache: 'default' });
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
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

