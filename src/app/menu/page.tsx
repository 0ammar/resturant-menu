"use client";

import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { CategoryNav, MealCard } from '@/components';
import type { Category, Product } from '@/lib/types';
import styles from './page.module.scss';

export default function MenuPage() {
  const { t } = useLanguage();
  const [categories, setCategories] = useState<Category[]>([]);
  const [menuItems, setMenuItems] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [cats, items] = await Promise.all([
          fetch("/api/categories", { cache: "no-store" }).then(r => r.json()),
          fetch("/api/products", { cache: "no-store" }).then(r => r.json()),
        ]);

        setCategories(Array.isArray(cats) ? cats : []);
        setMenuItems(Array.isArray(items) ? items : []);
        if (cats.length > 0) setActiveCategory(cats[0].id);
      } catch (error) {
        console.error('Failed to fetch:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className={styles.loading}>{t.common.loading}</div>;
  }

  const filteredItems = menuItems.filter(item => item.categoryId === activeCategory);

  return (
    <div className={styles.page}>
      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className={styles.container}>
        {filteredItems.length > 0 ? (
          <div className={styles.grid}>
            {filteredItems.map((meal, idx) => (
              <MealCard key={meal.id} meal={meal} index={idx} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>{t.common.noItems}</div>
        )}
      </div>
    </div>
  );
}