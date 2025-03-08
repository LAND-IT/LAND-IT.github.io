// providers/IntlProvider.tsx
"use client";

import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import enMessages from "@/public/locales/en/translation.json";
import ptMessages from "@/public/locales/pt/translation.json";

const messagesMap = {
  en: enMessages,
  pt: ptMessages,
};

export default function IntlProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: keyof typeof messagesMap;
}) {
  const messages = messagesMap[locale] as unknown as AbstractIntlMessages;

  if (!messages) {
    return notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="UTC">
      {children}
    </NextIntlClientProvider>
  );
}
