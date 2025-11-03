// Service Worker para cache offline do aplicativo Medeiro
const CACHE_NAME = 'medeiro-v1.0.0';
const STATIC_CACHE_NAME = 'medeiro-static-v1.0.0';
const DYNAMIC_CACHE_NAME = 'medeiro-dynamic-v1.0.0';

// Assets estáticos que devem ser cacheados imediatamente
const STATIC_ASSETS = [
    '/',
    '/offline',
    '/manifest.json',
    '/favicon.ico',
    '/robots.txt'
    // Adicione mais assets conforme necessário
];

// Estratégias de cache
const CACHE_STRATEGIES = {
    CACHE_FIRST: 'cache-first',
    NETWORK_FIRST: 'network-first',
    STALE_WHILE_REVALIDATE: 'stale-while-revalidate',
    NETWORK_ONLY: 'network-only',
    CACHE_ONLY: 'cache-only'
};

// Recursos que devem ser cacheados com estratégia específica
const CACHE_CONFIG = {
    // Páginas HTML - Network First com fallback para cache
    '/': {
        strategy: CACHE_STRATEGIES.NETWORK_FIRST,
        cacheName: DYNAMIC_CACHE_NAME,
        networkTimeoutSeconds: 3
    },
    // APIs - Network First
    '/api/': {
        strategy: CACHE_STRATEGIES.NETWORK_FIRST,
        cacheName: DYNAMIC_CACHE_NAME,
        networkTimeoutSeconds: 5
    },
    // Imagens - Cache First com revalidação
    '/images/': {
        strategy: CACHE_STRATEGIES.CACHE_FIRST,
        cacheName: DYNAMIC_CACHE_NAME,
        maxEntries: 100,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 dias
    },
    // Assets estáticos - Cache First
    '/_next/static/': {
        strategy: CACHE_STRATEGIES.CACHE_FIRST,
        cacheName: STATIC_CACHE_NAME,
        maxEntries: 50,
        maxAgeSeconds: 365 * 24 * 60 * 60 // 1 ano
    },
    // Fontes - Cache First
    '/fonts/': {
        strategy: CACHE_STRATEGIES.CACHE_FIRST,
        cacheName: STATIC_CACHE_NAME,
        maxEntries: 20,
        maxAgeSeconds: 365 * 24 * 60 * 60 // 1 ano
    }
};

/**
 * Install Event - Cache assets estáticos
 */
self.addEventListener('install', (event) => {
    console.log('[SW] Installing Service Worker...');

    event.waitUntil(
        Promise.all([
            // Cache assets estáticos
            caches.open(STATIC_CACHE_NAME).then((cache) => {
                console.log('[SW] Caching static assets');
                return cache.addAll(STATIC_ASSETS);
            }),
            // Skip waiting para ativar imediatamente
            self.skipWaiting()
        ])
    );
});

/**
 * Activate Event - Limpeza de caches antigos
 */
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating Service Worker...');

    event.waitUntil(
        Promise.all([
            // Limpar caches antigos
            caches.keys().then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
                            console.log('[SW] Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            }),
            // Claimar todos os clients
            self.clients.claim()
        ])
    );
});

/**
 * Fetch Event - Intercepta requisições e aplica estratégias de cache
 */
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Ignorar requisições non-GET
    if (request.method !== 'GET') {
        return;
    }

    // Ignorar extensões do Chrome e outras URLs não-http/https
    if (!url.protocol.startsWith('http')) {
        return;
    }

    event.respondWith(handleRequest(request));
});

/**
 * Processa requisições aplicando estratégias de cache
 */
async function handleRequest(request) {
    const url = new URL(request.url);

    // Determinar estratégia baseada na URL
    const strategy = getCacheStrategy(url.pathname);

    switch (strategy.strategy) {
        case CACHE_STRATEGIES.CACHE_FIRST:
            return cacheFirst(request, strategy);
        case CACHE_STRATEGIES.NETWORK_FIRST:
            return networkFirst(request, strategy);
        case CACHE_STRATEGIES.STALE_WHILE_REVALIDATE:
            return staleWhileRevalidate(request, strategy);
        default:
            return networkOnly(request);
    }
}

/**
 * Determina estratégia de cache baseada na URL
 */
function getCacheStrategy(pathname) {
    // Verificar configuração específica
    for (const pattern in CACHE_CONFIG) {
        if (pathname.startsWith(pattern)) {
            return CACHE_CONFIG[pattern];
        }
    }

    // Estratégia padrão para páginas
    if (pathname === '/' || pathname.endsWith('.html')) {
        return {
            strategy: CACHE_STRATEGIES.NETWORK_FIRST,
            cacheName: DYNAMIC_CACHE_NAME,
            networkTimeoutSeconds: 3
        };
    }

    // Estratégia padrão para assets
    if (pathname.includes('/_next/static/')) {
        return {
            strategy: CACHE_STRATEGIES.CACHE_FIRST,
            cacheName: STATIC_CACHE_NAME,
            maxEntries: 50,
            maxAgeSeconds: 365 * 24 * 60 * 60
        };
    }

    // Estratégia padrão
    return {
        strategy: CACHE_STRATEGIES.STALE_WHILE_REVALIDATE,
        cacheName: DYNAMIC_CACHE_NAME
    };
}

/**
 * Cache First Strategy - Tenta cache primeiro, depois rede
 */
async function cacheFirst(request, config) {
    try {
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            // Revalidar em background
            updateCache(request, config.cacheName);
            return cachedResponse;
        }

        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(config.cacheName);
            cache.put(request, networkResponse.clone());
        }

        return networkResponse;
    } catch (error) {
        console.log('[SW] Cache first failed:', error);
        return caches.match('/offline') || new Response('Offline', { status: 503 });
    }
}

/**
 * Network First Strategy - Tenta rede primeiro, depois cache
 */
async function networkFirst(request, config) {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Network timeout')), (config.networkTimeoutSeconds || 3) * 1000);
    });

    try {
        const networkResponse = await Promise.race([fetch(request), timeoutPromise]);

        if (networkResponse.ok) {
            const cache = await caches.open(config.cacheName);
            cache.put(request, networkResponse.clone());
        }

        return networkResponse;
    } catch (error) {
        console.log('[SW] Network first falling back to cache:', error);
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }

        return caches.match('/offline') || new Response('Offline', { status: 503 });
    }
}

/**
 * Stale While Revalidate - Retorna cache enquanto atualiza em background
 */
async function staleWhileRevalidate(request, config) {
    const cache = await caches.open(config.cacheName);
    const cachedResponse = await cache.match(request);

    const updatePromise = fetch(request)
        .then((networkResponse) => {
            if (networkResponse.ok) {
                cache.put(request, networkResponse.clone());
            }
            return networkResponse;
        })
        .catch((error) => {
            console.log('[SW] Background update failed:', error);
        });

    // Retornar cache imediatamente, ou aguardar rede se não houver cache
    return cachedResponse || (await updatePromise) || new Response('Offline', { status: 503 });
}

/**
 * Network Only Strategy - Apenas rede
 */
async function networkOnly(request) {
    try {
        return await fetch(request);
    } catch (error) {
        console.log('[SW] Network only failed:', error);
        return new Response('Offline', { status: 503 });
    }
}

/**
 * Atualiza cache em background
 */
async function updateCache(request, cacheName) {
    try {
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
            const cache = await caches.open(cacheName);
            cache.put(request, networkResponse);
        }
    } catch (error) {
        console.log('[SW] Background cache update failed:', error);
    }
}

/**
 * Message Event - Comunicação com o cliente
 */
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }

    if (event.data && event.data.type === 'GET_VERSION') {
        event.ports[0].postMessage({ version: CACHE_NAME });
    }

    if (event.data && event.data.type === 'CLEAR_CACHE') {
        clearCache().then(() => {
            event.ports[0].postMessage({ success: true });
        });
    }
});

/**
 * Limpa todos os caches
 */
async function clearCache() {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames.map((name) => caches.delete(name)));
    console.log('[SW] All caches cleared');
}

/**
 * Background Sync - Para quando voltar a conectividade
 */
self.addEventListener('sync', (event) => {
    if (event.tag === 'background-sync') {
        event.waitUntil(doBackgroundSync());
    }
});

/**
 * Executa sincronização em background
 */
async function doBackgroundSync() {
    console.log('[SW] Executing background sync');
    // Implementar lógica de sincronização conforme necessário
}

/**
 * Push Notifications - Para notificações push
 */
self.addEventListener('push', (event) => {
    if (event.data) {
        const data = event.data.json();
        const options = {
            body: data.body,
            icon: '/favicon.ico',
            badge: '/badge-icon.png',
            tag: data.tag || 'general',
            data: data.data || {},
            actions: data.actions || []
        };

        event.waitUntil(self.registration.showNotification(data.title, options));
    }
});

/**
 * Notification Click - Manipula cliques em notificações
 */
self.addEventListener('notificationclick', (event) => {
    event.notification.close();

    const urlToOpen = event.notification.data.url || '/';

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            // Se já existe uma janela aberta, focar nela
            for (const client of clientList) {
                if (client.url === urlToOpen && 'focus' in client) {
                    return client.focus();
                }
            }

            // Se não existe, abrir nova janela
            if (clients.openWindow) {
                return clients.openWindow(urlToOpen);
            }
        })
    );
});
