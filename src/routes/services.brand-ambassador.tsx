import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/brand-ambassador")({
  head: () => ({
    meta: [
      { title: "브랜드 앰버서더 캠페인 — 패션 PR | CLAMOA" },
      {
        name: "description",
        content:
          "브랜드 앰버서더 캠페인은 셀럽·아티스트와 장기적으로 협업해 브랜드 자산을 함께 만드는 패션 PR 방식입니다. CLAMOA의 앰버서더 매칭과 캠페인 운영.",
      },
      { property: "og:title", content: "브랜드 앰버서더 캠페인 — 패션 PR | CLAMOA" },
      {
        property: "og:description",
        content: "셀럽·아티스트 장기 앰버서더 매칭과 캠페인 운영.",
      },
      { property: "og:url", content: "https://clamoa.com/services/brand-ambassador" },
    ],
    links: [{ rel: "canonical", href: "https://clamoa.com/services/brand-ambassador" }],
  }),
  component: () => (
    <ServiceDetailPage
      eyebrow="07 — BRAND AMBASSADOR / 앰버서더"
      title={"BRAND\nAMBASSADOR"}
      definition="브랜드 앰버서더 캠페인은 셀럽·아티스트와 일정 기간 독점적으로 협업해 화보·이벤트·콘텐츠를 함께 만들고 브랜드 자산을 장기적으로 축적하는 패션 PR 방식입니다."
      fitFor={[
        "브랜드 정체성을 인물 자산과 함께 키우려는 브랜드",
        "글로벌 확장과 K-셀럽 자산을 연결하려는 브랜드",
        "장기 캠페인을 통한 안정적 노출이 필요한 브랜드",
      ]}
      steps={[
        { title: "후보 매칭", desc: "브랜드 무드·타깃 시장에 맞는 앰버서더 후보군을 제안합니다." },
        { title: "계약·권한 협상", desc: "기간·사용 범위·독점성을 협상하고 계약합니다." },
        { title: "캠페인 운영", desc: "화보·이벤트·콘텐츠를 분기·시즌 단위로 운영합니다." },
        { title: "자산 관리", desc: "캠페인 자산을 RINK에 적재하고 브랜드 채널에 활용합니다." },
      ]}
      deliverables={[
        "앰버서더 후보 제안서",
        "계약·권한 협의 지원",
        "화보·이벤트·콘텐츠 캠페인 운영",
        "캠페인 자산 아카이브 & 리포트",
      ]}
      faqs={[
        {
          q: "협찬과 앰버서더는 어떻게 다른가요?",
          a: "협찬은 단발성 노출, 앰버서더는 계약 기간 동안 독점적·장기적 협업입니다.",
        },
        {
          q: "계약 기간은 보통 어떻게 잡나요?",
          a: "6개월~1년 단위가 일반적이며, 시즌·시장 진출 일정과 맞춥니다.",
        },
        {
          q: "글로벌 활용도 가능한가요?",
          a: "사용 권한 협의 시 일본·대만·중국 등 글로벌 활용 조건을 함께 설계합니다.",
        },
      ]}
    />
  ),
});
