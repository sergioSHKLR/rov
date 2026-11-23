/* ROV service worker. Registered from index.html as ./sw.js, so its scope is /rov/.
   Bump CACHE whenever a precached asset changes. */
const CACHE = 'rov-curriculum-v5';
const PREFIX = 'rov-curriculum-';   // only ROV's caches; other apps share this origin
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './favicon.ico',
  './favicon.svg',
  './apple-touch-icon.png',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-192.png',
  './icon-maskable-512.png',
  './icon-monochrome-512.png',
  './fonts/MartianMono-Condensed[wght].woff2',
  './splash/splash-iphone-se-750x1334.png',
  './splash/splash-iphone-13-14-1170x2532.png',
  './splash/splash-iphone-15-16-1179x2556.png',
  './splash/splash-iphone-16-pro-max-1320x2868.png',
  './splash/splash-ipad-air-11-1640x2360.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(SHELL.map((u) => new Request(u, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith(PREFIX) && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;   // YouTube etc. go straight to the network

  // Pages: network first so updates land immediately; offline falls back to the cached app shell.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put('./index.html', copy)); }
          return res;
        })
        .catch(() => caches.match('./index.html').then((r) => r || caches.match('./')))
    );
    return;
  }

  // Assets: cache first, then network (and keep a copy).
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then((cached) => cached || fetch(req).then((res) => {
      if (res && res.ok && res.type === 'basic') { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return res;
    }))
  );
});
