import { createFileRoute } from "@tanstack/react-router";
import { ArchiveTabs } from "@/components/ArchiveTabs";
import { SectionCTA } from "@/components/SectionCTA";
import influencerImages from "@/data/influencer-images.json";

export const Route = createFileRoute("/viral")({
  head: () => ({
    meta: [
      { title: "VIRAL — 바이럴 콘텐츠 아카이브 | CLAMOA" },
      {
        name: "description",
        content: "숏폼·릴스·틱톡·유튜브 쇼츠 등 CLAMOA가 기획·확산시킨 바이럴 콘텐츠 아카이브.",
      },
    ],
  }),
  component: ViralPage,
});

// deterministic pseudo metrics
const stats = (i: number) => {
  const views = (1.2 + ((i * 37) % 89) / 10).toFixed(1);
  const likes = 12 + ((i * 7) % 480);
  const ms = 12 + ((i * 13) % 48);
  return { views: `${views}M`, likes: `${likes}K`, dur: `0:${String(ms).padStart(2, "0")}` };
};

const TAGS = ["#fyp", "#ootd", "#kfashion", "#seoul", "#tiktokmademebuyit", "#viralfashion"];

function ViralPage() {
  // pick first 9 as feature reels
  const reels = influencerImages.slice(0, 9);

  return (
    <main className="min-h-screen bg-deep-ink text-inverse-on-surface">
      <ArchiveTabs variant="dark" rightSlot={`${reels.length} REELS`} />

      <section className="px-5 md:px-12 pt-20 md:pt-32 pb-12 md:pb-20 border-b border-white/10">
        <span className="text-label-caps text-white/50 block mb-6 font-mono">
          — ARCHIVE / 02 · TRENDING NOW
        </span>
        <h1
          className="uppercase font-serif font-bold leading-[0.88] tracking-[-0.03em] mb-8"
          style={{ fontSize: "clamp(56px, 12vw, 180px)" }}
        >
          VIRAL
        </h1>
        <p className="text-body-lg md:text-headline-sm max-w-3xl border-l-4 border-neon-signal pl-6 leading-relaxed text-white/85">
          숏폼·릴스·틱톡으로 확산된 패션 모먼트. 알고리즘에 닿는 후킹과 브랜드 메시지를 한 컷에
          담아내는 CLAMOA의 바이럴 콘텐츠 아카이브입니다.
        </p>

        {/* tag pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {TAGS.map((t) => (
            <span
              key={t}
              className="text-[11px] md:text-[12px] font-mono tracking-tight border border-white/20 text-white/70 rounded-full px-3 py-1"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Reels grid — vertical 9:16 cards */}
      <section className="px-3 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {reels.map((img, i) => {
            const s = stats(i);
            return (
              <figure
                key={img.id}
                className="group relative aspect-[9/16] overflow-hidden rounded-xl bg-black border border-white/10"
              >
                <img
                  src={`/api/influencer/image/${img.id}`}
                  alt={`CLAMOA viral content reel ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
                />

                {/* gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/85" />

                {/* top — duration */}
                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm rounded px-1.5 py-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-signal animate-pulse" />
                  <span className="text-[10px] font-mono text-white/90">{s.dur}</span>
                </div>

                {/* top right — rank */}
                <div className="absolute top-2.5 right-2.5 text-[10px] font-mono text-neon-signal">
                  #{String(i + 1).padStart(2, "0")}
                </div>

                {/* bottom — metrics */}
                <figcaption className="absolute bottom-0 left-0 right-0 p-3 md:p-4 flex items-end justify-between">
                  <div>
                    <div className="text-[11px] font-mono text-white/60 mb-0.5">@clamoa.reel</div>
                    <div className="flex items-center gap-3 text-white">
                      <span className="flex items-center gap-1 text-[12px] font-bold">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                          <path d="M8 5v14l11-7L8 5z" />
                        </svg>
                        {s.views}
                      </span>
                      <span className="flex items-center gap-1 text-[12px] font-bold">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-3.5 h-3.5 text-neon-signal"
                        >
                          <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" />
                        </svg>
                        {s.likes}
                      </span>
                    </div>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      <SectionCTA
        eyebrow="DIVE DEEPER"
        title="바이럴 콘텐츠 PR이 궁금하다면"
        description="후킹 설계·크리에이터 매칭·플랫폼별 운영까지. CLAMOA의 바이럴 콘텐츠 운영 방식을 자세히 확인하세요."
        to="/services/editorial-viral-pr"
      />
    </main>
  );
}
