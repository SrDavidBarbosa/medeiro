import { useState, useEffect } from 'react';

export function useServiceWorker() {
    const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);
    const [isSupported, setIsSupported] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [isOnline, setIsOnline] = useState(true);
    const [updateAvailable, setUpdateAvailable] = useState(false);

    useEffect(() => {
        // Verificar suporte ao Service Worker
        const supported = 'serviceWorker' in navigator;
        setIsSupported(supported);

        if (!supported) {
            console.log('Service Worker não suportado neste navegador');
            return;
        }

        // Verificar status online/offline
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        setIsOnline(navigator.onLine);

        // Registrar Service Worker
        const registerServiceWorker = async () => {
            try {
                const registration = await navigator.serviceWorker.register('/service-worker.js', {
                    scope: '/'
                });

                console.log('Service Worker registrado:', registration);

                setRegistration(registration);
                setIsRegistered(true);

                // Verificar atualizações
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;

                    if (newWorker) {
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                setUpdateAvailable(true);
                            }
                        });
                    }
                });

                // Escutar mensagens do Service Worker
                navigator.serviceWorker.addEventListener('message', (event) => {
                    if (event.data?.type === 'CACHE_UPDATED') {
                        console.log('Cache atualizado:', event.data);
                    }
                });
            } catch (error) {
                console.error('Erro ao registrar Service Worker:', error);
                setIsRegistered(false);
            }
        };

        // Registrar quando o Service Worker estiver pronto
        if ('serviceWorker' in navigator) {
            if (navigator.serviceWorker.ready) {
                navigator.serviceWorker.ready.then(registerServiceWorker);
            } else {
                navigator.serviceWorker.addEventListener('controllerchange', () => {
                    window.location.reload();
                });
                registerServiceWorker();
            }
        }

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    // Função para atualizar para nova versão
    const updateServiceWorker = () => {
        if (registration?.waiting) {
            registration.waiting.postMessage({ type: 'SKIP_WAITING' });
            window.location.reload();
        }
    };

    // Função para solicitar sincronização em background
    const requestBackgroundSync = async (tag: string = 'background-sync') => {
        if ('serviceWorker' in navigator && 'sync' in (window.ServiceWorkerRegistration.prototype as any)) {
            try {
                const syncRegistration = (registration as any)?.sync;
                if (syncRegistration) {
                    await syncRegistration.register(tag);
                    console.log('Background sync registrado:', tag);
                    return true;
                }
            } catch (error) {
                console.error('Erro ao registrar background sync:', error);
                return false;
            }
        }
        return false;
    };

    // Função para enviar notificação push
    const sendPushNotification = async (title: string, options?: NotificationOptions) => {
        if ('Notification' in window && 'serviceWorker' in navigator) {
            const permission = await Notification.requestPermission();

            if (permission === 'granted') {
                const registration = await navigator.serviceWorker.ready;
                await registration.showNotification(title, {
                    icon: '/favicon.ico',
                    badge: '/badge-icon.png',
                    ...options
                });
                return true;
            }
        }
        return false;
    };

    return {
        isSupported,
        isRegistered,
        isOnline,
        updateAvailable,
        registration,
        updateServiceWorker,
        requestBackgroundSync,
        sendPushNotification
    };
}
