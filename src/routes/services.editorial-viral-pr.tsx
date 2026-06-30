import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/editorial-viral-pr")({
  head: () => ({
    meta: [
      { title: "에디토리얼·바이럴 PR — 패션 PR | CLAMOA" },
      {
        name: "description",
        content:
          "에디토리얼·바이럴 PR은 매거진 화보·디지털 에디토리얼·바이럴 콘텐츠를 기획하고 확산시키는 패션 PR 방식입니다. CLAMOA의 콘텐츠 PR 운영.",
      },
      { property: "og:title", content: "에디토리얼·바이럴 PR — 패션 PR | CLAMOA" },
      {
        property: "og:description",
        content: "매거진 화보, 디지털 에디토리얼, 바이럴 콘텐츠 기획·확산.",
      },
      { property: "og:url", content: "https://clamoa.com/services/editorial-viral-pr" },
    ],
    links: [{ rel: "canonical", href: "https://clamoa.com/services/editorial-viral-pr" }],
  }),
  component: () => (
    <ServiceDetailPage
      eyebrow="05 — EDITORIAL & VIRAL PR / 에디토리얼·바이럴"
      title={"EDITORIAL\n& VIRAL"}
      definition="에디토리얼·바이럴 PR은 매거진 화보, 디지털 에디토리얼, SNS 바이럴 콘텐츠를 기획·제작·확산해 브랜드의 미적 자산과 화제성을 동시에 구축하는 패션 PR 방식입니다."
      fitFor={[
        "브랜드 무드·세계관을 강화해야 하는 브랜드",
        "신규 컬렉션 화보를 새롭게 풀어내야 하는 브랜드",
        "검색·SNS에서 화제성을 만들고 싶은 브랜드",
      ]}
      steps={[
        {
          title: "테마·매체 기획",
          desc: "시즌 무드와 매체 톤에 맞는 콘셉트와 매체 리스트를 설정합니다.",
        },
        {
          title: "프로덕션",
          desc: "촬영팀·스타일링·로케이션을 구성하고 화보·콘텐츠를 제작합니다.",
        },
        { title: "발행·바이럴 확산", desc: "매거진·디지털 매체·SNS에 단계적으로 확산합니다." },
        { title: "리포트", desc: "발행 매체, 노출, 2차 인용을 정리합니다." },
      ]}
      deliverables={[
        "에디토리얼 화보·디지털 콘텐츠",
        "매거진·디지털 매체 발행",
        "바이럴 SNS 콘텐츠",
        "노출·확산 리포트",
      ]}
      faqs={[
        {
          q: "광고 화보와 에디토리얼 화보의 차이는?",
          a: "광고는 브랜드 메시지 중심, 에디토리얼은 매체의 시즌 테마 안에서 브랜드를 풀어내는 형식입니다.",
        },
        {
          q: "콘텐츠 사용 권한은?",
          a: "매체 정책에 따라 다르며, 보통 일정 기간 후 브랜드 채널 활용이 가능합니다.",
        },
        {
          q: "바이럴은 어떤 식으로 설계하나요?",
          a: "에디토리얼 컷에서 SNS 친화 컷·릴스·숏폼을 함께 제작하여 다단 확산을 설계합니다.",
        },
      ]}
    />
  ),
});
