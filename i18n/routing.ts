import {defineRouting} from 'next-intl/routing';

 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'pt'],
 
  // Used when no locale matches
  defaultLocale: 'en',
});

// Exports a type from the i18nConfig, can represent any locale in locales array.
export type Locale = (typeof routing)['locales'][number];
