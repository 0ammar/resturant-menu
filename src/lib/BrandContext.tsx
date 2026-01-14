"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface BrandContextType {
  primaryColor: string;
  logoUrl: string;
  updateBrandSettings: (settings: { primaryColor?: string; logoUrl?: string }) => void;
  isLoading: boolean;
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export const BrandProvider = ({ children }: { children: ReactNode }) => {
  const [primaryColor, setPrimaryColor] = useState('#f9d457');
  const [logoUrl, setLogoUrl] = useState('/logo.png');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBrandSettings = async () => {
      try {
        const res = await fetch('/api/brand-settings');
        if (res.ok) {
          const data = await res.json();
          if (data.primaryColor) setPrimaryColor(data.primaryColor);
          if (data.logoUrl) setLogoUrl(data.logoUrl);
        }
      } catch (error) {
        console.error('Failed to fetch brand settings');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBrandSettings();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      document.documentElement.style.setProperty('--color-gold', primaryColor);
      document.documentElement.style.setProperty('--color-gold-static', primaryColor);
      
      // Update favicon
      const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
      if (link) {
        link.href = logoUrl;
      }
    }
  }, [primaryColor, logoUrl, isLoading]);

  const updateBrandSettings = async (settings: { primaryColor?: string; logoUrl?: string }) => {
    if (settings.primaryColor) setPrimaryColor(settings.primaryColor);
    if (settings.logoUrl) setLogoUrl(settings.logoUrl);
  };

  return (
    <BrandContext.Provider value={{ primaryColor, logoUrl, updateBrandSettings, isLoading }}>
      {children}
    </BrandContext.Provider>
  );
};

export const useBrand = () => {
  const context = useContext(BrandContext);
  if (!context) {
    throw new Error('useBrand must be used within BrandProvider');
  }
  return context;
};