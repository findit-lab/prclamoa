import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Fashion PR Questions | CLAMOA" },
      { name: "description", content: "셀럽 협찬, PPL, 인플루언서 캠페인, 견적, 계약 등 자주 묻는 질문." },
      { property: "og:title", content: "FAQ — Fashion PR Questions | CLAMOA" },
      { property: "og:description", content: "셀럽 협찬, PPL, 인플루언서 캠페인, 견적, 계약 등 자주 묻는 질문." },
      { property: "og:url", content: "https://clamoa.com/faq" },
    ],
    links: [{ rel: "canonical", href: "https://clamoa.com/faq" }],
  }),
  component: () => (
    <PlaceholderPage eyebrow="" title="FAQ — Fashion PR Questions | CLAMOA" description="셀럽 협찬, PPL, 인플루언서 캠페인, 견적, 계약 등 자주 묻는 질문." />
  ),
});
