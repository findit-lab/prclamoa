import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/services/global-expansion")({
  head: () => ({
    meta: [
      { title: "GLOBAL EXPANSION — Fashion PR | CLAMOA" },
      { name: "description", content: "국내외 유통, 글로벌 팝업, 왕홍 라이브커머스 등 패션 브랜드 글로벌 진출 지원." },
      { property: "og:title", content: "GLOBAL EXPANSION — Fashion PR | CLAMOA" },
      { property: "og:description", content: "국내외 유통, 글로벌 팝업, 왕홍 라이브커머스 등 패션 브랜드 글로벌 진출 지원." },
      { property: "og:url", content: "https://clamoa.com/services/global-expansion" },
    ],
    links: [{ rel: "canonical", href: "https://clamoa.com/services/global-expansion" }],
  }),
  component: () => (
    <PlaceholderPage eyebrow="" title="GLOBAL EXPANSION — Fashion PR | CLAMOA" description="국내외 유통, 글로벌 팝업, 왕홍 라이브커머스 등 패션 브랜드 글로벌 진출 지원." />
  ),
});
