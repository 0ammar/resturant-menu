"use client";

import { useLanguage } from '@/lib/LanguageContext';
import Image from 'next/image';
import type { Product } from '@/lib/types';
import styles from './MealCard.module.scss';

interface MealCardProps {
  meal: Product;
}

export const MealCard = ({ meal }: MealCardProps) => {
  const { language, t, dir } = useLanguage();
  const name = language === 'ar' ? meal.nameAr : meal.name;
  const description = language === 'ar' ? meal.descriptionAr : meal.description;
  const imgSrc = meal.image || '/product-1.jpg';

  return (
    <div className={styles.card} data-dir={dir}>
      <div className={styles.imageWrapper}>
        <Image
          src={imgSrc}
          alt={name}
          fill
          sizes="(max-width: 640px) 100px, 130px"
          className={styles.img}
          priority
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        {description && <p className={styles.desc}>{description}</p>}
        <span className={styles.price}>
          {meal.price.toFixed(2)} {t.common.currency}
        </span>
      </div>
    </div>
  );
};