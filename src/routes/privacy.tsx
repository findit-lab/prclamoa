import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | CLAMOA" },
      { name: "description", content: "CLAMOA 개인정보 처리방침." },
      { property: "og:title", content: "Privacy Policy | CLAMOA" },
      { property: "og:description", content: "CLAMOA 개인정보 처리방침." },
      { property: "og:url", content: "https://clamoa.com/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://clamoa.com/privacy" }],
  }),
  component: () => (
    <PlaceholderPage eyebrow="" title="Privacy Policy | CLAMOA" description="CLAMOA 개인정보 처리방침." />
  ),
});
