"use client";

import { useEffect, useState } from "react";
import { CategoryNav, MealCard, LoadingSkeleton } from "@/components";
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
  const [loading, setLoading] = useState(true);

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

        const safeCats: Category[] = Array.isArray(cats) ? cats : [];
        const safeItems: Product[] = Array.isArray(items) ? items : [];

        setCategories(safeCats);
        setMenuItems(safeItems);
        if (safeCats.length > 0) setActiveCategory(safeCats[0].id);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setCategories([]);
        setMenuItems([]);
      } finally {
        setTimeout(() => setLoading(false), 600);
      }
    };

    fetchData();
  }, [introDone]);

  if (loading) {
    return (
      <div className={styles.page}>
        <LoadingSkeleton />
      </div>
    );
  }

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