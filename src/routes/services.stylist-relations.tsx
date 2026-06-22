import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/services/stylist-relations")({
  head: () => ({
    meta: [
      { title: "STYLIST RELATIONS — Fashion PR | CLAMOA" },
      { name: "description", content: "K-POP과 배우 스타일리스트 네트워크 기반 룩 피칭 및 협찬 운영." },
      { property: "og:title", content: "STYLIST RELATIONS — Fashion PR | CLAMOA" },
      { property: "og:description", content: "K-POP과 배우 스타일리스트 네트워크 기반 룩 피칭 및 협찬 운영." },
      { property: "og:url", content: "https://clamoa.com/services/stylist-relations" },
    ],
    links: [{ rel: "canonical", href: "https://clamoa.com/services/stylist-relations" }],
  }),
  component: () => (
    <PlaceholderPage eyebrow="" title="STYLIST RELATIONS — Fashion PR | CLAMOA" description="K-POP과 배우 스타일리스트 네트워크 기반 룩 피칭 및 협찬 운영." />
  ),
});
