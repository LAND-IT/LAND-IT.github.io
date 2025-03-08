import "primereact/resources/themes/lara-light-green/theme.css";
import "primereact/resources/primereact.min.css";
import "@/app/globals.css";
import { Locale } from "@/i18n/routing";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { PrimeReactProvider } from "primereact/api";
import { Footer } from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";
import { routing } from "@/i18n/routing";

import IntlProvider from "@/components/providers/IntlProvider";

// Metadata para SEO
export const metadata: Metadata = {
  title: "LAND IT - Landing Page",
  description:
    "Land ANalisys and Design of the Integrated areas of the Territory | Landing Page",
  keywords: [
    "LAND IT",
    "Land Analysis and Design of the Integrated areas of the Territory",
    "gestão da paisagem",
    "landscape management",
    "análise territorial",
    "territorial analysis",
    "ferramenta SIG",
    "GIS tool",
    "edição de polígonos",
    "polygon editing",
    "sistemas de informação geográfica",
    "geographic information systems",
    "ordenamento do território",
    "territorial planning",
    "planeamento geoespacial",
    "geospatial planning",
    "geoprocessamento",
    "geoprocessing",
    "cartografia digital",
    "digital cartography",
    "dados geográficos",
    "geographic data",
  ],
  authors: [{ name: "LAND IT Team", url: "https://land-it.github.io" }],
  openGraph: {
    title: "LAND IT - Landing Page",
    description:
      "Land ANalisys and Design of the Integrated areas of the Territory | Landing Page",
    url: "https://land-it.github.io",
    siteName: "LAND IT",
    images: [
      {
        url: "https://land-it.github.io/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LAND IT - Land ANalisys and Design of the Integrated areas of the Territory",
      },
    ],
    type: "website",
    locale: "pt_PT",
  },
};

export async function generateStaticParams() {
  return routing.locales.map((locale: Locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} className={GeistSans.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://land-it.github.io" />
      </head>
      <body>
        <PrimeReactProvider>
          <IntlProvider locale={locale as Locale}>
            <Header lang={locale as Locale} />
            <main>{children}</main>
            <Footer />
          </IntlProvider>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
