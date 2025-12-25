"use client";

import { useEffect, useState } from "react";
import { CategoryNav, MealCard } from "@/components";
import { useLanguage } from "@/lib/LanguageContext";
import type { Category, Product } from "@/lib/types";
import styles from "./MenuPage.module.scss";

type Props = {
  introDone: boolean;
};

export default function MenuPage({ introDone }: Props) {
  const { t } = useLanguage();

  const [categories, setCategories] = useState<Category[]>([]);
  const [menuItems, setMenuItems] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");

  useEffect(() => {
    if (!introDone) return;

    const fetchData = async () => {
      try {
        const [catsRes, itemsRes] = await Promise.all([
          fetch("/api/categories", { cache: "no-store" }),
          fetch("/api/products", { cache: "no-store" }),
        ]);
        const cats = await catsRes.json();
        const items = await itemsRes.json();

        setCategories(Array.isArray(cats) ? cats : []);
        setMenuItems(Array.isArray(items) ? items : []);
        if (cats.length > 0) setActiveCategory(cats[0].id);
      } catch {
        setCategories([]);
        setMenuItems([]);
      }
    };

    fetchData();
  }, [introDone]);


  const filteredItems = menuItems.filter((item) => item.categoryId === activeCategory);

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
            {filteredItems.map((meal) => (
              <MealCard key={meal.id} meal={meal} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>{t.common.noItems}</div>
        )}
      </div>
    </div>
  );
}
