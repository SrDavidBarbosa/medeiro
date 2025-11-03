import React from 'react';
import Head from 'next/head';
import { useEffect } from 'react';
import '../utils/i18n'; // Import i18n configuration
import '../css/main.css';

export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        // Check for saved theme preference or default to 'light'
        const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;

        const theme = savedTheme || 'light';

        // Set the theme on document root
        if (typeof document !== 'undefined') {
            document.documentElement.setAttribute('data-theme', theme);
            document.documentElement.classList.remove('light', 'dark');
            document.documentElement.classList.add(theme);
        }
    }, []);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
                <meta name="theme-color" content="#000000" />
                <meta name="color-scheme" content="light dark" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="application-name" content="Medeiro" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="Medeiro" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="msapplication-config" content="/browserconfig.xml" />
                <meta name="msapplication-TileColor" content="#0066cc" />
                <meta name="msapplication-tap-highlight" content="no" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
