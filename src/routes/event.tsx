import { createFileRoute } from "@tanstack/react-router";
import { ArchiveTabs } from "@/components/ArchiveTabs";
import { SectionCTA } from "@/components/SectionCTA";
import eventImages from "@/data/event-images.json";

export const Route = createFileRoute("/event")({
  head: () => ({
    meta: [
      { title: "EVENT — 오프라인 이벤트 PR 현장 스케치 | CLAMOA" },
      {
        name: "description",
        content:
          "팝업·런칭·프리뷰·프레스데이 등 오프라인 이벤트 PR 현장 스케치. CLAMOA가 진행한 패션 브랜드 이벤트 현장의 순간을 기록한 필드 노트.",
      },
    ],
  }),
  component: EventPage,
});

// 의사난수 (deterministic) — 인덱스 기반 회전/오프셋
const rot = (i: number, amp = 3) => {
  const v = Math.sin(i * 12.9898) * 43758.5453;
  return ((v - Math.floor(v)) * 2 - 1) * amp;
};
const off = (i: number, amp = 6) => {
  const v = Math.sin(i * 78.233) * 12345.6789;
  return ((v - Math.floor(v)) * 2 - 1) * amp;
};

const CAPTIONS = [
  "SETUP — 09:42",
  "RUN-THROUGH",
  "GUEST ARRIVAL",
  "FRONT ROW",
  "BACKSTAGE",
  "PRESS WALL",
  "FLORAL DETAIL",
  "BAR / BEVERAGE",
  "DJ BOOTH",
  "CHECK-IN",
  "CELEB ATTACH",
  "LIVE MOMENT",
  "AFTER PARTY",
  "WRAP — 23:58",
];

function EventPage() {
  const imgs = eventImages;
  const stripCount = 7;
  const polaroidCount = 14;
  const filmStrip = imgs.slice(0, stripCount);
  const polaroids = imgs.slice(stripCount, stripCount + polaroidCount);
  const contact = imgs.slice(stripCount + polaroidCount);

  return (
    <main className="min-h-screen bg-surface text-deep-ink">
      <ArchiveTabs variant="light" rightSlot={`${imgs.length} FRAMES`} />

      {/* HERO — 현장 노트 헤더 */}
      <section className="px-5 md:px-12 pt-24 md:pt-36 pb-10 md:pb-16 border-b-2 border-deep-ink relative overflow-hidden">
        {/* 모서리 등록 마크 */}
        <span aria-hidden className="absolute top-24 right-5 md:right-12 text-[10px] font-mono tracking-[0.2em] text-secondary">
          + REG / 01 +
        </span>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="text-label-caps text-secondary">— ARCHIVE / 05</span>
          <span className="text-[10px] font-mono tracking-[0.2em] border border-deep-ink px-2 py-0.5">
            FIELD NOTES
          </span>
          <span className="text-[10px] font-mono tracking-[0.2em] text-secondary">
            ROLL 24 · DEV. CLAMOA LAB · SEOUL
          </span>
        </div>

        <h1
          className="uppercase font-serif font-bold leading-[0.86] tracking-[-0.04em] mb-8"
          style={{ fontSize: "clamp(56px, 13vw, 200px)" }}
        >
          ON-SITE
          <br />
          <span className="italic font-normal">sketch</span>
        </h1>

        <div className="grid grid-cols-12 gap-6 items-end">
          <p className="col-span-12 md:col-span-7 text-body-lg md:text-headline-sm border-l-4 border-neon-signal pl-6 leading-relaxed">
            팝업·런칭·프레스데이·셀럽 어태치먼트 현장. 셔터가 닫히기 전,
            브랜드의 시즌 모먼트가 만들어지던 순간을 그대로 옮긴 필드 스케치입니다.
          </p>
          <ul className="col-span-12 md:col-span-4 md:col-start-9 text-[11px] font-mono tracking-[0.15em] space-y-1.5 border-t border-deep-ink pt-4">
            <li className="flex justify-between"><span className="text-secondary">LOCATION</span><span>SEOUL · APGUJEONG</span></li>
            <li className="flex justify-between"><span className="text-secondary">FORMAT</span><span>35MM / DIGITAL</span></li>
            <li className="flex justify-between"><span className="text-secondary">FRAMES</span><span>{String(imgs.length).padStart(3, "0")}</span></li>
            <li className="flex justify-between"><span className="text-secondary">STATUS</span><span className="text-neon-signal bg-deep-ink px-1.5">DEVELOPED</span></li>
          </ul>
        </div>
      </section>

      {/* FILM STRIP — 35mm 느낌 가로 스트립 */}
      <section className="bg-deep-ink py-6 md:py-8 border-b-2 border-deep-ink">
        <div className="flex items-center justify-between px-5 md:px-12 mb-4">
          <span className="text-[10px] font-mono tracking-[0.2em] text-neon-signal">► STRIP 01 / KODAK TX 400</span>
          <span className="text-[10px] font-mono tracking-[0.2em] text-surface/60">SCROLL →</span>
        </div>
        {/* 스프로켓 홀 */}
        <div aria-hidden className="h-3 bg-deep-ink relative">
          <div className="absolute inset-0 flex gap-3 px-4">
            {Array.from({ length: 40 }).map((_, i) => (
              <span key={i} className="w-3 h-3 bg-surface/90 rounded-[2px] flex-shrink-0" />
            ))}
          </div>
        </div>
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-1 px-1 py-2 min-w-max">
            {filmStrip.map((img, i) => (
              <figure key={img.id} className="relative w-[200px] md:w-[260px] aspect-[3/2] flex-shrink-0 bg-black overflow-hidden">
                <img
                  src={`/api/event/image/${img.id}`}
                  alt={`CLAMOA event field sketch — strip frame ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <figcaption className="absolute top-1 left-2 text-[9px] font-mono tracking-[0.15em] text-neon-signal/90">
                  {String(i + 1).padStart(2, "0")}A
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div aria-hidden className="h-3 bg-deep-ink relative">
          <div className="absolute inset-0 flex gap-3 px-4">
            {Array.from({ length: 40 }).map((_, i) => (
              <span key={i} className="w-3 h-3 bg-surface/90 rounded-[2px] flex-shrink-0" />
            ))}
          </div>
        </div>
      </section>

      {/* SCRAPBOOK — 폴라로이드 산개 */}
      <section className="relative px-5 md:px-12 py-16 md:py-24 border-b-2 border-deep-ink bg-[radial-gradient(circle_at_20%_10%,rgba(0,0,0,0.04),transparent_50%),radial-gradient(circle_at_80%_90%,rgba(0,0,0,0.04),transparent_50%)]">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <span className="text-[10px] font-mono tracking-[0.2em] text-secondary block mb-2">— SCRAPBOOK / II</span>
            <h2 className="font-serif font-bold uppercase leading-[0.9] tracking-[-0.02em] text-[clamp(28px,4vw,56px)]">
              taped &amp; <span className="italic font-normal">pinned</span>
            </h2>
          </div>
          <span className="hidden md:block text-[10px] font-mono tracking-[0.15em] text-secondary max-w-[180px] text-right">
            손으로 붙이고 떼어낸 흔적까지 — 현장의 호흡을 그대로
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 md:gap-y-16 gap-x-4 md:gap-x-8">
          {polaroids.map((img, i) => {
            const r = rot(i, 3.5);
            const x = off(i, 8);
            const y = off(i + 1, 6);
            const caption = CAPTIONS[i % CAPTIONS.length];
            const frameNo = String(stripCount + i + 1).padStart(3, "0");
            return (
              <figure
                key={img.id}
                className="relative bg-surface p-3 pb-10 shadow-[6px_8px_0_-2px_rgba(26,28,28,0.08),0_18px_30px_-12px_rgba(26,28,28,0.25)] transition-transform duration-500 hover:!rotate-0 hover:!translate-x-0 hover:!translate-y-0 hover:z-10"
                style={{ transform: `rotate(${r}deg) translate(${x}px, ${y}px)` }}
              >
                {/* 마스킹 테이프 */}
                <span
                  aria-hidden
                  className="absolute -top-2 left-1/2 w-14 h-5 bg-neon-signal/70 mix-blend-multiply"
                  style={{ transform: `translateX(-50%) rotate(${rot(i + 7, 6)}deg)` }}
                />
                <div className="relative aspect-square overflow-hidden bg-black">
                  <img
                    src={`/api/event/image/${img.id}`}
                    alt={`CLAMOA event field sketch — pinned frame ${frameNo}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <figcaption className="absolute bottom-2 left-3 right-3 flex items-baseline justify-between">
                  <span className="text-[10px] font-mono tracking-[0.15em] text-deep-ink/70">{caption}</span>
                  <span className="text-[10px] font-mono tracking-[0.15em] text-deep-ink/50">{frameNo}</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      {/* CONTACT SHEET — 컨택트 시트 + 크롭 마크 */}
      <section className="bg-deep-ink py-12 md:py-20 px-5 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8 md:mb-12 border-b border-surface/20 pb-4">
          <div>
            <span className="text-[10px] font-mono tracking-[0.2em] text-neon-signal block mb-2">— CONTACT SHEET / III</span>
            <h2 className="text-surface font-serif font-bold uppercase leading-[0.9] tracking-[-0.02em] text-[clamp(28px,4vw,56px)]">
              the full <span className="italic font-normal">roll</span>
            </h2>
          </div>
          <ul className="text-[10px] font-mono tracking-[0.15em] text-surface/70 space-y-1 text-right">
            <li>EXP. {String(contact.length).padStart(3, "0")} FRAMES</li>
            <li>ISO 400 · F/2.8 · 1/125</li>
            <li>SELECT ▢  REJECT ▢  HOLD ▣</li>
          </ul>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-1.5 md:gap-2">
          {contact.map((img, i) => {
            const idx = stripCount + polaroidCount + i + 1;
            // 일부 프레임은 ✗ 표시 (의사난수)
            const rejected = Math.floor(Math.abs(Math.sin(i * 3.17)) * 100) % 9 === 0;
            const selected = Math.floor(Math.abs(Math.sin(i * 5.71)) * 100) % 7 === 0;
            return (
              <figure
                key={img.id}
                className="relative aspect-square overflow-hidden bg-black group"
              >
                {/* 코너 크롭 마크 */}
                <span aria-hidden className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-neon-signal/80 z-10" />
                <span aria-hidden className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-neon-signal/80 z-10" />
                <span aria-hidden className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-neon-signal/80 z-10" />
                <span aria-hidden className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-neon-signal/80 z-10" />
                <img
                  src={`/api/event/image/${img.id}`}
                  alt={`CLAMOA event field sketch — contact frame ${idx}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                {rejected && (
                  <span aria-hidden className="absolute inset-0 pointer-events-none">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                      <line x1="0" y1="0" x2="100" y2="100" stroke="oklch(0.85 0.18 95)" strokeWidth="1.2" opacity="0.85" />
                      <line x1="100" y1="0" x2="0" y2="100" stroke="oklch(0.85 0.18 95)" strokeWidth="1.2" opacity="0.85" />
                    </svg>
                  </span>
                )}
                {selected && !rejected && (
                  <span aria-hidden className="absolute top-1 right-1 w-3 h-3 border border-neon-signal bg-neon-signal/30" />
                )}
                <span className="absolute bottom-1 left-1.5 text-[9px] md:text-[10px] tracking-[0.15em] font-mono text-neon-signal/90 z-10">
                  {String(idx).padStart(3, "0")}
                </span>
              </figure>
            );
          })}
        </div>

        <p className="mt-8 text-[10px] font-mono tracking-[0.2em] text-surface/50 text-center">
          ✗ REJECTED · ▣ SELECT · — END OF ROLL —
        </p>
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
