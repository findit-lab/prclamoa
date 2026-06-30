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
      eyebrow="03 — PPL & CONTENT PLACEMENT / PPL"
      title={"PPL\nPLACEMENT"}
      definition="PPL & 콘텐츠 플레이스먼트는 드라마·예능·뮤직비디오·웹콘텐츠 안에 브랜드 제품을 자연스럽게 등장시켜 시청자 인지도와 검색 수요를 높이는 패션 PR 방식입니다. CLAMOA는 작품 선정부터 노출 운영까지 책임집니다."
      fitFor={[
        "대중 인지도를 단기간에 끌어올려야 하는 브랜드",
        "특정 캐릭터·세계관과 매칭되는 제품군 보유 브랜드",
        "검색 트래픽·상품 문의 전환이 필요한 브랜드",
        "신규 시즌 컬렉션 런칭과 연계 캠페인이 필요한 브랜드",
      ]}
      steps={[
        {
          title: "작품·캐릭터 매칭",
          desc: "방영 일정·타깃·캐릭터 무드에 맞는 작품을 큐레이션합니다.",
        },
        { title: "협찬 협상", desc: "제작사·스타일링팀과 협찬 조건과 노출 범위를 확정합니다." },
        { title: "운영·노출 관리", desc: "촬영 일정에 맞춘 픽업·반납과 노출 회차를 운영합니다." },
        { title: "노출 트래킹", desc: "방영 클립, SNS 반응, 검색 트렌드를 정리해 리포트합니다." },
      ]}
      deliverables={[
        "작품 매칭 제안서",
        "협찬 조건 정리(노출 회차·범위)",
        "방영 클립 아카이브",
        "검색·SNS 반응 리포트",
      ]}
      faqs={[
        {
          q: "PPL과 일반 협찬의 차이는?",
          a: "PPL은 작품 안에서 브랜드/제품이 의도적으로 노출되는 형태이고, 협찬은 캐릭터/출연자가 자연스럽게 착용·사용하는 형태입니다.",
        },
        {
          q: "비용은 어떻게 책정되나요?",
          a: "작품 규모, 노출 회차, 사용 권한에 따라 달라집니다. 브리프 단계에서 예산 가이드를 제시합니다.",
        },
        {
          q: "방영 후 콘텐츠를 활용할 수 있나요?",
          a: "제작사와 사전 협의된 범위 내에서 SNS·상세페이지 등에 활용할 수 있습니다.",
        },
      ]}
    />
  ),
});
