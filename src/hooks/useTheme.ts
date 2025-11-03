import { useState, useEffect } from 'react';

export function useTheme() {
    const [theme, setTheme] = useState('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme) {
            setTheme(savedTheme);
        } else if (prefersDark) {
            setTheme('dark');
        }
        
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
    }, [theme, mounted]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return {
        theme,
        mounted,
        toggleTheme,
        isDark: theme === 'dark',
        isLight: theme === 'light'
    };
}