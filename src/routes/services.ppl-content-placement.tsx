import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/services/ppl-content-placement")({
  head: () => ({
    meta: [
      { title: "PPL & CONTENT PLACEMENT — Fashion PR | CLAMOA" },
      { name: "description", content: "드라마, 예능, 뮤직비디오, OTT 콘텐츠 PPL 및 협찬 노출 전략." },
      { property: "og:title", content: "PPL & CONTENT PLACEMENT — Fashion PR | CLAMOA" },
      { property: "og:description", content: "드라마, 예능, 뮤직비디오, OTT 콘텐츠 PPL 및 협찬 노출 전략." },
      { property: "og:url", content: "https://clamoa.com/services/ppl-content-placement" },
    ],
    links: [{ rel: "canonical", href: "https://clamoa.com/services/ppl-content-placement" }],
  }),
  component: () => (
    <PlaceholderPage eyebrow="" title="PPL & CONTENT PLACEMENT — Fashion PR | CLAMOA" description="드라마, 예능, 뮤직비디오, OTT 콘텐츠 PPL 및 협찬 노출 전략." />
  ),
});
