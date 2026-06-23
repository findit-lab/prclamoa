import { createFileRoute } from "@tanstack/react-router";
import { SubPageNav } from "@/components/SubPageNav";
import { SectionCTA } from "@/components/SectionCTA";
import eventImages from "@/data/event-images.json";

export const Route = createFileRoute("/event")({
  head: () => ({
    meta: [
      { title: "EVENT — 오프라인 이벤트 PR 컨택트 시트 | CLAMOA" },
      {
        name: "description",
        content:
          "팝업·런칭·프리뷰·프레스데이 등 오프라인 이벤트 PR 현장 컨택트 시트. CLAMOA가 진행한 패션 브랜드 이벤트 사례를 확인하세요.",
      },
    ],
  }),
  component: EventPage,
});

function EventPage() {
  return (
    <main className="min-h-screen bg-surface text-deep-ink">
      <SubPageNav variant="light" rightSlot={`${eventImages.length} FRAMES`} />

      <section className="px-5 md:px-12 pt-24 md:pt-36 pb-12 md:pb-20 border-b-2 border-deep-ink">
        <span className="text-label-caps text-secondary block mb-6">— ARCHIVE / 04</span>
        <h1
          className="uppercase font-serif font-bold leading-[0.88] tracking-[-0.03em] mb-8"
          style={{ fontSize: "clamp(56px, 12vw, 180px)" }}
        >
          EVENT
        </h1>
        <p className="text-body-lg md:text-headline-sm max-w-3xl border-l-4 border-neon-signal pl-6 leading-relaxed">
          팝업·런칭·프레스데이·셀럽 어태치먼트 현장. 브랜드의 시즌 모먼트를 오프라인 임팩트로
          만들어낸 컨택트 시트입니다.
        </p>
      </section>

      {/* Contact sheet — tight grid with film-strip feel */}
      <section className="bg-deep-ink py-10 md:py-16 px-3 md:px-6">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-1 md:gap-1.5">
          {eventImages.map((img, i) => (
            <figure
              key={img.id}
              className="relative aspect-square overflow-hidden bg-black border border-white/10"
            >
              <img
                src={`/api/event/image/${img.id}`}
                alt={`CLAMOA offline event PR contact sheet — frame ${i + 1}`}
                width={img.w}
                height={img.h}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover block opacity-90 hover:opacity-100 transition-opacity"
              />
              <span className="absolute bottom-1 left-1.5 text-[9px] md:text-[10px] tracking-[0.15em] font-mono text-neon-signal/90">
                {String(i + 1).padStart(3, "0")}
              </span>
            </figure>
          ))}
        </div>
      </section>

      <SectionCTA
        eyebrow="DIVE DEEPER"
        title="오프라인 이벤트 PR이 궁금하다면"
        description="팝업·런칭·프레스데이 기획부터 셀럽 어태치먼트, 현장 운영·사후 클리핑까지. CLAMOA의 이벤트 PR 운영 방식을 자세히 확인하세요."
        to="/services/offline-event-pr"
      />
    </main>
  );
}
