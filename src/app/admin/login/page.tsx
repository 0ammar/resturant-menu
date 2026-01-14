"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';
import styles from './page.module.scss';
import { useBrand } from '@/lib/BrandContext';

export default function AdminLogin() {
  const { t } = useLanguage();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { logoUrl, isLoading } = useBrand();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        router.push('/admin/categories');
      } else {
        setError(t.admin.invalidCredentials);
      }
    } catch {
      setError(t.admin.invalidCredentials);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.card}>
        <div className={styles.logoWrapper}>
          {!isLoading && (
            <Image
              src={logoUrl}
              alt={t.header.logoAlt}
              width={120}
              height={120}
              className={styles.logo}
              priority
            />
          )}
        </div>

        <h2 className={styles.h2}>{t.admin.login}</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            placeholder={t.admin.username}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            disabled={loading}
            autoComplete="username"
          />

          <input
            className={styles.input}
            type="password"
            placeholder={t.admin.password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
            autoComplete="current-password"
          />

          <button
            className={styles.button}
            type="submit"
            disabled={loading}
          >
            {loading ? t.common.loading : t.admin.loginButton}
          </button>
        </form>

        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
}
