import { LanguageProvider } from '@/lib/LanguageContext';
import { ThemeProvider } from '@/lib/ThemeContext';
import { BrandProvider } from '@/lib/BrandContext';
import type { Metadata } from 'next';
import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: {
    template: '%s | Restaurant Menu',
    default: 'Restaurant Menu',
  },
  description: 'The best restaurant in town',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <ThemeProvider>
            <BrandProvider>
              {children}
            </BrandProvider>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
