import { ArchiveTabs } from "@/components/ArchiveTabs";
import { ArchiveCTA } from "@/components/archive/ArchiveCTA";
import starImages from "@/data/star-images.json";
import { getArchiveCopy } from "@/data/archive";
import type { Locale } from "@/i18n/config";

export function StarArchive({ locale = "ko" }: { locale?: Locale }) {
  const copy = getArchiveCopy(locale, "star");

  return (
    <main className="min-h-screen bg-surface text-deep-ink">
      <ArchiveTabs variant="light" locale={locale} rightSlot={`${starImages.length} LOOKS`} />

      <section className="px-5 md:px-12 pt-16 md:pt-24 pb-12 md:pb-20 border-b-2 border-deep-ink">
        <span className="text-label-caps text-secondary block mb-6">— ARCHIVE / 01</span>
        <h1
          className="uppercase font-serif font-bold leading-[0.88] tracking-[-0.03em] mb-8"
          style={{ fontSize: "clamp(56px, 12vw, 180px)" }}
        >
          STAR
        </h1>
        <p className="text-body-lg md:text-headline-sm max-w-3xl border-l-4 border-neon-signal pl-6 leading-relaxed">
          {copy.intro}
        </p>
      </section>

      {/* Magazine masonry */}
      <section className="px-3 md:px-8 py-10 md:py-16">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 [column-fill:_balance]">
          {starImages.map((img) => (
            <figure
              key={img.id}
              className="mb-3 md:mb-4 break-inside-avoid overflow-hidden bg-surface-low"
            >
              <img
                src={`/api/star/image/${img.id}`}
                alt={`CLAMOA celebrity seeding archive — ${img.name.replace(/\.[^.]+$/, "")}`}
                width={img.w}
                height={img.h}
                loading="lazy"
                decoding="async"
                className="w-full h-auto block hover:opacity-90 transition-opacity"
              />
            </figure>
          ))}
        </div>
      </section>

      <ArchiveCTA locale={locale} slug="star" />
    </main>
  );
}
