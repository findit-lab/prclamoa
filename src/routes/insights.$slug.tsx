import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SubPageNav } from "@/components/SubPageNav";
import { useEffect } from "react";
import { getInsightBySlug, insights } from "@/data/insights";
import { SITE_URL, breadcrumbSchema } from "@/lib/schema";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const post = getInsightBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    const post = loaderData?.post;
    const title = post ? `${post.title} | CLAMOA INSIGHTS` : "INSIGHT | CLAMOA";
    const desc = post?.excerpt ?? "CLAMOA 패션 PR 인사이트.";
    const url = `${SITE_URL}/insights/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post?.title ?? params.slug,
            description: desc,
            mainEntityOfPage: url,
            url,
            author: { "@type": "Organization", name: "CLAMOA", url: SITE_URL },
            publisher: {
              "@type": "Organization",
              name: "CLAMOA",
              logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/__l5e/assets-v1/085b2230-7ab0-414e-abd3-c2dcbc1ed4a5/clamoa-logo.png`,
              },
            },
            articleSection: post?.category,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: `${SITE_URL}/` },
              { name: "Insights", url: `${SITE_URL}/insights` },
              { name: post?.title ?? params.slug, url },
            ]),
          ),
        },
      ],
    };
  },
  component: InsightDetail,
  notFoundComponent: () => (
    <div className="min-h-screen bg-surface flex items-center justify-center text-deep-ink">
      <div className="text-center">
        <h1 className="text-headline-lg mb-6">INSIGHT NOT FOUND</h1>
        <Link to="/insights" className="text-label-caps underline">
          ← BACK TO INSIGHTS
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => {
    console.error(error);
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center text-deep-ink p-6">
        <div className="text-center">
          <h1 className="text-headline-lg mb-4">ERROR</h1>
          <p className="text-body-md text-secondary mb-6">
            Something went wrong. Please try again.
          </p>
          <button onClick={reset} className="text-label-caps underline">
            RETRY
          </button>
        </div>
      </div>
    );
  },
});

function InsightDetail() {
  const { post } = Route.useLoaderData();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("active")),
      { threshold: 0.08, rootMargin: "0px 0px -50px 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const related = insights.filter(
    (i) => i.slug !== post.slug && i.serviceSlug && i.serviceSlug === post.serviceSlug,
  );

  return (
    <div className="min-h-screen bg-surface text-deep-ink">
      <header className="fixed top-0 w-full z-50 bg-surface/95 border-b border-deep-ink flex justify-between items-center px-5 md:px-16 py-5 md:py-6">
        <Link to="/" className="block" aria-label="CLAMOA">
          <span className="text-label-caps tracking-[0.25em]">CLAMOA</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          {[
            ["ABOUT", "/about"],
            ["SERVICES", "/services"],
            ["CASE STUDIES", "/case-studies"],
            ["PROCESS", "/process"],
            ["INSIGHTS", "/insights"],
            ["FAQ", "/faq"],
            ["CONTACT", "/contact"],
          ].map(([l, h]) => (
            <Link
              key={l}
              to={h}
              className={`text-label-caps hover:text-neon-signal transition-colors duration-200 ${h === "/insights" ? "text-deep-ink" : "text-secondary"}`}
            >
              {l}
            </Link>
          ))}
        </nav>
      </header>

      <SubPageNav variant="light" />

      <main className="pt-24 md:pt-32">
        {/* Article header */}
        <section className="px-5 md:px-16 pt-24 md:pt-40 pb-16 md:pb-20 reveal">
          <div className="mb-8 flex items-center gap-4">
            <Link to="/insights" className="text-label-caps text-secondary hover:text-deep-ink">
              ← INSIGHTS
            </Link>
            <span className="text-label-caps text-secondary">/ {post.category}</span>
          </div>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-10">
              <h1 className="text-display-lg md:text-display-xl mb-10 leading-tight">
                {post.title}
              </h1>
              <p className="text-body-lg border-l-4 border-neon-signal pl-6 max-w-3xl">
                {post.excerpt}
              </p>
            </div>
          </div>
        </section>

        {/* Body (placeholder skeleton) */}
        <article className="px-5 md:px-16 pb-20 md:pb-32 reveal">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-8 md:col-start-1 space-y-8 border-t-2 border-deep-ink pt-12">
              <p className="text-body-md leading-relaxed text-secondary">
                이 글은 작성 중입니다. 본문은 곧 업데이트됩니다. 관련 서비스 페이지에서 CLAMOA의
                운영 방식을 먼저 확인하실 수 있습니다.
              </p>
              <div className="space-y-4">
                <h2 className="text-headline-md uppercase">요약</h2>
                <p className="text-body-md leading-relaxed">{post.excerpt}</p>
              </div>
              <div className="space-y-4">
                <h2 className="text-headline-md uppercase">목차 (예정)</h2>
                <ul className="space-y-2 text-body-md text-secondary list-disc pl-5">
                  <li>배경과 문제 정의</li>
                  <li>CLAMOA의 접근 방식</li>
                  <li>실무 체크리스트</li>
                  <li>관련 사례 및 결과 지표</li>
                </ul>
              </div>
            </div>

            {/* Sidebar — related service + insights */}
            <aside className="col-span-12 md:col-span-4 md:border-l md:border-deep-ink/20 md:pl-8 pt-12 space-y-12">
              {post.serviceSlug && post.serviceLabel && (
                <div>
                  <span className="text-label-caps text-secondary block mb-4">RELATED SERVICE</span>
                  <a
                    href={`/services/${post.serviceSlug}`}
                    className="block border-2 border-deep-ink p-6 hover:bg-deep-ink hover:text-neon-signal transition-colors group"
                  >
                    <span className="text-headline-sm block mb-2">{post.serviceLabel}</span>
                    <span className="inline-flex items-center gap-2 text-label-caps">
                      VIEW SERVICE
                      <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </span>
                  </a>
                </div>
              )}
              {related.length > 0 && (
                <div>
                  <span className="text-label-caps text-secondary block mb-4">
                    RELATED INSIGHTS
                  </span>
                  <ul className="space-y-4">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link
                          to="/insights/$slug"
                          params={{ slug: r.slug }}
                          className="block border-l-2 border-deep-ink pl-4 py-2 hover:border-neon-signal transition-colors"
                        >
                          <span className="text-body-md">{r.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </article>

        {/* CTA */}
        <section className="bg-deep-ink text-surface py-20 md:py-32 px-5 md:px-16 reveal">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-8">
              <span className="text-neon-signal text-label-caps block mb-6">LET&apos;S TALK</span>
              <h2 className="text-headline-lg uppercase">
                브랜드 상황에 맞춰
                <br />
                PR 플랜을 제안드립니다
              </h2>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-neon-signal text-deep-ink px-6 py-4 text-label-caps border-2 border-neon-signal hover:bg-transparent hover:text-neon-signal transition-all duration-300"
              >
                상담 문의하기
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-deep-ink px-5 md:px-16 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-label-caps text-secondary block mb-4">CLAMOA</span>
            <p className="text-body-md text-secondary max-w-sm">
              서울 압구정 기반 패션 PR 에이전시
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-deep-ink/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-body-md text-secondary">© 2026 CLAMOA AGENCY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-label-caps text-secondary hover:text-deep-ink transition-colors"
            >
              PRIVACY
            </Link>
            <Link
              to="/terms"
              className="text-label-caps text-secondary hover:text-deep-ink transition-colors"
            >
              TERMS
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
