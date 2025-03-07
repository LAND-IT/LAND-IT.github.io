import { i18nConfig, Locale } from '@/i18n';

/**
 * Translation loader functions for each supported locale
 */
const translations = {
  en: () => import('@/translations/en.json').then((module) => module.default),
  pt: () => import('@/translations/pt.json').then((module) => module.default),
};

/**
 * Type definition for translation objects based on the default locale structure
 * All translation files should follow the same structure to avoid type errors
 */
export type TranslationObject = Awaited<
  ReturnType<(typeof translations)[typeof i18nConfig.defaultLocale]>
>;

/**
 * Loads a translation file as a module based on a given locale.
 *
 * @param {Locale} locale - The locale that specifies which translation to load
 * @returns {Promise<TranslationObject>} Translation object
 */
export const loadTranslation = async (
  locale: Locale
): Promise<TranslationObject> => {
  return translations[locale]();
};
