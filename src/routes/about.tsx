import { createFileRoute, Link } from "@tanstack/react-router";
import { SubPageNav } from "@/components/SubPageNav";
import { useEffect } from "react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "CLAMOA 소개 — 한국 패션 PR 에이전시 | 셀럽 협찬 대행사" },
      {
        name: "description",
        content:
          "CLAMOA는 서울 압구정 기반의 패션 PR 에이전시입니다. 셀럽 협찬, 스타일리스트 릴레이션, PPL, 인플루언서 캠페인, 바이럴 콘텐츠, 글로벌 유통 확장을 통합적으로 설계합니다.",
      },
      {
        property: "og:title",
        content: "CLAMOA 소개 — 한국 패션 PR 에이전시 | 셀럽 협찬 대행사",
      },
      {
        property: "og:description",
        content:
          "CLAMOA는 서울 압구정 기반의 패션 PR 에이전시입니다. 셀럽 협찬, 스타일리스트 릴레이션, PPL, 인플루언서 캠페인, 바이럴 콘텐츠, 글로벌 유통 확장을 통합적으로 설계합니다.",
      },
      { property: "og:url", content: "https://clamoa.com/about" },
      { name: "keywords", content: "패션 PR, 셀럽 협찬 대행사, 한국 패션 PR 에이전시, 스타일리스트 릴레이션, PPL, 인플루언서 마케팅, 바이럴 콘텐츠, 압구정 쇼룸" },
    ],
    links: [{ rel: "canonical", href: "https://clamoa.com/about" }],
  }),
  component: AboutPage,
});

const services = [
  ["셀럽 협찬", "브랜드 무드와 타깃에 맞는 셀럽을 매칭하고, 협찬부터 착용 클리핑까지 체계적으로 운영합니다."],
  ["스타일리스트 릴레이션", "압구정 쇼룸 기반 스타일리스트 네트워크를 활용해 룩북 전달, 피칭, 쇼룸 방문 예약을 관리합니다."],
  ["PPL & 콘텐츠 플레이스먼트", "드라마, 예능, 유튜브, 공항패션 등 노출 가능한 콘텐츠 장면을 기획하고 연결합니다."],
  ["인플루언서 PR", "브랜드 톤과 정합하는 패션·뷰티·라이프스타일 인플루언서를 매칭하고 캠페인을 운영합니다."],
  ["바이럴 & 에디토리얼", "클리핑된 셀럽 착용 자료를 바탕으로 블로그, 매거진, SNS 등 2차 확산 콘텐츠를 제작·배포합니다."],
  ["오프라인 이벤트", "팝업스토어, 플리마켓, 런칭 행사 등 RSVP 기반 오프라인 접점을 기획하고 셀럽·프레스 섭외를 지원합니다."],
  ["앰버서더 캠페인", "브랜드 장기 자산이 될 셀럽 앰버서더를 전략적으로 캐스팅하고, 단기 계약부터 콘텐츠 활용까지 설계합니다."],
  ["글로벌 확장", "일본, 대만, 중국 등 아시아 유통 및 인플루언서 네트워크를 연계해 브랜드의 해외 진출 기회를 확대합니다."],
];

const reasons = [
  ["브랜드 무드 기반 셀럽 매칭", "무작위 협찬이 아닌 브랜드 아이덴티티와 타깃 소비자층에 맞는 셀럽을 선별해 매칭합니다."],
  ["압구정 쇼룸 기반 스타일리스트 접점", "압구정 로데오 쇼룸을 중심으로 스타일리스트와의 직접적인 룩북 피칭 및 방문 예약을 관리합니다."],
  ["협찬·클리핑 데이터 관리 (RINK)", "RINK 시스템으로 셀럽 협찬 내역, 착용 데이터, 클리핑 결과를 체계적으로 추적하고 보고합니다."],
  ["PPL·앰버서더·인플루언서 확장", "협찬을 시작으로 PPL 콘텐츠, 앰버서더 계약, 인플루언서 캠페인까지 단계별 확장을 설계합니다."],
  ["2차 콘텐츠 활용", "셀럽 노출 자료를 매거진, 블로그, SNS 시딩 등 다양한 채널로 재활용해 노출 효과를 극대화합니다."],
  ["일본·대만·중국 글로벌 연계", "아시아 주요 시장의 유통사 및 인플루언서 네트워크를 활용한 글로벌 브랜드 확장을 지원합니다."],
];

const networks = [
  ["스타일리스트", "방송·화보·셀럽 전담 스타일리스트 팀과의 직접 피칭 채널"],
  ["셀럽", "배우, 아이돌, 예능인, 스포츠 스타 등 다양한 분야의 셀럽 네트워크"],
  ["기획사", "국내 주요 연예 기획사와의 협찬·PPL·앰버서더 협업 파이프라인"],
  ["인플루언서", "패션·뷰티·라이프스타일 분야 크리에이터 및 MCN 네트워크"],
  ["유통", "국내 백화점·편집샵 및 일본·대만·중국 유통사 연계"],
];

function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("active")),
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".reveal, .reveal-group").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-surface text-deep-ink">
      {/* Secondary top nav */}
      <header className="fixed top-0 w-full z-50 bg-surface/95 border-b border-deep-ink flex justify-between items-center px-5 md:px-16 py-5 md:py-6">
        <Link to="/" className="block" aria-label="CLAMOA">
          <span className="text-label-caps tracking-[0.25em]">CLAMOA</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          {[
            ["ABOUT", "/about"],
            ["SERVICES", "/services"],
            ["CASE STUDIES", "/case-studies"],
            ["PROCESS", "/process"],
            ["INSIGHTS", "/insights"],
            ["FAQ", "/faq"],
            ["CONTACT", "/contact"],
          ].map(([l, h]) => (
            <Link
              key={l}
              to={h}
              className={`text-label-caps hover:text-neon-signal transition-colors duration-200 ${h === "/about" ? "text-deep-ink" : "text-secondary"}`}
            >
              {l}
            </Link>
          ))}
        </nav>
      </header>

      <SubPageNav variant="light" />

      <main className="pt-24 md:pt-32">
        {/* Hero / Who We Are */}
        <section className="px-5 md:px-16 pt-24 md:pt-40 pb-20 md:pb-32 reveal">
          <span className="text-label-caps text-secondary block mb-8">ABOUT</span>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-10">
              <h1 className="text-display-xl uppercase mb-12">
                WE MAKE<br />BRANDS VISIBLE
              </h1>
            </div>
            <div className="col-span-12 md:col-span-8 md:col-start-1">
              <p className="text-body-lg border-l-4 border-neon-signal pl-6 mb-8">
                CLAMOA는 서울 압구정 기반의 패션 PR 에이전시로, 셀럽 협찬, 스타일리스트 릴레이션, PPL, 인플루언서 캠페인, 바이럴 콘텐츠, 글로벌 유통 확장을 통합적으로 설계합니다.
              </p>
              <p className="text-body-md text-secondary max-w-2xl pl-6">
                단순한 노출이 아닌 브랜드의 무드와 성장 단계에 맞춘 PR 전략을 설계합니다. 압구정 로데오 쇼룸을 중심으로 스타일리스트와 셀럽이 직접 제품을 만나고, 데이터 기반으로 협찬 결과를 관리합니다. 국내외 유통 및 인플루언서 네트워크를 연계해 브랜드의 다음 단계를 함께 만듭니다.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="px-5 md:px-16 mb-20 md:mb-40 reveal">
          <div className="border-t-2 border-deep-ink pt-12 mb-16">
            <span className="text-label-caps text-secondary block mb-6">WHAT WE DO</span>
            <h2 className="text-headline-lg uppercase max-w-2xl">패션 브랜드를 위한 8가지 PR 서비스</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-deep-ink border border-deep-ink">
            {services.map(([title, desc], i) => (
              <div
                key={title}
                className="bg-surface p-8 md:p-10 hover:bg-deep-ink hover:text-surface transition-colors duration-300 group"
              >
                <span className="text-label-caps text-secondary group-hover:text-neon-signal block mb-6">0{i + 1}</span>
                <h3 className="text-headline-md uppercase mb-4">{title}</h3>
                <p className="text-body-md opacity-90">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why CLAMOA */}
        <section className="px-5 md:px-16 mb-20 md:mb-40 reveal">
          <div className="border-t-2 border-deep-ink pt-12 mb-16">
            <span className="text-label-caps text-secondary block mb-6">WHY CLAMOA</span>
            <h2 className="text-headline-lg uppercase max-w-2xl">CLAMOA와 함께해야 하는 이유</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-deep-ink border border-deep-ink">
            {reasons.map(([title, desc], i) => (
              <div
                key={title}
                className="bg-surface p-8 md:p-10 hover:bg-deep-ink hover:text-surface transition-colors duration-300 group"
              >
                <span className="text-label-caps text-secondary group-hover:text-neon-signal block mb-6">0{i + 1}</span>
                <h3 className="text-headline-md uppercase mb-4 leading-tight">{title}</h3>
                <p className="text-body-md opacity-90">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Network */}
        <section className="bg-deep-ink text-surface py-20 md:py-32 px-5 md:px-16 mb-20 md:mb-40 reveal">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 md:col-span-6">
              <span className="text-neon-signal text-label-caps block mb-6">NETWORK</span>
              <h2 className="text-headline-lg uppercase">CLAMOA가 연결하는<br />네트워크</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 border-t border-white/20 pt-8 reveal-group">
            {networks.map(([title, desc]) => (
              <div key={title} className="border-l border-white/20 pl-6">
                <span className="text-neon-signal text-label-caps block mb-4">{title}</span>
                <p className="text-body-md text-surface/80">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Numbers / Trust Bar */}
        <section className="px-5 md:px-16 mb-20 md:mb-40 reveal">
          <div className="border-t-2 border-deep-ink pt-12 mb-16">
            <span className="text-label-caps text-secondary block mb-6">TRUST BY NUMBERS</span>
            <h2 className="text-headline-lg uppercase max-w-2xl">수치로 보는 CLAMOA</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              ["스타일리스트", "[2,000]+", "협업 스타일리스트 네트워크"],
              ["브랜드", "[1,100]+", "누적 협찬 브랜드 수"],
              ["협찬 데이터", "[10년]", "RINK 기반 데이터 운영"],
              ["RINK 운영", "[운영 중]", "셀럽 협찬 및 클리핑 통합 관리"],
            ].map(([label, value, sub]) => (
              <div
                key={label}
                className="border border-deep-ink p-8 md:p-10 hover:bg-neon-signal hover:text-deep-ink transition-colors duration-300 group"
              >
                <span className="text-label-caps text-secondary group-hover:text-deep-ink block mb-4">{label}</span>
                <div className="text-headline-lg mb-2">{value}</div>
                <p className="text-body-md opacity-80">{sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Location */}
        <section className="px-5 md:px-16 mb-32 reveal">
          <div className="border-t-2 border-deep-ink pt-12">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-6">
                <span className="text-label-caps text-secondary block mb-6">LOCATION</span>
                <h2 className="text-headline-lg uppercase mb-8">압구정 로데오<br />쇼룸 기반</h2>
                <p className="text-body-md max-w-lg mb-6">
                  CLAMOA는 서울 강남구 압구정로데오에 위치한 쇼룸을 기반으로 운영합니다. 스타일리스트와 셀럽이 직접 방문해 제품을 경험하고, 룩북과 실물을 동시에 확인할 수 있는 물리적 공간을 제공합니다.
                </p>
                <div className="space-y-2">
                  <p className="text-body-md text-secondary">서울특별시 강남구 압구정로데오</p>
                  <p className="text-body-md text-secondary">쇼룸 방문은 사전 예약을 권장합니다.</p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="aspect-[4/3] border-2 border-deep-ink overflow-hidden">
                  <iframe
                    title="CLAMOA Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.3515!2d127.0276!3d37.5274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3f0e6b1b3a5%3A0x1b3b5b5b5b5b5b5b!2sApgujeong-rodeo!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "grayscale(100%) contrast(1.1)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-deep-ink px-5 md:px-16 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-label-caps text-secondary block mb-4">CLAMOA</span>
            <p className="text-body-md text-secondary max-w-sm">
              서울 압구정 기반 패션 PR 에이전시<br />
              셀럽 협찬 · 스타일리스트 릴레이션 · PPL · 인플루언서 · 바이럴 · 글로벌 확장
            </p>
          </div>
          <div className="text-right">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-deep-ink text-neon-signal px-6 py-4 text-label-caps border-2 border-deep-ink hover:bg-neon-signal hover:text-deep-ink transition-all duration-300">
              상담 문의하기
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-deep-ink/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-body-md text-secondary">© 2026 CLAMOA AGENCY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-label-caps text-secondary hover:text-deep-ink transition-colors">PRIVACY</Link>
            <Link to="/terms" className="text-label-caps text-secondary hover:text-deep-ink transition-colors">TERMS</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
