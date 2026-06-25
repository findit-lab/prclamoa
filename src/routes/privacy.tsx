import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

const DESCRIPTION =
  "CLAMOA 개인정보 처리방침 — 패션 PR 상담 과정에서 수집되는 개인정보의 수집 항목, 이용 목적, 보관 기간, 제3자 제공, 이용자 권리 행사 방법을 안내합니다.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | CLAMOA" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Privacy Policy | CLAMOA" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://clamoa.com/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://clamoa.com/privacy" }],
  }),
  component: () => (
    <PlaceholderPage eyebrow="" title="Privacy Policy | CLAMOA" description={DESCRIPTION} />
  ),
});
