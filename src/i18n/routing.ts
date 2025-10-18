import { defineRouting } from "next-intl/routing";

export const languages = [
  ["en", "English"],
  ["de", "Deutsch"],
];

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: languages.map(([code]) => code),

  // Used when no locale matches
  defaultLocale: "en",
});

export type Locale = (typeof routing.locales)[number];
