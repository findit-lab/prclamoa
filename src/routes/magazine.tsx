import { createFileRoute, Link } from "@tanstack/react-router";
import { SubPageNav } from "@/components/SubPageNav";
import magazineImages from "@/data/magazine-images.json";

type MagImage = { id: string; name: string; w: number; h: number };

export const Route = createFileRoute("/magazine")({
  head: () => ({
    meta: [
      { title: "MAGAZINE — Editorial Pitching | CLAMOA" },
      {
        name: "description",
        content:
          "클라모아가 큐레이션한 매거진 에디토리얼 피칭 아카이브. 패션·라이프스타일 매거진 화보 협업.",
      },
      { property: "og:title", content: "MAGAZINE — Editorial Pitching | CLAMOA" },
      {
        property: "og:description",
        content: "패션 매거진 에디토리얼 톤앤무드의 화보 아카이브.",
      },
    ],
  }),
  component: MagazinePage,
});

function MagazinePage() {
  const images = magazineImages as MagImage[];

  return (
    <main className="min-h-screen bg-surface text-deep-ink">
      <SubPageNav variant="light" />

      {/* Magazine cover / masthead */}
      <section className="border-b-2 border-deep-ink">
        <div className="px-5 md:px-12 pt-10 md:pt-14 pb-6 md:pb-10">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-8">
              <span className="text-label-caps text-secondary block mb-4">
                COVER STORY — MAGAZINE PITCHING
              </span>
              <h1
                className="uppercase font-serif font-bold leading-[0.85] tracking-[-0.045em]"
                style={{ fontSize: "clamp(64px, 14vw, 220px)" }}
              >
                Mag<span className="italic font-normal">a</span>zine
              </h1>
            </div>
            <div className="col-span-12 md:col-span-4 md:pb-4">
              <p className="text-body-lg font-serif leading-relaxed max-w-sm">
                유가화보를 기반으로 매거진 노출부터
                <em> 셀럽 SNS 포스팅, 공항패션 및 언론 보도</em>까지
                원스톱으로 진행합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial grid: 2 columns × 3 rows */}
      <section className="px-5 md:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-14 gap-y-16 md:gap-y-24">
          {images.map((img, i) => {
            const pageNo = String((i + 1) * 14 + 8).padStart(3, "0");
            const isLeft = i % 2 === 0;
            return (
              <article key={img.id} className="group">
                {/* Cover image */}
                <div
                  className="relative w-full overflow-hidden bg-surface-low border border-deep-ink/10"
                  style={{ aspectRatio: `${img.w} / ${img.h}` }}
                >
                  <img
                    src={`/api/magazine/image/${img.id}`}
                    alt={img.name.replace(/\.[^.]+$/, "")}
                    loading={i < 2 ? "eager" : "lazy"}
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
                  />
                  {/* Drop cap overlay */}
                  <div className="pointer-events-none absolute top-4 left-4 md:top-6 md:left-6">
                    <span
                      className="font-serif italic font-bold text-inverse-on-surface mix-blend-difference leading-none"
                      style={{ fontSize: "clamp(40px, 6vw, 88px)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Caption block */}
                <div className="mt-5">
                  <h2
                    className="font-serif uppercase leading-[1] tracking-[-0.02em]"
                    style={{ fontSize: "clamp(22px, 2.2vw, 34px)" }}
                  >
                    {img.name.replace(/\.[^.]+$/, "")}
                  </h2>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Colophon footer */}
      <footer className="border-t-2 border-deep-ink mt-8 px-5 md:px-12 py-10 md:py-14">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <span className="text-label-caps text-secondary block mb-3">— COLOPHON</span>
            <h2 className="text-headline-md uppercase max-w-xl">
              YOUR BRAND, ON THE NEXT COVER.
            </h2>
          </div>
          <Link
            to="/"
            hash="contact"
            className="inline-flex items-center gap-3 bg-deep-ink text-neon-signal px-6 md:px-10 py-4 md:py-5 text-label-caps hover:bg-neon-signal hover:text-deep-ink border-2 border-deep-ink transition-colors"
          >
            <span>PITCH WITH CLAMOA</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </footer>
    </main>
  );
}
