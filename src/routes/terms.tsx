import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | CLAMOA" },
      { name: "description", content: "CLAMOA 서비스 이용약관." },
      { property: "og:title", content: "Terms of Service | CLAMOA" },
      { property: "og:description", content: "CLAMOA 서비스 이용약관." },
      { property: "og:url", content: "https://clamoa.com/terms" },
    ],
    links: [{ rel: "canonical", href: "https://clamoa.com/terms" }],
  }),
  component: () => (
    <PlaceholderPage eyebrow="" title="Terms of Service | CLAMOA" description="CLAMOA 서비스 이용약관." />
  ),
});
