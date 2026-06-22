import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "INSIGHTS — Fashion PR Notes | CLAMOA" },
      { name: "description", content: "패션 PR, 셀럽 마케팅, 인플루언서 트렌드에 대한 인사이트와 노트." },
      { property: "og:title", content: "INSIGHTS — Fashion PR Notes | CLAMOA" },
      { property: "og:description", content: "패션 PR, 셀럽 마케팅, 인플루언서 트렌드에 대한 인사이트와 노트." },
      { property: "og:url", content: "https://clamoa.com/insights" },
    ],
    links: [{ rel: "canonical", href: "https://clamoa.com/insights" }],
  }),
  component: () => (
    <PlaceholderPage eyebrow="" title="INSIGHTS — Fashion PR Notes | CLAMOA" description="패션 PR, 셀럽 마케팅, 인플루언서 트렌드에 대한 인사이트와 노트." />
  ),
});
