import { createFileRoute, Link } from "@tanstack/react-router";
import showroomEditorial from "@/assets/showroom-editorial.jpg.asset.json";
import { useEffect, useMemo, useRef, useState } from "react";
import clamoaLogo from "@/assets/clamoa-logo.png.asset.json";
import starAnyujin from "@/assets/star-anyujin.jpg.asset.json";
import starByunwooseok from "@/assets/star-byunwooseok.jpg.asset.json";
import starChaeunwoo from "@/assets/star-chaeunwoo.jpg.asset.json";
import starFelix from "@/assets/star-felix.jpg.asset.json";
import starHansohee from "@/assets/star-hansohee.jpg.asset.json";
import starIu from "@/assets/star-iu.jpg.asset.json";
import starJangwonyoung from "@/assets/star-jangwonyoung.jpg.asset.json";
import starJennie from "@/assets/star-jennie.jpg.asset.json";
import starJisoo from "@/assets/star-jisoo.jpg.asset.json";
import starKarina from "@/assets/star-karina.jpg.asset.json";
import starLisa from "@/assets/star-lisa.jpg.asset.json";
import starRose from "@/assets/star-rose.jpg.asset.json";
import starTaeyeon from "@/assets/star-taeyeon.jpg.asset.json";
import starUdohwan from "@/assets/star-udohwan.jpg.asset.json";
import starWinter from "@/assets/star-winter.jpg.asset.json";
import starYoona from "@/assets/star-yoona.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CLAMOA — Fashion PR, Styled for Visibility" },
      {
        name: "description",
        content:
          "셀럽 협찬부터 PPL, 인플루언서, 바이럴, 언론 홍보까지 — 패션 브랜드의 노출과 확산을 설계하는 종합 패션 PR 에이전시 CLAMOA.",
      },
      { property: "og:title", content: "CLAMOA — Fashion PR, Styled for Visibility" },
      {
        property: "og:description",
        content:
          "패션 브랜드의 첫 노출부터 셀럽 협찬, PPL, 바이럴 콘텐츠, 언론 홍보, 브랜드 캠페인까지 설계하는 종합 패션 PR 파트너.",
      },
    ],
  }),
  component: Index,
});

const STAR_IMAGES = [
  starAnyujin.url,
  starByunwooseok.url,
  starChaeunwoo.url,
  starFelix.url,
  starHansohee.url,
  starIu.url,
  starJangwonyoung.url,
  starJennie.url,
  starJisoo.url,
  starKarina.url,
  starLisa.url,
  starRose.url,
  starTaeyeon.url,
  starUdohwan.url,
  starWinter.url,
  starYoona.url,
];

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const IMG_SHOWROOM = showroomEditorial.url;
const IMG_CASE_1 =
  "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=1200&q=80&auto=format&fit=crop";
const IMG_CASE_2 =
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80&auto=format&fit=crop";
const IMG_CASE_3 =
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80&auto=format&fit=crop";

function Index() {
  const parallaxText = useRef<HTMLDivElement>(null);
  const parallaxContainer = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const MARQUEE_IMAGES = useMemo(() => shuffleArray(STAR_IMAGES), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("active")),
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".reveal, .reveal-group").forEach((el) => observer.observe(el));

    const onScroll = () => {
      const scrolled = window.pageYOffset;
      if (parallaxText.current && parallaxContainer.current) {
        const top = parallaxContainer.current.offsetTop;
        const h = parallaxContainer.current.offsetHeight;
        if (scrolled + window.innerHeight > top && scrolled < top + h) {
          const rel = scrolled - top;
          parallaxText.current.style.transform = `rotate(-5deg) translateX(${rel * 0.15 - 200}px)`;
        }
      }
      if (navRef.current) {
        if (scrolled > 50) {
          navRef.current.classList.add("py-4", "backdrop-blur-md");
          navRef.current.classList.remove("py-6");
        } else {
          navRef.current.classList.add("py-6");
          navRef.current.classList.remove("py-4", "backdrop-blur-md");
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const navLinks = [
    ["ABOUT", "#top"],
    ["SERVICES", "#services"],
    ["PORTFOLIO", "#portfolio"],
    ["GET IN TOUCH", "#contact"],
  ];

  const services = [
    ["STAR MARKETING", "셀럽 협찬 · 스타일리스트 픽업 · 매거진 노출. 브랜드 무드와 타깃에 맞는 셀럽 매칭으로 자연스러운 착용 콘텐츠를 만듭니다."],
    ["PPL", "드라마 · 예능 · 유튜브 · OTT · 공항패션. 콘텐츠 맥락에 어울리는 노출 기회를 발굴하고 협찬 진행 전 과정을 관리합니다."],
    ["PROMOTION", "팝업 · 런칭 행사 · 브랜드 캠페인. 브랜드 경험을 오프라인 접점으로 확장하고, 현장 콘텐츠와 온라인 확산까지 연결합니다."],
    ["ONLINE PR", "인플루언서 · 블로그 · SNS · 언론 기사. 검색, SNS, 리뷰, 기사 노출을 통해 소비자가 브랜드를 발견하는 접점을 넓힙니다."],
    ["SHOWROOM PR", "명품 편집샵 콘셉트의 협찬 쇼룸을 운영하며, 연예인·스타일리스트·인플루언서가 직접 제품을 경험하고 콘텐츠로 연결될 수 있는 환경을 제공합니다."],
    ["AI & DATA-DRIVEN PR", "제품 무브먼트, 스타일리스트 요청, 노출, 콘텐츠 성과, 캠페인 결과를 데이터로 추적하고 다음 PR 전략에 반영합니다."],
  ];

  const process = [
    ["01", "상담 접수", "브랜드 상황과 캠페인 목표를 남겨주시면 담당자가 빠르게 연락드립니다."],
    ["02", "브랜드 및 제품 검토", "브랜드 아이덴티티, 제품 카테고리, 타깃 소비자, 시즌 전략을 함께 검토합니다."],
    ["03", "PR 플랜 제안", "예산과 목표에 맞춰 셀럽 협찬, PPL, 인플루언서, 언론 홍보를 결합한 PR 플랜을 제안합니다."],
    ["04", "계약 및 쇼룸 입점", "계약 체결 후 협찬 쇼룸에 제품을 입점하고 운영 준비를 시작합니다."],
    ["05", "셀럽·스타일리스트·인플루언서 매칭", "브랜드 무드에 맞는 셀럽, 스타일리스트, 인플루언서 접점을 가동합니다."],
    ["06", "협찬·PPL·온라인 PR 진행", "착용 노출, 콘텐츠 제작, 언론 기사화, SNS 확산까지 캠페인 전 과정을 운영합니다."],
    ["07", "결과 콘텐츠 전달 및 2차 확산", "노출 결과 리포트와 함께 블로그·SNS·기사로 이어지는 2차 확산을 진행합니다."],
  ];

  const cases = [
    [IMG_CASE_1, "01", "New Collection Launch PR", "시즌 패션 컬렉션을 위한 쇼룸 활성화, 스타일리스트 시딩, 크리에이터 콘텐츠 및 디지털 노출 캠페인."],
    [IMG_CASE_2, "02", "Celebrity Placement Campaign", "셀러브리티 중심의 브랜드 가시성을 위한 전략적 제품 시딩과 의상 코디네이션."],
    [IMG_CASE_3, "03", "AI Fashion Content Production", "디지털 채널을 위한 AI 기반 룩북 비주얼, 모델 콘텐츠, 숏폼 캠페인 자산 제작."],
  ];

  const differentiators = [
    "스타일리스트 및 셀러브리티 다이렉트 네트워크",
    "프리미엄 쇼룸 기반 브랜드 노출",
    "전략부터 실행까지 원스톱 캠페인 운영",
    "AI 기반 콘텐츠 프로덕션",
    "PR 모니터링 및 성과 리포팅",
    "한국에서 글로벌로 이어지는 패션 확장 지원",
  ];

  return (
    <div className="text-deep-ink min-h-screen">
      {/* Nav */}
      <nav
        ref={navRef}
        className="fixed top-0 w-full z-50 bg-surface/95 border-b border-deep-ink flex justify-between items-center px-5 md:px-16 py-5 md:py-6 transition-all duration-500"
      >
        <a href="#top" className="block" aria-label="CLAMOA"><img src={clamoaLogo.url} alt="CLAMOA" className="h-6 md:h-8 w-auto object-contain" /></a>
        <div className="hidden md:flex gap-10">
          {navLinks.map(([l, h]) => (
            <a key={l} href={h} className="text-label-caps hover:text-neon-signal transition-colors duration-200">
              {l}
            </a>
          ))}
        </div>
        <button
          aria-label="Toggle menu"
          className="md:hidden text-label-caps border border-deep-ink px-4 py-2"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-surface border-b border-deep-ink md:hidden flex flex-col">
            {navLinks.map(([l, h]) => (
              <a
                key={l}
                href={h}
                onClick={() => setMenuOpen(false)}
                className="text-label-caps px-6 py-5 border-t border-deep-ink/20 hover:bg-neon-signal"
              >
                {l}
              </a>
            ))}
          </div>
        )}
      </nav>

      <main id="top" className="pt-24 md:pt-32">
        {/* Hero */}
        <section className="px-5 md:px-16 mb-20 md:mb-40 reveal">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-8">
              <span className="text-label-caps text-secondary block mb-8">SEOUL — FASHION PR AGENCY</span>
              <h1 className="text-display-xl uppercase mb-12">
                FASHION PR,<br />STYLED FOR<br />VISIBILITY
              </h1>
              <div className="max-w-xl space-y-6">
                <p className="text-body-lg border-l-4 border-neon-signal pl-6 italic font-serif">
                  셀럽 협찬부터 PPL, 인플루언서, 바이럴, 언론 홍보까지 — 패션 브랜드의 노출과 확산을 설계합니다.
                </p>
                <p className="text-body-md pl-6 max-w-lg">
                  CLAMOA는 패션 브랜드의 첫 노출부터 셀럽 협찬, PPL, 바이럴 콘텐츠, 언론 홍보, 브랜드 캠페인까지 설계하는 종합 패션 PR 파트너입니다.
                </p>
                <div className="pl-6 flex flex-wrap gap-3 pt-2">
                  <a
                    href="#portfolio"
                    className="inline-flex items-center gap-2 bg-deep-ink text-neon-signal px-5 py-3 text-label-caps border-2 border-deep-ink hover:bg-neon-signal hover:text-deep-ink transition-all duration-300"
                  >
                    포트폴리오 보기
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-transparent text-deep-ink px-5 py-3 text-label-caps border-2 border-deep-ink hover:bg-deep-ink hover:text-neon-signal transition-all duration-300"
                  >
                    상담 문의하기
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="border-2 border-deep-ink p-8 bg-neon-signal hover-lift shadow-[8px_8px_0px_0px_rgba(26,28,28,1)]">
                <span className="text-label-caps block mb-4">APGUJEONG RODEO · SEOUL</span>
                <h2 className="text-headline-md uppercase">셀럽과<br />스타일리스트가<br />찾는 패션 PR 쇼룸</h2>
              </div>
            </div>
          </div>
        </section>

        {/* Auto-scrolling Looks Marquee */}
        <section className="bg-deep-ink text-surface border-y-2 border-deep-ink py-10 md:py-14 mb-20 md:mb-40 overflow-hidden">
          <div className="flex justify-between items-center px-5 md:px-16 mb-8">
            <span className="text-label-caps text-surface/70">LATEST LOOKS — SS25</span>
            <span className="text-label-caps text-neon-signal">[ AUTO-SCROLL ]</span>
          </div>
          <div className="relative overflow-hidden marquee-mask">
            <div className="marquee-track flex w-max gap-6">
              {[...MARQUEE_IMAGES, ...MARQUEE_IMAGES].map((src, i) => (
                <div
                  key={i}
                  className="relative shrink-0 overflow-hidden"
                  style={{ width: "clamp(240px, 28vw, 380px)", height: "clamp(320px, 38vw, 520px)" }}
                >
                  <img
                    src={src}
                    alt={`CLAMOA look ${(i % MARQUEE_IMAGES.length) + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Work Preview */}

        <section id="work" className="px-5 md:px-16 mb-20 md:mb-40 reveal">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-7 relative group overflow-hidden border-2 border-deep-ink">
              <img
                src={IMG_SHOWROOM}
                alt="Showroom"
                className="w-full aspect-[1.5] object-cover grayscale hover:grayscale-0 transition-all duration-1000 hover:scale-110"
              />
              <div className="absolute -bottom-6 -right-6 bg-deep-ink text-surface p-10 max-w-xs hidden md:block transition-transform duration-500 group-hover:-translate-x-4 group-hover:-translate-y-4">
                <p className="text-body-md italic font-serif">
                  "가시성은 사는 것이 아니라, 연출되고 시딩되며 기억되는 것이다."
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
              <div className="border-t-2 border-deep-ink pt-8 mt-16 md:mt-0">
                <span className="text-label-caps text-secondary mb-4 block">01 / BRAND VISIBILITY</span>
                <h3 className="text-headline-lg mb-6 uppercase">RAW<br />INFLUENCE</h3>
                <p className="text-body-md mb-8">
                  제품 플레이스먼트, 쇼룸 액세스, 컬처럴 관계를 측정 가능한 브랜드 모멘텀으로 전환합니다.
                </p>
                <a href="#portfolio" className="inline-flex items-center gap-4 text-label-caps group border-b border-transparent hover:border-deep-ink pb-1 transition-all duration-300">
                  VIEW CASE STUDY
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Dark Statement */}
        <section className="bg-deep-ink text-surface py-20 md:py-40 px-5 md:px-16 mb-20 md:mb-40 overflow-hidden relative">
          <div ref={parallaxContainer} className="absolute inset-0 opacity-10 pointer-events-none select-none overflow-hidden">
            <div ref={parallaxText} className="whitespace-nowrap font-serif font-bold leading-none transform rotate-[-5deg]" style={{ fontSize: "clamp(120px, 30vw, 300px)" }}>
              INFLUENCE INFLUENCE INFLUENCE
            </div>
          </div>
          <div className="relative z-10 grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-10 md:col-start-2">
              <h2 className="text-headline-lg mb-12 reveal uppercase">
                WE OPERATE AT THE INTERSECTION OF{" "}
                <span className="text-neon-signal">CULTURAL RELEVANCE</span> AND{" "}
                <span className="italic underline decoration-neon-signal underline-offset-8">COMMERCIAL NECESSITY.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 reveal-group">
                {[
                  ["METHOD", "큐레이션된 카오스. 쇼룸 액세스, 스타일리스트 코디네이션, 전략적 시딩으로 영향력을 만들어냅니다."],
                  ["VISION", "패션 PR은 기계적이지 않고 문화적이어야 합니다. 모든 플레이스먼트에는 의도가 담겨야 합니다."],
                  ["RESULT", "측정 가능한 브랜드 노출, 크리에이터 콘텐츠, 그리고 상업적 임팩트를 갖춘 하이패션 가시성."],
                ].map(([h, b]) => (
                  <div key={h} className="border-l border-white/30 pl-6 hover:border-neon-signal transition-colors duration-300">
                    <span className="text-neon-signal text-label-caps block mb-4">{h}</span>
                    <p className="text-body-md">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Services Grid */}
        <section id="services" className="px-5 md:px-16 mb-20 md:mb-40">
          <div className="border-t-2 border-deep-ink pt-12 reveal">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <span className="text-label-caps text-secondary">CORE CAPABILITIES</span>
              <h2 className="text-headline-lg uppercase max-w-2xl">패션 브랜드를 위한 통합 PR 솔루션.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-deep-ink">
              {services.map(([t, d], i) => (
                <div key={t} className="grid grid-rows-subgrid row-span-2 border-r border-b border-deep-ink p-10 hover:bg-deep-ink hover:text-surface transition-colors duration-300 group">
                  <div>
                    <span className="text-label-caps text-secondary group-hover:text-neon-signal block mb-6">0{i + 1}</span>
                    <h3 className="text-headline-md uppercase">{t}</h3>
                  </div>
                  <p className="text-body-md opacity-90">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Agency Difference */}
        <section id="about" className="bg-deep-ink text-surface py-20 md:py-40 px-5 md:px-16 mb-20 md:mb-40 reveal">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-5">
              <span className="text-neon-signal text-label-caps block mb-6">THE CLAMOA DIFFERENCE</span>
              <h2 className="font-serif font-bold uppercase mb-8 leading-[0.95] tracking-[-0.03em] text-[clamp(44px,6vw,88px)]">BEYOND<br />TRADITIONAL<br />PR</h2>
              <p className="text-body-lg max-w-md text-surface/80">
                CLAMOA는 압구정 로데오를 기반으로 패션 브랜드의 스타마케팅, 쇼룸 협찬, PPL, 바이럴, 언론 홍보를 통합 기획합니다. 브랜드의 무드와 시즌 전략에 맞춰 셀럽, 스타일리스트, 인플루언서, 매체 접점을 설계하고 노출 이후의 2차 콘텐츠 확산까지 함께 운영합니다.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 mt-12 md:mt-8">
              <ul className="divide-y divide-white/20 border-t border-b border-white/20">
                {differentiators.map((d, i) => (
                  <li key={d} className="flex items-start gap-6 py-6 group">
                    <span className="text-neon-signal text-label-caps pt-1">0{i + 1}</span>
                    <span className="text-headline-md font-serif group-hover:text-neon-signal transition-colors">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="px-5 md:px-16 mb-20 md:mb-40 reveal">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 border-t-2 border-deep-ink pt-12">
            <span className="text-label-caps text-secondary">PROCESS</span>
            <h2 className="text-headline-lg uppercase max-w-2xl">상담 접수부터 2차 확산까지</h2>
          </div>
          <p className="text-body-md max-w-2xl mb-10 -mt-8 text-secondary">
            브랜드 목표와 예산에 맞춰 가장 적합한 노출 채널을 설계하고, 협찬 진행부터 콘텐츠 확산까지 단계별로 관리합니다.
          </p>
          <div className="divide-y divide-deep-ink border-t border-b border-deep-ink">
            {process.map(([n, t, d]) => (
              <div key={n} className="grid grid-cols-12 gap-3 md:gap-6 py-6 md:py-10 group hover:bg-neon-signal transition-colors duration-300">
                <div className="col-span-12 md:col-span-2">
                  <span className="font-serif text-3xl md:text-5xl">{n}</span>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <h3 className="text-headline-md uppercase">{t}</h3>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <p className="text-body-md max-w-xl">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Case studies */}
        <section id="portfolio" className="px-5 md:px-16 mb-20 md:mb-40 reveal">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 border-t-2 border-deep-ink pt-12">
            <span className="text-label-caps text-secondary">SELECTED WORK</span>
            <h2 className="text-headline-lg uppercase max-w-2xl">RECENT CAMPAIGNS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
            {cases.map(([img, n, t, d]) => (
              <article key={t} className="border-2 border-deep-ink group grid grid-rows-subgrid row-span-4">
                <div className="overflow-hidden border-b-2 border-deep-ink">
                  <img src={img} alt={t} className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <span className="text-label-caps text-secondary px-8 pt-8">CASE {n}</span>
                <h3 className="text-headline-md uppercase px-8 pt-4">{t}</h3>
                <p className="text-body-md px-8 pt-4 pb-8">{d}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Portfolio Categories */}
        <section id="capabilities" className="px-5 md:px-16 mb-20 md:mb-40 reveal">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 border-t-2 border-deep-ink pt-12">
            <span className="text-label-caps text-secondary">PORTFOLIO — CAPABILITIES</span>
            <h2 className="text-headline-lg uppercase max-w-2xl">SCOPE OF<br />PR EXECUTION</h2>
          </div>

          <div className="grid grid-cols-12 gap-0 border-2 border-deep-ink">
            {[
              {
                no: "01",
                title: "STAR",
                kr: "셀러브리티 시딩",
                desc: "배우, 아티스트, K-POP 아이돌을 대상으로 한 셀러브리티 시딩 및 협찬으로 브랜드의 상징적 가시성을 구축합니다.",
                img: "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?w=900&q=80",
                span: "md:col-span-7",
                tall: true,
              },
              {
                no: "02",
                title: "VIRAL",
                kr: "디지털 콘텐츠",
                desc: "인스타그램, 블로그, 유튜브 채널을 아우르는 통합 바이럴 캠페인으로 브랜드의 대화량을 증폭합니다.",
                tags: ["INSTAGRAM", "BLOG", "YOUTUBE"],
                img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&q=80",
                span: "md:col-span-5",
              },
              {
                no: "03",
                title: "MAGAZINE",
                kr: "에디토리얼 피칭",
                desc: "주요 패션·라이프스타일 매거진 에디터 네트워크를 통한 피칭 및 화보 협업을 진행합니다.",
                img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80",
                span: "md:col-span-5",
              },
              {
                no: "04",
                title: "INFLUENCER",
                kr: "크리에이터 매칭",
                desc: "브랜드 톤에 정합하는 패션·뷰티·라이프스타일 크리에이터를 매칭하고 캠페인을 운영합니다.",
                img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900&q=80",
                span: "md:col-span-7",
              },
              {
                no: "05",
                title: "EVENT",
                kr: "프레스 & 런칭",
                desc: "런칭 파티, 쇼룸 오프닝, 프레스 프리뷰 등 오프라인 이벤트 기획부터 운영까지 전 과정을 설계합니다.",
                img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=900&q=80",
                span: "md:col-span-7",
              },
              {
                no: "06",
                title: "BRAND AMBASSADOR CASTING",
                kr: "앰버서더 캐스팅",
                desc: "브랜드의 장기 자산이 될 앰버서더를 전략적으로 캐스팅하고 계약·운영을 매니징합니다.",
                img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=80",
                span: "md:col-span-5",
                accent: true,
              },
            ].map((c, i) => {
              const inner = (
                <div className="grid grid-cols-1 md:grid-cols-5 h-full">
                  <div className="md:col-span-2 overflow-hidden border-b-2 md:border-b-0 md:border-r-2 border-deep-ink">
                    <img
                      src={c.img}
                      alt={c.title}
                      className="w-full h-full min-h-[260px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <div className="md:col-span-3 p-8 md:p-10 flex flex-col gap-4">
                    <div className="flex items-baseline justify-between">
                      <span className="text-label-caps text-secondary">CAT / {c.no}</span>
                      <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">north_east</span>
                    </div>
                    <h3 className="font-serif font-bold uppercase leading-[0.95] tracking-[-0.02em] text-[clamp(28px,2.6vw,44px)]">
                      {c.title}
                    </h3>
                    <span className="text-label-caps text-deep-ink/70">{c.kr}</span>
                    <p className="text-body-md font-serif leading-relaxed">{c.desc}</p>
                    {c.tags && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {c.tags.map((t) => (
                          <span
                            key={t}
                            className="border border-deep-ink px-3 py-1 font-bold tracking-widest text-[10px] uppercase hover:bg-deep-ink hover:text-surface transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                    {(c.title === "STAR" || c.title === "MAGAZINE" || c.title === "INFLUENCER" || c.title === "EVENT" || c.title === "BRAND AMBASSADOR CASTING") && (
                      <span className="text-label-caps text-deep-ink mt-2 inline-flex items-center gap-2">
                        {c.title === "MAGAZINE"
                          ? "VIEW ISSUE"
                          : c.title === "INFLUENCER"
                          ? "VIEW FEED"
                          : c.title === "EVENT"
                          ? "VIEW SKETCH"
                          : c.title === "BRAND AMBASSADOR CASTING"
                          ? "VIEW CASTING"
                          : "VIEW ARCHIVE"}
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </span>
                    )}
                  </div>
                </div>
              );
              const className = `col-span-12 ${c.span} border-deep-ink ${i % 2 === 0 ? "md:border-r-2" : ""} ${i < 4 ? "border-b-2" : ""} group relative overflow-hidden ${c.accent ? "bg-neon-signal" : "bg-surface"}`;
              if (c.title === "STAR") {
                return (
                  <Link key={c.title} to="/star" className={className}>
                    {inner}
                  </Link>
                );
              }
              if (c.title === "MAGAZINE") {
                return (
                  <Link key={c.title} to="/magazine" className={className}>
                    {inner}
                  </Link>
                );
              }
              if (c.title === "INFLUENCER") {
                return (
                  <Link key={c.title} to="/influencer" className={className}>
                    {inner}
                  </Link>
                );
              }
              if (c.title === "EVENT") {
                return (
                  <Link key={c.title} to="/event" className={className}>
                    {inner}
                  </Link>
                );
              }
              if (c.title === "BRAND AMBASSADOR CASTING") {
                return (
                  <Link key={c.title} to="/brand-ambassador" className={className}>
                    {inner}
                  </Link>
                );
              }
              return (
                <article key={c.title} className={className}>
                  {inner}
                </article>
              );
            })}
          </div>
        </section>

        {/* Global Expansion */}
        <section id="global" className="bg-deep-ink text-surface py-20 md:py-40 px-5 md:px-16 mb-20 md:mb-40 reveal">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-5">
              <span className="text-neon-signal text-label-caps block mb-6">CROSS-BORDER B2B</span>
              <h2 className="font-serif font-bold uppercase mb-8 leading-[0.95] tracking-[-0.03em] text-[clamp(44px,6vw,88px)]">
                GLOBAL<br />EXPANSION
              </h2>
              <p className="text-body-lg max-w-md text-surface/80">
                클라모아는 패션홍보대행사에서 수집된 협찬 데이터를 토대로 각 국가별 바이어 B2B 매칭을 통해 수출 발생하도록 지원합니다.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 mt-12 md:mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    country: "JAPAN",
                    kr: "일본",
                    desc: "도쿄·오사카 바이어 네트워크와의 직접 매칭으로 일본 시장 진출을 가속화합니다.",
                  },
                  {
                    country: "TAIWAN",
                    kr: "대만",
                    desc: "타이베이 및 중부 지역 주요 바이어 채널과의 데이터 기반 매칭을 제공합니다.",
                  },
                  {
                    country: "CHINA",
                    kr: "중국",
                    desc: "상하이·항저우 중심의 유통 바이어 네트워크를 활용한 B2B 매칭을 실행합니다.",
                  },
                ].map((m, i) => (
                  <div
                    key={m.country}
                    className="border border-white/20 p-8 hover:border-neon-signal hover:bg-white/5 transition-all duration-300 group"
                  >
                    <span className="text-neon-signal text-label-caps block mb-4">0{i + 1}</span>
                    <h3 className="font-serif text-headline-md uppercase mb-2">{m.country}</h3>
                    <span className="text-label-caps text-surface/60 block mb-4">{m.kr}</span>
                    <p className="text-body-md text-surface/80">{m.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 border-t border-white/20 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <p className="text-body-md text-surface/70 max-w-lg">
                  쇼룸 협찬, 셀러브리티 시딩, 스타일리스트 플레이스먼트 데이터를 통합하여 최적의 바이어 매칭을 도출합니다.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-4 text-label-caps text-neon-signal border border-neon-signal px-6 py-3 hover:bg-neon-signal hover:text-deep-ink transition-all duration-300 shrink-0"
                >
                  START EXPORT MATCHING
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Partners - Marquee Logo Wall */}
        <section id="partners" className="border-y-2 border-deep-ink bg-surface py-16 md:py-20 mb-20 md:mb-40 overflow-hidden">
          <div className="px-5 md:px-16 flex justify-between items-end mb-10 md:mb-12">
            <div>
              <span className="text-label-caps text-secondary block mb-2">PARTNERS — TRUSTED BY</span>
              <h2 className="text-headline-md md:text-headline-lg uppercase">OUR CLIENTS</h2>
            </div>
            <span className="text-label-caps text-secondary hidden md:block">[ AUTO-SCROLL ]</span>
          </div>

          {(() => {
            const ROW_A = ["EMPORIO ARMANI", "MICHAEL KORS", "LOSESLEEPOVER", "BOB", "OWNSER", "This is Fine", "DIESEL", "fusalp", "Kleesier", "DYSFUNCT®", "NICK NICOLE", "SALT&CHOCOLATE", "ANIA HAIE", "ARICONNECTION", "PRIMATE", "TICKET TO THE MOON", "Zeroplanet", "CLROTTE", "JBLIN"];
            const ROW_B = ["PELOTE", "Cadeau", "ALIENAR", "FUNFLEX", "JYDIM", "ADEVA", "BLACKUSH", "KOMMUNTHEWEAR", "Whisfairy", "MSGRN", "the J.Soo", "CNN APPAREL", "DOROCY", "SELIVER®", "MERRYON", "SHOEHI", "BBIBBONG UNNI", "Rosé Frantz", "DeLine", "WAR DOG NYC", "MON PLISSÉ", "FRANK CUSTOM", "NOIR DESIR", "ALKI ALKA"];
            const renderItem = (name: string, i: number) => (
              <div
                key={i}
                className="flex-shrink-0 px-6 md:px-14 flex items-center justify-center h-16 md:h-24 text-deep-ink"
                style={{ fontFamily: "'Noto Serif', 'Inter', serif", fontSize: "clamp(18px, 2.2vw, 32px)", fontWeight: 700, letterSpacing: "-0.01em", whiteSpace: "nowrap" }}
              >
                {name}
              </div>
            );
            return (
              <div className="flex flex-col gap-6 marquee-mask">
                <div className="overflow-hidden">
                  <div className="flex w-max marquee-track-fast">
                    {[...ROW_A, ...ROW_A].map(renderItem)}
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div className="flex w-max marquee-track-reverse">
                    {[...ROW_B, ...ROW_B].map(renderItem)}
                  </div>
                </div>
              </div>
            );
          })()}
        </section>

        {/* Newsletter */}
        <section className="px-5 md:px-16 mb-32 reveal">

          <div className="bg-neon-signal border-2 border-deep-ink p-8 md:p-24 flex flex-col md:flex-row justify-between items-center gap-12 group">
            <div className="max-w-md">
              <h2 className="text-headline-lg uppercase mb-4">JOIN THE<br />INNER CIRCLE.</h2>
              <p className="text-body-md">패션, 셀러브리티 컬처, 쇼룸 PR, 브랜드 가시성에 관한 큐레이션된 시그널을 받아보세요.</p>
            </div>
            <div className="w-full max-w-md">
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="YOUR EMAIL"
                  className="bg-transparent border-b-2 border-deep-ink focus:outline-none p-4 text-label-caps placeholder:text-deep-ink/50 w-full"
                />
                <button
                  type="submit"
                  className="bg-deep-ink text-neon-signal py-5 md:py-6 px-6 md:px-12 text-label-caps hover:bg-surface hover:text-deep-ink transition-all duration-300 active:scale-95 hover:shadow-[8px_8px_0px_0px_rgba(26,28,28,1)]"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-5 md:px-16 mb-32 reveal">
          <div className="grid grid-cols-12 gap-6 border-t-2 border-deep-ink pt-12">
            <div className="col-span-12 md:col-span-5">
              <span className="text-label-caps text-secondary mb-6 block">CONTACT</span>
              <h2 className="text-display-xl uppercase mb-8">LET'S BUILD<br />YOUR BRAND<br />PRESENCE.</h2>
              <p className="text-body-md max-w-md">
                브랜드 상황을 남겨주시면 담당자가 제품 카테고리와 캠페인 목표에 맞는 PR 방향을 제안드립니다. 스타마케팅, PPL, 인플루언서, 언론 홍보, 통합 PR까지 — 가장 적합한 채널과 예산 구성을 함께 설계합니다.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="col-span-12 md:col-span-6 md:col-start-7 grid grid-cols-2 gap-6"
            >
              {[
                ["Name", "text", "col-span-2 md:col-span-1"],
                ["Company / Brand", "text", "col-span-2 md:col-span-1"],
                ["Email", "email", "col-span-2 md:col-span-1"],
                ["Phone", "tel", "col-span-2 md:col-span-1"],
              ].map(([label, type, span]) => (
                <label key={label} className={`flex flex-col gap-2 ${span}`}>
                  <span className="text-label-caps text-secondary">{label}</span>
                  <input
                    type={type}
                    className="bg-transparent border-b border-deep-ink py-3 text-body-md focus:outline-none focus:border-neon-signal"
                  />
                </label>
              ))}
              <label className="flex flex-col gap-2 col-span-2">
                <span className="text-label-caps text-secondary">Service Interest</span>
                <select className="bg-transparent border-b border-deep-ink py-3 text-body-md focus:outline-none focus:border-neon-signal">
                  <option>Showroom PR</option>
                  <option>Celebrity Seeding</option>
                  <option>Stylist Relations</option>
                  <option>Creator Campaign</option>
                  <option>Editorial Content</option>
                  <option>Full Brand PR</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 col-span-2">
                <span className="text-label-caps text-secondary">Message</span>
                <textarea
                  rows={4}
                  className="bg-transparent border border-deep-ink p-4 text-body-md focus:outline-none focus:border-neon-signal resize-none"
                />
              </label>
              <button
                type="submit"
                className="col-span-2 bg-deep-ink text-neon-signal py-6 text-label-caps hover:bg-neon-signal hover:text-deep-ink border border-deep-ink transition-all duration-300 active:scale-95"
              >
                SEND INQUIRY
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full mt-20 md:mt-32 bg-surface border-t-2 border-deep-ink grid grid-cols-12 gap-6 px-5 md:px-16 py-20">
        <div className="col-span-12 mb-20 reveal">
          <div className="text-display-xl opacity-10 uppercase select-none pointer-events-none whitespace-nowrap overflow-hidden">CLAMOA AGENCY</div>
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col gap-6 reveal">
          <img src={clamoaLogo.url} alt="CLAMOA" className="h-8 w-auto object-contain self-start" />
          <p className="text-body-md max-w-xs">
            패션·라이프스타일 브랜드의 문화적 가시성을 구축하는 패션 PR 에이전시.
          </p>
        </div>
        <div className="col-span-6 md:col-span-2 flex flex-col gap-4 reveal">
          <span className="text-label-caps text-secondary">SOCIAL</span>
          {["INSTAGRAM", "LINKEDIN", "YOUTUBE"].map((l) => (
            <a key={l} href="#" className="text-body-md hover:text-neon-signal transition-colors">{l}</a>
          ))}
        </div>
        <div className="col-span-6 md:col-span-2 flex flex-col gap-4 reveal">
          <span className="text-label-caps text-secondary">LEGAL</span>
          {["PRIVACY", "TERMS"].map((l) => (
            <a key={l} href="#" className="text-body-md hover:text-neon-signal transition-colors">{l}</a>
          ))}
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col justify-end items-start md:items-end gap-4 mt-12 md:mt-0 reveal">
          <span className="text-label-caps text-secondary">SEOUL</span>
          <div className="text-body-md text-right">© 2026 CLAMOA AGENCY. ALL RIGHTS RESERVED.</div>
        </div>
      </footer>
    </div>
  );
}
