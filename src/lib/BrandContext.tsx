"use client";
import { createContext, useContext, useState, ReactNode } from 'react';

interface BrandContextType {
  primaryColor: string;
  logoUrl: string;
  updateBrandSettings: (settings: { primaryColor?: string; logoUrl?: string }) => void;
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

interface BrandProviderProps {
  children: ReactNode;
  initialColor: string;
  initialLogo: string;
}

export const BrandProvider = ({ children, initialColor, initialLogo }: BrandProviderProps) => {
  const [primaryColor, setPrimaryColor] = useState(initialColor);
  const [logoUrl, setLogoUrl] = useState(initialLogo);

  const updateBrandSettings = ({ primaryColor: c, logoUrl: l }: { primaryColor?: string; logoUrl?: string }) => {
    if (c) {
      setPrimaryColor(c);
      const root = document.documentElement;
      root.style.setProperty('--primary', c);
      root.style.setProperty('--primary-10', `color-mix(in srgb, ${c} 10%, transparent)`);
      root.style.setProperty('--primary-20', `color-mix(in srgb, ${c} 20%, transparent)`);
      root.style.setProperty('--primary-40', `color-mix(in srgb, ${c} 40%, transparent)`);
      root.style.setProperty('--primary-70', `color-mix(in srgb, ${c} 70%, transparent)`);
    }
    if (l) setLogoUrl(l);
  };

  return (
    <BrandContext.Provider value={{ primaryColor, logoUrl, updateBrandSettings }}>
      {children}
    </BrandContext.Provider>
  );
};

export const useBrand = () => {
  const context = useContext(BrandContext);
  if (!context) throw new Error('useBrand must be used within BrandProvider');
  return context;
};