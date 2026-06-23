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

// Mini SVG icon set — Instagram style line icons
const Icon = {
  Heart: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  Comment: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),
  Send: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  ),
  Bookmark: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </svg>
  ),
  More: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <circle cx="5" cy="12" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="19" cy="12" r="1.6" />
    </svg>
  ),
  Verified: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2l2.4 2.1 3.2-.3.6 3.1 2.8 1.6-1.5 2.8 1.5 2.8-2.8 1.6-.6 3.1-3.2-.3L12 22l-2.4-2.1-3.2.3-.6-3.1L3 15.5 4.5 12.7 3 9.9l2.8-1.6.6-3.1 3.2.3L12 2z" />
      <path d="M9.5 12.3l1.8 1.8 3.4-3.4" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const STORIES = [
  { label: "campaign", new: true },
  { label: "ss26", new: true },
  { label: "seoul", new: true },
  { label: "press", new: false },
  { label: "showroom", new: true },
  { label: "behind", new: false },
  { label: "muse", new: true },
  { label: "archive", new: false },
];

// Pseudo-random but deterministic stats per index
const fakeStats = (i: number) => {
  const likes = 1240 + ((i * 173) % 8800);
  const comments = 18 + ((i * 11) % 220);
  const days = 1 + (i % 28);
  return { likes, comments, days };
};

function InfluencerPage() {
  const total = influencerImages.length;

  return (
    <main className="min-h-screen bg-surface text-deep-ink">
      <SubPageNav variant="light" rightSlot={`${total} POSTS`} />

      {/* Profile header — Instagram style */}
      <section className="px-5 md:px-12 pt-24 md:pt-32 pb-10 md:pb-14 border-b border-deep-ink/10">
        <span className="text-label-caps text-secondary block mb-6">— ARCHIVE / 03 · @CLAMOA.INFLUENCER</span>

        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-14">
          {/* Avatar with gradient ring */}
          <div className="shrink-0 self-start">
            <div
              className="p-[3px] rounded-full"
              style={{
                background:
                  "conic-gradient(from 45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888, #f09433)",
              }}
            >
              <div className="bg-surface p-[3px] rounded-full">
                <div className="w-28 h-28 md:w-40 md:h-40 rounded-full bg-deep-ink text-surface flex items-center justify-center font-serif italic text-3xl md:text-5xl">
                  C
                </div>
              </div>
            </div>
          </div>

          {/* Profile meta */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h1 className="text-2xl md:text-3xl font-medium tracking-tight flex items-center gap-2">
                clamoa.influencer
                <Icon.Verified className="w-5 h-5 md:w-6 md:h-6 text-[#3b82f6]" />
              </h1>
              <button className="text-xs md:text-sm px-4 py-1.5 bg-deep-ink text-surface rounded-md font-medium">
                Follow
              </button>
              <button className="text-xs md:text-sm px-4 py-1.5 bg-surface-low rounded-md font-medium">
                Message
              </button>
              <button className="text-xs md:text-sm px-3 py-1.5 bg-surface-low rounded-md">
                <Icon.More className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-2 mb-5 text-sm md:text-base">
              <span><strong>{total}</strong> <span className="text-secondary">posts</span></span>
              <span><strong>284K</strong> <span className="text-secondary">followers</span></span>
              <span><strong>612</strong> <span className="text-secondary">following</span></span>
            </div>

            <div className="space-y-1 text-sm md:text-base leading-relaxed max-w-2xl">
              <p className="font-medium">CLAMOA · Fashion PR Agency</p>
              <p className="text-secondary">
                인플루언서·크리에이터와 함께한 브랜드 캠페인 아카이브
              </p>
              <p className="text-secondary">서울 · 압구정 · since 2018</p>
              <p>
                <a
                  href="/services/influencer-pr"
                  className="text-[#1e3a8a] hover:underline font-medium"
                >
                  clamoa.com/services/influencer-pr
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Stories strip */}
        <div className="mt-10 -mx-5 md:-mx-12 px-5 md:px-12 overflow-x-auto scrollbar-none">
          <div className="flex gap-5 md:gap-7 pb-2">
            {STORIES.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2 shrink-0">
                <div
                  className="p-[2px] rounded-full"
                  style={{
                    background: s.new
                      ? "conic-gradient(from 45deg, #f09433, #dc2743, #bc1888, #f09433)"
                      : "rgba(0,0,0,0.15)",
                  }}
                >
                  <div className="bg-surface p-[2px] rounded-full">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-surface-low" />
                  </div>
                </div>
                <span className="text-xs text-secondary">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="border-b border-deep-ink/10 sticky top-0 bg-surface/95 backdrop-blur z-10">
        <div className="flex justify-center gap-12 text-xs tracking-[0.2em]">
          <button className="py-4 border-t-2 border-deep-ink -mt-px font-medium">▦ POSTS</button>
          <button className="py-4 text-secondary">▷ REELS</button>
          <button className="py-4 text-secondary">⊞ TAGGED</button>
        </div>
      </div>

      {/* Feed — 3-col square grid */}
      <section className="px-1 md:px-1 py-1">
        <div className="grid grid-cols-3 gap-[2px] md:gap-1">
          {influencerImages.map((img, i) => {
            const stats = fakeStats(i);
            const handle = img.name.replace(/\.[^.]+$/, "");
            return (
              <figure
                key={img.id}
                className="aspect-square overflow-hidden bg-surface-low relative group cursor-pointer"
              >
                <img
                  src={`/api/influencer/image/${img.id}`}
                  alt={`CLAMOA influencer campaign content — ${handle}`}
                  width={img.w}
                  height={img.h}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover block group-hover:scale-[1.03] transition-transform duration-500"
                />
                {/* Hover overlay with likes/comments */}
                <div className="absolute inset-0 bg-deep-ink/55 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-surface text-sm md:text-base font-medium">
                  <span className="flex items-center gap-2">
                    <Icon.Heart className="w-5 h-5 fill-current" />
                    {stats.likes.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-2">
                    <Icon.Comment className="w-5 h-5 fill-current" />
                    {stats.comments}
                  </span>
                </div>
              </figure>
            );
          })}
        </div>
      </section>

      {/* Single highlighted "post" preview — Instagram card */}
      <section className="px-5 md:px-12 py-16 md:py-24 border-t border-deep-ink/10 bg-surface-low/40">
        <span className="text-label-caps text-secondary block mb-6">— FEATURED POST</span>
        <div className="max-w-xl mx-auto bg-surface border border-deep-ink/10 rounded-sm overflow-hidden shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <div
                className="p-[2px] rounded-full"
                style={{
                  background:
                    "conic-gradient(from 45deg, #f09433, #dc2743, #bc1888, #f09433)",
                }}
              >
                <div className="bg-surface p-[2px] rounded-full">
                  <div className="w-9 h-9 rounded-full bg-deep-ink text-surface flex items-center justify-center font-serif italic text-sm">
                    C
                  </div>
                </div>
              </div>
              <div className="leading-tight">
                <p className="text-sm font-medium flex items-center gap-1">
                  clamoa.influencer
                  <Icon.Verified className="w-3.5 h-3.5 text-[#3b82f6]" />
                </p>
                <p className="text-xs text-secondary">Seoul · Sponsored</p>
              </div>
            </div>
            <Icon.More className="w-5 h-5" />
          </div>

          {influencerImages[0] && (
            <div className="aspect-square bg-surface-low">
              <img
                src={`/api/influencer/image/${influencerImages[0].id}`}
                alt="CLAMOA featured influencer campaign post"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="px-4 pt-3 pb-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-4">
                <Icon.Heart className="w-6 h-6" />
                <Icon.Comment className="w-6 h-6" />
                <Icon.Send className="w-6 h-6" />
              </div>
              <Icon.Bookmark className="w-6 h-6" />
            </div>
            <p className="text-sm font-medium mb-1">12,482 likes</p>
            <p className="text-sm leading-relaxed">
              <span className="font-medium">clamoa.influencer</span> 시즌 무드를 일상 컨텍스트로
              번역하는 인플루언서 캠페인. 셀렉션부터 콘텐츠 가이드, 페이드 부스팅까지 통합 운영합니다.
              <span className="text-secondary"> #fashionpr #seoul #clamoa #influencermarketing</span>
            </p>
            <p className="text-xs text-secondary mt-2">View all 248 comments</p>
            <p className="text-[10px] tracking-wider text-secondary mt-2 uppercase">2 DAYS AGO</p>
          </div>
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
