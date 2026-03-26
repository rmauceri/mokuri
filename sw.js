// Mokuri Studio — Service Worker (cache-first with background update)
const CACHE_NAME = 'mokuri-v46';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './print-engine.js',
  './audio-engine.js',
  './assets/elements.js',
  './assets/extended-elements.js',
  './assets/fauna-elements.js',
  './assets/scene-elements.js',
  './assets/hanko-elements.js',
  './assets/forms-elements.js',
  './assets/figures-elements.js',
  './assets/gallery.js',
  './assets/pack-registry.js',
  './assets/kacho-elements.js',
  './assets/kacho-pack.js',
  './assets/moribana-elements.js',
  './assets/moribana-pack.js',
  './assets/icon-192.png',
  './assets/icon-512.png',
];

// Install: cache the full app shell
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

// Activate: clean up old cache versions
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys
        .filter(k => k.startsWith('mokuri-') && k !== CACHE_NAME)
        .map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch: cache-first, fallback to network, update cache in background
self.addEventListener('fetch', (e) => {
  // Only handle same-origin GET requests
  if (e.request.method !== 'GET') return;
  if (!e.request.url.startsWith(self.location.origin)) return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      // Serve from cache immediately if available
      const fetchPromise = fetch(e.request).then(response => {
        // Update cache with fresh copy (stale-while-revalidate)
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return response;
      }).catch(() => cached); // Network failure: fall back to cached version

      return cached || fetchPromise;
    })
  );
});
