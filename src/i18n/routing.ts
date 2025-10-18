import { defineRouting } from "next-intl/routing";

export const languages = [
  ["en", "English"],
  ["de", "Deutsch"],
];

export const routing = defineRouting({
  locales: languages.map(([code]) => code),
  defaultLocale: "en",
  localeDetection: true,
});

export type Locale = (typeof routing.locales)[number];
