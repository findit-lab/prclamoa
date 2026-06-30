import { createFileRoute } from "@tanstack/react-router";
import { ArchiveTabs } from "@/components/ArchiveTabs";
import { SectionCTA } from "@/components/SectionCTA";
import starImages from "@/data/star-images.json";

export const Route = createFileRoute("/star")({
  head: () => ({
    meta: [
      { title: "STAR — 셀럽 협찬 아카이브 | CLAMOA" },
      {
        name: "description",
        content:
          "CLAMOA가 진행한 K-POP 아이돌·배우 셀럽 협찬 아카이브. 공항패션, 출퇴근, 컨텐츠 촬영 현장에서의 브랜드 노출 사례를 확인하세요.",
      },
    ],
  }),
  component: StarPage,
});

function StarPage() {
  return (
    <main className="min-h-screen bg-surface text-deep-ink">
      <ArchiveTabs variant="light" rightSlot={`${starImages.length} LOOKS`} />

      <section className="px-5 md:px-12 pt-24 md:pt-36 pb-12 md:pb-20 border-b-2 border-deep-ink">
        <span className="text-label-caps text-secondary block mb-6">— ARCHIVE / 01</span>
        <h1
          className="uppercase font-serif font-bold leading-[0.88] tracking-[-0.03em] mb-8"
          style={{ fontSize: "clamp(56px, 12vw, 180px)" }}
        >
          STAR
        </h1>
        <p className="text-body-lg md:text-headline-sm max-w-3xl border-l-4 border-neon-signal pl-6 leading-relaxed">
          K-POP 아이돌·드라마 주연 배우의 공항·출퇴근·일상 컷에서 브랜드를 자연스럽게 노출시킨 셀럽
          시딩 아카이브입니다.
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

      <SectionCTA
        eyebrow="DIVE DEEPER"
        title="셀럽 협찬, 어떻게 설계되나요?"
        description="브랜드 톤에 맞는 셀럽 매칭부터 스타일리스트 협업, 결과 클리핑·2차 활용까지. CLAMOA의 셀럽 시딩 운영 방식을 자세히 확인하세요."
        to="/services/celebrity-seeding"
      />
    </main>
  );
}
