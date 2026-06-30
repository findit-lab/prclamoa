import { createFileRoute, Link } from "@tanstack/react-router";
import { SubPageNav } from "@/components/SubPageNav";
import { useEffect } from "react";
import { insights } from "@/data/insights";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "INSIGHTS — 패션 PR · 셀럽 협찬 인사이트 | CLAMOA" },
      {
        name: "description",
        content:
          "패션 PR 대행, 셀럽 협찬, 스타일리스트 릴레이션, PPL, 인플루언서 PR, 글로벌 확장에 대한 CLAMOA의 인사이트 노트.",
      },
      { property: "og:title", content: "INSIGHTS — 패션 PR · 셀럽 협찬 인사이트 | CLAMOA" },
      {
        property: "og:description",
        content:
          "패션 브랜드를 위한 PR 운영 인사이트 — 셀럽 협찬, 스타일리스트 릴레이션, 글로벌 확장.",
      },
      { property: "og:url", content: "https://clamoa.com/insights" },
    ],
    links: [{ rel: "canonical", href: "https://clamoa.com/insights" }],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("active")),
      { threshold: 0.08, rootMargin: "0px 0px -50px 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
        <section className="px-5 md:px-16 pt-24 md:pt-40 pb-16 md:pb-24 reveal">
          <span className="text-label-caps text-secondary block mb-8">INSIGHTS</span>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-10">
              <h1 className="text-display-xl uppercase mb-12">
                FASHION PR
                <br />
                NOTES
              </h1>
            </div>
            <div className="col-span-12 md:col-span-8">
              <p className="text-body-lg border-l-4 border-neon-signal pl-6">
                패션 PR 대행, 셀럽 협찬, 스타일리스트 릴레이션, PPL, 인플루언서 PR, 글로벌 확장
                운영에서 CLAMOA가 정리한 인사이트와 실무 노트.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 md:px-16 mb-20 md:mb-32 reveal">
          <ul className="border-t-2 border-deep-ink">
            {insights.map((post, i) => (
              <li key={post.slug} className="border-b border-deep-ink/15 group">
                <Link
                  to="/insights/$slug"
                  params={{ slug: post.slug }}
                  className="grid grid-cols-12 gap-6 py-10 md:py-14 hover:bg-deep-ink/[0.02] transition-colors"
                >
                  <div className="col-span-12 md:col-span-2">
                    <span className="text-label-caps text-secondary block">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-label-caps text-secondary block mt-2">
                      {post.category}
                    </span>
                  </div>
                  <div className="col-span-12 md:col-span-8">
                    <h2 className="text-headline-md mb-3 group-hover:text-neon-signal transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-body-md text-secondary max-w-2xl">{post.excerpt}</p>
                  </div>
                  <div className="col-span-12 md:col-span-2 md:text-right flex md:block items-center">
                    <span className="inline-flex items-center gap-2 text-label-caps">
                      READ
                      <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t-2 border-deep-ink px-5 md:px-16 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-label-caps text-secondary block mb-4">CLAMOA</span>
            <p className="text-body-md text-secondary max-w-sm">
              서울 압구정 기반 패션 PR 에이전시
              <br />
              셀럽 협찬 · 스타일리스트 릴레이션 · PPL · 인플루언서 · 바이럴 · 글로벌 확장
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
