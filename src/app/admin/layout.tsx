"use client";

import { useRouter, usePathname } from 'next/navigation';
import { LogOut } from 'lucide-react';
import styles from './layout.module.scss';

export default function AdminLayout({ children, }: { children: React.ReactNode; }) {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === '/admin/login') return <>{children}</>;

  const handleLogout = async () => {
    await fetch('/api/auth', { method: 'DELETE' });
    router.push('/admin/login');
  };

  return (
    <div className={styles.layout}>
      <header className={styles.navbar}>
        <h1>Admin Dashboard</h1>
        <button className={styles.logoutBtn} onClick={handleLogout}>
          <LogOut size={16} />
          <span>Logout</span>
        </button>
      </header>
      <main className={styles.content}>{children}</main>
    </div>
  );
}