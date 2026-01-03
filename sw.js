const CACHE_NAME = 'jornal-bi-v1';

// Instala o Service Worker e força a atualização
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Intercepta as requisições (necessário para o PWA ser instalável)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});