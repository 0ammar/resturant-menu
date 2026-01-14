"use client";

import { Sun, Moon, Phone, Settings } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import { useBrand } from "@/lib/BrandContext";
import { BrandSettingsModal } from "@/components/BrandSettingsModal/BrandSettingsModal";
import styles from "./Header.module.scss";

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme, mounted } = useTheme();
  const { logoUrl, isLoading } = useBrand();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleLanguage = () => setLanguage(language === "en" ? "ar" : "en");

  return (
    <>
      <header className={styles.navbar}>
        <div className={styles.leftSection}>
          <Link 
            href="tel:+962123456789" 
            className={styles.iconBtn} 
            aria-label={t.header.phoneButton}
          >
            <Phone size={16} />
          </Link>
          <button 
            className={styles.iconBtn} 
            onClick={() => setIsSettingsOpen(true)}
            aria-label="Brand Settings"
          >
            <Settings size={16} />
          </button>
        </div>

        <Link href="/" className={styles.brand}>
          {!isLoading && (
            <Image 
              src={logoUrl} 
              alt={t.header.logoAlt} 
              width={100} 
              height={100} 
              className={styles.logo} 
              priority 
            />
          )}
        </Link>

        <div className={styles.rightSection}>
          <button 
            className={styles.iconBtn} 
            onClick={toggleTheme} 
            aria-label="Toggle theme"
            style={{ opacity: mounted ? 1 : 0, transition: 'opacity 0.2s' }}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button className={styles.iconBtn} onClick={toggleLanguage}>
            {t.header.languageButton}
          </button>
        </div>
      </header>

      <BrandSettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
      />
    </>
  );
};