import { LanguageProvider } from '@/lib/LanguageContext';
import { ThemeProvider } from '@/lib/ThemeContext';
import type { Metadata } from 'next';
import '@/styles/globals.scss';
import { BrandProvider } from '@/lib/BrandContext';
import BrandFavicon from '@/components/BrandFavicon';

export const metadata: Metadata = {
  title: {
    template: '%s | Restaurant Menu',
    default: 'Restaurant Menu',
  },
  description: 'The best restaurant in town',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
          <BrandProvider>
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
