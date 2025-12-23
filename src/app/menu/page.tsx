"use client";

import { useState } from 'react';
import CategoryNav from '@/components/CategoryNav/CategoryNav';
import MealCard from '@/components/MealCard/MealCard';
import { categories } from '@/data/categories';
import { menuItems } from '@/data/menuItems';
import styles from './page.module.scss';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || '');
  const filteredItems = menuItems.filter(item => item.categoryId === activeCategory);

  return (
    <div className={styles.page}>
      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      
      <div className={styles.container}>
        <div className={styles.grid}>
          {filteredItems.map((meal, idx) => (
            <MealCard key={meal.id} meal={meal} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;