import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/influencer-pr")({
  head: () => ({
    meta: [
      { title: "인플루언서 PR(Influencer PR) — 패션 PR | CLAMOA" },
      {
        name: "description",
        content:
          "인플루언서 PR은 브랜드 무드에 맞는 패션 인플루언서를 큐레이션하고 콘텐츠 캠페인을 운영하는 패션 PR 방식입니다. CLAMOA의 인플루언서 매칭과 캠페인 운영.",
      },
      { property: "og:title", content: "인플루언서 PR(Influencer PR) — 패션 PR | CLAMOA" },
      {
        property: "og:description",
        content: "패션 인플루언서 매칭과 캠페인 운영. 브랜드 무드에 맞는 큐레이션과 콘텐츠 설계.",
      },
      { property: "og:url", content: "https://clamoa.com/services/influencer-pr" },
    ],
    links: [{ rel: "canonical", href: "https://clamoa.com/services/influencer-pr" }],
  }),
  component: () => (
    <ServiceDetailPage
      eyebrow="04 — INFLUENCER PR / 인플루언서"
      title={"INFLUENCER\nPR"}
      definition="인플루언서 PR은 브랜드 무드와 타깃에 맞는 패션 인플루언서를 큐레이션하고, 시딩·콘텐츠·캠페인을 통합 운영해 인지도와 전환을 동시에 만드는 패션 PR 방식입니다."
      fitFor={[
        "디지털 채널 중심으로 성장하는 D2C 브랜드",
        "스타일링 레퍼런스를 빠르게 쌓고 싶은 브랜드",
        "신상품 출시 시점에 콘텐츠 볼륨이 필요한 브랜드",
        "타깃 페르소나가 명확한 브랜드",
      ]}
      steps={[
        {
          title: "인플루언서 큐레이션",
          desc: "브랜드 무드·타깃에 맞는 인플루언서 풀을 제안합니다.",
        },
        { title: "시딩 & 콘텐츠 브리프", desc: "제품 시딩, 키 메시지, 촬영 가이드를 전달합니다." },
        { title: "콘텐츠 검수·발행", desc: "초안 검수 후 채널별 일정에 맞춰 발행합니다." },
        { title: "성과 분석", desc: "도달·인게이지먼트·전환을 통합 리포트로 제공합니다." },
      ]}
      deliverables={[
        "인플루언서 후보 리스트 & 적합도 분석",
        "콘텐츠 브리프·검수",
        "발행 콘텐츠 아카이브",
        "도달·인게이지먼트·전환 리포트",
      ]}
      faqs={[
        {
          q: "마이크로/메가 인플루언서 중 어느 쪽이 좋나요?",
          a: "캠페인 목적에 따라 다릅니다. 인지도는 메가, 전환은 마이크로·니치 인플루언서가 효과적일 수 있습니다.",
        },
        {
          q: "콘텐츠 사용 권한은 어디까지인가요?",
          a: "기본 SNS 게시 + 브랜드 채널 재게시 권한을 협의하며, 광고 활용은 별도 옵션으로 진행합니다.",
        },
        {
          q: "최소 캠페인 규모는?",
          a: "단일 시즌 캠페인 기준 5~10명 풀로 시작하는 것을 권장합니다.",
        },
      ]}
    />
  ),
});
