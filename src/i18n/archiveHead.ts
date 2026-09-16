import { LOCALE_REGISTRY, SITE_URL, socialImageMeta, type Locale } from "./config";
import {
  ARCHIVE_LOCALES,
  archivePath,
  getArchiveCopy,
  type ArchiveSlug,
} from "@/data/archive";

export function archiveUrl(locale: Locale, slug: ArchiveSlug) {
  return `${SITE_URL}${archivePath(locale, slug)}`;
}

export function archiveAlternates(slug: ArchiveSlug) {
  const koUrl = archiveUrl("ko", slug);
  return [
    { rel: "alternate" as const, hreflang: LOCALE_REGISTRY.ko.bcp47, href: koUrl },
    ...ARCHIVE_LOCALES.map((l) => ({
      rel: "alternate" as const,
      hreflang: LOCALE_REGISTRY[l].bcp47,
      href: archiveUrl(l, slug),
    })),
    { rel: "alternate" as const, hreflang: "x-default", href: koUrl },
  ];
}

/** Full head() payload for an archive page in any locale. */
export function archiveHead(locale: Locale, slug: ArchiveSlug) {
  const copy = getArchiveCopy(locale, slug);
  const url = archiveUrl(locale, slug);
  return {
    meta: [
      { title: copy.metaTitle },
      { name: "description", content: copy.metaDescription },
      { property: "og:title", content: copy.metaTitle },
      { property: "og:description", content: copy.metaDescription },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: LOCALE_REGISTRY[locale].ogLocale },
      ...socialImageMeta(locale),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: copy.metaTitle },
      { name: "twitter:description", content: copy.metaDescription },
    ],
    links: [{ rel: "canonical", href: url }, ...archiveAlternates(slug)],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: copy.metaTitle,
          description: copy.metaDescription,
          url,
          inLanguage: LOCALE_REGISTRY[locale].bcp47,
        }),
      },
    ],
  };
}
