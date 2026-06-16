import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import influencerImages from "@/data/influencer-images.json";
import { SubPageNav } from "@/components/SubPageNav";

type InfImage = { id: string; name: string; w: number; h: number };

export const Route = createFileRoute("/influencer")({
  head: () => ({
    meta: [
      { title: "INFLUENCER — Creator Network | CLAMOA" },
      {
        name: "description",
        content:
          "클라모아 인플루언서 & 크리에이터 매칭 아카이브. 패션·뷰티·라이프스타일 크리에이터 50인.",
      },
      { property: "og:title", content: "INFLUENCER — Creator Network | CLAMOA" },
      {
        property: "og:description",
        content: "브랜드 톤에 정합하는 크리에이터를 매칭하고 캠페인을 운영합니다.",
      },
    ],
  }),
  component: InfluencerPage,
});

function handleFromName(name: string) {
  const base = name.replace(/\.[^.]+$/, "").trim();
  // strip non-handle chars, keep korean/letters/numbers/_
  const cleaned = base.replace(/[^\p{L}\p{N}_]/gu, "_").replace(/_+/g, "_");
  return "@" + cleaned.toLowerCase();
}

function InfluencerPage() {
  const images = influencerImages as InfImage[];
  const [active, setActive] = useState<InfImage | null>(null);

  return (
    <main className="min-h-screen bg-white text-deep-ink">
      <SubPageNav variant="light" rightSlot={<>{images.length}</>} />

      {/* Profile header — instagram-style */}
      <section className="px-4 md:px-8 pt-10 md:pt-16 pb-10 max-w-5xl mx-auto">
        <div className="flex items-center gap-8 md:gap-16">
          {/* Avatar (logomark) */}
          <div className="shrink-0">
            <div
              className="rounded-full border border-deep-ink/15 grid place-items-center bg-gradient-to-br from-neon-signal/40 via-white to-deep-ink/5"
              style={{ width: "clamp(88px, 18vw, 150px)", height: "clamp(88px, 18vw, 150px)" }}
            >
              <span
                className="font-serif italic"
                style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(28px, 5vw, 44px)" }}
              >
                c.
              </span>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 mb-4">
              <h1 className="text-2xl md:text-3xl font-light tracking-tight">
                clamoa.influencer
              </h1>
              <div className="flex gap-2">
                <span className="px-4 py-1.5 bg-deep-ink text-white text-[12px] font-medium rounded-md">
                  Following
                </span>
                <span className="px-4 py-1.5 bg-neutral-100 text-deep-ink text-[12px] font-medium rounded-md">
                  Message
                </span>
              </div>
            </div>
            <div className="hidden md:flex gap-10 mb-4 text-[14px]">
              <span><strong>{images.length}</strong> posts</span>
              <span><strong>1.2M</strong> followers</span>
              <span><strong>{images.length}</strong> creators</span>
            </div>
            <div className="text-[14px] leading-relaxed">
              <div className="font-semibold">CLAMOA · Creator Network</div>
              <div className="text-deep-ink/80">
                패션 · 뷰티 · 라이프스타일 인플루언서 매칭
              </div>
              <div className="text-deep-ink/60 italic">
                Curating voices. Crafting moments.
              </div>
            </div>
          </div>
        </div>

        {/* mobile stats */}
        <div className="md:hidden flex justify-around border-y border-deep-ink/10 mt-8 py-3 text-[13px] text-center">
          <div><div className="font-semibold">{images.length}</div><div className="text-deep-ink/60">posts</div></div>
          <div><div className="font-semibold">1.2M</div><div className="text-deep-ink/60">followers</div></div>
          <div><div className="font-semibold">50</div><div className="text-deep-ink/60">creators</div></div>
        </div>

        {/* Story rail */}
        <div className="mt-8 md:mt-12 flex gap-5 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
          {["SEEDING", "EDITORIAL", "REELS", "GRWM", "OOTD", "BRAND"].map((s) => (
            <div key={s} className="flex flex-col items-center gap-1.5 shrink-0">
              <div className="p-[2px] rounded-full bg-gradient-to-tr from-neon-signal via-deep-ink to-neon-signal">
                <div className="rounded-full bg-white p-[2px]">
                  <div className="w-16 h-16 rounded-full bg-neutral-100 grid place-items-center">
                    <span
                      className="text-[10px] tracking-widest text-deep-ink/70"
                      style={{ fontFamily: "'Cormorant', serif" }}
                    >
                      {s.slice(0, 2)}
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-[11px] text-deep-ink/70">{s.toLowerCase()}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tabs */}
      <div className="max-w-5xl mx-auto border-t border-deep-ink/10">
        <div className="flex justify-center gap-12 text-[11px] tracking-[0.18em] uppercase">
          {[
            { k: "posts", icon: "grid_on", active: true },
            { k: "reels", icon: "movie", active: false },
            { k: "tagged", icon: "person_pin", active: false },
          ].map((t) => (
            <div
              key={t.k}
              className={`flex items-center gap-2 py-4 ${
                t.active ? "border-t border-deep-ink -mt-px text-deep-ink" : "text-deep-ink/40"
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">{t.icon}</span>
              <span>{t.k}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Grid — classic IG 3-col squares */}
      <section className="max-w-5xl mx-auto px-0 md:px-0 pb-24">
        <div className="grid grid-cols-3 gap-[2px] md:gap-1">
          {images.map((img, i) => (
            <button
              key={img.id}
              type="button"
              onClick={() => setActive(img)}
              className="relative aspect-square overflow-hidden bg-neutral-100 group"
            >
              <img
                src={`/api/influencer/image/${img.id}`}
                alt={img.name.replace(/\.[^.]+$/, "")}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              {/* hover overlay */}
              <div className="absolute inset-0 bg-deep-ink/0 group-hover:bg-deep-ink/40 transition-colors duration-300 flex items-center justify-center gap-5 opacity-0 group-hover:opacity-100">
                <span className="flex items-center gap-1 text-white text-[13px] font-semibold">
                  <span className="material-symbols-outlined text-[18px]">favorite</span>
                  {((i * 137) % 9 + 1) + "." + ((i * 71) % 9) + "K"}
                </span>
                <span className="flex items-center gap-1 text-white text-[13px] font-semibold">
                  <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
                  {((i * 53) % 400) + 12}
                </span>
              </div>
              {/* small reel icon for every 5th */}
              {i % 5 === 0 && (
                <span className="absolute top-2 right-2 material-symbols-outlined text-white text-[18px] drop-shadow">
                  movie
                </span>
              )}
              {/* carousel icon for every 7th */}
              {i % 7 === 3 && (
                <span className="absolute top-2 right-2 material-symbols-outlined text-white text-[18px] drop-shadow">
                  collections
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-deep-ink/10 py-10 text-center text-[11px] tracking-[0.18em] text-deep-ink/50 uppercase">
        © Clamoa · Creator Network · {new Date().getFullYear()}
      </footer>

      {/* Lightbox / post modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 md:p-8"
          onClick={() => setActive(null)}
        >
          <div
            className="bg-white max-w-4xl w-full max-h-[92vh] grid grid-cols-1 md:grid-cols-[1.4fr_1fr] overflow-hidden rounded-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-neutral-100 flex items-center justify-center">
              <img
                src={`/api/influencer/image/${active.id}`}
                alt={active.name}
                className="w-full h-full object-contain max-h-[60vh] md:max-h-[92vh]"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between px-4 py-3 border-b border-deep-ink/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-neon-signal/50 to-deep-ink/10 grid place-items-center">
                    <span style={{ fontFamily: "'Cormorant', serif" }} className="italic text-sm">c.</span>
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold">{handleFromName(active.name)}</div>
                    <div className="text-[11px] text-deep-ink/60">Seoul · CLAMOA</div>
                  </div>
                </div>
                <button
                  onClick={() => setActive(null)}
                  className="material-symbols-outlined text-deep-ink/60 hover:text-deep-ink"
                  aria-label="Close"
                >
                  close
                </button>
              </div>
              <div className="px-4 py-4 text-[13px] leading-relaxed flex-1 overflow-y-auto">
                <p>
                  <span className="font-semibold">{handleFromName(active.name)}</span>{" "}
                  큐레이션된 카오스. 브랜드 모먼트를 함께 만든 크리에이터.
                </p>
                <p className="text-deep-ink/60 mt-3">
                  #clamoa #fashionpr #seoul #editorial #brandcampaign
                </p>
              </div>
              <div className="border-t border-deep-ink/10 px-4 py-3 flex items-center gap-4 text-deep-ink/70">
                <span className="material-symbols-outlined">favorite</span>
                <span className="material-symbols-outlined">chat_bubble</span>
                <span className="material-symbols-outlined">send</span>
                <span className="material-symbols-outlined ml-auto">bookmark</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
