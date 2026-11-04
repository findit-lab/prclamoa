import { createFileRoute } from "@tanstack/react-router";
import { SubPageNav } from "@/components/SubPageNav";
import { ContactForm } from "@/components/ContactForm";
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="min-h-screen bg-surface text-deep-ink">
      <SubPageNav variant="light" />
      <section className="px-5 md:px-16 pt-32 md:pt-48 pb-24 md:pb-40">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5">
            <span className="text-label-caps text-secondary block mb-6">CONTACT</span>
            <h1
              className="font-serif font-normal uppercase leading-[0.9] tracking-[-0.03em] mb-10 break-keep"
              style={{ fontSize: "clamp(40px, 7vw, 104px)" }}
            >
              패션 PR 상담 문의
            </h1>
            <p className="text-body-lg max-w-2xl border-l-4 border-neon-signal pl-6 break-keep">
              브랜드 상황을 남겨주시면 담당자가 제품 카테고리와 캠페인 목표에 맞는 PR 방향을
              제안드립니다.
            </p>
            <div className="mt-12 space-y-2 text-body-md text-secondary break-keep">
              <p>서울특별시 강남구 선릉로155길 23-3, 3층</p>
              <p>0507-1322-0092</p>
              <p>
                <a
                  href="mailto:dannjo@clamoa.com"
                  className="hover:text-deep-ink transition-colors"
                >
                  dannjo@clamoa.com
                </a>
              </p>
            </div>
          </div>
          <ContactForm locale="ko" />
        </div>
      </section>
    </main>
  );
}
