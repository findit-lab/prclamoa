import { createFileRoute, Link } from "@tanstack/react-router";
import { SubPageNav } from "@/components/SubPageNav";
import starImages from "@/data/star-images.json";

type StarImage = { id: string; name: string; w: number; h: number };

export const Route = createFileRoute("/star")({
  head: () => ({
    meta: [
      { title: "STAR — Celebrity Seeding Archive | CLAMOA" },
      {
        name: "description",
        content:
          "클라모아 셀러브리티 시딩 아카이브. 배우, 아티스트, K-POP 아이돌의 협찬 및 착장 레퍼런스 108컷.",
      },
      { property: "og:title", content: "STAR — Celebrity Seeding Archive | CLAMOA" },
      {
        property: "og:description",
        content: "패션홍보대행사 클라모아가 큐레이션한 스타 협찬 아카이브.",
      },
    ],
  }),
  component: StarPage,
});

function StarPage() {
  const images = starImages as StarImage[];

  return (
    <main className="min-h-screen bg-surface text-deep-ink">
      <SubPageNav variant="light" />

      {/* Editorial hero */}
      <section className="px-5 md:px-12 pt-16 md:pt-24 pb-12 md:pb-20 border-b-2 border-deep-ink">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-8">
            <span className="text-label-caps text-secondary block mb-6">
              VOL. 01 — CELEBRITY SEEDING / STAR DRESSING
            </span>
            <h1
              className="uppercase font-serif font-bold leading-[0.88] tracking-[-0.04em]"
              style={{ fontSize: "clamp(56px, 11vw, 180px)" }}
            >
              STAR<br />
              <span className="italic font-normal">archive</span>
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4 md:pb-6">
            <p className="text-body-lg font-serif leading-relaxed max-w-sm">
              배우, 아티스트, K-POP 아이돌. 클라모아가 큐레이션한
              <em> 셀러브리티 시딩 </em>
              레퍼런스 108컷. 무드 그대로, 큐레이션 그대로.
            </p>
            <div className="mt-8 flex items-center gap-4 text-label-caps text-secondary">
              <span>— SCROLL</span>
              <span className="h-px flex-1 bg-deep-ink/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Masonry editorial grid */}
      <section className="px-3 md:px-8 py-8 md:py-12">
        <div
          className="
            columns-2 sm:columns-3 md:columns-4 lg:columns-5
            gap-3 md:gap-5
            [column-fill:_balance]
          "
        >
          {images.map((img, i) => {
            // Editorial accents: every 11th gets a caption emphasis
            const isFeature = i % 13 === 0;
            return (
              <figure
                key={img.id}
                className="mb-3 md:mb-5 break-inside-avoid group relative overflow-hidden bg-surface-low"
              >
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: `${img.w} / ${img.h}` }}
                >
                  <img
                    src={`/api/star/image/${img.id}`}
                    alt={img.name.replace(/\.[^.]+$/, "")}
                    loading={i < 8 ? "eager" : "lazy"}
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-[1.04] group-hover:saturate-100 saturate-[0.85]"
                  />
                  {/* Editorial overlay */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-deep-ink/70 via-deep-ink/0 to-deep-ink/0" />
                  <figcaption
                    className="pointer-events-none absolute left-3 right-3 bottom-3 flex items-end justify-between gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 text-inverse-on-surface"
                  >
                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold leading-tight max-w-[80%] line-clamp-2">
                      {img.name.replace(/\.[^.]+$/, "")}
                    </span>
                    <span className="text-[10px] tracking-[0.15em] font-mono opacity-80">
                      {String(i + 1).padStart(3, "0")}
                    </span>
                  </figcaption>
                </div>
                {isFeature && (
                  <div className="mt-2 px-1 flex items-baseline justify-between">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-secondary font-bold">
                      FEATURED
                    </span>
                    <span className="text-[10px] tracking-[0.15em] font-mono text-secondary">
                      № {String(i + 1).padStart(3, "0")} / {images.length}
                    </span>
                  </div>
                )}
              </figure>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-deep-ink mt-8 px-5 md:px-12 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div>
          <span className="text-label-caps text-secondary block mb-3">END OF ARCHIVE</span>
          <h2 className="text-headline-md uppercase max-w-xl">
            BRAND, MEET THE RIGHT STAR.
          </h2>
        </div>
        <Link
          to="/"
          hash="contact"
          className="inline-flex items-center gap-3 bg-deep-ink text-neon-signal px-6 md:px-10 py-4 md:py-5 text-label-caps hover:bg-neon-signal hover:text-deep-ink border-2 border-deep-ink transition-colors"
        >
          <span>START A PROJECT</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </Link>
      </footer>
    </main>
  );
}
