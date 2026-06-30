import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/celebrity-seeding")({
  head: () => ({
    meta: [
      { title: "셀럽 협찬(Celebrity Seeding) — 패션 PR | CLAMOA" },
      {
        name: "description",
        content:
          "셀럽 협찬은 배우·아이돌·방송인 착장 노출을 통해 브랜드 인지도와 콘텐츠 자산을 확보하는 패션 PR입니다. CLAMOA의 셀럽 시딩 진행 방식과 산출물을 안내합니다.",
      },
      { property: "og:title", content: "셀럽 협찬(Celebrity Seeding) — 패션 PR | CLAMOA" },
      {
        property: "og:description",
        content: "패션 브랜드를 위한 셀럽 협찬 대행. 매칭 전략, 시딩 운영, 클리핑 데이터 관리까지.",
      },
      { property: "og:url", content: "https://clamoa.com/services/celebrity-seeding" },
    ],
    links: [{ rel: "canonical", href: "https://clamoa.com/services/celebrity-seeding" }],
  }),
  component: () => (
    <ServiceDetailPage
      eyebrow="01 — CELEBRITY SEEDING / 셀럽 협찬"
      title={"CELEBRITY\nSEEDING"}
      definition="셀럽 협찬은 브랜드 제품을 배우·아이돌·방송인 등 영향력 있는 인물에게 노출해 브랜드 인지도와 콘텐츠 자산을 확보하는 패션 PR 방식입니다. CLAMOA는 브랜드 무드에 맞는 셀럽 매칭과 협찬 운영, 클리핑 데이터 관리를 통합 수행합니다."
      fitFor={[
        "신규 런칭 후 빠른 인지도 확보가 필요한 브랜드",
        "기존 컬렉션 대비 무드 전환이 필요한 브랜드",
        "MD·바이어 대상 신뢰도 시그널이 필요한 브랜드",
        "글로벌 진출을 앞두고 K-셀럽 레퍼런스가 필요한 브랜드",
      ]}
      steps={[
        {
          title: "BRIEF & 매칭 전략",
          desc: "브랜드 무드, 타깃, 시즌 방향을 기반으로 셀럽 후보군과 노출 시나리오를 설계합니다.",
        },
        {
          title: "셀럽·기획사 컨택",
          desc: "스타일리스트와 기획사 네트워크를 통해 협찬 가능 일정과 룩을 조율합니다.",
        },
        {
          title: "시딩 운영",
          desc: "픽업·반납, 룩 조합 가이드, 촬영·공항·행사 노출까지 현장 운영을 진행합니다.",
        },
        {
          title: "클리핑 & 리포트",
          desc: "착장 캡처, 미디어 노출, RINK 기반 자료 정리와 리포트를 제공합니다.",
        },
      ]}
      deliverables={[
        "셀럽 매칭 후보 리스트 & 적합도 분석",
        "협찬 운영(픽업·룩 가이드·반납)",
        "착장 노출 클리핑 아카이브",
        "미디어·SNS 노출 리포트",
        "2차 콘텐츠 활용 가이드(SNS·상세페이지)",
      ]}
      faqs={[
        {
          q: "셀럽 협찬은 어떤 브랜드에 효과적인가요?",
          a: "런칭 직후 인지도가 필요한 브랜드, 무드 전환을 시도하는 브랜드, 그리고 글로벌 진출을 앞두고 K-셀럽 레퍼런스가 필요한 브랜드에 특히 효과적입니다.",
        },
        {
          q: "협찬 비용은 어떻게 책정되나요?",
          a: "셀럽 등급, 노출 채널, 사용 권한 범위에 따라 달라집니다. 브리프 단계에서 예상 범위를 제시하고 계약 전 확정합니다.",
        },
        {
          q: "착장 노출은 어떻게 측정하나요?",
          a: "방송·공항·SNS·매거진 등 채널별 클리핑을 RINK에 적재하고, 노출 수치와 미디어 가치를 리포트로 환산합니다.",
        },
        {
          q: "협찬 후 콘텐츠를 브랜드 채널에서 사용할 수 있나요?",
          a: "사용 범위는 기획사·셀럽과 사전 협의하여 결정합니다. 일반적으로 SNS·상세페이지·뉴스레터 등 2차 활용 권한을 함께 협의합니다.",
        },
        {
          q: "최소 진행 기간은 어느 정도인가요?",
          a: "단발 시딩은 4~6주, 시즌 운영은 분기 단위 권장합니다. 글로벌 캠페인은 별도 일정으로 설계합니다.",
        },
      ]}
    />
  ),
});
