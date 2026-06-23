import { createFileRoute } from "@tanstack/react-router";
import { ArchiveTabs } from "@/components/ArchiveTabs";
import { SectionCTA } from "@/components/SectionCTA";
import magazineImages from "@/data/magazine-images.json";

export const Route = createFileRoute("/magazine")({
  head: () => ({
    meta: [
      { title: "MAGAZINE — 에디토리얼·바이럴 PR | CLAMOA" },
      {
        name: "description",
        content:
          "패션 매거진 화보·에디토리얼 PR 사례 아카이브. CLAMOA가 진행한 잡지 협업·바이럴 콘텐츠 결과물을 확인하세요.",
      },
    ],
  }),
  component: MagazinePage,
});

function MagazinePage() {
  return (
    <main className="min-h-screen bg-surface text-deep-ink">
      <ArchiveTabs variant="light" rightSlot={`${magazineImages.length} EDITORIALS`} />

      <section className="px-5 md:px-12 pt-24 md:pt-36 pb-12 md:pb-20 border-b-2 border-deep-ink">
        <span className="text-label-caps text-secondary block mb-6">— ARCHIVE / 02</span>
        <h1
          className="uppercase font-serif font-bold leading-[0.88] tracking-[-0.03em] mb-8"
          style={{ fontSize: "clamp(56px, 12vw, 180px)" }}
        >
          MAGAZINE
        </h1>
        <p className="text-body-lg md:text-headline-sm max-w-3xl border-l-4 border-neon-signal pl-6 leading-relaxed">
          국내 주요 패션 매거진과의 에디토리얼 협업. 화보·인터뷰·픽처리얼 페이지를 통해 브랜드의
          톤과 헤리티지를 시각적으로 정립합니다.
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

      <SectionCTA
        eyebrow="DIVE DEEPER"
        title="에디토리얼·바이럴 PR이 궁금하다면"
        description="매거진 협업 피칭부터 바이럴 콘텐츠 설계, 발행 후 2차 확산까지. CLAMOA의 에디토리얼 PR 운영 방식을 자세히 확인하세요."
        to="/services/editorial-viral-pr"
      />
    </main>
  );
}
