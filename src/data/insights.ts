export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  /** Slug under /services/<slug> this insight is tied to, if any. */
  serviceSlug?: string;
  serviceLabel?: string;
};

export const insights: Insight[] = [
  {
    slug: "celebrity-seeding-process",
    title: "패션 브랜드 셀럽 협찬은 어떻게 진행되나요?",
    excerpt:
      "상담·브랜드 검토 → PR 플랜 → 계약·쇼룸 입점 → 스타일리스트 피칭 → 셀럽 착용 → 클리핑까지, 패션 PR 대행사가 셀럽 협찬을 진행하는 전체 단계와 각 단계에서 브랜드가 준비해야 할 것을 정리합니다.",
    category: "CELEBRITY SEEDING",
    serviceSlug: "celebrity-seeding",
    serviceLabel: "셀럽 협찬(Celebrity Seeding)",
  },
  {
    slug: "choosing-fashion-pr-agency",
    title: "신생 패션 브랜드가 PR 대행사를 선택할 때 봐야 할 기준",
    excerpt:
      "포트폴리오, 스타일리스트 네트워크, 운영 시스템, 리포팅 투명성, 글로벌 연계까지 — 신생 패션 브랜드가 PR 대행사를 선택할 때 반드시 확인해야 할 6가지 기준.",
    category: "BRAND GUIDE",
  },
  {
    slug: "why-stylist-relations-matter",
    title: "스타일리스트 릴레이션이 패션 브랜드에 중요한 이유",
    excerpt:
      "실제 셀럽 착용은 스타일리스트의 선택에서 시작됩니다. 스타일리스트 릴레이션이 협찬 성공의 핵심이 되는 이유와, 쇼룸 기반 운영이 만드는 차이를 설명합니다.",
    category: "STYLIST RELATIONS",
    serviceSlug: "stylist-relations",
    serviceLabel: "스타일리스트 릴레이션",
  },
  {
    slug: "ppl-vs-celebrity-seeding",
    title: "패션 PPL과 셀럽 협찬의 차이",
    excerpt:
      "PPL은 콘텐츠 장면에 제품을 배치하는 방식이고, 셀럽 협찬은 인물의 실착을 통한 노출입니다. 두 방식의 계약 구조·비용·노출 효과 차이와 함께 운영하는 시나리오를 비교합니다.",
    category: "PPL",
    serviceSlug: "ppl-content-placement",
    serviceLabel: "PPL & 콘텐츠 플레이스먼트",
  },
  {
    slug: "influencer-and-celebrity-together",
    title: "인플루언서 PR과 셀럽 협찬을 함께 운영하는 방법",
    excerpt:
      "셀럽 협찬으로 만든 무드와 인플루언서 PR의 전환력은 다른 레이어에서 작동합니다. 두 채널을 캠페인 안에서 어떻게 결합해야 인지도와 전환을 동시에 만들 수 있는지 정리합니다.",
    category: "INFLUENCER PR",
    serviceSlug: "influencer-pr",
    serviceLabel: "인플루언서 PR",
  },
  {
    slug: "reusing-celebrity-content",
    title: "셀럽 착용 콘텐츠를 2차 활용하는 방법",
    excerpt:
      "협찬으로 확보한 셀럽 착용 자료를 매거진·블로그·SNS·상세페이지·광고 소재로 재활용하는 방법과, 초상권·사용 범위 협의 시 체크해야 할 포인트.",
    category: "EDITORIAL & VIRAL",
    serviceSlug: "editorial-viral-pr",
    serviceLabel: "에디토리얼 & 바이럴 PR",
  },
  {
    slug: "showroom-preparation-checklist",
    title: "패션 브랜드 쇼룸 입점 전 준비해야 할 자료",
    excerpt:
      "룩북, 시즌 컨셉 도큐먼트, 가격·재고 시트, 협찬 가능 샘플, 브랜드 SNS·쇼핑몰 링크까지 — 압구정 쇼룸 입점 전에 정리해두면 좋은 자료를 단계별로 안내합니다.",
    category: "OPERATION",
    serviceSlug: "stylist-relations",
    serviceLabel: "스타일리스트 릴레이션",
  },
  {
    slug: "japan-select-shop-expansion",
    title: "한국 패션 브랜드의 일본 편집샵 진출 전략",
    excerpt:
      "일본 셀렉트샵·편집샵 입점을 위한 브랜드 포지셔닝, 바이어 미팅 자료, 가격 구조와 한국 셀럽 레퍼런스를 활용한 진입 전략을 정리합니다.",
    category: "GLOBAL",
    serviceSlug: "global-expansion",
    serviceLabel: "글로벌 확장",
  },
  {
    slug: "xiaohongshu-wanghong-china-pr",
    title: "샤오홍수·왕홍 라이브커머스를 활용한 중국 패션 PR",
    excerpt:
      "샤오홍수 바이럴 콘텐츠와 왕홍 라이브커머스를 활용해 중화권에서 인지도와 매출을 동시에 만드는 패션 PR 운영 방식.",
    category: "GLOBAL",
    serviceSlug: "global-expansion",
    serviceLabel: "글로벌 확장",
  },
  {
    slug: "fashion-pr-campaign-reporting",
    title: "패션 PR 캠페인 성과를 리포팅하는 방법",
    excerpt:
      "셀럽 픽업·착용 현황, 노출 채널 클리핑, SNS 반응, 검색 트렌드, 매체 가치 환산까지 — 패션 PR 캠페인 성과를 투명하게 보고하는 리포팅 프레임.",
    category: "REPORTING",
  },
];

export function getInsightsForService(serviceSlug: string | undefined): Insight[] {
  if (!serviceSlug) return [];
  return insights.filter((i) => i.serviceSlug === serviceSlug);
}

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}
