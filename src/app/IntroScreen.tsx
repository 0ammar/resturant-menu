"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import styles from './IntroScreen.module.scss';

export default function IntroScreen() {
  const router = useRouter();
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2500);

    const redirectTimer = setTimeout(() => {
      router.push('/menu');
    }, 3200);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(fadeTimer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <div className={`${styles.intro} ${isFadingOut ? styles.fadeOut : ''}`}>
      <div className={styles.content}>
        <div className={`${styles.logoWrapper} ${isLoaded ? styles.visible : ''}`}>
          <Image
            src="/logo.PNG"
            alt={t.header.logoAlt}
            width={400}
            height={400}
            className={styles.logo}
            priority
          />
        </div>
        
        <div className={`${styles.textWrapper} ${isLoaded ? styles.visible : ''}`}>
          <h1 className={styles.title}>{t.intro.welcome}</h1>
          <p className={styles.subtitle}>{t.intro.subtitle}</p>
        </div>

        <div className={`${styles.loader} ${isLoaded ? styles.visible : ''}`}>
          <div className={styles.loaderBar}></div>
        </div>
      </div>
    </div>
  );
}