export type Locale = "en" | "ru";

interface I18nConfig {
  defaultLocale: Locale;
  locales: Locale[];
}

export const i18n: I18nConfig = {
  defaultLocale: "ru",
  locales: ["en", "ru"],
};
