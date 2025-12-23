"use client";

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { Modal } from '@/components';
import { useLanguage } from '@/lib/LanguageContext';
import type { Category } from '@/lib/types';
import styles from './page.module.scss';

type ModalMode = 'add' | 'edit' | 'delete' | null;

export default function CategoriesPage() {
  const { t } = useLanguage();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalMode, setModalMode] = useState<ModalMode>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const router = useRouter();

  const categoryFields = [
    { name: 'name', label: t.admin.nameEn, required: true },
    { name: 'nameAr', label: t.admin.nameAr, required: true },
  ];

  const fetchCategories = useCallback(async () => {
    try {
      const res = await fetch('/api/categories', { cache: 'no-store' });
      const data = await res.json();
      setCategories(Array.isArray(data) ? data.filter((c) => c?.id) : []);
    } catch (error) {
      console.error('Failed to fetch:', error);
      setCategories([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleSubmit = async (data: Record<string, unknown>) => {
    if (!modalMode) return;

    try {
      if (modalMode === 'delete' && selectedCategory) {
        await fetch(`/api/categories/${selectedCategory.id}`, { method: 'DELETE' });
        setCategories(prev => prev.filter(c => c.id !== selectedCategory.id));
      } else {
        const url = modalMode === 'edit' && selectedCategory
          ? `/api/categories/${selectedCategory.id}`
          : '/api/categories';

        const method = modalMode === 'edit' ? 'PUT' : 'POST';
        const res = await fetch(url, {
          method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        const saved = await res.json();

        if (!res.ok) {
          console.error("API Error:", saved);
          return;
        }

        if (!saved?.id) {
          console.error("Invalid response:", saved);
          return;
        }

        if (modalMode === "add") {
          setCategories((prev) => [saved, ...prev]);
        } else {
          setCategories((prev) => prev.map((c) => (c.id === saved.id ? saved : c)));
        }
      }
    } catch (error) {
      console.error('Failed:', error);
      await fetchCategories();
    }
  };

  if (loading) return <div className={styles.loading}>{t.common.loading}</div>;

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h2>{t.admin.categories}</h2>
        <button
          onClick={() => { setSelectedCategory(null); setModalMode('add'); }}
          className={styles.addBtn}
        >
          <Plus size={18} />
          <span>{t.admin.addCategory}</span>
        </button>
      </div>

      {categories.length > 0 ? (
        <div className={styles.grid}>
          {categories.map((category) => (
            <div
              key={category.id}
              className={styles.card}
              onClick={() => router.push(`/admin/products?categoryId=${category.id}`)}
            >
              <h3>{category.name}</h3>
              <p>{category.nameAr}</p>
              <div className={styles.actions} onClick={(e) => e.stopPropagation()}>
                <button
                  title="Edit"
                  onClick={() => { setSelectedCategory(category); setModalMode('edit'); }}
                >
                  <Edit2 size={16} />
                </button>
                <button
                  title="Delete"
                  onClick={() => { setSelectedCategory(category); setModalMode('delete'); }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.empty}>{t.admin.noCategories}</div>
      )}

      <Modal
        mode={modalMode}
        title={
          modalMode === 'delete'
            ? t.admin.deleteCategory
            : modalMode === 'edit'
              ? t.admin.editCategory
              : t.admin.addCategory
        }
        fields={modalMode !== 'delete' ? categoryFields : undefined}
        initialData={selectedCategory ? selectedCategory as unknown as Record<string, unknown> : undefined}
        onClose={() => { setModalMode(null); setSelectedCategory(null); }}
        onSubmit={handleSubmit}
      />
    </div>
  );
}