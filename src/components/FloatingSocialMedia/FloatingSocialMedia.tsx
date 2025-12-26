"use client";

import { Facebook, Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import styles from "./FloatingSocialMedia.module.scss";

export const FloatingSocialMedia = () => {
  const { t, dir } = useLanguage();

  return (
    <div className={`${styles.container} ${dir === "rtl" ? styles.rtl : ""}`}>
      <Link
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialBtn}
        aria-label={t.social.facebook}
        title={t.social.facebook}
      >
        <Facebook size={20} />
      </Link>
      
      <Link
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialBtn}
        aria-label={t.social.instagram}
        title={t.social.instagram}
      >
        <Instagram size={20} />
      </Link>
      
      <Link
        href="https://wa.me/962123456789"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialBtn}
        aria-label={t.social.whatsapp}
        title={t.social.whatsapp}
      >
        <MessageCircle size={20} />
      </Link>
    </div>
  );
};