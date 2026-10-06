const APP_CACHE = 'xiaoxi-app-v6.0.0';
const AUDIO_CACHE = 'xiaoxi-audio-runtime-v6.0.0';
const ALPHABET_PACK_CACHE = 'xiaoxi-alphabet-pack-v6.0.0';

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
    if (response && response.ok && response.status === 200) {
      await cache.put(request, response.clone());
    }
    return response;
  } catch (e) {
    return (await cache.match(request)) || (await cache.match('./index.html'));
  }
}

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request, { cache: 'no-store' });
  // Never attempt cache.put() on 206 Partial Content.
  if (response && response.ok && response.status === 200) {
    await cache.put(request, response.clone());
  }
  return response;
}

function parseRange(rangeHeader, size) {
  const m = /^bytes=(\d*)-(\d*)$/i.exec(rangeHeader || '');
  if (!m) return null;
  let start = m[1] ? Number(m[1]) : null;
  let end = m[2] ? Number(m[2]) : null;
  if (start === null && end !== null) {
    const suffix = Math.min(end, size);
    start = size - suffix;
    end = size - 1;
  } else {
    if (start === null) start = 0;
    if (end === null || end >= size) end = size - 1;
  }
  if (!Number.isFinite(start) || !Number.isFinite(end) || start < 0 || end < start || start >= size) return null;
  return { start, end };
}

async function makeRangeResponse(fullResponse, rangeHeader) {
  const buffer = await fullResponse.arrayBuffer();
  const size = buffer.byteLength;
  const range = parseRange(rangeHeader, size);
  if (!range) {
    return new Response(null, {
      status: 416,
      headers: { 'Content-Range': `bytes */${size}` }
    });
  }
  const { start, end } = range;
  const sliced = buffer.slice(start, end + 1);
  const headers = new Headers(fullResponse.headers);
  headers.set('Content-Range', `bytes ${start}-${end}/${size}`);
  headers.set('Accept-Ranges', 'bytes');
  headers.set('Content-Length', String(sliced.byteLength));
  return new Response(sliced, { status: 206, statusText: 'Partial Content', headers });
}

async function audioResponse(request, cacheName) {
  const cache = await caches.open(cacheName);
  const rangeHeader = request.headers.get('range');

  // Cache keys should represent the complete file, never a Range request.
  const fullRequest = new Request(request.url, {
    method: 'GET',
    mode: request.mode,
    credentials: request.credentials,
    redirect: request.redirect,
    referrer: request.referrer,
    referrerPolicy: request.referrerPolicy,
    cache: 'no-store'
  });

  let full = await cache.match(fullRequest);
  if (!full) {
    const headers = new Headers(request.headers);
    headers.delete('range');
    const networkRequest = new Request(request.url, {
      method: 'GET',
      headers,
      mode: request.mode,
      credentials: request.credentials,
      redirect: request.redirect,
      referrer: request.referrer,
      referrerPolicy: request.referrerPolicy,
      cache: 'no-store'
    });
    const network = await fetch(networkRequest);
    if (!network || !network.ok) return network;
    if (network.status === 200) {
      await cache.put(fullRequest, network.clone());
      full = network;
    } else {
      // Defensive fallback: return server response directly, but never cache 206.
      return network;
    }
  }

  if (rangeHeader) return makeRangeResponse(full.clone(), rangeHeader);
  return full;
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

  if (/\/audio\/letters\/[A-Z]\.mp3$/i.test(url.pathname)) {
    event.respondWith(audioResponse(request, ALPHABET_PACK_CACHE));
    return;
  }

  if (/\/audio\//.test(url.pathname)) {
    event.respondWith(audioResponse(request, AUDIO_CACHE));
    return;
  }

  event.respondWith(cacheFirst(request, APP_CACHE));
});
