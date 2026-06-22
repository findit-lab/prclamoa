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
    links: [
      { rel: "canonical", href: "https://clamoa.com/services/offline-event-pr" },
    ],
  }),
  component: () => (
    <ServiceDetailPage
      eyebrow="06 — OFFLINE EVENT PR / 오프라인 이벤트"
      title={"OFFLINE\nEVENT"}
      definition="오프라인 이벤트 PR은 팝업스토어·쇼룸 프레스데이·런칭 파티 등 오프라인 브랜드 경험을 기획·운영하고, 이를 매거진·셀럽·인플루언서·SNS 노출까지 연결하는 패션 PR 방식입니다."
      fitFor={[
        "신상품·신컬렉션 런칭을 앞둔 브랜드",
        "오프라인 채널 진출·팝업이 필요한 브랜드",
        "프레스·셀럽·바이어 대상 비공개 행사 운영 브랜드",
      ]}
      steps={[
        { title: "콘셉트 기획", desc: "행사 목적·타깃·공간 무드를 정의합니다." },
        { title: "공간 & 프로덕션", desc: "공간 디렉팅, 케이터링, 설치, 사이니지를 운영합니다." },
        { title: "초청·운영", desc: "프레스·셀럽·인플루언서 초청과 현장 의전을 진행합니다." },
        { title: "사후 PR", desc: "현장 콘텐츠를 매거진·SNS·후기 콘텐츠로 재확산합니다." },
      ]}
      deliverables={[
        "행사 기획안 & 공간 디렉팅",
        "프레스·셀럽·인플루언서 초청 운영",
        "현장 콘텐츠(사진·영상) 아카이브",
        "사후 미디어·SNS 노출 리포트",
      ]}
      faqs={[
        { q: "행사 규모는 어떻게 정하나요?", a: "타깃 인원, 미디어 노출 목표, 예산을 기준으로 50~300명 범위에서 설계합니다." },
        { q: "셀럽 초청도 가능한가요?", a: "셀럽 협찬·앰버서더 라인과 연계해 초청 셀럽을 매칭합니다." },
        { q: "공간이 없어도 가능한가요?", a: "쇼룸·갤러리·팝업 공간 매칭부터 함께 진행합니다." },
      ]}
    />
  ),
});
