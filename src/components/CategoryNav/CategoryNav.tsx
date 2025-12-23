"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Category } from '@/lib/types';
import useCategoryScroll from './CategoryNav.logic';
import styles from './CategoryNav.module.scss';

interface CategoryNavProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (id: string) => void;
}

const CategoryNav = ({ categories, activeCategory, onCategoryChange }: CategoryNavProps) => {
  const { language } = useLanguage();
  const { scrollRef, handleMouseDown, handleMouseUp, handleMouseMove, scroll } = useCategoryScroll();
  const isRTL = language === 'ar';

  return (
    <nav className={styles.categoryNav}>
      <div className={styles.container}>
        <button 
          className={styles.arrowBtn} 
          onClick={() => scroll(isRTL ? 'right' : 'left')}
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>

        <div 
          className={styles.navWrapper} 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
        >
          {categories.map((c) => {
            const isActive = activeCategory === c.id;
            return (
              <button
                key={c.id}
                type="button"
                className={styles.categoryBtn}
                data-active={isActive}
                onClick={() => onCategoryChange(c.id)}
              >
                {language === 'en' ? c.name : c.nameAr}
              </button>
            );
          })}
        </div>

        <button 
          className={styles.arrowBtn} 
          onClick={() => scroll(isRTL ? 'left' : 'right')}
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </nav>
  );
};

export default CategoryNav;