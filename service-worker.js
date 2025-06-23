const CACHE_NAME = 'tutorial-cache-v1-dynamic';
const urlsToCache = [
    '.htaccess',
    'manifest.json',
    'player',
    'resources',
    'rlprez.css',
    'rlprez.js',
    'service-worker',
    'tutorial.html',
    'player/rlplayer.css',
    'player/rlplayer.js',
    'player/rlplayer.lang.en-US.js',
    'resources/100Lessons_logo_512.png',
    'resources/font_0.woff',
    'resources/font_1.woff',
    'resources/font_2.woff',
    'resources/font_3.woff',
    'resources/font_4.woff',
    'resources/font_5.woff',
    'resources/res_10120.png',
    'resources/res_10120_c_1873.png',
    'resources/res_10124.png',
    'resources/res_10136.png',
  // Add any other static assets your tutorial needs here
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      const results = await Promise.all(
        urlsToCache.map(async (url) => {
          try {
            await cache.add(url);
            console.log(`✅ Cached: ${url}`);
          } catch (err) {
            console.warn(`❌ Failed to cache: ${url}`, err);
          }
        })
      );
      return results;
    })
  );
  self.skipWaiting(); // activate worker immediately
});

// INSTALL: Precache minimal assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      const results = await Promise.all(
        urlsToCache.map(async (url) => {
          try {
            await cache.add(url);
            console.log(`✅ Precached: ${url}`);
          } catch (err) {
            console.warn(`❌ Failed to precache: ${url}`, err);
          }
        })
      );
      return results;
    })
  );
  self.skipWaiting(); // Activate immediately
});

// ACTIVATE: Delete old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log(`🗑️ Deleting old cache: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim(); // Take control immediately
});

// FETCH: Serve from cache, fallback to network, then dynamically cache
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.open(CACHE_NAME).then(async cache => {
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) {
        return cachedResponse;
      }

      try {
        const networkResponse = await fetch(event.request);
        if (
          networkResponse &&
          networkResponse.status === 200 &&
          networkResponse.type === 'basic'
        ) {
          cache.put(event.request, networkResponse.clone());
          console.log(`📥 Dynamically cached: ${event.request.url}`);
        }
        return networkResponse;
      } catch (err) {
        console.warn(`❌ Fetch failed for: ${event.request.url}`, err);
        throw err;
      }
    })
  );
});