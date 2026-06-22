import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/stylist-relations")({
  head: () => ({
    meta: [
      { title: "스타일리스트 릴레이션 — 패션 PR | CLAMOA" },
      {
        name: "description",
        content:
          "스타일리스트 릴레이션은 스타일리스트가 상시 픽업·검토하는 환경을 만들어 셀럽 착장 기회를 늘리는 패션 PR입니다. CLAMOA 압구정 쇼룸 기반 운영.",
      },
      { property: "og:title", content: "스타일리스트 릴레이션 — 패션 PR | CLAMOA" },
      {
        property: "og:description",
        content:
          "압구정 쇼룸 기반 스타일리스트 네트워크 운영. 상시 픽업·룩 매칭·시즌 프리뷰.",
      },
      { property: "og:url", content: "https://clamoa.com/services/stylist-relations" },
    ],
    links: [
      { rel: "canonical", href: "https://clamoa.com/services/stylist-relations" },
    ],
  }),
  component: () => (
    <ServiceDetailPage
      eyebrow="02 — STYLIST RELATIONS / 스타일리스트 릴레이션"
      title={"STYLIST\nRELATIONS"}
      definition="스타일리스트 릴레이션은 방송·화보·아티스트 활동을 담당하는 스타일리스트가 브랜드 제품을 상시 검토·픽업할 수 있는 환경을 만들어 노출 기회를 지속적으로 늘리는 패션 PR 방식입니다. CLAMOA는 압구정 쇼룸을 기반으로 운영합니다."
      fitFor={[
        "꾸준한 셀럽 착장 노출이 필요한 컨템포러리 브랜드",
        "시즌별 룩북·신상품 유통이 필요한 브랜드",
        "방송·화보·MV 노출 빈도를 높이고 싶은 브랜드",
        "스타일리스트 접점이 부족한 신규·해외 브랜드",
      ]}
      steps={[
        {
          title: "쇼룸 입점 & 인벤토리",
          desc: "시즌 제품을 압구정 쇼룸에 큐레이션 진열하고 픽업 가능한 인벤토리로 운영합니다.",
        },
        {
          title: "스타일리스트 프리뷰",
          desc: "주요 스타일리스트·어시스턴트 대상 신상품 프리뷰와 룩북 공유를 진행합니다.",
        },
        {
          title: "픽업·반납 관리",
          desc: "픽업 일정, 룩 조합, 반납·세탁·복원까지의 라이프사이클을 운영합니다.",
        },
        {
          title: "노출 트래킹",
          desc: "스타일리스트별 픽업 이력과 실착 노출을 RINK에 적재해 트래킹합니다.",
        },
      ]}
      deliverables={[
        "쇼룸 입점 운영(시즌)",
        "스타일리스트 프리뷰·룩북 배포",
        "픽업·반납 로지스틱스",
        "스타일리스트별 픽업/노출 리포트",
        "재고·손상 관리 리포트",
      ]}
      faqs={[
        {
          q: "스타일리스트 릴레이션과 셀럽 협찬의 차이는?",
          a: "셀럽 협찬은 특정 셀럽/노출을 타깃팅하는 캠페인성 PR이고, 스타일리스트 릴레이션은 스타일리스트가 상시 픽업하도록 환경을 만드는 인프라성 PR입니다.",
        },
        {
          q: "쇼룸 입점 단위는 어떻게 되나요?",
          a: "기본 시즌(분기) 단위이며, 신상품 입고 주기에 따라 인벤토리를 업데이트합니다.",
        },
        {
          q: "픽업된 제품 손상은 어떻게 처리되나요?",
          a: "픽업·반납 시점 컨디션 체크와 보험 가이드를 적용하며, 손상 시 사전 합의된 정산 기준을 따릅니다.",
        },
        {
          q: "어떤 스타일리스트와 연결되나요?",
          a: "방송·화보·MV·아티스트 활동을 담당하는 현역 스타일리스트 네트워크와 어시스턴트 풀이 포함됩니다.",
        },
      ]}
    />
  ),
});
