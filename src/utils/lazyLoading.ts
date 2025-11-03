import React, { Suspense, lazy } from 'react';
import { useEffect, useState } from 'react';

interface LazyComponentOptions {
    fallback?: React.ReactNode;
    delay?: number;
    retry?: boolean;
    retryDelay?: number;
    maxRetries?: number;
}

// Hook para lazy loading com retry
export function useLazyComponent(importFunc: () => Promise<any>, options: LazyComponentOptions = {}) {
    const [component, setComponent] = useState<React.ComponentType | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const { fallback, delay = 0, retry = true, retryDelay = 1000, maxRetries = 3 } = options;

    const loadComponent = async (attempt = 1) => {
        setIsLoading(true);
        setError(null);

        try {
            // Delay opcional
            if (delay > 0) {
                await new Promise((resolve) => setTimeout(resolve, delay));
            }

            const module = await importFunc();
            const Component = module.default || module;
            setComponent(() => Component);
        } catch (err) {
            console.error(`Failed to load component (attempt ${attempt}):`, err);
            setError(err as Error);

            // Retry logic
            if (retry && attempt < maxRetries) {
                setTimeout(() => {
                    loadComponent(attempt + 1);
                }, retryDelay * attempt);
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadComponent();
    }, []);

    const retryLoad = () => {
        setError(null);
        setComponent(null);
        loadComponent();
    };

    return { component, error, isLoading, retryLoad, fallback };
}

// Hook para preloading de componentes
export function usePreloadComponent(importFunc: () => Promise<any>) {
    const [isPreloaded, setIsPreloaded] = useState(false);

    const preload = async () => {
        if (!isPreloaded) {
            try {
                await importFunc();
                setIsPreloaded(true);
            } catch (error) {
                console.error('Failed to preload component:', error);
            }
        }
    };

    return { preload, isPreloaded };
}

// Hook para lazy loading de imagens
export function useLazyImage(src: string, options: { threshold?: number; rootMargin?: string } = {}) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = React.useRef<HTMLImageElement>(null);

    const { threshold = 0.1, rootMargin = '50px' } = options;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold, rootMargin }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    useEffect(() => {
        if (isInView && src) {
            const img = new Image();
            img.onload = () => setIsLoaded(true);
            img.src = src;
        }
    }, [isInView, src]);

    return { imgRef, isLoaded, isInView };
}
