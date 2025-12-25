"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useMemo } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean; 
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('dark'); 
  const [mounted, setMounted] = useState(false);

useEffect(() => {
  setTimeout(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    setTheme(savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark');
    setMounted(true);
  }, 0);
}, []);


  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  const value = useMemo(() => ({ theme, toggleTheme, mounted }), [theme, mounted]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
