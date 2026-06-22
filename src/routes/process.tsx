import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "PROCESS — How CLAMOA Works" },
      { name: "description", content: "상담 접수부터 PR 플랜 제안, 셀럽 협찬 운영, 주간 보고, 바이럴 확산까지 7단계 패션 PR 프로세스." },
      { property: "og:title", content: "PROCESS — How CLAMOA Works" },
      { property: "og:description", content: "상담 접수부터 PR 플랜 제안, 셀럽 협찬 운영, 주간 보고, 바이럴 확산까지 7단계 패션 PR 프로세스." },
      { property: "og:url", content: "https://clamoa.com/process" },
    ],
    links: [{ rel: "canonical", href: "https://clamoa.com/process" }],
  }),
  component: () => (
    <PlaceholderPage eyebrow="" title="PROCESS — How CLAMOA Works" description="상담 접수부터 PR 플랜 제안, 셀럽 협찬 운영, 주간 보고, 바이럴 확산까지 7단계 패션 PR 프로세스." />
  ),
});
