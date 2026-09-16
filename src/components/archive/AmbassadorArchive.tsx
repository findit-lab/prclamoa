import { ArchiveTabs } from "@/components/ArchiveTabs";
import { ArchiveCTA } from "@/components/archive/ArchiveCTA";
import ambassadorImages from "@/data/brand-ambassador-images.json";
import { getArchiveCopy } from "@/data/archive";
import type { Locale } from "@/i18n/config";

export function AmbassadorArchive({ locale = "ko" }: { locale?: Locale }) {
  const copy = getArchiveCopy(locale, "brand-ambassador");

  return (
    <main className="min-h-screen bg-surface text-deep-ink">
      <ArchiveTabs
        variant="light"
        locale={locale}
        rightSlot={`${ambassadorImages.length} CASTINGS`}
      />

      <section className="px-5 md:px-12 pt-16 md:pt-24 pb-12 md:pb-20 border-b-2 border-deep-ink">
        <span className="text-label-caps text-secondary block mb-6">— ARCHIVE / 06</span>
        <h1
          className="uppercase font-serif font-bold leading-[0.88] tracking-[-0.03em] mb-8"
          style={{ fontSize: "clamp(48px, 10vw, 160px)" }}
        >
          BRAND
          <br />
          AMBASSADOR
        </h1>
        <p className="text-body-lg md:text-headline-sm max-w-3xl border-l-4 border-neon-signal pl-6 leading-relaxed">
          {copy.intro}
        </p>
      </section>

      {/* 3-up horizontal row */}
      <section className="py-16 md:py-28 px-5 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {ambassadorImages.map((img, i) => {
            const captionTitle = img.name.replace(/\.[^.]+$/, "");
            return (
              <figure key={img.id} className="flex flex-col">
                <div className="w-full overflow-hidden bg-surface-low aspect-[3/4]">
                  <img
                    src={`/api/brand-ambassador/image/${img.id}`}
                    alt={`CLAMOA brand ambassador casting archive — ${captionTitle}`}
                    width={img.w}
                    height={img.h}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover block"
                  />
                </div>
                <figcaption className="mt-6 text-center">
                  <span className="text-label-caps text-secondary font-mono block mb-2">
                    CASTING — {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-headline-sm font-serif italic">{captionTitle}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      <ArchiveCTA locale={locale} slug="brand-ambassador" />
    </main>
  );
}
