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
    const [error, setError] = useState('');

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
            setError('');
        }
    };

    const handleSave = async () => {
        setLoading(true);
        setError('');
        
        try {
            let newLogoUrl = logoUrl;

            if (logoFile) {
                console.log('Uploading logo...');
                const formData = new FormData();
                formData.append('logo', logoFile);

                const uploadRes = await fetch('/api/upload-logo', {
                    method: 'POST',
                    body: formData,
                });

                if (!uploadRes.ok) {
                    const errorData = await uploadRes.json();
                    throw new Error(errorData.error || 'Logo upload failed');
                }

                const uploadData = await uploadRes.json();
                newLogoUrl = uploadData.url;
                console.log('Logo uploaded:', newLogoUrl);
            }

            // Save brand settings
            console.log('Saving settings...');
            const res = await fetch('/api/brand-settings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    primaryColor: color,
                    logoUrl: newLogoUrl,
                }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || 'Failed to save settings');
            }

            console.log('Settings saved successfully');
            updateBrandSettings({ primaryColor: color, logoUrl: newLogoUrl });
            
            // Apply color immediately
            document.documentElement.style.setProperty('--primary', color);
            
            onClose();
            
        } catch (error) {
            console.error('Save error:', error);
            const errorMessage = error instanceof Error ? error.message : 'Failed to save settings';
            setError(errorMessage);
            alert(errorMessage);
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

                {error && (
                    <div style={{
                        padding: '0.75rem',
                        marginBottom: '1rem',
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        borderRadius: '8px',
                        color: '#ef4444',
                        fontSize: '0.875rem'
                    }}>
                        {error}
                    </div>
                )}

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