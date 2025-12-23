"use client";

import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import type { Product } from '@/lib/types';
import styles from './MealCard.module.scss';

interface MealCardProps {
  meal: Product;
  index?: number;
}

const MealCard = ({ meal, index = 0 }: MealCardProps) => {
  const { language, t } = useLanguage();
  const dir = language === 'ar' ? 'rtl' : 'ltr';
  const title = language === 'en' ? meal.name : meal.nameAr;
  const desc = language === 'en' ? meal.description : meal.descriptionAr;
  const price = typeof meal.price === 'number' ? meal.price : 0;

  return (
    <div className={styles.card} data-dir={dir}>
      <div className={styles.content}>
        <h3 className={styles.name}>{title}</h3>
        <p className={styles.desc}>{desc}</p>
        <span className={styles.price}>
          {price.toFixed(2)} {t.common.currency}
        </span>
      </div>
      <Image
        src={meal.image || '/product-1.jpg'}
        alt={title}
        width={95}
        height={75}
        className={styles.img}
      />
    </div>
  );
};

export default MealCard;