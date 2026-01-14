"use client";

import { useRouter, usePathname } from "next/navigation";
import { LogOut, Settings } from "lucide-react";
import { useState } from "react";
import { BrandSettingsModal } from "@/components/BrandSettingsModal/BrandSettingsModal";
import styles from "./layout.module.scss";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  if (pathname === "/admin/login") return <>{children}</>;

  const handleLogout = async () => {
    await fetch("/api/auth", { method: "DELETE" });
    router.push("/admin/login");
  };

  return (
    <div className={styles.layout}>
      <header className={styles.navbar}>
        <h1>Admin Dashboard</h1>

        <div style={{ display: "flex", gap: "0.75rem" }}>
          <button
            className={styles.settingsBtn}
            onClick={() => setIsSettingsOpen(true)}
            aria-label="Brand Settings"
          >
            <Settings size={16} />
          </button>


          <button className={styles.logoutBtn} onClick={handleLogout}>
            <LogOut size={16} />
            <span>Logout</span>
          </button>
        </div>
      </header>

      <main className={styles.content}>{children}</main>

      <BrandSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </div>
  );
}
