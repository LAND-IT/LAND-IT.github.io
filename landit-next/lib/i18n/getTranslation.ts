import { Locale } from '@/i18n';
import { loadTranslation } from './loadTranslation';

/**
 * Type definition for nested translation objects
 */
type TranslationKeyValue = {
  [key: string]: string | TranslationKeyValue;
};

/**
 * Retrieves the translation value based on an array of keys from a translation object.
 * Handles nested keys using dot notation.
 * 
 * @param {string[]} keys - Array of keys to navigate the translation object
 * @param {string | TranslationKeyValue} translation - Translation object or string value
 * @returns {string} The translated string or the key if not found
 */
const getTranslationValue = (
  keys: string[],
  translation: string | TranslationKeyValue
): string => {
  if (typeof translation === 'string') return translation;
  
  const key = keys.shift();
  if (!key) return '';
  
  return key && translation[key] 
    ? getTranslationValue(keys, translation[key]) 
    : key;
};

/**
 * Returns the translation value for a given key from the translation object.
 * 
 * @param {string} key - Translation key (can use dot notation for nested objects)
 * @param {TranslationKeyValue} translation - Translation object
 * @returns {string} The translated string or the key if not found
 */
const getTranslationValueByKey = (
  key: string,
  translation: TranslationKeyValue
): string => getTranslationValue(key.split('.'), translation) || key;

/**
 * Loads and returns a translation function for the specified locale.
 * 
 * @param {Locale} locale - The locale to load translations for
 * @returns {Function} A function that accepts a key and returns the translated string
 */
export const getTranslation = async (locale: Locale) => {
  const translation = await loadTranslation(locale);
  return (key: string) => getTranslationValueByKey(key, translation);
};
