import { SectionCTA } from "@/components/SectionCTA";
import { ARCHIVE_SERVICE, getArchiveCopy, getArchiveUI, type ArchiveSlug } from "@/data/archive";
import type { Locale } from "@/i18n/config";

export function ArchiveCTA({ locale, slug }: { locale: Locale; slug: ArchiveSlug }) {
  const ui = getArchiveUI(locale);
  const copy = getArchiveCopy(locale, slug);
  const service = ARCHIVE_SERVICE[slug];
  const to = locale === "ko" ? `/services/${service}` : `/${locale}/services/${service}`;

  return (
    <SectionCTA
      eyebrow={ui.dive}
      title={copy.ctaTitle}
      description={copy.ctaDescription}
      to={to}
      ctaLabel={ui.ctaLabel}
    />
  );
}
