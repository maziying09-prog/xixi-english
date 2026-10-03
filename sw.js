const APP_CACHE = 'xiaoxi-app-v5.0.0';
const AUDIO_CACHE = 'xiaoxi-audio-runtime-v5.0.0';
const ALPHABET_PACK_CACHE = 'xiaoxi-alphabet-pack-v5.0.0';

const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './assets/tailwind.css',
  './assets/fontawesome/css/all.min.css',
  './assets/fontawesome/webfonts/fa-solid-900.woff2',
  './assets/fontawesome/webfonts/fa-regular-400.woff2',
  './assets/fontawesome/webfonts/fa-brands-400.woff2'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(APP_CACHE);
    // Keep installation atomic for the small UI shell only. Audio is not allowed
    // to block Service Worker installation on a slow mobile connection.
    await cache.addAll(APP_SHELL);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keep = new Set([APP_CACHE, AUDIO_CACHE, ALPHABET_PACK_CACHE]);
    const keys = await caches.keys();
    await Promise.all(keys.map(key => {
      if (key.startsWith('xiaoxi-') && !keep.has(key)) return caches.delete(key);
    }));
    await self.clients.claim();
  })());
});

async function networkFirst(request) {
  const cache = await caches.open(APP_CACHE);
  try {
    const response = await fetch(request, { cache: 'no-store' });
    if (response && response.ok) await cache.put(request, response.clone());
    return response;
  } catch (e) {
    return (await cache.match(request)) || (await cache.match('./index.html'));
  }
}

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response && response.ok) await cache.put(request, response.clone());
  return response;
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate' || url.pathname.endsWith('/index.html')) {
    event.respondWith(networkFirst(request));
    return;
  }

  if (/\/audio\//.test(url.pathname)) {
    event.respondWith(cacheFirst(request, AUDIO_CACHE));
    return;
  }

  event.respondWith(cacheFirst(request, APP_CACHE));
});
