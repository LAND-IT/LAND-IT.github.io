import 'primereact/resources/themes/lara-light-green/theme.css';
import 'primereact/resources/primereact.min.css';
import '@/app/globals.css';
import { Locale, i18nConfig } from '@/i18n';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import { PrimeReactProvider } from 'primereact/api';
import {Footer} from "../../components/layouts/Footer"
import { Header } from '@/components/layouts/Header';

export const metadata: Metadata = {
  title: 'LAND IT | Landing Page',
  description: 'Landing page for LAND IT',
};

export async function generateStaticParams() {
  return i18nConfig.locales.map((locale: Locale) => ({ locale: locale }));
}



export default async function RootLayout({children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const {locale} = await params;
  return (
    <html lang={locale} className={GeistSans.className}>
      <body>
        <main>
          <PrimeReactProvider>
            <Header lang={locale as Locale}/>
            {children}
            <Footer locale={locale as Locale}/>
          </PrimeReactProvider>
          </main>
      </body>
    </html>
  );
}
