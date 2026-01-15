"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import styles from "./IntroScreen.module.scss";
import { useBrand } from "@/lib/BrandContext";

type Props = {
  onFinish?: () => void;
};

type Particle = {
  id: number;
  left: number;
  delay: number;
  duration: number;
};

function pseudoRandom(seed: number) {
  const x = Math.sin(seed) * 43758.5453123;
  return x - Math.floor(x);
}

function generateParticles(): Particle[] {
  return Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: pseudoRandom(i * 12.9898 + 0.1) * 100,
    delay: pseudoRandom(i * 78.233 + 0.2) * 3,
    duration: 3 + pseudoRandom(i * 39.346 + 0.3) * 5,
  }));
}

export default function IntroScreen({ onFinish }: Props) {
  const { t } = useLanguage();
  const [phase, setPhase] = useState(0);
  const { logoUrl, isLoading } = useBrand();

  if (isLoading) {
    return null
  }
  const particles = useMemo(() => generateParticles(), []);


  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 700),
      setTimeout(() => setPhase(3), 1400),
      setTimeout(() => setPhase(4), 2200),
      setTimeout(() => onFinish?.(), 3000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onFinish]);


  return (
    <div className={`${styles.intro} ${phase >= 4 ? styles.exit : ""}`}>
      <div className={`${styles.curtainLeft} ${phase >= 1 ? styles.open : ""}`} />
      <div className={`${styles.curtainRight} ${phase >= 1 ? styles.open : ""}`} />

      <div className={styles.particles}>
        {particles.map((p) => (
          <div
            key={p.id}
            className={styles.particle}
            style={{
              left: `${p.left.toFixed(2)}%`,
              animationDelay: `${p.delay.toFixed(3)}s`,
              animationDuration: `${p.duration.toFixed(3)}s`,
            }}
          />
        ))}
      </div>

      <div className={styles.spotlight} />

      <div className={styles.content}>
        <div className={`${styles.logoContainer} ${phase >= 2 ? styles.visible : ""}`}>
          <div className={styles.logoRing} />
          <div className={styles.logoGlow} />
          <div className={styles.logoWrapper}>
            <Image
              src={logoUrl}
              alt={t.header.logoAlt}
              width={280}
              height={280}
              className={styles.logo}
              priority
            />

          </div>
        </div>
      </div>

      <div className={`${styles.bottomOrnament} ${phase >= 3 ? styles.visible : ""}`}>
        <svg width="300" height="30" viewBox="0 0 300 30">
          <path d="M0,15 Q75,5 150,15 T300,15" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="150" cy="15" r="3" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}