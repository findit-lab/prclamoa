import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

const REGIONS = [
  {
    flag: "JP",
    title: "JAPAN",
    desc: "도쿄·오사카 셀렉트샵 입점, 일본 매거진·인플루언서 PR, 팝업 운영.",
  },
  {
    flag: "TW",
    title: "TAIWAN",
    desc: "타이베이 편집샵 유통, 현지 KOL 협업, 한류 콘텐츠 연계 캠페인.",
  },
  {
    flag: "CN",
    title: "CHINA",
    desc: "샤오홍수(小红书) 콘텐츠, 왕홍 라이브커머스, 티몰·티몰글로벌 셀러 매칭.",
  },
];

export const Route = createFileRoute("/services/global-expansion")({
  head: () => ({
    meta: [
      { title: "글로벌 확장(Global Expansion) — 패션 PR | CLAMOA" },
      {
        name: "description",
        content:
          "글로벌 확장은 한국 패션 브랜드의 일본·대만·중국 진출을 위한 PR·유통 연계 서비스입니다. 일본 셀렉트샵, 대만 편집샵, 중국 샤오홍수·왕홍 라이브커머스 포함.",
      },
      { property: "og:title", content: "글로벌 확장(Global Expansion) — 패션 PR | CLAMOA" },
      {
        property: "og:description",
        content:
          "한국 패션 브랜드의 일본·대만·중국 진출을 위한 PR·유통 통합 설계.",
      },
      { property: "og:url", content: "https://clamoa.com/services/global-expansion" },
    ],
    links: [
      { rel: "canonical", href: "https://clamoa.com/services/global-expansion" },
    ],
  }),
  component: () => (
    <ServiceDetailPage
      eyebrow="08 — GLOBAL EXPANSION / 글로벌 확장"
      title={"GLOBAL\nEXPANSION"}
      definition="글로벌 확장은 한국 패션 브랜드가 일본·대만·중국 등 아시아 시장에 진입할 때 현지 PR과 유통 채널을 동시에 설계하는 패션 PR 방식입니다. CLAMOA는 셀렉트샵·편집샵 입점부터 샤오홍수·왕홍 라이브커머스 운영까지 통합 지원합니다."
      fitFor={[
        "한국 시장에서 자리 잡고 아시아 진출을 준비하는 브랜드",
        "일본 셀렉트샵 입점 또는 팝업 진출을 검토 중인 브랜드",
        "대만·홍콩 편집샵 및 현지 KOL 협업이 필요한 브랜드",
        "중국 샤오홍수·왕홍 채널 진입을 시도하는 브랜드",
      ]}
      steps={[
        {
          title: "시장·채널 진단",
          desc: "타깃 국가의 카테고리 수요, 가격대, 진입 가능 채널을 분석합니다.",
        },
        {
          title: "현지 파트너 매칭",
          desc: "셀렉트샵·편집샵·왕홍·MCN과의 매칭 및 조건 협상을 진행합니다.",
        },
        {
          title: "콘텐츠·캠페인 운영",
          desc: "현지 매거진·KOL·라이브커머스에 맞는 콘텐츠를 기획·운영합니다.",
        },
        {
          title: "판매·노출 리포트",
          desc: "채널별 노출, 입점 매출, 콘텐츠 성과를 통합 리포트로 제공합니다.",
        },
      ]}
      deliverables={[
        "타깃 국가 시장 진단 보고서",
        "현지 셀렉트샵·편집샵 입점 매칭",
        "샤오홍수 콘텐츠·왕홍 라이브 운영",
        "현지 KOL·매거진 PR 캠페인",
        "통합 노출·매출 리포트",
      ]}
      extra={
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <span className="text-label-caps text-secondary block mb-3">
              03.5 — REGIONS
            </span>
            <h2 className="text-headline-md uppercase">대응 지역</h2>
          </div>
          <ul className="col-span-12 md:col-span-8 grid sm:grid-cols-3 gap-4">
            {REGIONS.map((r) => (
              <li
                key={r.flag}
                className="border-2 border-deep-ink p-5 flex flex-col gap-3"
              >
                <span className="text-label-caps font-mono text-secondary">
                  {r.flag}
                </span>
                <h3 className="text-headline-sm uppercase">{r.title}</h3>
                <p className="text-body-sm text-secondary leading-relaxed">
                  {r.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      }
      faqs={[
        {
          q: "어느 국가부터 진출하는 것이 좋은가요?",
          a: "브랜드 가격대와 무드에 따라 권장 국가가 달라집니다. 컨템포러리 여성복은 일본·대만, 스트리트·뷰티 결합은 중국 샤오홍수 진입이 효과적인 경우가 많습니다.",
        },
        {
          q: "샤오홍수·왕홍 라이브커머스 운영 방식은?",
          a: "타깃 카테고리에 맞는 왕홍(KOL)을 선정해 라이브 스케줄을 잡고, 사전 콘텐츠 시딩 → 라이브 → 사후 리뷰 콘텐츠로 이어지는 3단 캠페인으로 운영합니다.",
        },
        {
          q: "현지 입점은 위탁/직거래 중 어떤 방식인가요?",
          a: "셀렉트샵·편집샵 정책에 따라 위탁·매입·컨사인 중 선택합니다. CLAMOA는 계약 조건 협상과 물류 라우팅을 함께 지원합니다.",
        },
        {
          q: "현지화 콘텐츠는 어떻게 제작하나요?",
          a: "현지 카피라이터·KOL·포토그래퍼와 협업해 언어·톤·플랫폼 가이드라인에 맞춘 콘텐츠를 별도 제작합니다.",
        },
      ]}
    />
  ),
});
