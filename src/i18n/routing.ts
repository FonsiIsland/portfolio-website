import { defineRouting } from "next-intl/routing";

export const languages = [
  ["en", "English"],
  ["de", "Deutsch"],
];

export const routing = defineRouting({
  locales: languages.map(([code]) => code),
  defaultLocale: "de",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
