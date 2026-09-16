import { ArchiveTabs } from "@/components/ArchiveTabs";
import { ArchiveCTA } from "@/components/archive/ArchiveCTA";
import magazineImages from "@/data/magazine-images.json";
import { getArchiveCopy } from "@/data/archive";
import type { Locale } from "@/i18n/config";

export function MagazineArchive({ locale = "ko" }: { locale?: Locale }) {
  const copy = getArchiveCopy(locale, "magazine");

  return (
    <main className="min-h-screen bg-surface text-deep-ink">
      <ArchiveTabs
        variant="light"
        locale={locale}
        rightSlot={`${magazineImages.length} EDITORIALS`}
      />

      <section className="px-5 md:px-12 pt-16 md:pt-24 pb-12 md:pb-20 border-b-2 border-deep-ink">
        <span className="text-label-caps text-secondary block mb-6">— ARCHIVE / 03</span>
        <h1
          className="uppercase font-serif font-bold leading-[0.88] tracking-[-0.03em] mb-8"
          style={{ fontSize: "clamp(56px, 12vw, 180px)" }}
        >
          MAGAZINE
        </h1>
        <p className="text-body-lg md:text-headline-sm max-w-3xl border-l-4 border-neon-signal pl-6 leading-relaxed">
          {copy.intro}
        </p>
      </section>

      {/* 2 x 3 editorial grid */}
      <section className="px-5 md:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-16 md:gap-y-24">
          {magazineImages.map((img, i) => {
            const captionTitle = img.name.replace(/\.[^.]+$/, "");
            return (
              <figure key={img.id} className="flex flex-col">
                <div className="overflow-hidden bg-surface-low aspect-[4/5]">
                  <img
                    src={`/api/magazine/image/${img.id}`}
                    alt={`CLAMOA fashion editorial archive — ${captionTitle}`}
                    width={img.w}
                    height={img.h}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover block"
                  />
                </div>
                <figcaption className="mt-5 flex items-baseline justify-between gap-4 border-t border-deep-ink/15 pt-4">
                  <span className="text-label-caps text-secondary font-mono">
                    NO. {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-body-md font-serif italic">{captionTitle}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      <ArchiveCTA locale={locale} slug="magazine" />
    </main>
  );
}
