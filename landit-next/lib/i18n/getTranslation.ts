import { Locale } from '@/i18n';
import { loadTranslation } from './loadTranslation';

type TranslationKeyValue = {
  [key: string]: string | TranslationKeyValue;
};

/**
 * Retrieves the translation value based on an array of keys from a translation object.
 */
const getTranslationValue = (
  keys: string[],
  translation: string | TranslationKeyValue
): string => {
  if (typeof translation === 'string') return translation;
  const key = keys.shift();
  return key && translation[key] ? getTranslationValue(keys, translation[key]) : key || '';
};

/**
 * Returns the translation value for a given key from the translation object.
 */
const getTranslationValueByKey = (
  key: string,
  translation: TranslationKeyValue
): string => getTranslationValue(key.split('.'), translation) || key;

/**
 * Loads and returns a translation function for the specified locale.
 */
export const getTranslation = async (locale: Locale) => {
  const translation = await loadTranslation(locale);
  return (key: string) => getTranslationValueByKey(key, translation);
};
