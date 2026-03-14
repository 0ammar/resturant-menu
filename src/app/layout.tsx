import '@/styles/globals.scss';
import { LanguageProvider } from '@/lib/LanguageContext';
import { ThemeProvider } from '@/lib/ThemeContext';
import type { Metadata } from 'next';
import { BrandProvider } from '@/lib/BrandContext';
import BrandFavicon from '@/components/BrandFavicon';
import { getBrandSettings } from '@/lib/brand-settings-server';

export const metadata: Metadata = {
  title: {
    template: '%s | Restaurant Menu',
    default: 'Restaurant Menu',
  },
  description: 'The best restaurant in town',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const brand = await getBrandSettings();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={{
        '--primary': brand.primaryColor,
        '--primary-10': `color-mix(in srgb, ${brand.primaryColor} 10%, transparent)`,
        '--primary-20': `color-mix(in srgb, ${brand.primaryColor} 20%, transparent)`,
        '--primary-40': `color-mix(in srgb, ${brand.primaryColor} 40%, transparent)`,
        '--primary-70': `color-mix(in srgb, ${brand.primaryColor} 70%, transparent)`,
      } as React.CSSProperties}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'dark';
                  if (theme === 'light' || theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', theme);
                  }
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <BrandProvider initialColor={brand.primaryColor} initialLogo={brand.logoUrl}>
            <BrandFavicon />
            <LanguageProvider>
              {children}
            </LanguageProvider>
          </BrandProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}