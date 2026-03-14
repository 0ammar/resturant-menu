"use client";

import { useEffect } from "react";
import { useBrand } from "@/lib/BrandContext";

export default function BrandFavicon() {
  const { logoUrl } = useBrand();

  useEffect(() => {
    if ( !logoUrl) return;

    const updateIcon = (rel: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;

      if (!link) {
        link = document.createElement("link");
        link.rel = rel;
        document.head.appendChild(link);
      }

      link.href = logoUrl;
    };

    updateIcon("icon");
    updateIcon("shortcut icon");
    updateIcon("apple-touch-icon");
  }, [logoUrl]);

  return null;
}
