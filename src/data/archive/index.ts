import type { Locale } from "@/i18n/config";
import ko from "./ko";
import en from "./en";
import ja from "./ja";
import zh from "./zh";
import vi from "./vi";
import th from "./th";
import type { ArchiveDict, ArchiveSlug } from "./types";

export * from "./types";

/** Locales that have localized archive routes (everything except the default). */
export const ARCHIVE_LOCALES = ["en", "ja", "zh", "vi", "th"] as const;
export type ArchiveLocale = (typeof ARCHIVE_LOCALES)[number];

const DICTS: Record<Locale, ArchiveDict> = { ko, en, ja, zh, vi, th };

export function getArchiveUI(locale: Locale) {
  return DICTS[locale].ui;
}

export function getArchiveCopy(locale: Locale, slug: ArchiveSlug) {
  return DICTS[locale].pages[slug];
}

/** Path of an archive page for a locale. */
export function archivePath(locale: Locale, slug: ArchiveSlug): string {
  return locale === "ko" ? `/${slug}` : `/${locale}/archive/${slug}`;
}
