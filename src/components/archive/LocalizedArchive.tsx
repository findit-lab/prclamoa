import { AmbassadorArchive } from "@/components/archive/AmbassadorArchive";
import { EventArchive } from "@/components/archive/EventArchive";
import { InfluencerArchive } from "@/components/archive/InfluencerArchive";
import { MagazineArchive } from "@/components/archive/MagazineArchive";
import { StarArchive } from "@/components/archive/StarArchive";
import { ViralArchive } from "@/components/archive/ViralArchive";
import { ARCHIVE_SLUGS, type ArchiveSlug } from "@/data/archive";
import type { Locale } from "@/i18n/config";

export function isArchiveSlug(value: string): value is ArchiveSlug {
  return (ARCHIVE_SLUGS as readonly string[]).includes(value);
}

export function LocalizedArchive({ locale, slug }: { locale: Locale; slug: ArchiveSlug }) {
  switch (slug) {
    case "star":
      return <StarArchive locale={locale} />;
    case "viral":
      return <ViralArchive locale={locale} />;
    case "magazine":
      return <MagazineArchive locale={locale} />;
    case "influencer":
      return <InfluencerArchive locale={locale} />;
    case "event":
      return <EventArchive locale={locale} />;
    case "brand-ambassador":
      return <AmbassadorArchive locale={locale} />;
  }
}
