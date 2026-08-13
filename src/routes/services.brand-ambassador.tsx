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
      definition="브랜드 앰버서더 캠페인은 셀럽·아티스트와 일정 기간 협업해 룩북·캠페인 촬영, 브랜드 행사 방문, 아티스트 SNS 게재 등 다양한 활동을 전개하며 브랜드 이미지와 인지도를 지속적으로 강화하는 패션 PR 방식입니다."
      fitFor={[
        "브랜드 이미지와 잘 맞는 셀럽·아티스트를 대표 모델로 활용하고 싶은 브랜드",
        "글로벌 확장과 K-셀럽 자산을 연결하려는 브랜드",
        "일정 기간 지속적인 셀럽 노출을 통해 브랜드 인지도와 이미지를 강화하고 싶은 브랜드",
      ]}
      processIntro="브랜드와 아티스트 매칭부터 계약, 캠페인 촬영 및 활동 운영까지 전 과정을 진행합니다."
      steps={[
        { title: "후보 매칭", desc: "브랜드 무드·타깃 시장에 맞는 앰버서더 후보군을 제안합니다." },
        {
          title: "계약·조건 협의",
          desc: "계약 기간·모델료·활동 범위·독점 조건 등을 협의하고 계약을 진행합니다.",
        },
        {
          title: "캠페인 운영",
          desc: "촬영 스텝 선정 및 일정을 조율하고, 룩북·캠페인 촬영을 분기·시즌 단위로 진행합니다.",
        },
        {
          title: "앰버서더 활동 관리",
          desc: "계약된 활동 범위에 따라 SNS 게재, 행사 참석 등 앰버서더 활동 일정과 진행 사항을 조율·관리합니다.",
        },
      ]}
      deliverables={[
        "룩북·캠페인 화보 촬영 결과물",
        "캠페인 영상 콘텐츠",
        "아티스트 SNS 게재 콘텐츠",
        "행사 참석 등 계약된 앰버서더 활동 결과물",
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
