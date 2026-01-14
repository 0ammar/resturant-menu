"use client";

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Upload, Palette } from 'lucide-react';
import { useBrand } from '@/lib/BrandContext';
import Image from 'next/image';
import styles from './BrandSettingsModal.module.scss';

interface BrandSettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const BrandSettingsModal = ({ isOpen, onClose }: BrandSettingsModalProps) => {
    const { primaryColor, logoUrl, updateBrandSettings } = useBrand();
    const [color, setColor] = useState(primaryColor);
    const [logoPreview, setLogoPreview] = useState(logoUrl);
    const [logoFile, setLogoFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    useEffect(() => {
        setColor(primaryColor);
        setLogoPreview(logoUrl);
    }, [primaryColor, logoUrl]);

    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setLogoFile(file);
            setLogoPreview(URL.createObjectURL(file));
        }
    };

    const handleSave = async () => {
        setLoading(true);
        try {
            let newLogoUrl = logoUrl;

            if (logoFile) {
                const formData = new FormData();
                formData.append('logo', logoFile);

                const uploadRes = await fetch('/api/upload-logo', {
                    method: 'POST',
                    body: formData,
                });

                if (!uploadRes.ok) throw new Error('Logo upload failed');

                const uploadData = await uploadRes.json();
                newLogoUrl = uploadData.url;
            }

            // Save brand settings
            const res = await fetch('/api/brand-settings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    primaryColor: color,
                    logoUrl: newLogoUrl,
                }),
            });

            if (!res.ok) throw new Error('Failed to save settings');

            updateBrandSettings({ primaryColor: color, logoUrl: newLogoUrl });
            onClose();
        } catch (error) {
            console.error('Save error:', error);
            alert('Failed to save settings');
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen || !mounted) return null;

    return createPortal(
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose}>
                    <X size={20} />
                </button>

                <h2>Brand Settings</h2>

                <div className={styles.section}>
                    <label>
                        <Palette size={18} />
                        <span>Primary Color</span>
                    </label>
                    <div className={styles.colorInput}>
                        <input
                            type="text"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            placeholder="#f9d457"
                            maxLength={7}
                        />
                        <input
                            title='Color'
                            type="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            className={styles.colorPicker}
                        />
                        <div
                            className={styles.colorPreview}
                            style={{ background: color }}
                        />
                    </div>
                </div>

                <div className={styles.section}>
                    <label>
                        <Upload size={18} />
                        <span>Logo</span>
                    </label>
                    <div className={styles.logoUpload}>
                        {logoPreview && (
                            <div className={styles.logoPreview}>
                                <Image
                                    src={logoPreview}
                                    alt="Logo"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        )}
                        <label className={styles.uploadBtn}>
                            <Upload size={16} />
                            <span>Upload New Logo</span>
                            <input
                                type="file"
                                accept="image/png,image/jpeg,image/jpg,image/svg+xml"
                                onChange={handleLogoChange}
                                hidden
                            />
                        </label>
                        <p className={styles.hint}>PNG, JPG, or SVG (recommended: 200x200px)</p>
                    </div>
                </div>

                <div className={styles.buttons}>
                    <button
                        className={styles.save}
                        onClick={handleSave}
                        disabled={loading}
                    >
                        {loading ? 'Saving...' : 'Save Changes'}
                    </button>
                    <button
                        className={styles.cancel}
                        onClick={onClose}
                        disabled={loading}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};