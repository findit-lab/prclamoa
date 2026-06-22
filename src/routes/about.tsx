import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "ABOUT — CLAMOA Fashion PR Agency" },
      { name: "description", content: "압구정 로데오 기반 패션 PR 에이전시 CLAMOA의 브랜드 비전과 팀을 소개합니다." },
      { property: "og:title", content: "ABOUT — CLAMOA Fashion PR Agency" },
      { property: "og:description", content: "압구정 로데오 기반 패션 PR 에이전시 CLAMOA의 브랜드 비전과 팀을 소개합니다." },
      { property: "og:url", content: "https://clamoa.com/about" },
    ],
    links: [{ rel: "canonical", href: "https://clamoa.com/about" }],
  }),
  component: () => (
    <PlaceholderPage eyebrow="" title="ABOUT — CLAMOA Fashion PR Agency" description="압구정 로데오 기반 패션 PR 에이전시 CLAMOA의 브랜드 비전과 팀을 소개합니다." />
  ),
});
