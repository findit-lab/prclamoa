export const LOCALES = ["ko", "en", "ja", "vi", "th"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "ko";

export const SITE_URL = "https://clamoa.com";

export interface LocaleEntry {
  /** internal code */
  code: Locale;
  /** BCP47 tag used for html[lang] and hreflang */
  bcp47: string;
  /** URL prefix; empty string for the default locale */
  prefix: string;
  /** text direction */
  dir: "ltr" | "rtl";
  /** label shown in the language switcher */
  label: string;
  /** short label (nav chip) */
  short: string;
  /** Open Graph locale */
  ogLocale: string;
}

export const LOCALE_REGISTRY: Record<Locale, LocaleEntry> = {
  ko: {
    code: "ko",
    bcp47: "ko-KR",
    prefix: "",
    dir: "ltr",
    label: "한국어",
    short: "KO",
    ogLocale: "ko_KR",
  },
  en: {
    code: "en",
    bcp47: "en",
    prefix: "/en",
    dir: "ltr",
    label: "English",
    short: "EN",
    ogLocale: "en_US",
  },
  ja: {
    code: "ja",
    bcp47: "ja-JP",
    prefix: "/ja",
    dir: "ltr",
    label: "日本語",
    short: "JA",
    ogLocale: "ja_JP",
  },
  vi: {
    code: "vi",
    bcp47: "vi-VN",
    prefix: "/vi",
    dir: "ltr",
    label: "Tiếng Việt",
    short: "VI",
    ogLocale: "vi_VN",
  },
  th: {
    code: "th",
    bcp47: "th-TH",
    prefix: "/th",
    dir: "ltr",
    label: "ไทย",
    short: "TH",
    ogLocale: "th_TH",
  },
};

/** Absolute URL of the home page for a locale. */
export function localeHomeUrl(locale: Locale): string {
  const prefix = LOCALE_REGISTRY[locale].prefix;
  return `${SITE_URL}${prefix || "/"}`;
}

/** Path (relative) of the home page for a locale. */
export function localeHomePath(locale: Locale): string {
  return LOCALE_REGISTRY[locale].prefix || "/";
}

/**
 * Reciprocal hreflang link tags for the home page cluster, including x-default.
 * Only emit for indexable pages.
 */
export function homeAlternateLinks() {
  return [
    ...LOCALES.map((l) => ({
      rel: "alternate" as const,
      hrefLang: LOCALE_REGISTRY[l].bcp47,
      href: localeHomeUrl(l),
    })),
    { rel: "alternate" as const, hrefLang: "x-default", href: localeHomeUrl(DEFAULT_LOCALE) },
  ];
}

export function ogLocaleAlternates(current: Locale) {
  return LOCALES.filter((l) => l !== current).map((l) => ({
    property: "og:locale:alternate",
    content: LOCALE_REGISTRY[l].ogLocale,
  }));
}

/** Detect the locale from a pathname (used by the root layout for html[lang]). */
export function localeFromPathname(pathname: string): Locale {
  const seg = pathname.split("/").filter(Boolean)[0];
  return (LOCALES as readonly string[]).includes(seg ?? "") ? (seg as Locale) : DEFAULT_LOCALE;
}
