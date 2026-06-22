import { createFileRoute, Link } from "@tanstack/react-router";
import { SubPageNav } from "@/components/SubPageNav";
import { useEffect } from "react";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "PROCESS — 패션 PR 대행은 어떻게 진행되나요? | CLAMOA" },
      {
        name: "description",
        content:
          "패션 PR 대행은 상담 접수부터 브랜드 검토, PR 플랜 제안, 쇼룸 입점, 스타일리스트 피칭, 셀럽 협찬·클리핑, 주간 보고, 2차 확산까지 8단계로 진행됩니다. CLAMOA의 운영 방식을 단계별로 안내합니다.",
      },
      { property: "og:title", content: "PROCESS — 패션 PR 대행은 어떻게 진행되나요? | CLAMOA" },
      {
        property: "og:description",
        content:
          "상담 접수 → 검토 → PR 플랜 → 계약·쇼룸 입점 → 스타일리스트 피칭 → 셀럽 협찬 → 주간 보고 → 2차 확산. CLAMOA의 패션 PR 운영 프로세스.",
      },
      { property: "og:url", content: "https://clamoa.com/process" },
      { name: "keywords", content: "패션 PR 대행 진행 방식, 셀럽 협찬 프로세스, 패션 PR 단계, 쇼룸 입점, 스타일리스트 피칭, 협찬 리포팅" },
    ],
    links: [{ rel: "canonical", href: "https://clamoa.com/process" }],
  }),
  component: ProcessPage,
});

const steps = [
  {
    id: "01",
    title: "상담 접수",
    desc:
      "문의 폼에 브랜드명, 제품 카테고리, 희망 서비스, 캠페인 목표, 예산 범위, 진행 시기를 남기면 담당자가 빠르게 연락합니다. 정보가 구체적일수록 더 정확한 제안이 가능합니다.",
    output: "1차 미팅 일정 · 사전 진단 노트",
  },
  {
    id: "02",
    title: "브랜드 · 제품 검토",
    desc:
      "브랜드 무드, 시즌 컨셉, 타깃 소비자, 가격대, 기존 PR 자산을 검토합니다. 룩북·샘플·SNS·쇼핑몰 링크를 기반으로 시장 내 포지셔닝과 PR 적합도를 진단합니다.",
    output: "포지셔닝 진단 · 적합 PR 채널 정리",
  },
  {
    id: "03",
    title: "PR 플랜 제안",
    desc:
      "셀럽 협찬·스타일리스트 릴레이션·PPL·인플루언서·바이럴·글로벌 중 브랜드 단계에 맞는 조합을 설계합니다. KPI, 일정, 예산 구조까지 함께 제시합니다.",
    output: "PR 플랜 덱 · 견적안 · 타임라인",
  },
  {
    id: "04",
    title: "계약 및 쇼룸 입점",
    desc:
      "서비스 범위와 기간을 계약으로 확정하고, 시즌 제품을 압구정 로데오 쇼룸에 입점합니다. 룩북·인벤토리·픽업 운영 환경을 세팅합니다.",
    output: "계약서 · 쇼룸 인벤토리 · 픽업 운영 셋업",
  },
  {
    id: "05",
    title: "스타일리스트 피칭",
    desc:
      "현역 스타일리스트와 어시스턴트 풀에 신상품 프리뷰와 룩북을 공유합니다. 픽업 가능 일정과 룩 조합을 조율해 자연스러운 착장 기회를 만듭니다.",
    output: "스타일리스트별 픽업 · 룩 매칭 기록",
  },
  {
    id: "06",
    title: "셀럽 협찬 및 클리핑",
    desc:
      "방송·공항·화보·SNS 등 채널에서 발생하는 셀럽 착용 노출을 모니터링하고, 노출 자료를 RINK 시스템에 적재합니다.",
    output: "착장 클리핑 아카이브 · 노출 채널별 데이터",
  },
  {
    id: "07",
    title: "주간 보고",
    desc:
      "셀럽 픽업·착용 현황, 노출 채널, 미디어 가치 환산, SNS 반응을 주간 단위로 보고합니다. 데이터를 기반으로 다음 주 운영 방향을 함께 결정합니다.",
    output: "주간 리포트 · 다음 주 액션 플랜",
  },
  {
    id: "08",
    title: "2차 확산 (옵션)",
    desc:
      "확보된 셀럽 착용 자료를 매거진·블로그·SNS 시딩, 상세페이지, 광고 소재, 일본·대만·중국 글로벌 채널로 확장합니다. 단순 노출이 아닌 자산화를 목표로 합니다.",
    output: "2차 콘텐츠 패키지 · 글로벌 확장 시나리오",
  },
];

function ProcessPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("active")),
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
              className={`text-label-caps hover:text-neon-signal transition-colors duration-200 ${h === "/process" ? "text-deep-ink" : "text-secondary"}`}
            >
              {l}
            </Link>
          ))}
        </nav>
      </header>

      <SubPageNav variant="light" />

      <main className="pt-24 md:pt-32">
        <section className="px-5 md:px-16 pt-24 md:pt-40 pb-16 md:pb-24 reveal">
          <span className="text-label-caps text-secondary block mb-8">PROCESS</span>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-10">
              <h1 className="text-display-xl uppercase mb-12">
                FROM BRIEF<br />TO REUSE
              </h1>
            </div>
            <div className="col-span-12 md:col-span-8">
              <p className="text-body-lg border-l-4 border-neon-signal pl-6">
                패션 PR 대행은 상담 접수부터 브랜드 검토, PR 플랜 제안, 쇼룸 입점, 스타일리스트 피칭, 셀럽 협찬·클리핑, 주간 보고, 2차 확산까지 8단계로 진행됩니다. CLAMOA는 각 단계에서 무엇을 운영하고 어떤 결과물을 전달하는지 투명하게 공개합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 md:px-16 mb-20 md:mb-32 reveal">
          <ol className="border-t-2 border-deep-ink">
            {steps.map((s) => (
              <li
                key={s.id}
                className="border-b border-deep-ink/15 py-10 md:py-14 grid grid-cols-12 gap-6 hover:bg-deep-ink/[0.02] transition-colors"
              >
                <div className="col-span-12 md:col-span-2">
                  <span className="text-label-caps text-secondary block">STEP</span>
                  <span className="text-display-xl leading-none">{s.id}</span>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <h2 className="text-headline-md uppercase mb-4">{s.title}</h2>
                  <p className="text-body-md leading-relaxed">{s.desc}</p>
                </div>
                <div className="col-span-12 md:col-span-4 md:border-l md:border-deep-ink/20 md:pl-6">
                  <span className="text-label-caps text-secondary block mb-3">OUTPUT</span>
                  <p className="text-body-md">{s.output}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="bg-deep-ink text-surface py-20 md:py-32 px-5 md:px-16 reveal">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-8">
              <span className="text-neon-signal text-label-caps block mb-6">START FROM STEP 01</span>
              <h2 className="text-headline-lg uppercase">
                상담 접수부터<br />함께 시작합니다
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
    </div>
  );
}
