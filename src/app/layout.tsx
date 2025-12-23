import { Header } from '@/components';
import { LanguageProvider } from '@/contexts/LanguageContext';
import '@/styles/globals.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <LanguageProvider>
          <Header/>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}