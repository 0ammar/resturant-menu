"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import styles from "./IntroScreen.module.scss";
import { LoadingSkeleton } from "@/components";

type Particle = {
  id: number;
  left: string;
  animationDelay: string;
  animationDuration: string;
};

// ✅ Pure deterministic "random" (no Math.random, no Date, no crypto)
function pseudoRandom(seed: number) {
  const x = Math.sin(seed) * 43758.5453123;
  return x - Math.floor(x); // frac
}

export default function IntroScreen() {
  const router = useRouter();
  const { t } = useLanguage();
  const [phase, setPhase] = useState(0);
  const [navigating, setNavigating] = useState(false);


  // ✅ Stable on every render + passes purity rule
  const particles: Particle[] = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => {
      const r1 = pseudoRandom(i * 12.9898 + 0.1);
      const r2 = pseudoRandom(i * 78.233 + 0.2);
      const r3 = pseudoRandom(i * 39.346 + 0.3);

      return {
        id: i,
        left: `${r1 * 100}%`,
        animationDelay: `${r2 * 3}s`,
        animationDuration: `${3 + r3 * 4}s`,
      };
    });
  }, []);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 800),
      setTimeout(() => setPhase(3), 1600),
      setTimeout(() => setPhase(4), 2600),
      setTimeout(() => {
        setNavigating(true);
        router.push("/menu");
      }, 3400)
    ];

    return () => timers.forEach(clearTimeout);
  }, [router]);

  if (navigating) {
    return <LoadingSkeleton />;
  }

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
              left: p.left,
              animationDelay: p.animationDelay,
              animationDuration: p.animationDuration,
            }}
          />
        ))}
      </div>

      <div className={styles.content}>
        <div className={`${styles.logoContainer} ${phase >= 2 ? styles.visible : ""}`}>
          <div className={styles.logoRing} />
          <div className={styles.logoWrapper}>
            <Image
              src="/logo.png"
              alt={t.header.logoAlt}
              width={400}
              height={400}
              className={styles.logo}
              priority
            />
          </div>
        </div>

        {phase >= 3 && (
          <div className={styles.textContainer}>
            <div className={styles.line} />
            <h1 className={styles.title}>{t.intro.welcome}</h1>
            <div className={styles.line} />
            <p className={styles.subtitle}>{t.intro.subtitle}</p>
          </div>
        )}
      </div>

      <div className={`${styles.ornament} ${phase >= 3 ? styles.visible : ""}`}>
        <svg width="200" height="20" viewBox="0 0 200 20">
          <path d="M0,10 Q50,0 100,10 T200,10" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>
    </div>
  );
}
