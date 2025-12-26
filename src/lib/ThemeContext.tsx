"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  mounted: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = "theme";
const DEFAULT_THEME: Theme = "dark";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);
  const [mounted, setMounted] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    const initTheme = () => {
      try {
        const stored = localStorage.getItem(THEME_STORAGE_KEY);
        const initialTheme = (stored === "light" || stored === "dark") ? stored : DEFAULT_THEME;
        
        setThemeState(initialTheme);
        document.documentElement.setAttribute("data-theme", initialTheme);
        
        // Ensure localStorage is set
        if (!stored) {
          localStorage.setItem(THEME_STORAGE_KEY, initialTheme);
        }
      } catch (error) {
        console.error("Failed to initialize theme:", error);
        document.documentElement.setAttribute("data-theme", DEFAULT_THEME);
      } finally {
        setMounted(true);
      }
    };

    initTheme();
  }, []);

  // Update theme function
  const setTheme = useCallback((newTheme: Theme) => {
    try {
      setThemeState(newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch (error) {
      console.error("Failed to set theme:", error);
    }
  }, []);

  // Toggle theme function
  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  // Listen for storage changes (sync across tabs)
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === THEME_STORAGE_KEY && (e.newValue === "light" || e.newValue === "dark")) {
        setThemeState(e.newValue);
        document.documentElement.setAttribute("data-theme", e.newValue);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}