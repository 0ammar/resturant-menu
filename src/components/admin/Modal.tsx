"use client";

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Upload } from 'lucide-react';
import { validateImage, compressImage, uploadImage } from '@/lib/imageUtils';
import { useLanguage } from '@/lib/LanguageContext';
import Image from 'next/image';
import styles from './Modal.module.scss';

interface Field {
  name: string;
  label: string;
  type?: 'text' | 'number' | 'textarea' | 'image';
  required?: boolean;
  rows?: number;
}

interface ModalProps {
  mode: 'add' | 'edit' | 'delete' | null;
  title: string;
  fields?: Field[];
  initialData?: Record<string, unknown>;
  onClose: () => void;
  onSubmit: (data: Record<string, unknown>) => Promise<void>;
}

export const Modal = ({ mode, title, fields = [], initialData, onClose, onSubmit }: ModalProps) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<Record<string, unknown>>({});
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (mode === 'edit' && initialData) {
      setFormData(initialData);
      if (typeof initialData.image === 'string') {
        setImagePreview(initialData.image);
      }
    } else {
      setFormData({});
      setImageFile(null);
      setImagePreview('');
    }
    setError('');
  }, [mode, initialData]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validationError = validateImage(file);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError('');
    setLoading(true);

    try {
      const compressed = await compressImage(file);
      setImageFile(compressed);
      setImagePreview(URL.createObjectURL(compressed));
    } catch {
      setError('Failed to process image');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError('');

    try {
      const finalData = { ...formData };

      if (imageFile) {
        const imageUrl = await uploadImage(imageFile);
        finalData.image = imageUrl;
      }

      await onSubmit(finalData);
      onClose();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Operation failed';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (!mode || !mounted) return null;

  const initialName = typeof initialData?.name === 'string' ? initialData.name : '';

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        

        <h3>{title}</h3>

        {mode === 'delete' ? (
          <>
            <p>{t.admin.confirmDelete} <strong>{initialName}</strong></p>
            <p className={styles.warning}>{t.admin.confirmDeleteMsg}</p>
            {error && <p className={styles.error}>{error}</p>}
            <div className={styles.buttons}>
              <button className={styles.confirm} onClick={handleSubmit} disabled={loading}>
                {loading ? t.admin.deleting : t.admin.delete}
              </button>
              <button className={styles.cancel} onClick={onClose} disabled={loading}>
                {t.admin.cancel}
              </button>
            </div>
          </>
        ) : (
          <>
            {fields.map((field) => (
              field.type === 'image' ? (
                <div key={field.name} className={styles.imageUpload}>
                  {imagePreview && (
                    <div className={styles.preview}>
                      <Image src={imagePreview} alt="Preview" width={200} height={150} priority />
                    </div>
                  )}
                  <label className={styles.uploadBtn}>
                    <Upload size={18} />
                    <span>{imagePreview ? t.admin.changeImage : t.admin.uploadImage}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      disabled={loading}
                      hidden
                    />
                  </label>
                </div>
              ) : field.type === 'textarea' ? (
                <textarea
                  key={field.name}
                  placeholder={field.label}
                  value={String(formData[field.name] || '')}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  disabled={loading}
                  rows={field.rows || 2}
                  required={field.required}
                />
              ) : (
                <input
                  key={field.name}
                  type={field.type || 'text'}
                  placeholder={field.label}
                  value={String(formData[field.name] || '')}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  disabled={loading}
                  required={field.required}
                  step={field.type === 'number' ? '0.01' : undefined}
                />
              )
            ))}

            {error && <p className={styles.error}>{error}</p>}

            <div className={styles.buttons}>
              <button className={styles.confirm} onClick={handleSubmit} disabled={loading}>
                {loading ? t.admin.saving : t.admin.save}
              </button>
              <button className={styles.cancel} onClick={onClose} disabled={loading}>
                {t.admin.cancel}
              </button>
            </div>
          </>
        )}
      </div>
    </div>,
    document.body
  );
};