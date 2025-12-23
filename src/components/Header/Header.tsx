"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Phone, Facebook, Instagram, MessageCircle, Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { headerData } from '@/data/header';
import useHeader from './Header.logic';
import styles from './Header.module.scss';

const socialIcons = {
  Facebook,
  Instagram,
  WhatsApp: MessageCircle,
};

const Header = () => {
  const { language, setLanguage, t, dir } = useLanguage();
  const { isMenuOpen, toggleMenu, closeMenu } = useHeader();

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.leftSection}>
          <button className={styles.burgerBtn} onClick={toggleMenu}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <button 
            className={styles.iconBtn} 
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
          >
            {t.header.languageButton}
          </button>

          <Link href={headerData.contact.phoneHref} className={styles.iconBtn}>
            <Phone size={15} />
          </Link>
        </div>

        <Link href="/" className={styles.brand}>
          <Image
            src={headerData.branding.logoSrc}
            alt={t.header.logoAlt}
            width={headerData.branding.logoWidth}
            height={headerData.branding.logoHeight}
            className={styles.logo}
            priority
          />
        </Link>
      </nav>

      {isMenuOpen && (
        <>
          <div className={`${styles.menuOverlay} ${dir === 'rtl' ? styles.rtl : ''}`}>
            <div className={styles.menuContent}>
              {headerData.social.map((link) => {
                const Icon = socialIcons[link.icon as keyof typeof socialIcons];
                const translationKey = link.id as 'facebook' | 'instagram' | 'whatsapp';

                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    onClick={closeMenu}
                  >
                    <Icon size={18} />
                    <span>{t.social[translationKey]}</span>
                  </a>
                );
              })}
            </div>
          </div>
          <div className={styles.backdrop} onClick={closeMenu} />
        </>
      )}
    </>
  );
};

export default Header;