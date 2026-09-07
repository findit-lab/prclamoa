import { koServiceAlternates } from "@/i18n/serviceHead";
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
          "글로벌 확장은 한국 패션 브랜드의 일본·대만·중국 등 아시아 시장 진출을 위해 현지 유통과 마케팅을 연계하는 글로벌 비즈니스 지원 서비스입니다. 해외 셀렉트샵·편집샵 입점부터 샤오홍수 마케팅, 왕홍 라이브커머스 매칭까지 지원합니다.",
      },
      { property: "og:title", content: "글로벌 확장(Global Expansion) — 패션 PR | CLAMOA" },
      {
        property: "og:description",
        content: "한국 패션 브랜드의 아시아 시장 진출을 위한 해외 유통 입점과 현지 마케팅 연계 지원.",
      },
      { property: "og:url", content: "https://clamoa.com/services/global-expansion" },
    ],
    links: [{ rel: "canonical", href: "https://clamoa.com/services/global-expansion" }, ...koServiceAlternates("global-expansion")],
  }),
  component: () => (
    <ServiceDetailPage
      eyebrow="08 — GLOBAL EXPANSION / 글로벌 확장"
      title={"GLOBAL\nEXPANSION"}
      definition="글로벌 확장은 한국 패션 브랜드의 일본·대만·중국 등 아시아 시장 진출을 위해 현지 유통과 마케팅을 연계하는 글로벌 비즈니스 지원 서비스입니다. CLAMOA는 해외 셀렉트샵·편집샵 등 유통 채널 입점부터 샤오홍수 마케팅, 왕홍 라이브커머스 매칭까지 브랜드와 시장 상황에 맞춰 지원합니다."
      fitFor={[
        "일본·대만·중국 등 아시아 시장 진출을 준비하는 브랜드",
        "해외 셀렉트샵·편집샵 등 신규 유통 채널 입점을 원하는 브랜드",
        "해외 판매 채널을 확대하고 안정적인 유통 기반을 구축하고 싶은 브랜드",
        "샤오홍수·왕홍 등 현지 마케팅 채널을 활용해 브랜드 인지도를 높이고 싶은 브랜드",
      ]}
      processIntro="브랜드와 진출 국가에 맞는 해외 유통·마케팅 방향을 설정하고, 채널별 진행 조건에 맞춰 실무를 운영합니다."
      steps={[
        {
          title: "진출 방향·채널 설정",
          desc: "타깃 국가와 브랜드 특성에 맞춰 편집샵 입점, 해외 유통, 샤오홍수 마케팅, 왕홍 라이브커머스 등 적합한 진출 방향을 설정합니다.",
        },
        {
          title: "홀세일 자료·입점 진행",
          desc: "편집샵 및 해외 채널 입점을 위해 홀세일가가 표기된 라인시트를 전달받고, 바이어 검토 후 발주서(PO) 형식으로 입점 절차를 진행합니다.",
        },
        {
          title: "현지 파트너·마케팅 매칭",
          desc: "현지 바이어·유통사·왕홍 등 파트너 매칭을 진행하며, 왕홍 라이브커머스는 적합한 파트너와 매칭이 성사된 경우에 한해 세부 조건을 협의해 진행합니다.",
        },
        {
          title: "채널별 운영 방식 협의",
          desc: "샤오홍수 등 현지 마케팅은 브랜드 목표와 예산에 따라 월 대행 또는 건별 진행 방식으로 운영 방향을 설정하고 실행합니다.",
        },
      ]}
      deliverablesTitle="기대 효과"
      deliverables={[
        "해외 유통 채널 진입 및 브랜드 판매 접점 확대",
        "현지 셀렉트샵·편집샵 입점을 통한 판매 채널 다각화",
        "샤오홍수·왕홍 등 현지 채널을 활용한 브랜드 인지도 형성",
        "국가별 유통·마케팅 파트너 확보를 통한 해외 진출 기반 마련",
        "지속적인 해외 유통 및 판매 기회 확대",
      ]}
      extra={
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <span className="text-label-caps text-secondary block mb-3">03.5 — REGIONS</span>
            <h2 className="text-headline-md uppercase">대응 지역</h2>
          </div>
          <ul className="col-span-12 md:col-span-8 grid sm:grid-cols-3 gap-4">
            {REGIONS.map((r) => (
              <li key={r.flag} className="border-2 border-deep-ink p-5 flex flex-col gap-3">
                <span className="text-label-caps font-mono text-secondary">{r.flag}</span>
                <h3 className="text-headline-sm uppercase">{r.title}</h3>
                <p className="text-body-sm text-secondary leading-relaxed">{r.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      }
      faqs={[
        {
          q: "해외 유통은 어떤 방식으로 진행되나요?",
          a: "브랜드의 홀세일 라인시트를 바탕으로 현지 바이어·유통 채널에 제안하고, 관심 채널과 조건 협의 후 발주서(PO) 기준으로 입점 및 주문을 진행합니다.",
        },
        {
          q: "샤오홍수 마케팅과 왕홍 라이브커머스는 어떻게 진행되나요?",
          a: "샤오홍수 마케팅은 연예인 착용 자료를 지속적으로 콘텐츠화해 아카이빙하거나, 중국 인플루언서 시딩을 통해 현지 콘텐츠를 확보하는 방식으로 진행합니다. 왕홍 라이브커머스는 적합한 왕홍과 매칭이 성사된 후 라인시트를 전달하고 홀세일가 및 조건을 협의한 뒤 커머스를 진행하며, 발생한 주문 건에 맞춰 제품을 출고합니다.",
        },
        {
          q: "편집샵 입점은 어떤 방식인가요?",
          a: "현지 바이어가 브랜드 라인시트를 검토한 뒤 원하는 제품을 발주하는 방식으로 진행되며, 일반적으로 홀세일가 기준의 완사입 구조로 운영됩니다.",
        },
        {
          q: "해외 유통 총판도 진행하나요?",
          a: "초기에는 테스트 형태로 소량 발주를 먼저 진행해 현지 반응을 확인하고, 판매 성과와 시장 가능성이 확인되면 이후 총판 계약까지 협의해 진행할 수 있습니다.",
        },
      ]}
    />
  ),
});
