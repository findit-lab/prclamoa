import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CLAMOA — Art of Fashion PR" },
      {
        name: "description",
        content:
          "CLAMOA is a Seoul-based fashion PR agency building cultural visibility through showroom strategy, celebrity seeding, stylist relations, and data-driven campaigns.",
      },
      { property: "og:title", content: "CLAMOA — Art of Fashion PR" },
      {
        property: "og:description",
        content: "Where strategic disruption meets high-fashion precision.",
      },
    ],
  }),
  component: Index,
});

const IMG_SHOWROOM =
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80&auto=format&fit=crop";
const IMG_RACK =
  "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&q=80&auto=format&fit=crop";
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
    ["WORK", "#work"],
    ["SERVICES", "#services"],
    ["AGENCY", "#agency"],
    ["INSIGHTS", "#insights"],
    ["CONTACT", "#contact"],
  ];

  const services = [
    ["Celebrity & Stylist Seeding", "셀러브리티, 스타일리스트, 의상팀 그리고 컬처 테이스트메이커와 컬렉션을 연결합니다."],
    ["Showroom PR Operation", "스타일리스트, 에디터, 인플루언서, 셀러브리티가 브랜드 아이템을 직접 만나는 큐레이션 쇼룸을 운영합니다."],
    ["Fashion Campaign Strategy", "런칭 캠페인, 시즌 컬렉션 PR, 콜라보레이션, 브랜드 모먼트를 기획하고 실행합니다."],
    ["Influencer & Creator Marketing", "소셜 임팩트와 비주얼 자산, 오디언스 인게이지먼트를 만들어내는 크리에이터 기반 캠페인을 설계합니다."],
    ["Editorial Content Production", "룩북, AI 모델 비주얼, 캠페인 이미지, 숏폼 영상 등 디지털 콘텐츠 자산을 제작합니다."],
    ["AI & Data-Driven PR", "제품 무브먼트, 스타일리스트 요청, 노출, 콘텐츠 성과, 캠페인 결과를 데이터로 추적합니다."],
  ];

  const process = [
    ["01", "BRAND DIAGNOSIS", "브랜드 아이덴티티, 타겟 오디언스, 컬렉션 스토리, 제품 라인, 캠페인 목표를 진단합니다."],
    ["02", "PR STRATEGY DESIGN", "쇼룸 노출, 셀러브리티 시딩, 스타일리스트 아웃리치, 크리에이터 캠페인, 미디어 관계를 아우르는 최적의 PR 믹스를 설계합니다."],
    ["03", "NETWORK ACTIVATION", "스타일리스트, 인플루언서, 셀러브리티, 에디터, 크리에이터, 쇼룸 방문자 네트워크를 가동합니다."],
    ["04", "CAMPAIGN EXECUTION", "물류, 커뮤니케이션, 제품 대여 및 회수, 콘텐츠 제작과 퍼블리싱까지 캠페인 전 과정을 운영합니다."],
    ["05", "MONITORING & REPORTING", "노출, 콘텐츠 성과, 캠페인 반응, 오디언스 피드백 등 측정 가능한 결과를 리포팅합니다."],
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
        className="fixed top-0 w-full z-50 bg-surface/95 border-b border-deep-ink flex justify-between items-center px-6 md:px-16 py-6 transition-all duration-500"
      >
        <a href="#top" className="text-2xl font-serif font-bold tracking-tighter">CLAMOA</a>
        <div className="hidden md:flex gap-10">
          {navLinks.map(([l, h]) => (
            <a key={l} href={h} className="text-label-caps hover:text-neon-signal transition-colors duration-200">
              {l}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden md:inline-block bg-neon-signal text-deep-ink px-6 py-3 text-label-caps hover:bg-deep-ink hover:text-neon-signal transition-all duration-300 border border-deep-ink active:scale-95"
        >
          GET IN TOUCH
        </a>
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
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-label-caps px-6 py-5 bg-neon-signal border-t border-deep-ink"
            >
              GET IN TOUCH →
            </a>
          </div>
        )}
      </nav>

      <main id="top" className="pt-32">
        {/* Hero */}
        <section className="px-6 md:px-16 mb-32 md:mb-40 reveal">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-8">
              <span className="text-label-caps text-secondary block mb-8">SEOUL — FASHION PR AGENCY</span>
              <h1 className="text-display-xl uppercase mb-12">
                CLAMOA:<br />ART OF<br />FASHION PR
              </h1>
              <div className="max-w-xl space-y-6">
                <p className="text-body-lg border-l-4 border-neon-signal pl-6 italic font-serif">
                  전략적 디스럽션과 하이패션의 정밀함이 만나는 곳.
                </p>
                <p className="text-body-md pl-6 max-w-lg">
                  CLAMOA는 쇼룸 전략, 셀러브리티 시딩, 스타일리스트 관계, 크리에이터 캠페인, 데이터 기반 PR 실행을 통해 패션·라이프스타일 브랜드의 문화적 가시성을 만들어냅니다.
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="border-2 border-deep-ink p-8 bg-neon-signal hover-lift shadow-[8px_8px_0px_0px_rgba(26,28,28,1)]">
                <span className="text-label-caps block mb-4">ESTABLISHED 2024</span>
                <h2 className="text-headline-md uppercase">CHAMPIONING<br />THE UNDONE<br />AESTHETIC.</h2>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work Preview */}
        <section id="work" className="px-6 md:px-16 mb-32 md:mb-40 reveal">
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
                <a href="#work" className="inline-flex items-center gap-4 text-label-caps group border-b border-transparent hover:border-deep-ink pb-1 transition-all duration-300">
                  VIEW CASE STUDY
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Dark Statement */}
        <section className="bg-deep-ink text-surface py-32 md:py-40 px-6 md:px-16 mb-32 md:mb-40 overflow-hidden relative">
          <div ref={parallaxContainer} className="absolute inset-0 opacity-10 pointer-events-none select-none overflow-hidden">
            <div ref={parallaxText} className="whitespace-nowrap font-serif font-bold leading-none transform rotate-[-5deg]" style={{ fontSize: "300px" }}>
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

        {/* Services intro */}
        <section id="services" className="px-6 md:px-16 mb-32 md:mb-40 reveal">
          <div className="grid grid-cols-12 gap-6 items-start">
            <div className="col-span-12 md:col-span-4 order-2 md:order-1">
              <div className="border-t-2 border-deep-ink pt-8">
                <span className="text-label-caps text-secondary mb-4 block">02 / SERVICES</span>
                <h3 className="text-headline-lg mb-6 uppercase">SPATIAL<br />RHYTHM</h3>
                <p className="text-body-md mb-8">
                  쇼룸 큐레이션부터 셀러브리티 플레이스먼트까지, 브랜드를 가시화하는 오프라인과 디지털 모먼트를 디자인합니다.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["SHOWROOM", "CELEBRITY SEEDING", "STYLIST RELATIONS", "CREATOR CAMPAIGN", "AI CONTENT", "PR MONITORING"].map((t) => (
                    <span key={t} className="border border-deep-ink px-4 py-1 font-bold tracking-widest text-[10px] uppercase hover:bg-deep-ink hover:text-surface transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-8 order-1 md:order-2 overflow-hidden border-4 border-deep-ink">
              <img src={IMG_RACK} alt="Showroom rack" className="w-full aspect-[1.5] object-cover grayscale hover:scale-105 transition-transform duration-[2000ms] ease-out" />
            </div>
          </div>
        </section>

        {/* Core Services Grid */}
        <section className="px-6 md:px-16 mb-32 md:mb-40">
          <div className="border-t-2 border-deep-ink pt-12 reveal">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <span className="text-label-caps text-secondary">CORE CAPABILITIES</span>
              <h2 className="text-headline-lg uppercase max-w-2xl">A full-stack PR engine for fashion brands.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-deep-ink">
              {services.map(([t, d], i) => (
                <div key={t} className="border-r border-b border-deep-ink p-10 hover:bg-deep-ink hover:text-surface transition-colors duration-300 group">
                  <span className="text-label-caps text-secondary group-hover:text-neon-signal block mb-6">0{i + 1}</span>
                  <h3 className="text-headline-md mb-4 uppercase">{t}</h3>
                  <p className="text-body-md opacity-90">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Agency Difference */}
        <section id="agency" className="bg-deep-ink text-surface py-32 md:py-40 px-6 md:px-16 mb-32 md:mb-40 reveal">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-5">
              <span className="text-neon-signal text-label-caps block mb-6">THE CLAMOA DIFFERENCE</span>
              <h2 className="text-display-xl uppercase mb-8">BEYOND<br />TRADITIONAL<br />PR</h2>
              <p className="text-body-lg max-w-md text-surface/80">
                CLAMOA is not only a fashion PR agency. We are building an operating system for fashion influence — connecting offline showroom activity, stylist relationships, celebrity exposure, creator content, and digital campaign data into one execution engine.
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
        <section className="px-6 md:px-16 mb-32 md:mb-40 reveal">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 border-t-2 border-deep-ink pt-12">
            <span className="text-label-caps text-secondary">PROCESS</span>
            <h2 className="text-headline-lg uppercase max-w-2xl">HOW WE CREATE VISIBILITY</h2>
          </div>
          <div className="divide-y divide-deep-ink border-t border-b border-deep-ink">
            {process.map(([n, t, d]) => (
              <div key={n} className="grid grid-cols-12 gap-6 py-10 group hover:bg-neon-signal transition-colors duration-300">
                <div className="col-span-12 md:col-span-2">
                  <span className="font-serif text-5xl">{n}</span>
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
        <section id="insights" className="px-6 md:px-16 mb-32 md:mb-40 reveal">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 border-t-2 border-deep-ink pt-12">
            <span className="text-label-caps text-secondary">SELECTED WORK</span>
            <h2 className="text-headline-lg uppercase max-w-2xl">RECENT CAMPAIGNS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cases.map(([img, n, t, d]) => (
              <article key={t} className="border-2 border-deep-ink group flex flex-col">
                <div className="overflow-hidden border-b-2 border-deep-ink">
                  <img src={img} alt={t} className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="p-8 flex flex-col gap-4 flex-1">
                  <span className="text-label-caps text-secondary">CASE {n}</span>
                  <h3 className="text-headline-md uppercase">{t}</h3>
                  <p className="text-body-md flex-1">{d}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="px-6 md:px-16 mb-32 reveal">
          <div className="bg-neon-signal border-2 border-deep-ink p-12 md:p-24 flex flex-col md:flex-row justify-between items-center gap-12 group">
            <div className="max-w-md">
              <h2 className="text-headline-lg uppercase mb-4">JOIN THE<br />INNER CIRCLE.</h2>
              <p className="text-body-md">Receive curated signals from fashion, celebrity culture, showroom PR, and brand visibility.</p>
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
                  className="bg-deep-ink text-neon-signal py-6 px-12 text-label-caps hover:bg-surface hover:text-deep-ink transition-all duration-300 active:scale-95 hover:shadow-[8px_8px_0px_0px_rgba(26,28,28,1)]"
                >
                  SUBSCRIBE TO DISPATCH
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-6 md:px-16 mb-32 reveal">
          <div className="grid grid-cols-12 gap-6 border-t-2 border-deep-ink pt-12">
            <div className="col-span-12 md:col-span-5">
              <span className="text-label-caps text-secondary mb-6 block">CONTACT</span>
              <h2 className="text-display-xl uppercase mb-8">LET'S BUILD<br />YOUR BRAND<br />PRESENCE.</h2>
              <p className="text-body-md max-w-md">
                Whether you are launching a new collection, entering Korea, expanding globally, or building stronger cultural visibility, CLAMOA designs the PR strategy and execution system to move your brand forward.
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
      <footer className="w-full mt-32 bg-surface border-t-2 border-deep-ink grid grid-cols-12 gap-6 px-6 md:px-16 py-20">
        <div className="col-span-12 mb-20 reveal">
          <div className="text-display-xl opacity-10 uppercase select-none pointer-events-none whitespace-nowrap overflow-hidden">CLAMOA AGENCY</div>
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col gap-6 reveal">
          <div className="text-2xl font-serif font-bold tracking-tighter">CLAMOA</div>
          <p className="text-body-md max-w-xs">
            A fashion PR agency dedicated to building cultural visibility for fashion and lifestyle brands.
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
