import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import brandAmbassadorImages from "@/data/brand-ambassador-images.json";
import { SubPageNav } from "@/components/SubPageNav";

export const Route = createFileRoute("/brand-ambassador")({
  head: () => ({
    meta: [
      { title: "BRAND AMBASSADOR CASTING — Global Ambassador Archive | CLAMOA" },
      {
        name: "description",
        content:
          "클라모아 브랜드 앰버서더 캐스팅 아카이브. 글로벌 럭셔리 브랜드와 어울리는 상징적 페이스 메이킹.",
      },
      { property: "og:title", content: "BRAND AMBASSADOR CASTING — Global Ambassador Archive | CLAMOA" },
      {
        property: "og:description",
        content: "패션 PR 에이전시 클라모아의 브랜드 앰버서더 캐스팅 포트폴리오.",
      },
    ],
  }),
  component: BrandAmbassadorPage,
});

interface BAImage {
  id: string;
  name: string;
  w: number;
  h: number;
}

function BrandAmbassadorPage() {
  const images = brandAmbassadorImages as BAImage[];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextImage = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);
  const prevImage = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("active")),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".ba-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleName = (name: string) => {
    return name.replace(/\.[^.]+$/, "").replace(/\([^)]*\)/g, "").trim();
  };

  return (
    <main className="min-h-screen bg-deep-ink text-inverse-on-surface">
      <style>{`.ba-reveal{opacity:0;transform:translateY(2rem)}.ba-reveal.active{opacity:1;transform:translateY(0)}`}</style>
      <SubPageNav variant="dark" />

      {/* Editorial hero */}
      <section className="px-5 md:px-12 pt-20 md:pt-32 pb-12 md:pb-20 border-b border-white/15">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-label-caps text-neon-signal block mb-8 tracking-[0.25em]">
            MODEL CASTING
          </span>
          <h1
            className="uppercase font-serif font-bold leading-[0.88] tracking-[-0.04em] mb-8"
            style={{ fontSize: "clamp(40px, 9vw, 130px)" }}
          >
            BRAND<br />
            <span className="italic font-normal">Ambassador</span>
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-body-lg font-serif leading-relaxed text-white/70 whitespace-pre-line">
              브랜드 이미지에 부합하는 앰버서더를 섭외하고,
              <em className="text-white not-italic">{"\n"}룩북 촬영, 브랜드 행사</em>까지
              전반적으로 관리합니다.
            </p>
            <div className="mt-10 flex items-center justify-center gap-6 text-label-caps text-white/40">
              <span>— SCROLL</span>
              <span className="h-px w-24 bg-white/30" />
              <span>셀럽 단기 초상권 계약 및 섭외도 함께 진행하고 있습니다</span>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal editorial — three images side by side, luxury tone */}
      <section className="px-5 md:px-12 py-16 md:py-24 min-h-[85vh] flex items-center">
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
            {images.map((img, i) => (
              <figure
                key={img.id}
                className="ba-reveal transition-all duration-1000 ease-out"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <button
                  onClick={() => setLightboxIndex(i)}
                  className="group block w-full text-left cursor-zoom-in"
                >
                  <div className="relative overflow-hidden border border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <img
                      src={`/api/brand-ambassador/image/${img.id}`}
                      alt={handleName(img.name)}
                      loading={i === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className="w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                      style={{
                        aspectRatio: `${img.w} / ${img.h}`,
                        maxHeight: "72vh",
                      }}
                    />
                  </div>
                  <figcaption className="mt-5 flex items-baseline justify-between gap-4">
                    <div>
                      <span className="text-[10px] tracking-[0.25em] uppercase text-neon-signal font-bold block mb-1.5">
                        {String(i + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                      </span>
                      <h2 className="font-serif text-headline-sm uppercase tracking-tight">
                        {handleName(img.name)}
                      </h2>
                    </div>
                    <span className="material-symbols-outlined text-white/30 group-hover:text-neon-signal transition-colors duration-300">
                      zoom_in
                    </span>
                  </figcaption>
                  <div className="mt-2.5 h-px bg-white/10 group-hover:bg-neon-signal/40 transition-colors duration-500" />
                </button>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="px-5 md:px-12 py-20 md:py-32 border-t border-white/15 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="text-label-caps text-white/40 block mb-6">THE RIGHT FACE FOR THE RIGHT BRAND</span>
          <h2 className="font-serif text-headline-lg uppercase mb-8">
            NEXT<br /><span className="italic font-normal">Ambassador</span>
          </h2>
          <p className="text-body-lg text-white/60 font-serif mb-10">
            브랜드의 다음 앰버서드를 함께 찾아보세요.
          </p>
          <Link
            to="/"
            hash="contact"
            className="inline-flex items-center gap-3 bg-neon-signal text-deep-ink px-8 md:px-12 py-4 md:py-5 text-label-caps hover:bg-white transition-colors border border-deep-ink"
          >
            <span>START A PROJECT</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/15 px-5 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-label-caps text-white/30">
        <span>© CLAMOA. ALL RIGHTS RESERVED.</span>
        <span>BRAND AMBASSADOR CASTING DIVISION</span>
      </footer>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-12"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 md:top-8 md:right-8 text-white/60 hover:text-white transition-colors"
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-[32px]">close</span>
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                aria-label="Previous"
              >
                <span className="material-symbols-outlined text-[36px]">arrow_back_ios</span>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                aria-label="Next"
              >
                <span className="material-symbols-outlined text-[36px]">arrow_forward_ios</span>
              </button>
            </>
          )}

          <div
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/api/brand-ambassador/image/${images[lightboxIndex].id}`}
              alt={handleName(images[lightboxIndex].name)}
              className="max-w-full max-h-[85vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-center">
              <span className="text-label-caps text-neon-signal block mb-1">
                {String(lightboxIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
              </span>
              <span className="font-serif text-headline-md text-white">
                {handleName(images[lightboxIndex].name)}
              </span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
