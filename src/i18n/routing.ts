import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const languages = [
  ['en', 'English'],
  ['de', 'Deutsch'],
  ['cn', 'Chinese'],
];

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: languages.map(([code]) => code),

  // Used when no locale matches
  defaultLocale: 'en',
});

export type Locale = (typeof routing.locales)[number];
