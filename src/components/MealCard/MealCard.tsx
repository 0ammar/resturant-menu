"use client";

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import type { MenuItem } from '@/lib/types';
import styles from './MealCard.module.scss';

interface MealCardProps {
  meal: MenuItem;
  index?: number;
}

const MealCard = ({ meal, index = 0 }: MealCardProps) => {
  const { language, t } = useLanguage();
  const dir = language === 'ar' ? 'rtl' : 'ltr';
  const title = language === 'en' ? meal.name : meal.nameAr;
  const desc = language === 'en' ? meal.description : meal.descriptionAr;

  return (
    <div className={styles.card} data-dir={dir} style={{ ['--i' as any]: index }}>
      <div className={styles.content}>
        <h3 className={styles.name}>{title}</h3>
        <p className={styles.desc}>{desc}</p>
        <span className={styles.price}>
          {meal.price.toFixed(2)} {t.common.currency}
        </span>
      </div>
      <Image 
        src={meal.image} 
        alt={title} 
        width={90} 
        height={70} 
        className={styles.img} 
      />
    </div>
  );
};

export default MealCard;