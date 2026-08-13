import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/offline-event-pr")({
  head: () => ({
    meta: [
      { title: "오프라인 이벤트 PR — 패션 PR | CLAMOA" },
      {
        name: "description",
        content:
          "오프라인 이벤트 PR은 팝업, 쇼룸 프레스데이, 런칭 파티 등 오프라인 브랜드 경험을 설계하고 미디어 노출까지 연결하는 패션 PR 방식입니다.",
      },
      { property: "og:title", content: "오프라인 이벤트 PR — 패션 PR | CLAMOA" },
      {
        property: "og:description",
        content: "팝업·프레스데이·런칭 파티 등 오프라인 브랜드 경험 설계와 미디어 PR.",
      },
      { property: "og:url", content: "https://clamoa.com/services/offline-event-pr" },
    ],
    links: [{ rel: "canonical", href: "https://clamoa.com/services/offline-event-pr" }],
  }),
  component: () => (
    <ServiceDetailPage
      eyebrow="06 — OFFLINE EVENT PR / 오프라인 이벤트"
      title={"OFFLINE\nEVENT"}
      definition="오프라인 이벤트 PR은 팝업스토어·쇼룸 프레스데이·런칭 파티 등 오프라인 브랜드 경험을 기획·운영하고, 이를 매거진·셀럽·인플루언서·SNS 노출까지 연결하는 패션 PR 방식입니다."
      fitFor={[
        "플래그십 스토어 오픈이나 팝업 행사를 준비하는 브랜드",
        "신상품·신컬렉션 런칭을 앞두고 있는 브랜드",
        "프레스·셀럽·바이어 대상의 브랜드 행사를 운영하고자 하는 브랜드",
      ]}
      processIntro="행사 성격과 타깃에 맞춰 셀럽 섭외부터 RSVP, 포토월 운영까지 진행합니다."
      steps={[
        {
          title: "초청 대상 선정",
          desc: "행사 목적과 브랜드 타깃에 맞는 셀럽·프레스·인플루언서 후보를 구성합니다.",
        },
        {
          title: "셀럽 섭외·RSVP 진행",
          desc: "셀럽 섭외 및 초청을 진행하고, 인플루언서 참석 가능 여부를 확인해 RSVP를 관리합니다.",
        },
        {
          title: "포토월·현장 운영",
          desc: "참석 셀럽의 포토월 촬영 및 현장 동선을 관리하고 주요 참석자 응대를 진행합니다.",
        },
        {
          title: "참석 결과 취합",
          desc: "최종 참석자와 주요 현장 결과를 정리해 행사 결과를 전달합니다.",
        },
      ]}
      deliverables={[
        "셀럽·프레스·인플루언서 초청 리스트",
        "최종 참석자 리스트",
        "포토월 및 현장 운영 결과 정리",
        "행사 종료 후 최종 진행 결과 리포트",
      ]}
      faqs={[
        {
          q: "행사 규모는 어떻게 정하나요?",
          a: "타깃 인원, 미디어 노출 목표, 예산을 기준으로 50~300명 범위에서 설계합니다.",
        },
        {
          q: "셀럽 노출 자료를 2차 활용할 수 있나요?",
          a: "2차 활용은 가능하나, 활용 채널·기간·범위에 따라 별도 협의가 필요하며 추가 비용이 발생할 수 있습니다.",
        },
        {
          q: "공간이 없어도 가능한가요?",
          a: "행사 진행을 위한 공간이 필요하며, 공간이 없는 경우 쇼룸·별도 팝업 공간 등의 매칭부터 함께 진행할 수 있습니다. 또한 백화점 팝업 등 기존 행사 공간이 확보된 경우에도 진행 가능합니다.",
        },
      ]}
    />
  ),
});
