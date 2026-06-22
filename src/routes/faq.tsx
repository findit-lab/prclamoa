import { createFileRoute, Link } from "@tanstack/react-router";
import { SubPageNav } from "@/components/SubPageNav";
import { useEffect } from "react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — 패션 PR · 셀럽 협찬 자주 묻는 질문 | CLAMOA" },
      {
        name: "description",
        content:
          "셀럽 협찬, PPL, 스타일리스트 릴레이션, 인플루언서 PR, 글로벌 확장에 대한 패션 브랜드의 자주 묻는 질문과 직답. CLAMOA가 운영 방식과 비용 구조를 안내합니다.",
      },
      { property: "og:title", content: "FAQ — 패션 PR · 셀럽 협찬 자주 묻는 질문 | CLAMOA" },
      {
        property: "og:description",
        content:
          "셀럽 협찬, PPL, 스타일리스트 릴레이션, 인플루언서 PR, 글로벌 확장에 대한 직답형 FAQ.",
      },
      { property: "og:url", content: "https://clamoa.com/faq" },
      { name: "keywords", content: "패션 PR FAQ, 셀럽 협찬 비용, PPL 차이, 스타일리스트 릴레이션, 인플루언서 PR, 앰버서더, RINK, 샤오홍수, 왕홍 라이브커머스" },
    ],
    links: [{ rel: "canonical", href: "https://clamoa.com/faq" }],
  }),
  component: FaqPage,
});

type QA = { id: string; q: string; a: string };
type Category = { id: string; label: string; title: string; items: QA[] };

const categories: Category[] = [
  {
    id: "basics",
    label: "셀럽 협찬 기본",
    title: "A. 셀럽 협찬 기본",
    items: [
      {
        id: "q1",
        q: "패션 브랜드 셀럽 협찬은 어떻게 진행되나요?",
        a: "셀럽 협찬은 상담·브랜드 검토 → PR 플랜 제안 → 계약 및 쇼룸 입점 → 스타일리스트 피칭 → 셀럽 착용 → 노출 클리핑 순으로 진행됩니다. 클라모아는 브랜드 무드에 맞는 셀럽과 채널을 매칭하고, 착용 이후 콘텐츠 클리핑과 2차 확산까지 단계별로 관리합니다.",
      },
      {
        id: "q2",
        q: "신생 브랜드도 셀럽 협찬이 가능한가요?",
        a: "신생 브랜드도 가능합니다. 다만 제품 완성도, 브랜드 무드, 타깃 적합성이 성과를 좌우합니다. 클라모아는 브랜드 단계에 맞춰 PR 방향성을 먼저 설계하고, 무작위 노출이 아닌 타깃 중심의 셀럽 협찬으로 신생 브랜드의 인지도 확보를 돕습니다.",
      },
      {
        id: "q3",
        q: "우리 브랜드에 맞는 셀럽은 어떻게 정하나요?",
        a: "클라모아는 무작위 노출이 아니라 브랜드 이미지·타깃·시즌 전략에 맞는 셀럽과 채널을 매칭합니다. 브랜드 카테고리, 구매 연령층, 무드를 검토한 뒤 적합한 셀럽과 스타일리스트 팀을 제안하며, 노출 이후의 2차 활용까지 고려해 매칭합니다.",
      },
      {
        id: "q4",
        q: "협찬 후 셀럽 착용이 보장되나요?",
        a: "착용 방식은 보장형과 비보장형으로 구분됩니다. 비보장형은 스타일리스트 피칭을 통한 자연스러운 착용을 지향하고, 보장형은 셀럽 초상권 단기 계약 등으로 노출을 확정합니다. 브랜드 목표와 예산에 맞춰 적합한 구조를 상담 단계에서 함께 정합니다.",
      },
    ],
  },
  {
    id: "services",
    label: "서비스 차이",
    title: "B. 서비스 종류 & 차이",
    items: [
      {
        id: "q5",
        q: "PPL과 셀럽 협찬은 무엇이 다른가요?",
        a: "셀럽 협찬은 배우·아이돌 등 인물의 착용을 통한 노출이고, PPL은 드라마·예능·유튜브 등 콘텐츠 장면 안에 제품을 배치하는 방식입니다. 노출 방식과 계약·비용 구조가 다르며, 두 방식을 함께 운영해 노출 효과를 키우기도 합니다.",
      },
      {
        id: "q6",
        q: "스타일리스트 릴레이션은 무엇이고 왜 중요한가요?",
        a: "스타일리스트 릴레이션은 셀럽의 착장을 결정하는 스타일리스트 네트워크에 브랜드 제품과 룩북을 소개하는 활동입니다. 실제 착용은 스타일리스트의 선택에서 시작되므로, 이 관계가 협찬 성공의 핵심입니다. 클라모아는 압구정 쇼룸을 기반으로 스타일리스트 접점을 운영합니다.",
      },
      {
        id: "q7",
        q: "패션 PPL은 어떤 콘텐츠에 노출되나요?",
        a: "패션 PPL은 드라마, 예능, 유튜브, OTT 콘텐츠, 공항패션 등 브랜드가 주목받을 수 있는 다양한 장면에 연결됩니다. 클라모아는 브랜드 무드와 타깃에 맞는 콘텐츠 노출 기회를 선별해, 제품이 자연스럽게 등장하도록 설계합니다.",
      },
      {
        id: "q8",
        q: "인플루언서 PR은 어떻게 운영되나요?",
        a: "인플루언서 PR은 브랜드 타깃에 맞는 크리에이터 매칭 → 콘텐츠 가이드 → 업로드 → 리포팅 순으로 운영됩니다. 패션·뷰티·라이프스타일 크리에이터를 브랜드 톤에 맞춰 연결하고, 인스타그램·블로그·유튜브에서 자연스러운 바이럴 확산을 유도합니다.",
      },
      {
        id: "q9",
        q: "앰버서더 캠페인은 일반 협찬과 어떻게 다른가요?",
        a: "앰버서더 캠페인은 단발 협찬과 달리, 브랜드와 어울리는 셀럽과 단기 계약을 맺어 브랜드의 장기 자산이 될 콘텐츠를 확보하는 방식입니다. 확보된 셀럽 착용 콘텐츠는 광고·SNS·상세페이지 등 2차 활용까지 함께 설계합니다.",
      },
    ],
  },
  {
    id: "process",
    label: "진행·운영",
    title: "C. 진행 방식 & 운영",
    items: [
      {
        id: "q10",
        q: "계약부터 첫 노출까지 얼마나 걸리나요?",
        a: "기간은 브랜드 상황, 제품 입고 시점, 셀럽·콘텐츠 일정에 따라 달라집니다. 일반적으로 계약 후 쇼룸 입점과 스타일리스트 피칭이 시작되며, 시즌과 캠페인 목표에 맞춰 노출 일정을 조율합니다. 구체적 일정은 상담 시 안내드립니다.",
      },
      {
        id: "q11",
        q: "쇼룸 입점이 꼭 필요한가요?",
        a: "필수는 아니지만 권장합니다. 압구정 로데오 쇼룸에 제품이 입점되면 스타일리스트가 직접 방문해 제품을 확인하고 픽업할 수 있어 협찬 운영 효율이 높아집니다. 룩북 전달과 피칭, 픽업·반납 관리가 한 곳에서 이루어집니다.",
      },
      {
        id: "q12",
        q: "협찬 성과는 어떻게 리포팅되나요?",
        a: "클라모아는 셀럽 픽업·착용 현황과 노출 콘텐츠를 클리핑해 주간 단위로 보고합니다. 착용 자료는 자사 SNS에 게시되고, 노출 채널·건수 등 성과를 정리해 브랜드가 협찬 결과를 투명하게 확인할 수 있도록 합니다.",
      },
      {
        id: "q13",
        q: "RINK는 무엇이고 협찬 운영에 어떻게 쓰이나요?",
        a: "RINK는 협찬 요청·홀딩·픽업·반납·착용 현황을 데이터로 관리하는 클라모아의 운영 시스템입니다. 제품이 누구에게 나가 어떻게 노출됐는지 추적해 진행 상황과 성과를 투명하게 관리하며, 이 데이터는 다음 시즌 PR 전략의 자산이 됩니다.",
      },
      {
        id: "q14",
        q: "셀럽 착용 콘텐츠를 2차로 활용할 수 있나요?",
        a: "네. 협찬으로 확보된 셀럽 착용 자료는 브랜드 공식 SNS, 상세페이지, 광고 소재 등으로 2차 활용할 수 있습니다. 다만 활용 범위는 셀럽 초상권 계약 조건에 따라 달라지므로, 캠페인 설계 단계에서 활용 범위를 함께 정합니다.",
      },
    ],
  },
  {
    id: "cost",
    label: "비용·준비",
    title: "D. 비용 & 준비",
    items: [
      {
        id: "q15",
        q: "셀럽 협찬 비용은 어떻게 책정되나요?",
        a: "협찬 비용은 브랜드 목표, 서비스 범위, 진행 기간, 콘텐츠 활용 범위에 따라 달라집니다. 셀럽 초상권 단기 계약처럼 2차 활용이 포함되면 비용 구조가 달라집니다. 정확한 견적은 상담 시 브랜드 상황과 캠페인 목표를 검토한 뒤 제안드립니다.",
      },
      {
        id: "q16",
        q: "어떤 브랜드 카테고리를 다루나요?",
        a: "클라모아는 패션·라이프스타일 브랜드의 PR을 전문으로 합니다. 의류, 잡화, 슈즈, 액세서리 등 다양한 카테고리를 다루며, 브랜드 무드와 타깃에 맞춰 셀럽 협찬·PPL·인플루언서·글로벌 확장 등 적합한 PR 방식을 제안합니다.",
      },
      {
        id: "q17",
        q: "협찬 진행 시 브랜드가 준비해야 할 자료는 무엇인가요?",
        a: "브랜드명과 제품 카테고리, 시즌 룩북 또는 제품 이미지, 협찬 가능한 샘플, 브랜드 SNS·쇼핑몰 링크가 있으면 상담이 정확해집니다. 자료가 완벽하지 않아도 괜찮으며, 브랜드 상황을 남겨주시면 담당자가 필요한 자료를 함께 안내드립니다.",
      },
      {
        id: "q18",
        q: "상담은 어떻게 신청하나요?",
        a: "홈페이지 문의 폼에 브랜드명, 제품 카테고리, 희망 서비스, 캠페인 목표, 예산 범위, 진행 시기를 남겨주시면 담당자가 빠르게 연락드립니다. 정보가 구체적일수록 브랜드에 맞는 PR 방향과 채널을 더 정확하게 제안드릴 수 있습니다.",
      },
    ],
  },
  {
    id: "global",
    label: "글로벌",
    title: "E. 글로벌 확장",
    items: [
      {
        id: "q19",
        q: "해외(일본·대만·중국) 진출도 지원하나요?",
        a: "네. 클라모아는 일본 셀렉트샵, 대만 편집샵 입점 연계와 중화권 유통·라이브커머스 진출을 지원합니다. 국내 셀럽 착용 자료를 기반으로 해외 바이럴과 바이어 매칭을 함께 진행해, 브랜드의 글로벌 확장 기회를 만듭니다.",
      },
      {
        id: "q20",
        q: "샤오홍수·왕홍 라이브커머스 마케팅도 가능한가요?",
        a: "가능합니다. 셀럽 착용 자료를 기반으로 샤오홍수 바이럴 콘텐츠를 제작하고, 왕홍 라이브커머스 판매와 중화권 유통 채널 확대를 연계합니다. 단순 노출을 넘어 실제 판매로 이어지도록 콘텐츠와 채널을 함께 설계합니다.",
      },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: categories.flatMap((c) =>
    c.items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    }))
  ),
};

function FaqPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("active")),
      { threshold: 0.08, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-surface text-deep-ink">
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
              className={`text-label-caps hover:text-neon-signal transition-colors duration-200 ${h === "/faq" ? "text-deep-ink" : "text-secondary"}`}
            >
              {l}
            </Link>
          ))}
        </nav>
      </header>

      <SubPageNav variant="light" />

      <main className="pt-24 md:pt-32">
        {/* Hero */}
        <section className="px-5 md:px-16 pt-24 md:pt-40 pb-16 md:pb-24 reveal">
          <span className="text-label-caps text-secondary block mb-8">FAQ</span>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-10">
              <h1 className="text-display-xl uppercase mb-12">
                FREQUENTLY<br />ASKED QUESTIONS
              </h1>
            </div>
            <div className="col-span-12 md:col-span-8">
              <p className="text-body-lg border-l-4 border-neon-signal pl-6">
                패션 브랜드가 셀럽 협찬, PPL, 스타일리스트 릴레이션, 인플루언서 PR, 글로벌 확장에 대해 가장 자주 묻는 20가지 질문에 CLAMOA가 직접 답합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Category jump links */}
        <section className="px-5 md:px-16 mb-20 md:mb-32 reveal">
          <div className="border-t-2 border-deep-ink pt-8">
            <span className="text-label-caps text-secondary block mb-6">CATEGORIES</span>
            <nav aria-label="FAQ categories" className="flex flex-wrap gap-3">
              {categories.map((c) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="inline-flex items-center gap-2 border-2 border-deep-ink px-5 py-3 text-label-caps hover:bg-deep-ink hover:text-neon-signal transition-colors"
                >
                  {c.label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Categories & QAs */}
        {categories.map((cat) => (
          <section
            key={cat.id}
            id={cat.id}
            className="px-5 md:px-16 mb-20 md:mb-32 scroll-mt-32 reveal"
          >
            <div className="border-t-2 border-deep-ink pt-12 mb-12">
              <span className="text-label-caps text-secondary block mb-6">{cat.id.toUpperCase()}</span>
              <h2 className="text-headline-lg uppercase max-w-3xl">{cat.title}</h2>
            </div>

            <div className="grid grid-cols-1 gap-px bg-deep-ink border border-deep-ink">
              {cat.items.map((it) => (
                <details
                  key={it.id}
                  id={it.id}
                  className="group bg-surface md:open:bg-surface scroll-mt-32"
                  open
                >
                  <summary className="cursor-pointer list-none p-6 md:p-8 flex items-start justify-between gap-6 hover:bg-deep-ink hover:text-surface transition-colors">
                    <h3 className="text-headline-md leading-snug">{it.q}</h3>
                    <span
                      aria-hidden
                      className="material-symbols-outlined text-[24px] mt-1 transition-transform duration-200 group-open:rotate-45"
                    >
                      add
                    </span>
                  </summary>
                  <div className="px-6 md:px-8 pb-8 pt-2">
                    <p className="text-body-md max-w-3xl leading-relaxed">{it.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="bg-deep-ink text-surface py-20 md:py-32 px-5 md:px-16 reveal">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-8">
              <span className="text-neon-signal text-label-caps block mb-6">STILL HAVE QUESTIONS?</span>
              <h2 className="text-headline-lg uppercase">
                브랜드 상황에 맞춰<br />직접 답변드립니다
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-neon-signal text-deep-ink px-6 py-4 text-label-caps border-2 border-neon-signal hover:bg-transparent hover:text-neon-signal transition-all duration-300"
              >
                상담 문의하기
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
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
        </div>
        <div className="mt-12 pt-8 border-t border-deep-ink/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-body-md text-secondary">© 2026 CLAMOA AGENCY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-label-caps text-secondary hover:text-deep-ink transition-colors">PRIVACY</Link>
            <Link to="/terms" className="text-label-caps text-secondary hover:text-deep-ink transition-colors">TERMS</Link>
          </div>
        </div>
      </footer>

      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
