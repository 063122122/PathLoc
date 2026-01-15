// PathMem Service Worker
const CACHE_NAME = ‘pathmem-v2’;
const ASSETS_TO_CACHE = [
‘./’,
‘./index.html’,
‘./manifest.json’,
‘./icons/icon-192.png’,
‘./icons/icon-512.png’
];

// Install event - cache assets
self.addEventListener(‘install’, (event) => {
event.waitUntil(
caches.open(CACHE_NAME)
.then((cache) => {
console.log(‘Caching app assets’);
return cache.addAll(ASSETS_TO_CACHE);
})
.then(() => self.skipWaiting())
);
});

// Activate event - clean up old caches
self.addEventListener(‘activate’, (event) => {
event.waitUntil(
caches.keys()
.then((cacheNames) => {
return Promise.all(
cacheNames
.filter((name) => name !== CACHE_NAME)
.map((name) => caches.delete(name))
);
})
.then(() => self.clients.claim())
);
});

// Fetch event - serve from cache, fallback to network
self.addEventListener(‘fetch’, (event) => {
// Skip non-GET requests
if (event.request.method !== ‘GET’) return;

```
// Skip chrome-extension and other non-http requests
if (!event.request.url.startsWith('http')) return;

event.respondWith(
    caches.match(event.request)
        .then((cachedResponse) => {
            if (cachedResponse) {
                // Return cached version
                return cachedResponse;
            }

            // Not in cache, fetch from network
            return fetch(event.request)
                .then((response) => {
                    // Check if valid response
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    // Clone the response
                    const responseToCache = response.clone();

                    // Add to cache for future
                    caches.open(CACHE_NAME)
                        .then((cache) => {
                            cache.put(event.request, responseToCache);
                        });

                    return response;
                })
                .catch(() => {
                    // Network failed, return offline page if available
                    return caches.match('./index.html');
                });
        })
);
```

});

// Background sync for route uploads (future feature)
self.addEventListener(‘sync’, (event) => {
if (event.tag === ‘sync-routes’) {
event.waitUntil(syncRoutes());
}
});

async function syncRoutes() {
// Future: sync routes to cloud backup
console.log(‘Background sync triggered’);
}

// Push notifications (future feature)
self.addEventListener(‘push’, (event) => {
if (event.data) {
const data = event.data.json();

```
    event.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.body,
            icon: '/icons/icon-192.png',
            badge: '/icons/icon-72.png',
            vibrate: [100, 50, 100],
            data: data.data
        })
    );
}
```

});

// Notification click handler
self.addEventListener(‘notificationclick’, (event) => {
event.notification.close();

```
event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
        .then((clientList) => {
            // If app is already open, focus it
            for (const client of clientList) {
                if (client.url.includes('pathmem') && 'focus' in client) {
                    return client.focus();
                }
            }
            // Otherwise open new window
            if (clients.openWindow) {
                return clients.openWindow('./index.html');
            }
        })
);
```

});