import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CLAMOA — Fashion PR Agency, Seoul" },
      { name: "description", content: "CLAMOA는 셀러브리티 시딩, 스타일리스트 네트워크, 쇼룸 운영, 인플루언서 마케팅, AI 데이터 기반 PR을 운영하는 서울의 패션 PR 에이전시입니다." },
      { property: "og:title", content: "CLAMOA — Fashion PR Agency, Seoul" },
      { property: "og:description", content: "Fashion PR, Reimagined for the Data & AI Era." },
    ],
  }),
  component: Index,
});

// Premium fashion editorial imagery (Unsplash)
const HERO_IMG = "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80&auto=format&fit=crop";
const ABOUT_IMG = "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1400&q=80&auto=format&fit=crop";
const SHOWROOM_IMG = "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1400&q=80&auto=format&fit=crop";
const STYLIST_IMG = "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&q=80&auto=format&fit=crop";
const EDITORIAL_IMG = "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1400&q=80&auto=format&fit=crop";
const CASE_1 = "https://images.unsplash.com/photo-1485518882345-15568b007407?w=900&q=80&auto=format&fit=crop";
const CASE_2 = "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900&q=80&auto=format&fit=crop";
const CASE_3 = "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=900&q=80&auto=format&fit=crop";

function Index() {
  const navRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", interest: "", message: "" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("active")),
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal, .reveal-group").forEach((el) => observer.observe(el));

    const onScroll = () => {
      if (!navRef.current) return;
      if (window.pageYOffset > 40) {
        navRef.current.classList.add("bg-paper/90", "backdrop-blur-md", "border-b");
        navRef.current.classList.remove("bg-transparent");
      } else {
        navRef.current.classList.remove("bg-paper/90", "backdrop-blur-md", "border-b");
        navRef.current.classList.add("bg-transparent");
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const navLinks = [
    ["ABOUT", "#about"],
    ["SERVICES", "#services"],
    ["PROCESS", "#process"],
    ["WORK", "#work"],
    ["CONTACT", "#contact"],
  ];

  const services = [
    { n: "01", t: "Celebrity & Stylist Seeding", k: "셀러브리티 & 스타일리스트 시딩",
      d: "셀러브리티, 스타일리스트, 워드로브 팀과의 직접적인 네트워크를 기반으로 자연스러운 브랜드 노출을 설계합니다. 실제 착장과 매체 노출을 통해 신뢰도 높은 브랜드 모먼트를 만듭니다." },
    { n: "02", t: "Fashion Showroom Operation", k: "패션 쇼룸 운영",
      d: "스타일리스트, 에디터, 인플루언서, 셀러브리티가 브랜드 제품을 직접 발견하고 대여할 수 있는 큐레이션 쇼룸을 운영합니다. 오프라인 접점에서 시작되는 영향력을 구축합니다." },
    { n: "03", t: "Brand PR Campaign", k: "브랜드 PR 캠페인",
      d: "제품 런칭, 시즌 컬렉션, 콜라보레이션, 브랜드 모먼트를 위한 통합 PR 캠페인을 기획하고 실행합니다. 전략에서 실행까지 한 흐름으로 이어집니다." },
    { n: "04", t: "Influencer & Creator Marketing", k: "인플루언서 & 크리에이터 마케팅",
      d: "크리에이터 중심의 캠페인을 설계해 진정성 있는 콘텐츠, 소셜 프루프, 측정 가능한 브랜드 인지도를 만들어냅니다." },
    { n: "05", t: "Content Production", k: "콘텐츠 프로덕션",
      d: "룩북, AI 모델 비주얼, 숏폼 비디오, 에디토리얼 에셋, 캠페인 이미지, 소셜 콘텐츠까지 — 브랜드의 모든 시각 자산을 제작합니다." },
    { n: "06", t: "AI & Data-Driven PR", k: "AI & 데이터 기반 PR 매니지먼트",
      d: "아이템 이동, 스타일리스트 요청, 캠페인 노출, 퍼포먼스 지표, 미디어 결과를 AI와 데이터 기반 워크플로우로 추적하고 관리합니다." },
  ];

  const process = [
    { n: "Step 01", t: "Brand Diagnosis", d: "브랜드 아이덴티티, 제품 라인, 타깃 오디언스, 시장 포지셔닝, 캠페인 목표를 정밀하게 분석합니다." },
    { n: "Step 02", t: "PR Strategy Design", d: "셀러브리티 시딩, 스타일리스트 아웃리치, 인플루언서 캠페인, 쇼룸 노출, 디지털 콘텐츠를 아우르는 PR 전략을 설계합니다." },
    { n: "Step 03", t: "Showroom & Network Activation", d: "쇼룸 방문, 스타일리스트 대여, 셀러브리티 매칭, 인플루언서 협업, 콘텐츠 기회를 활성화합니다." },
    { n: "Step 04", t: "Campaign Execution", d: "물류, 제품 이동, 커뮤니케이션, 퍼블리싱, 콘텐츠 제작까지 캠페인의 전 과정을 운영합니다." },
    { n: "Step 05", t: "Monitoring & Reporting", d: "노출량, 콘텐츠 퍼포먼스, 제품 사용 현황, 미디어 임팩트, 캠페인 결과를 추적하고 리포팅합니다." },
  ];

  const capabilities = [
    "Brand Showroom", "Stylist Pickup System", "Celebrity Placement",
    "Campaign Production", "Influencer Network", "AI Lookbook",
    "AI Short-form Video", "Digital Monitoring", "PR Dashboard", "Global Expansion",
  ];

  const industries = [
    "Fashion Brands", "Designer Brands", "Lifestyle Brands", "Beauty Brands",
    "Accessories", "Jewelry", "Premium Consumer", "Emerging K-Fashion",
  ];

  return (
    <div className="bg-paper text-ink min-h-screen">
      {/* NAV */}
      <nav
        ref={navRef}
        className="fixed top-0 w-full z-50 transition-all duration-500 border-ink/10"
      >
        <div className="flex justify-between items-center px-6 md:px-12 py-5">
          <a href="#" className="font-display text-2xl tracking-tight">CLAMOA</a>
          <div className="hidden lg:flex gap-10">
            {navLinks.map(([l, h]) => (
              <a key={l} href={h} className="text-eyebrow link-underline">{l}</a>
            ))}
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-eyebrow border border-ink px-5 py-3 hover:bg-ink hover:text-paper transition-colors duration-300">
            GET IN TOUCH
            <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
          </a>
          <span className="md:hidden text-eyebrow">MENU</span>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 pt-32 pb-12 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img src={HERO_IMG} alt="Editorial fashion" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-paper/30 via-paper/10 to-paper" />
          </div>

          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 lg:col-span-9 reveal">
              <span className="text-eyebrow block mb-6">— Seoul · Est. 2024 · Fashion PR Agency</span>
              <h1 className="text-display-xl">
                Fashion PR,<br />
                <span className="italic font-light">Reimagined</span> for the<br />
                Data &amp; AI Era.
              </h1>
            </div>
            <div className="col-span-12 lg:col-span-3 reveal">
              <p className="font-kr text-body-md text-ink-soft mb-8 max-w-sm">
                CLAMOA는 브랜드, 셀러브리티, 스타일리스트, 인플루언서, 미디어를 프리미엄 쇼룸 네트워크와 데이터 기반 PR 실행으로 연결합니다.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#services" className="text-eyebrow bg-ink text-paper px-6 py-4 hover:bg-ink-soft transition-colors inline-flex items-center gap-2">
                  Explore Services
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
                <a href="#contact" className="text-eyebrow border border-ink px-6 py-4 hover:bg-ink hover:text-paper transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 flex justify-between items-end text-mono-sm text-ink-soft border-t border-ink/20 pt-6">
            <span>N° 001 — Seoul, KR</span>
            <span className="hidden md:inline">Showroom · Seeding · Campaign · AI</span>
            <span>Scroll ↓</span>
          </div>
        </section>

        {/* MARQUEE */}
        <section className="border-y border-ink/15 bg-paper overflow-hidden py-6">
          <div className="flex marquee-track whitespace-nowrap">
            {[...Array(2)].map((_, k) => (
              <div key={k} className="flex shrink-0">
                {["Celebrity Seeding", "Stylist Network", "Showroom", "Brand Campaign", "Influencer", "AI Content", "Digital PR", "Global Expansion"].map((w) => (
                  <span key={w} className="text-display-lg italic font-light px-10 opacity-90">
                    {w} <span className="not-italic opacity-30">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="px-6 md:px-12 py-32 md:py-48">
          <div className="grid grid-cols-12 gap-6 lg:gap-12">
            <div className="col-span-12 lg:col-span-5 reveal">
              <div className="overflow-hidden hover-img">
                <img src={ABOUT_IMG} alt="About CLAMOA" className="w-full aspect-[3/4] object-cover" />
              </div>
              <span className="text-mono-sm mt-4 inline-block text-warm-gray">— Editorial 01 / Studio Atelier, Seoul</span>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:pt-12 reveal">
              <span className="text-eyebrow text-warm-gray">— About CLAMOA</span>
              <h2 className="text-display-lg mt-6 mb-12">
                Where Fashion Brands<br /><span className="italic font-light">Meet Influence.</span>
              </h2>
              <p className="font-kr text-body-lg max-w-2xl mb-8">
                CLAMOA는 서울 기반의 패션 PR 에이전시로, 떠오르는 브랜드와 기성 브랜드 모두에게 가시성, 신뢰도, 그리고 상업적 모멘텀을 만들어주는 일을 합니다. 브랜드 전략, 셀러브리티 플레이스먼트, 스타일리스트 릴레이션, 콘텐츠 프로덕션, 디지털 PR이 만나는 지점에서 일하고 있습니다.
              </p>
              <p className="font-kr text-body-md text-ink-soft max-w-2xl mb-12">
                전통적인 PR을 넘어, 오프라인 쇼룸과 디지털 데이터를 하나의 운영 체계로 통합해 브랜드의 영향력을 측정 가능하게 만듭니다. 한국 브랜드의 글로벌 확장까지 — 우리는 패션 인플루언스를 위한 운영 시스템을 구축합니다.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-ink/15 pt-10 reveal-group">
                {[
                  ["Fashion PR", "패션 PR 전문성"],
                  ["Showroom", "큐레이션 쇼룸"],
                  ["Celebrity", "셀럽 · 스타일리스트"],
                  ["Digital PR", "디지털 실행력"],
                  ["AI & Data", "데이터 기반 운영"],
                  ["Global", "글로벌 확장"],
                ].map(([e, k]) => (
                  <div key={e}>
                    <span className="text-eyebrow block mb-2">{e}</span>
                    <span className="font-kr text-body-sm text-ink-soft">{k}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-ink text-paper px-6 md:px-12 py-32 md:py-48">
          <div className="grid grid-cols-12 gap-6 mb-20">
            <div className="col-span-12 lg:col-span-6 reveal">
              <span className="text-eyebrow text-beige">— Core Services</span>
              <h2 className="text-display-lg mt-6">
                Six disciplines.<br /><span className="italic font-light">One operating system.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8 self-end reveal">
              <p className="font-kr text-body-md text-paper/70">
                CLAMOA는 셀러브리티 시딩부터 AI 데이터 기반 운영까지 — 패션 PR의 모든 영역을 하나의 흐름으로 다룹니다. 각 영역은 독립적으로, 그리고 통합적으로 작동합니다.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-paper/15 border border-paper/15">
            {services.map((s) => (
              <article key={s.n} className="bg-ink p-8 md:p-10 group hover:bg-ink-soft transition-colors duration-500">
                <div className="flex justify-between items-start mb-12">
                  <span className="text-mono-sm text-beige">{s.n}</span>
                  <span className="material-symbols-outlined text-paper/40 group-hover:text-beige group-hover:rotate-45 transition-all duration-500">arrow_outward</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl mb-3 leading-tight">{s.t}</h3>
                <span className="font-kr text-body-sm text-beige block mb-6">{s.k}</span>
                <p className="font-kr text-body-sm text-paper/70 leading-relaxed">{s.d}</p>
              </article>
            ))}
          </div>
        </section>

        {/* WHY CLAMOA — split editorial */}
        <section className="px-6 md:px-12 py-32 md:py-48">
          <div className="grid grid-cols-12 gap-6 lg:gap-12 items-center">
            <div className="col-span-12 lg:col-span-6 order-2 lg:order-1 reveal">
              <span className="text-eyebrow text-warm-gray">— Why CLAMOA</span>
              <h2 className="text-display-lg mt-6 mb-10">
                Beyond<br /><span className="italic font-light">Traditional PR.</span>
              </h2>
              <p className="font-kr text-body-lg mb-6 max-w-xl">
                CLAMOA는 단순한 PR 에이전시가 아닙니다. 우리는 패션 인플루언스를 위한 운영 시스템을 만들고 있습니다.
              </p>
              <p className="font-kr text-body-md text-ink-soft mb-10 max-w-xl">
                오프라인 쇼룸 활동, 스타일리스트 관계, 셀러브리티 노출, 콘텐츠 프로덕션, 디지털 캠페인 데이터를 하나의 성장 엔진으로 연결합니다.
              </p>
              <ul className="space-y-3 max-w-xl">
                {[
                  "프리미엄 패션 PR 전문성",
                  "스타일리스트 · 셀러브리티 다이렉트 네트워크",
                  "쇼룸 기반의 브랜드 노출",
                  "전략부터 실행까지 통합 캠페인",
                  "AI 기반 콘텐츠 · 모니터링 워크플로우",
                  "데이터로 증명되는 브랜드 퍼포먼스",
                  "한국 브랜드의 글로벌 확장 지원",
                ].map((p) => (
                  <li key={p} className="flex gap-4 font-kr text-body-md border-b border-ink/10 pb-3">
                    <span className="text-warm-gray font-mono-display text-sm pt-1">/</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-6 order-1 lg:order-2 reveal">
              <div className="grid grid-cols-5 gap-3">
                <div className="col-span-3 overflow-hidden hover-img">
                  <img src={STYLIST_IMG} alt="Stylist rack" className="w-full aspect-[3/4] object-cover" />
                </div>
                <div className="col-span-2 flex flex-col gap-3">
                  <div className="overflow-hidden hover-img">
                    <img src={SHOWROOM_IMG} alt="Showroom" className="w-full aspect-square object-cover" />
                  </div>
                  <div className="overflow-hidden hover-img">
                    <img src={EDITORIAL_IMG} alt="Editorial" className="w-full aspect-[3/4] object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="bg-paper-warm border-y border-ink/10 px-6 md:px-12 py-32 md:py-40">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-8 reveal">
              <span className="text-eyebrow text-warm-gray">— The Process</span>
              <h2 className="text-display-lg mt-6">
                From diagnosis<br /><span className="italic font-light">to measurable impact.</span>
              </h2>
            </div>
          </div>
          <div className="space-y-0">
            {process.map((p, i) => (
              <div key={p.n} className="reveal grid grid-cols-12 gap-6 py-8 md:py-10 border-t border-ink/15 group hover:bg-paper transition-colors duration-300">
                <div className="col-span-12 md:col-span-2">
                  <span className="text-mono-sm text-warm-gray">{p.n}</span>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <h3 className="font-display text-2xl md:text-4xl leading-tight">{p.t}</h3>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <p className="font-kr text-body-md text-ink-soft">{p.d}</p>
                </div>
                <div className="col-span-12 md:col-span-1 flex md:justify-end items-start">
                  <span className="material-symbols-outlined text-ink/40 group-hover:text-ink group-hover:translate-x-2 transition-all duration-500">arrow_forward</span>
                </div>
                {i === process.length - 1 && <div className="col-span-12 border-b border-ink/15" />}
              </div>
            ))}
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="px-6 md:px-12 py-32 md:py-40">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-8 reveal">
              <span className="text-eyebrow text-warm-gray">— Featured Capabilities</span>
              <h2 className="text-display-lg mt-6">
                A full-spectrum<br /><span className="italic font-light">PR atelier.</span>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-ink/10 border border-ink/10">
            {capabilities.map((c, i) => (
              <div key={c} className="bg-paper p-6 md:p-8 aspect-square flex flex-col justify-between hover:bg-paper-warm transition-colors duration-300">
                <span className="text-mono-sm text-warm-gray">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-xl md:text-2xl leading-tight">{c}</span>
              </div>
            ))}
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="bg-beige/40 border-y border-ink/10 px-6 md:px-12 py-32 md:py-40">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-4 reveal">
              <span className="text-eyebrow text-warm-gray">— Industries We Serve</span>
              <h3 className="text-display-lg mt-6">
                For brands that<br /><span className="italic font-light">define taste.</span>
              </h3>
              <p className="font-kr text-body-md text-ink-soft mt-8 max-w-md">
                CLAMOA는 패션을 중심으로 라이프스타일, 뷰티, 주얼리, 액세서리, 프리미엄 컨슈머 브랜드까지 — 취향을 정의하는 모든 카테고리와 협업합니다.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <div className="divide-y divide-ink/15 border-y border-ink/15">
                {industries.map((ind, i) => (
                  <div key={ind} className="reveal py-6 md:py-7 flex justify-between items-center group cursor-default">
                    <div className="flex items-baseline gap-6 md:gap-12">
                      <span className="text-mono-sm text-warm-gray">{String(i + 1).padStart(2, "0")}</span>
                      <span className="font-display text-3xl md:text-5xl group-hover:italic transition-all duration-300">{ind}</span>
                    </div>
                    <span className="material-symbols-outlined text-ink/40 group-hover:text-ink group-hover:translate-x-2 transition-all duration-500">arrow_outward</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WORK / CASE STUDIES */}
        <section id="work" className="px-6 md:px-12 py-32 md:py-40">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 lg:col-span-8 reveal">
              <span className="text-eyebrow text-warm-gray">— Selected Work</span>
              <h2 className="text-display-lg mt-6">
                Recent<br /><span className="italic font-light">Brand Moments.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 self-end reveal">
              <p className="font-kr text-body-md text-ink-soft">
                패션 컬렉션 런칭부터 셀러브리티 캠페인, AI 콘텐츠 프로덕션까지 — CLAMOA가 함께한 브랜드 모먼트의 일부를 소개합니다.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 reveal-group">
            {[
              { img: CASE_1, n: "Case 01", cat: "Collection Launch", t: "New Collection Launch PR", d: "시즌 패션 컬렉션을 위한 쇼룸, 스타일리스트 시딩, 인플루언서 콘텐츠, 디지털 노출의 통합 운영." },
              { img: CASE_2, n: "Case 02", cat: "Celebrity Placement", t: "Celebrity Placement Campaign", d: "셀러브리티와 스타일리스트 중심의 브랜드 가시성을 위한 전략적 제품 시딩과 코디네이션." },
              { img: CASE_3, n: "Case 03", cat: "AI Production", t: "AI Content Production", d: "디지털 마케팅 채널을 위한 AI 기반 룩북, 모델 비주얼, 숏폼 캠페인 에셋 제작." },
            ].map((c) => (
              <article key={c.n} className="group cursor-pointer">
                <div className="overflow-hidden hover-img mb-5 bg-beige/30">
                  <img src={c.img} alt={c.t} className="w-full aspect-[4/5] object-cover" />
                </div>
                <div className="flex justify-between items-baseline mb-3">
                  <span className="text-mono-sm text-warm-gray">{c.n} · {c.cat}</span>
                  <span className="material-symbols-outlined text-[18px] text-ink/40 group-hover:text-ink group-hover:rotate-45 transition-all duration-500">arrow_outward</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl mb-3 leading-tight">{c.t}</h3>
                <p className="font-kr text-body-sm text-ink-soft">{c.d}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-ink text-paper px-6 md:px-12 py-32 md:py-48">
          <div className="grid grid-cols-12 gap-6 lg:gap-12">
            <div className="col-span-12 lg:col-span-5 reveal">
              <span className="text-eyebrow text-beige">— Contact</span>
              <h2 className="text-display-lg mt-6 mb-10">
                Let's Build<br />Your Brand<br /><span className="italic font-light">Presence.</span>
              </h2>
              <p className="font-kr text-body-md text-paper/70 max-w-md mb-12">
                새로운 컬렉션 런칭, 한국 시장 진출, 글로벌 확장, 또는 더 강력한 패션 인플루언스 구축을 준비 중이라면 — CLAMOA가 가장 적합한 PR 전략을 함께 설계하고 실행하겠습니다.
              </p>
              <div className="space-y-2 text-mono-sm text-paper/60">
                <div>HELLO@CLAMOA.CO</div>
                <div>SEOUL · KR</div>
                <div>+82 (0)2 — 0000 — 0000</div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7 reveal">
              <form
                onSubmit={(e) => { e.preventDefault(); }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10"
              >
                {[
                  { k: "name", l: "Name / 이름", t: "text" },
                  { k: "company", l: "Company · Brand / 브랜드", t: "text" },
                  { k: "email", l: "Email", t: "email" },
                  { k: "phone", l: "Phone / 연락처", t: "tel" },
                ].map((f) => (
                  <label key={f.k} className="block">
                    <span className="text-eyebrow text-beige block mb-3">{f.l}</span>
                    <input
                      type={f.t}
                      value={(form as Record<string, string>)[f.k]}
                      onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                      className="w-full bg-transparent border-b border-paper/30 focus:border-paper outline-none py-3 text-paper font-kr"
                    />
                  </label>
                ))}
                <label className="block md:col-span-2">
                  <span className="text-eyebrow text-beige block mb-3">Service Interest / 관심 서비스</span>
                  <select
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="w-full bg-transparent border-b border-paper/30 focus:border-paper outline-none py-3 text-paper font-kr"
                  >
                    <option value="" className="bg-ink">Select / 선택</option>
                    {services.map((s) => <option key={s.t} value={s.t} className="bg-ink">{s.t}</option>)}
                  </select>
                </label>
                <label className="block md:col-span-2">
                  <span className="text-eyebrow text-beige block mb-3">Message / 메시지</span>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border-b border-paper/30 focus:border-paper outline-none py-3 text-paper font-kr resize-none"
                  />
                </label>
                <div className="md:col-span-2 pt-4">
                  <button
                    type="submit"
                    className="text-eyebrow bg-paper text-ink px-10 py-5 hover:bg-beige transition-colors inline-flex items-center gap-3"
                  >
                    Send Inquiry
                    <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-paper text-ink border-t border-ink/15">
        <div className="px-6 md:px-12 pt-20 pb-8">
          <div className="grid grid-cols-12 gap-6 mb-20">
            <div className="col-span-12 md:col-span-5">
              <div className="font-display text-3xl mb-6">CLAMOA</div>
              <p className="font-kr text-body-sm text-ink-soft max-w-sm">
                서울 기반의 패션 PR 에이전시. 브랜드, 셀러브리티, 스타일리스트, 인플루언서, 미디어를 연결합니다.
              </p>
            </div>
            <div className="col-span-6 md:col-span-2">
              <span className="text-eyebrow text-warm-gray block mb-4">Navigate</span>
              <ul className="space-y-2">
                {navLinks.map(([l, h]) => (
                  <li key={l}><a href={h} className="text-body-sm link-underline">{l}</a></li>
                ))}
              </ul>
            </div>
            <div className="col-span-6 md:col-span-2">
              <span className="text-eyebrow text-warm-gray block mb-4">Social</span>
              <ul className="space-y-2 text-body-sm">
                <li><a href="#" className="link-underline">INSTAGRAM</a></li>
                <li><a href="#" className="link-underline">LINKEDIN</a></li>
                <li><a href="#" className="link-underline">VIMEO</a></li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-3">
              <span className="text-eyebrow text-warm-gray block mb-4">Studio</span>
              <p className="text-body-sm">Seoul, Republic of Korea</p>
              <p className="text-body-sm mt-2">hello@clamoa.co</p>
            </div>
          </div>

          <div className="select-none pointer-events-none -mb-6 overflow-hidden">
            <div className="font-display text-[20vw] leading-[0.85] tracking-tighter text-ink">
              CLAMOA<span className="italic font-light">.</span>
            </div>
          </div>

          <div className="border-t border-ink/15 pt-6 flex flex-col md:flex-row justify-between gap-4 text-mono-sm text-warm-gray">
            <span>© 2026 CLAMOA Agency — All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="link-underline">PRIVACY</a>
              <a href="#" className="link-underline">TERMS</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
