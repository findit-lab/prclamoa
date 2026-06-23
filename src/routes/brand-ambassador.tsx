import { createFileRoute } from "@tanstack/react-router";
import { SubPageNav } from "@/components/SubPageNav";
import { SectionCTA } from "@/components/SectionCTA";
import ambassadorImages from "@/data/brand-ambassador-images.json";

export const Route = createFileRoute("/brand-ambassador")({
  head: () => ({
    meta: [
      { title: "BRAND AMBASSADOR — 앰배서더 캠페인 캐스팅 | CLAMOA" },
      {
        name: "description",
        content:
          "패션 브랜드 앰배서더·뮤즈 캐스팅 캠페인 아카이브. CLAMOA가 진행한 장기 셀럽 파트너십 결과물을 확인하세요.",
      },
    ],
  }),
  component: AmbassadorPage,
});

function AmbassadorPage() {
  return (
    <main className="min-h-screen bg-surface text-deep-ink">
      <SubPageNav variant="light" rightSlot={`${ambassadorImages.length} CASTINGS`} />

      <section className="px-5 md:px-12 pt-24 md:pt-36 pb-12 md:pb-20 border-b-2 border-deep-ink">
        <span className="text-label-caps text-secondary block mb-6">— ARCHIVE / 05</span>
        <h1
          className="uppercase font-serif font-bold leading-[0.88] tracking-[-0.03em] mb-8"
          style={{ fontSize: "clamp(48px, 10vw, 160px)" }}
        >
          BRAND<br />AMBASSADOR
        </h1>
        <p className="text-body-lg md:text-headline-sm max-w-3xl border-l-4 border-neon-signal pl-6 leading-relaxed">
          단발성 협찬을 넘어 브랜드의 시즌 뮤즈·장기 앰배서더로 이어진 캐스팅. 브랜드 헤리티지와
          셀럽의 페르소나를 한 결로 정렬합니다.
        </p>
      </section>

      {/* Luxury single-column */}
      <section className="py-16 md:py-28">
        <div className="max-w-4xl mx-auto px-5 md:px-0 space-y-24 md:space-y-40">
          {ambassadorImages.map((img, i) => {
            const captionTitle = img.name.replace(/\.[^.]+$/, "");
            return (
              <figure key={img.id} className="flex flex-col items-center">
                <div className="w-full overflow-hidden bg-surface-low">
                  <img
                    src={`/api/brand-ambassador/image/${img.id}`}
                    alt={`CLAMOA brand ambassador casting archive — ${captionTitle}`}
                    width={img.w}
                    height={img.h}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto block"
                  />
                </div>
                <figcaption className="mt-8 text-center">
                  <span className="text-label-caps text-secondary font-mono block mb-3">
                    CASTING — {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-headline-sm font-serif italic">{captionTitle}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      <SectionCTA
        eyebrow="DIVE DEEPER"
        title="앰배서더 캠페인, 어떻게 설계하나요?"
        description="셀럽 페르소나 분석·계약 구조 설계·시즌 콘텐츠 운영까지. CLAMOA의 브랜드 앰배서더 캠페인 운영 방식을 자세히 확인하세요."
        to="/services/brand-ambassador"
      />
    </main>
  );
}
