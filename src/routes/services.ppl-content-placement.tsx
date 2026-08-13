import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";

export const Route = createFileRoute("/services/ppl-content-placement")({
  head: () => ({
    meta: [
      { title: "PPL & 콘텐츠 플레이스먼트 — 패션 PR | CLAMOA" },
      {
        name: "description",
        content:
          "PPL은 드라마·예능·뮤직비디오·웹콘텐츠에 브랜드 제품을 자연스럽게 노출하는 패션 PR 방식입니다. CLAMOA의 PPL 매칭과 운영을 안내합니다.",
      },
      { property: "og:title", content: "PPL & 콘텐츠 플레이스먼트 — 패션 PR | CLAMOA" },
      {
        property: "og:description",
        content: "드라마·예능·MV·웹콘텐츠 PPL 매칭과 운영. 노출 효과 트래킹 포함.",
      },
      { property: "og:url", content: "https://clamoa.com/services/ppl-content-placement" },
    ],
    links: [{ rel: "canonical", href: "https://clamoa.com/services/ppl-content-placement" }],
  }),
  component: () => (
    <ServiceDetailPage
      eyebrow="SNS / YOUTUBE PPL"
      title={"SNS / YOUTUBE\nPPL"}
      definition="SNS / YouTube PPL은 인플루언서·셀럽의 SNS 및 YouTube 콘텐츠를 통해 브랜드 제품을 자연스럽게 노출하여 인지도와 관심도를 높이는 PR 방식입니다. CLAMOA는 브랜드와 적합한 인물 선정부터 컨택, 콘텐츠 진행 및 발행까지 전반적인 과정을 운영합니다."
      fitFor={[
        "대중 인지도를 단기간에 확대하고 싶은 브랜드",
        "브랜드 이미지와 잘 맞는 인플루언서·셀럽을 통해 자연스러운 노출이 필요한 브랜드",
        "특정 제품이나 주력 상품을 집중적으로 홍보하고 싶은 브랜드",
        "신제품 출시나 주요 마케팅 이슈에 맞춰 화제성을 만들고 싶은 브랜드",
      ]}
      processIntro="브랜드와 적합한 인플루언서·셀럽 및 채널 선정부터 콘텐츠 발행까지 전 과정을 운영합니다."
      steps={[
        {
          title: "인플루언서·셀럽 및 채널 매칭",
          desc: "브랜드 타깃과 제품 특성에 맞는 인플루언서·셀럽 및 채널을 선정합니다.",
        },
        {
          title: "컨택·조건 협의",
          desc: "채널, 콘텐츠 유형, 업로드 일정, 비용 등 세부 진행 조건을 협의합니다.",
        },
        {
          title: "제품 전달·콘텐츠 진행",
          desc: "제품 전달과 촬영 일정을 조율하고, 가이드라인 및 필수 요청사항을 안내합니다.",
        },
        {
          title: "콘텐츠 발행·결과 취합",
          desc: "콘텐츠 발행 여부를 확인하고, 진행 결과와 업로드 콘텐츠를 취합해 전달합니다.",
        },
      ]}
      deliverables={[
        "채널별 진행 조건",
        "콘텐츠 가이드라인",
        "발행 콘텐츠 아카이브",
        "최종 진행 결과 취합 리포트",
      ]}
      faqs={[
        {
          q: "SNS / YouTube PPL과 쇼룸 협찬의 차이는?",
          a: "SNS / YouTube PPL은 비용을 기반으로 인플루언서·셀럽의 콘텐츠 내 노출을 사전에 협의해 진행하는 방식이며, 쇼룸 협찬은 스타일리스트 픽업을 통해 연예인 착용 및 자연스러운 노출을 기대하는 방식입니다.",
        },
        {
          q: "비용은 어떻게 책정되나요?",
          a: "인플루언서·셀럽의 인지도, 채널 규모, 콘텐츠 유형, 노출 방식 등에 따라 비용이 상이하며, 진행 전 협의를 통해 최종 비용을 안내드립니다.",
        },
        {
          q: "발행 후 콘텐츠를 2차 활용할 수 있나요?",
          a: "2차 활용은 가능하며, 활용 채널·기간·범위에 따라 별도 비용이 발생합니다. 진행 전 사전 협의를 통해 사용 조건과 비용을 확정합니다.",
        },
      ]}
    />
  ),
});
