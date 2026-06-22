import { createFileRoute, Link } from "@tanstack/react-router";
import { SubPageNav } from "@/components/SubPageNav";
import { useEffect } from "react";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "CASE STUDIES — 패션 PR 캠페인 사례 | CLAMOA" },
      {
        name: "description",
        content:
          "CLAMOA가 진행한 패션 PR 캠페인 케이스 스터디. 브랜드 카테고리, 캠페인 목표, 진행 서비스, 노출 채널, 결과, 2차 활용까지 서술형으로 정리합니다.",
      },
      { property: "og:title", content: "CASE STUDIES — 패션 PR 캠페인 사례 | CLAMOA" },
      {
        property: "og:description",
        content:
          "셀럽 협찬, PPL, 인플루언서 PR, 글로벌 확장 캠페인의 결과와 운영 방식을 서술형 케이스 스터디로 공개합니다.",
      },
      { property: "og:url", content: "https://clamoa.com/case-studies" },
    ],
    links: [{ rel: "canonical", href: "https://clamoa.com/case-studies" }],
  }),
  component: CaseStudiesPage,
});

type CaseStudy = {
  id: string;
  eyebrow: string;
  title: string;
  category: string;
  goal: string;
  services: string[];
  channels: string[];
  talentType: string;
  results: { qualitative: string; quantitative: string };
  reuse: string;
  clamoaRole: string;
};

const cases: CaseStudy[] = [
  {
    id: "case-01",
    eyebrow: "CASE 01 — CONTEMPORARY WOMEN'S WEAR",
    title: "런칭 시즌 인지도 확보 캠페인",
    category: "컨템포러리 여성복 / 신규 런칭 브랜드",
    goal: "런칭 시즌 3개월 안에 타깃 소비자층(20대 후반~30대 초반)에게 브랜드 무드와 키 아이템을 인지시키고, 스타일리스트 픽업 기반의 자연스러운 셀럽 착용 레퍼런스를 확보.",
    services: ["셀럽 협찬(Celebrity Seeding)", "스타일리스트 릴레이션", "에디토리얼 & 바이럴 PR"],
    channels: ["방송 출연 의상", "공항 패션", "주요 매거진 화보", "셀럽·매거진 SNS 채널"],
    talentType: "주요 K-POP 아이돌 멤버, 드라마 출연 배우 다수 (실명 비공개)",
    results: {
      qualitative:
        "런칭 직후 브랜드 무드가 패션 매거진·SNS에서 반복적으로 언급되며 컨템포러리 신(scene)에서 인지도가 빠르게 형성됨. 스타일리스트 픽업이 단발이 아닌 시즌 내 반복 픽업으로 이어지며 자체 운영 가능한 PR 자산이 축적됨.",
      quantitative:
        "[ 시즌 클리핑 N건 ] · [ 셀럽 착용 노출 N회 ] · [ 매거진/온라인 미디어 노출 N건 ] · [ 자사 SNS 도달 N% 증가 ]",
    },
    reuse:
      "확보된 셀럽 착용 자료를 브랜드 공식 SNS 시딩, 상세페이지 비주얼, 시즌 캠페인 광고 소재, 해외 바이어 미팅 자료에 재활용.",
    clamoaRole:
      "브랜드 포지셔닝 진단 → 셀럽·스타일리스트 매칭 전략 설계 → 압구정 쇼룸 운영 → 픽업·반납·룩 가이드 → RINK 기반 노출 데이터 적재 및 주간 리포트.",
  },
  {
    id: "case-02",
    eyebrow: "CASE 02 — ACCESSORY BRAND / GLOBAL",
    title: "글로벌 진출 연계 셀럽·인플루언서 캠페인",
    category: "액세서리 브랜드 / 일본·중화권 진출 단계",
    goal: "국내에서 확보한 셀럽 착용 레퍼런스를 기반으로 일본 셀렉트샵 입점 협상력을 만들고, 동시에 샤오홍수·왕홍 라이브커머스를 통해 중화권 초기 매출을 만드는 것.",
    services: [
      "셀럽 협찬",
      "인플루언서 PR",
      "에디토리얼 & 바이럴 PR",
      "글로벌 확장(일본·대만·중국)",
    ],
    channels: ["국내 셀럽 SNS·매거진", "일본 패션 미디어 협업", "샤오홍수 KOC/KOL 콘텐츠", "왕홍 라이브커머스"],
    talentType:
      "국내 주요 K-POP 아이돌 멤버, 패션 인플루언서, 중화권 KOC/KOL (실명 비공개)",
    results: {
      qualitative:
        "국내 셀럽 착용 레퍼런스가 일본 바이어 미팅 자료로 활용되며 셀렉트샵 입점 협상이 단축됨. 샤오홍수에서 브랜드 키 아이템 키워드 검색량이 증가하고, 라이브커머스 1회차에서 재고 소진 이슈가 발생할 정도의 반응을 확보.",
      quantitative:
        "[ 일본 셀렉트샵 N개 입점 ] · [ 샤오홍수 노출 N회 ] · [ 라이브커머스 1회차 매출 N원 ] · [ 중화권 신규 팔로워 N명 ]",
    },
    reuse:
      "셀럽 착용 자료 + 인플루언서 콘텐츠 + 라이브커머스 클립을 묶어 글로벌 바이어용 영문/일문 브랜드 덱과 한·중·일 SNS 채널 운영 자산으로 재활용.",
    clamoaRole:
      "국내 PR과 글로벌 진출 동기화 전략 설계 → 셀럽·인플루언서 매칭 → 일본 바이어 매칭 → 샤오홍수 콘텐츠 가이드 → 왕홍 라이브커머스 운영사 연결 및 캠페인 통합 리포트.",
  },
];

function CaseStudiesPage() {
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
              className={`text-label-caps hover:text-neon-signal transition-colors duration-200 ${h === "/case-studies" ? "text-deep-ink" : "text-secondary"}`}
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
          <span className="text-label-caps text-secondary block mb-8">CASE STUDIES</span>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-10">
              <h1 className="text-display-xl uppercase mb-12">
                STORIES BEHIND<br />THE EXPOSURE
              </h1>
            </div>
            <div className="col-span-12 md:col-span-8">
              <p className="text-body-lg border-l-4 border-neon-signal pl-6">
                CLAMOA가 진행한 패션 PR 캠페인을 브랜드 무드, 목표, 진행 서비스, 결과, 2차 활용 관점에서 서술형으로 정리합니다. 셀럽 실명·이미지는 초상권을 고려해 비공개로 처리하고, 운영 방식과 성과 구조에 집중합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="px-5 md:px-16 mb-20 md:mb-32 reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-deep-ink border border-deep-ink">
            {cases.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="bg-surface p-8 md:p-10 hover:bg-deep-ink hover:text-surface transition-colors duration-300 group"
              >
                <span className="text-label-caps text-secondary group-hover:text-neon-signal block mb-6">
                  {c.eyebrow}
                </span>
                <h2 className="text-headline-lg uppercase mb-4 leading-tight">{c.title}</h2>
                <p className="text-body-md opacity-90 mb-6">{c.category}</p>
                <span className="inline-flex items-center gap-2 text-label-caps">
                  READ CASE
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Detail Sections */}
        {cases.map((c) => (
          <section
            key={c.id}
            id={c.id}
            className="px-5 md:px-16 mb-20 md:mb-32 scroll-mt-32 reveal"
          >
            <div className="border-t-2 border-deep-ink pt-12 mb-12">
              <span className="text-label-caps text-secondary block mb-6">{c.eyebrow}</span>
              <h2 className="text-headline-lg uppercase max-w-3xl">{c.title}</h2>
            </div>

            <dl className="grid grid-cols-1 md:grid-cols-2 gap-px bg-deep-ink border border-deep-ink">
              {[
                ["브랜드 카테고리", c.category],
                ["캠페인 목표", c.goal],
                ["진행 서비스", c.services.join(" · ")],
                ["노출 채널", c.channels.join(" · ")],
                ["셀럽/콘텐츠 유형", c.talentType],
                ["결과(정성)", c.results.qualitative],
                ["결과(정량)", c.results.quantitative],
                ["2차 활용", c.reuse],
                ["클라모아 역할", c.clamoaRole],
              ].map(([label, value]) => (
                <div key={label} className="bg-surface p-6 md:p-8">
                  <dt className="text-label-caps text-secondary mb-3">{label}</dt>
                  <dd className="text-body-md leading-relaxed">{value}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}

        {/* CTA */}
        <section className="bg-deep-ink text-surface py-20 md:py-32 px-5 md:px-16 reveal">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-8">
              <span className="text-neon-signal text-label-caps block mb-6">NEXT CAMPAIGN</span>
              <h2 className="text-headline-lg uppercase">
                다음 케이스의<br />주인공이 되어보세요
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
