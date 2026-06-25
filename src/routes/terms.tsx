import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

const DESCRIPTION =
  "CLAMOA 서비스 이용약관 — 패션 PR·셀럽 시딩·인플루언서 캠페인 등 클라모아 에이전시 서비스의 계약 조건, 권리·의무, 책임 범위, 분쟁 해결 절차를 안내합니다.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | CLAMOA" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Terms of Service | CLAMOA" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://clamoa.com/terms" },
    ],
    links: [{ rel: "canonical", href: "https://clamoa.com/terms" }],
  }),
  component: () => (
    <PlaceholderPage eyebrow="" title="Terms of Service | CLAMOA" description={DESCRIPTION} />
  ),
});
