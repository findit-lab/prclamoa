import en from "./dict/en";
import ja from "./dict/ja";
import vi from "./dict/vi";
import th from "./dict/th";
import type { Locale } from "./config";

export * from "./config";

const DICTS: Partial<Record<Locale, Record<string, string>>> = { en, ja, vi, th };

/**
 * Returns a translate function for the locale.
 * Keys are the Korean source strings; the default locale returns them unchanged.
 */
export function makeT(locale: Locale) {
  const dict = DICTS[locale];
  return (key: string): string => (dict && dict[key]) || key;
}
