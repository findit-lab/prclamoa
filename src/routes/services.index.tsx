import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "SERVICES — Fashion PR by CLAMOA" },
      { name: "description", content: "셀럽 협찬, 스타일리스트 릴레이션, PPL, 인플루언서, 에디토리얼 바이럴, 오프라인 이벤트, 앰버서더, 글로벌 확장까지 — CLAMOA의 종합 패션 PR 서비스." },
      { property: "og:title", content: "SERVICES — Fashion PR by CLAMOA" },
      { property: "og:description", content: "셀럽 협찬, 스타일리스트 릴레이션, PPL, 인플루언서, 에디토리얼 바이럴, 오프라인 이벤트, 앰버서더, 글로벌 확장까지 — CLAMOA의 종합 패션 PR 서비스." },
      { property: "og:url", content: "https://clamoa.com/services" },
    ],
    links: [{ rel: "canonical", href: "https://clamoa.com/services" }],
  }),
  component: () => (
    <PlaceholderPage eyebrow="" title="SERVICES — Fashion PR by CLAMOA" description="셀럽 협찬, 스타일리스트 릴레이션, PPL, 인플루언서, 에디토리얼 바이럴, 오프라인 이벤트, 앰버서더, 글로벌 확장까지 — CLAMOA의 종합 패션 PR 서비스." />
  ),
});
