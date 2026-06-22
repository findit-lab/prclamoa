import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "CASE STUDIES — Fashion PR Portfolio | CLAMOA" },
      { name: "description", content: "패션 브랜드 PR 성과와 셀럽 협찬 케이스 스터디 아카이브." },
      { property: "og:title", content: "CASE STUDIES — Fashion PR Portfolio | CLAMOA" },
      { property: "og:description", content: "패션 브랜드 PR 성과와 셀럽 협찬 케이스 스터디 아카이브." },
      { property: "og:url", content: "https://clamoa.com/case-studies" },
    ],
    links: [{ rel: "canonical", href: "https://clamoa.com/case-studies" }],
  }),
  component: () => (
    <PlaceholderPage eyebrow="" title="CASE STUDIES — Fashion PR Portfolio | CLAMOA" description="패션 브랜드 PR 성과와 셀럽 협찬 케이스 스터디 아카이브." />
  ),
});
