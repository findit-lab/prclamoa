import { createFileRoute } from "@tanstack/react-router";
import { SubPageNav } from "@/components/SubPageNav";
import { SectionCTA } from "@/components/SectionCTA";
import influencerImages from "@/data/influencer-images.json";

export const Route = createFileRoute("/influencer")({
  head: () => ({
    meta: [
      { title: "INFLUENCER — 인플루언서 PR 피드 | CLAMOA" },
      {
        name: "description",
        content:
          "패션 인플루언서·크리에이터와 함께한 브랜드 콘텐츠 아카이브. CLAMOA의 인플루언서 PR 캠페인 결과물을 인스타그램 피드 형태로 확인하세요.",
      },
    ],
  }),
  component: InfluencerPage,
});

function InfluencerPage() {
  return (
    <main className="min-h-screen bg-surface text-deep-ink">
      <SubPageNav variant="light" rightSlot={`${influencerImages.length} POSTS`} />

      <section className="px-5 md:px-12 pt-24 md:pt-36 pb-12 md:pb-20 border-b-2 border-deep-ink">
        <span className="text-label-caps text-secondary block mb-6">— ARCHIVE / 03</span>
        <h1
          className="uppercase font-serif font-bold leading-[0.88] tracking-[-0.03em] mb-8"
          style={{ fontSize: "clamp(56px, 12vw, 180px)" }}
        >
          INFLUENCER
        </h1>
        <p className="text-body-lg md:text-headline-sm max-w-3xl border-l-4 border-neon-signal pl-6 leading-relaxed">
          패션 크리에이터·인플루언서와 함께한 콘텐츠 캠페인 피드. 브랜드 시즌 무드를 일상 컨텍스트로
          전환합니다.
        </p>
      </section>

      {/* Instagram 3-col square grid */}
      <section className="px-1 md:px-4 py-6 md:py-10">
        <div className="grid grid-cols-3 gap-[2px] md:gap-1">
          {influencerImages.map((img) => (
            <figure key={img.id} className="aspect-square overflow-hidden bg-surface-low relative group">
              <img
                src={`/api/influencer/image/${img.id}`}
                alt={`CLAMOA influencer campaign content — ${img.name.replace(/\.[^.]+$/, "")}`}
                width={img.w}
                height={img.h}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-500"
              />
            </figure>
          ))}
        </div>
      </section>

      <SectionCTA
        eyebrow="DIVE DEEPER"
        title="인플루언서 PR, 어떻게 운영하나요?"
        description="인플루언서 셀렉션·시딩·페이드 콘텐츠 설계까지. CLAMOA의 인플루언서 캠페인 운영 방식을 자세히 확인하세요."
        to="/services/influencer-pr"
      />
    </main>
  );
}
