import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import eventImages from "@/data/event-images.json";
import { SubPageNav } from "@/components/SubPageNav";

type EventImage = { id: string; name: string; w: number; h: number };

export const Route = createFileRoute("/services/offline-event-pr")({
  head: () => ({
    meta: [
      { title: "EVENT — On-Site Sketch | CLAMOA" },
      {
        name: "description",
        content:
          "클라모아 프레스 & 런칭 이벤트 현장 스케치 아카이브. 쇼룸 오프닝, 런칭 파티, 프레스 프리뷰의 다큐멘터리 컷.",
      },
      { property: "og:title", content: "EVENT — On-Site Sketch | CLAMOA" },
      {
        property: "og:description",
        content: "현장에서 포착한 브랜드 모먼트. 클라모아 이벤트 다큐멘터리.",
      },
    ],
  }),
  component: EventPage,
});

function EventPage() {
  const images = eventImages as EventImage[];
  const [active, setActive] = useState<number | null>(null);
  const today = new Date();
  const stamp = today.toISOString().slice(0, 10).replace(/-/g, ".");

  return (
    <main className="min-h-screen bg-[#f4f1ea] text-deep-ink relative">
      {/* film grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.08] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />

      <SubPageNav variant="light" />

      {/* Editorial header — contact sheet style */}
      <section className="relative z-10 px-5 md:px-12 pt-12 md:pt-20 pb-10 md:pb-16">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-8">
            <h1
              className="uppercase font-serif font-bold leading-[0.86] tracking-[-0.04em]"
              style={{ fontSize: "clamp(56px, 12vw, 200px)" }}
            >
              <span className="italic font-normal">event</span>
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4 md:pb-4">
            <div className="border-l-2 border-deep-ink pl-5 max-w-sm">
              <p className="font-serif italic text-[15px] md:text-[17px] leading-relaxed">
                런칭 파티, 쇼룸 오프닝, 프레스 프리뷰. 셔터가 머무는 순간, 브랜드는 기억이 된다.
              </p>
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase mt-4 text-deep-ink/60">
                — Documentary by CLAMOA
              </p>
            </div>
          </div>
        </div>

        {/* Metadata strip */}
        <div className="mt-12 md:mt-16 border-y border-deep-ink/30 py-3 flex flex-wrap gap-x-10 gap-y-2 font-mono text-[10px] tracking-[0.22em] uppercase">
          <span>● POP-UP STORE</span>
          <span>FLAGSHIP OPENING PARTY</span>
          <span>FLEA MARKET</span>
          <span>PRESS &amp; RSVP</span>
        </div>
      </section>

      {/* Contact-sheet grid */}
      <section className="relative z-10 px-3 md:px-8 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {images.map((img, i) => {
            const isLandscape = img.w >= img.h;
            // mix some orientations for editorial rhythm
            const span =
              i % 11 === 0
                ? "col-span-2 row-span-2"
                : i % 7 === 3
                ? "md:col-span-2"
                : "";
            const aspect = i % 11 === 0
              ? "aspect-[4/5]"
              : isLandscape
              ? "aspect-[3/2]"
              : "aspect-[4/5]";
            return (
              <button
                key={img.id}
                type="button"
                onClick={() => setActive(i)}
                className={`group relative ${span} text-left bg-white p-2 md:p-3 shadow-[0_1px_0_rgba(0,0,0,0.08),0_8px_24px_-12px_rgba(0,0,0,0.25)] transition-transform duration-500 hover:-translate-y-1`}
                style={{
                  transform: `rotate(${((i * 13) % 5) - 2}deg)`,
                }}
              >
                <div className={`relative w-full ${aspect} overflow-hidden bg-neutral-200`}>
                  <img
                    src={`/api/event/image/${img.id}`}
                    alt={img.name.replace(/\.[^.]+$/, "")}
                    loading="lazy"
                    className="w-full h-full object-cover sepia-[0.15] saturate-[0.85] contrast-[1.02] group-hover:sepia-0 group-hover:saturate-100 transition-all duration-700"
                  />
                  {/* Frame number stamp */}
                  <span className="absolute top-2 left-2 font-mono text-[9px] tracking-[0.2em] uppercase bg-black/70 text-white px-1.5 py-0.5">
                    {String(i + 1).padStart(2, "0")} / {images.length}
                  </span>
                  {/* "tape" decoration */}
                  {i % 6 === 2 && (
                    <span className="absolute -top-1 right-4 w-12 h-4 bg-amber-200/70 rotate-[8deg] shadow-sm" />
                  )}
                </div>
                <div className="pt-2 px-1 flex items-baseline justify-between font-mono text-[10px] tracking-[0.18em] uppercase text-deep-ink/70">
                  <span className="truncate">{img.name.replace(/\.[^.]+$/, "")}</span>
                  <span className="shrink-0 ml-2">● {stamp.slice(2)}</span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Colophon */}
      <footer className="relative z-10 border-t border-deep-ink/30 py-10 px-5 md:px-12 font-mono text-[10px] tracking-[0.22em] uppercase text-deep-ink/60 flex flex-wrap gap-4 justify-between">
        <span>© CLAMOA · EVENT SKETCH</span>
        <span>SHOT ON SITE — SEOUL</span>
        <span>{stamp}</span>
      </footer>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          onClick={() => setActive(null)}
        >
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] tracking-[0.22em] uppercase text-white/80">
            <span>FRAME {String(active + 1).padStart(2, "0")} / {images.length}</span>
            <span className="hidden md:inline">{images[active].name.replace(/\.[^.]+$/, "")}</span>
            <button
              onClick={() => setActive(null)}
              className="material-symbols-outlined text-white/80 hover:text-white"
              aria-label="Close"
            >
              close
            </button>
          </div>
          <div className="relative max-w-6xl max-h-[88vh] w-full h-full flex items-center justify-center">
            <img
              src={`/api/event/image/${images[active].id}`}
              alt={images[active].name}
              className="max-w-full max-h-[88vh] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] tracking-[0.22em] uppercase text-white/80">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActive((p) => (p! > 0 ? p! - 1 : images.length - 1));
              }}
              className="hover:text-white flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span> prev
            </button>
            <span>● CLAMOA · ON-SITE SKETCH</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActive((p) => (p! < images.length - 1 ? p! + 1 : 0));
              }}
              className="hover:text-white flex items-center gap-2"
            >
              next <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
