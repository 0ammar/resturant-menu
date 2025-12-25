"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";
import Image from "next/image";
import { Modal } from "@/components";
import { deleteImage } from "@/lib/imageUtils";
import { useLanguage } from "@/lib/LanguageContext";
import type { Product } from "@/lib/types";
import styles from "./page.module.scss";

type ModalMode = "add" | "edit" | "delete" | null;

type Props = {
  categoryId?: string;
};

export default function ProductsPageClient({ categoryId }: Props) {
  const { t } = useLanguage();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalMode, setModalMode] = useState<ModalMode>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const productFields = useMemo(() => [
    { name: "name", label: t.admin.nameEn, required: true },
    { name: "nameAr", label: t.admin.nameAr, required: true },
    { name: "description", label: t.admin.descEn, type: "textarea" as const },
    { name: "descriptionAr", label: t.admin.descAr, type: "textarea" as const },
    { name: "price", label: t.admin.price, type: "number" as const, required: true },
    { name: "image", label: t.admin.image, type: "image" as const },
  ], [t]);

  const fetchUrl = useMemo(() => {
    return categoryId ? `/api/products?categoryId=${categoryId}` : "/api/products";
  }, [categoryId]);

  const fetchProducts = useCallback(async () => {
    try {
      const res = await fetch(fetchUrl, { cache: "no-store" });
      const data = await res.json();
      setProducts(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to fetch:", error);
      setProducts([]);
    } finally {
      setTimeout(() => setLoading(false), 400);
    }
  }, [fetchUrl]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleSubmit = async (data: Record<string, unknown>) => {
    if (!modalMode) return;

    try {
      if (modalMode === "delete" && selectedProduct) {
        await fetch(`/api/products/${selectedProduct.id}`, { method: "DELETE" });

        if (selectedProduct.image && selectedProduct.image !== "/product-1.jpg") {
          await deleteImage(selectedProduct.image).catch(console.error);
        }

        setProducts((prev) => prev.filter((p) => p.id !== selectedProduct.id));
      } else {
        const priceValue = typeof data.price === "string"
          ? parseFloat(data.price)
          : typeof data.price === "number"
            ? data.price
            : 0;

        const payload = {
          ...data,
          categoryId,
          price: priceValue,
        };

        const url = modalMode === "edit" && selectedProduct
          ? `/api/products/${selectedProduct.id}`
          : "/api/products";

        const method = modalMode === "edit" ? "PUT" : "POST";
        const res = await fetch(url, {
          method,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const saved = await res.json();

        if (modalMode === "add") {
          setProducts((prev) => [saved, ...prev]);
        } else {
          setProducts((prev) => prev.map((p) => (p.id === saved.id ? saved : p)));
        }
      }
    } catch (error) {
      console.error("Failed:", error);
      await fetchProducts();
    } finally {
      setModalMode(null);
      setSelectedProduct(null);
    }
  };

  if (loading) {
    return (
      <div className={styles.page}>
        <div className={styles.header}>
          <div className={styles.skeletonTitle} />
          <div className={styles.skeletonBtn} />
        </div>
        <div className={styles.grid}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className={styles.skeletonCard}>
              <div className={styles.skeletonImage} />
              <div className={styles.skeletonContent}>
                <div className={styles.skeletonLine} />
                <div className={styles.skeletonLine} />
                <div className={styles.skeletonPrice} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h2>{t.admin.products}</h2>
        <button
          onClick={() => {
            setSelectedProduct(null);
            setModalMode("add");
          }}
          className={styles.addBtn}
        >
          <Plus size={18} />
          <span>{t.admin.addProduct}</span>
        </button>
      </div>

      {products.length > 0 ? (
        <div className={styles.grid}>
          {products.map((product) => {
            const price = typeof product.price === "number" ? product.price : 0;
            const imgSrc = product.image || "/product-1.jpg";

            return (
              <div key={product.id} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={imgSrc}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={styles.image}
                  />
                </div>

                <div className={styles.content}>
                  <h3>{product.name}</h3>
                  <p>{product.nameAr}</p>
                  <span className={styles.price}>
                    {price.toFixed(2)} {t.common.currency}
                  </span>
                </div>

                <div className={styles.actions}>
                  <button
                    title="Edit"
                    onClick={() => {
                      setSelectedProduct(product);
                      setModalMode("edit");
                    }}
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    title="Delete"
                    onClick={() => {
                      setSelectedProduct(product);
                      setModalMode("delete");
                    }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.empty}>{t.admin.noProducts}</div>
      )}

      <Modal
        mode={modalMode}
        title={
          modalMode === "delete"
            ? t.admin.deleteProduct
            : modalMode === "edit"
              ? t.admin.editProduct
              : t.admin.addProduct
        }
        fields={modalMode !== "delete" ? productFields : undefined}
        initialData={
          selectedProduct ? (selectedProduct as unknown as Record<string, unknown>) : undefined
        }
        onClose={() => {
          setModalMode(null);
          setSelectedProduct(null);
        }}
        onSubmit={handleSubmit}
      />
    </div>
  );
}