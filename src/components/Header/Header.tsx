"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, Facebook, Instagram, MessageCircle, Sun, Moon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import styles from "./Header.module.scss";

export const Header = () => {
  const { language, setLanguage, t, dir } = useLanguage();
  const { theme, toggleTheme, mounted } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleLanguage = () => setLanguage(language === "en" ? "ar" : "en");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Only hide UI until mounted, hooks still run
  if (!mounted) {
    return <header className={styles.navbar} />; // empty header placeholder
  }

  return (
    <header className={styles.navbar}>
      <div className={styles.leftSection}>
        <button
          className={styles.burgerBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={t.header.menuButton}
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <Link href="tel:+962123456789" className={styles.iconBtn} aria-label={t.header.phoneButton}>
          <Phone size={16} />
        </Link>
      </div>

      <Link href="/" className={styles.brand}>
        <Image src="/logo.png" alt={t.header.logoAlt} width={100} height={100} className={styles.logo} priority />
      </Link>

      <div className={styles.leftSection}>
        <button className={styles.iconBtn} onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        <button className={styles.iconBtn} onClick={toggleLanguage}>
          {t.header.languageButton}
        </button>
      </div>

      {isMenuOpen && (
        <>
          <div className={styles.backdrop} onClick={() => setIsMenuOpen(false)} />
          <div ref={menuRef} className={`${styles.menuOverlay} ${dir === "rtl" ? styles.rtl : ""}`}>
            <nav className={styles.menuContent}>
              <Link
                href="https://facebook.com"
                target="_blank"
                className={styles.socialLink}
                aria-label={t.social.facebook}
              >
                <Facebook size={18} />
                <span>{t.social.facebook}</span>
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                className={styles.socialLink}
                aria-label={t.social.instagram}
              >
                <Instagram size={18} />
                <span>{t.social.instagram}</span>
              </Link>

              <Link
                href="https://wa.me/962123456789"
                target="_blank"
                className={styles.socialLink}
                aria-label={t.social.whatsapp}
              >
                <MessageCircle size={18} />
                <span>{t.social.whatsapp}</span>
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};
