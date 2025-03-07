'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '@/translations/en.json';
import ptTranslation from '@/translations/pt.json';

// Inicialize i18next para uso no cliente
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      pt: { translation: ptTranslation },
    },
    lng: 'pt', // Definir inglês como idioma padrão
    fallbackLng: 'pt',
  });

export default i18n; 