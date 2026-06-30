import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";
import { localBusinessSchema } from "@/lib/schema";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "CONTACT — Fashion PR Inquiry | CLAMOA" },
      {
        name: "description",
        content:
          "패션 브랜드 PR·셀럽 협찬·PPL·인플루언서 캠페인 제안 문의. 서울 압구정 로데오의 클라모아 에이전시가 브리프 검토부터 미팅까지 1영업일 내 회신드립니다.",
      },
      { property: "og:title", content: "CONTACT — Fashion PR Inquiry | CLAMOA" },
      {
        property: "og:description",
        content:
          "패션 브랜드 PR·셀럽 협찬·PPL·인플루언서 캠페인 제안 문의. 서울 압구정 로데오의 클라모아 에이전시가 브리프 검토부터 미팅까지 1영업일 내 회신드립니다.",
      },
      { property: "og:url", content: "https://clamoa.com/contact" },
    ],
    links: [{ rel: "canonical", href: "https://clamoa.com/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessSchema),
      },
    ],
  }),
  component: () => (
    <PlaceholderPage
      eyebrow=""
      title="CONTACT — Fashion PR Inquiry | CLAMOA"
      description="패션 브랜드 PR, 셀럽 협찬, PPL 제안 문의. 서울 압구정 로데오."
    />
  ),
});
