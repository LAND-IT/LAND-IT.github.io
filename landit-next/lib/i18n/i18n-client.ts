'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { i18nConfig } from '@/i18n';
import enTranslation from '@/translations/en.json';
import ptTranslation from '@/translations/pt.json';

// Initialize i18next for client-side usage
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      pt: { translation: ptTranslation },
    },
    lng: i18nConfig.defaultLocale, // Set default language from config
    fallbackLng: i18nConfig.defaultLocale,
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    debug: process.env.NODE_ENV === 'development'
  });

export default i18n; 