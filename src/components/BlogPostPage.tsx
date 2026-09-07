import { Link } from "@tanstack/react-router";
import { BLOG_UI, getPosts, type BlogLocale, type BlogPost } from "@/data/blog";

const LOCALE_HOME = { en: "/en", ja: "/ja", vi: "/vi", th: "/th" } as const;
const LOCALE_POST = {
  en: "/en/journal/$slug",
  ja: "/ja/journal/$slug",
  vi: "/vi/journal/$slug",
  th: "/th/journal/$slug",
} as const;
const LOCALE_BLOG = {
  en: "/en/journal",
  ja: "/ja/journal",
  vi: "/vi/journal",
  th: "/th/journal",
} as const;

export function BlogPostPage({ locale, post }: { locale: BlogLocale; post: BlogPost }) {
  const ui = BLOG_UI[locale];
  const related = getPosts(locale).filter(
    (p) => p.slug !== post.slug && p.serviceSlug === post.serviceSlug,
  );

  return (
    <div className="min-h-screen bg-surface text-deep-ink">
      <header className="fixed top-0 w-full z-50 bg-surface/95 border-b border-deep-ink flex justify-between items-center px-5 md:px-16 py-5 md:py-6">
        <Link to={LOCALE_HOME[locale]} className="text-label-caps tracking-[0.25em]">
          CLAMOA
        </Link>
        <Link to={LOCALE_BLOG[locale]} className="text-label-caps text-secondary hover:text-deep-ink">
          {ui.backToBlog}
        </Link>
      </header>

      <main className="pt-28 md:pt-40 px-5 md:px-16 pb-24 md:pb-32">
        <span className="text-label-caps text-secondary block mb-6">{post.category}</span>
        <h1 className="text-display-lg md:text-display-xl leading-tight mb-8 max-w-5xl">
          {post.title}
        </h1>
        <p className="text-body-lg max-w-3xl border-l-4 border-neon-signal pl-6 mb-16">
          {post.excerpt}
        </p>

        <div className="grid grid-cols-12 gap-8">
          <article className="col-span-12 md:col-span-8 border-t-2 border-deep-ink pt-12 space-y-12">
            <p className="text-body-md leading-relaxed">{post.intro}</p>
            {post.sections.map((s) => (
              <section key={s.heading} className="space-y-4">
                <h2 className="text-headline-md">{s.heading}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="text-body-md leading-relaxed text-secondary">
                    {p}
                  </p>
                ))}
              </section>
            ))}
            <section className="border-2 border-deep-ink p-8">
              <span className="text-label-caps text-secondary block mb-3">{ui.takeaway}</span>
              <p className="text-body-lg leading-relaxed">{post.takeaway}</p>
            </section>
          </article>

          <aside className="col-span-12 md:col-span-4 md:border-l md:border-deep-ink/20 md:pl-8 pt-12 space-y-12">
            {post.serviceSlug && post.serviceLabel && (
              <div>
                <span className="text-label-caps text-secondary block mb-4">
                  {ui.relatedService}
                </span>
                <a
                  href={`/services/${post.serviceSlug}`}
                  className="block border-2 border-deep-ink p-6 hover:bg-deep-ink hover:text-neon-signal transition-colors"
                >
                  <span className="text-headline-sm block mb-2">{post.serviceLabel}</span>
                  <span className="text-label-caps">{ui.viewService} →</span>
                </a>
              </div>
            )}
            {related.length > 0 && (
              <div>
                <span className="text-label-caps text-secondary block mb-4">{ui.related}</span>
                <ul className="space-y-4">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        to={LOCALE_POST[locale]}
                        params={{ slug: r.slug }}
                        className="block border-b border-deep-ink/20 pb-4 text-body-md hover:text-neon-signal"
                      >
                        {r.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="border-2 border-deep-ink p-6">
              <h2 className="text-headline-sm mb-3">{ui.ctaTitle}</h2>
              <p className="text-body-sm text-secondary mb-5">{ui.ctaBody}</p>
              <Link to="/contact" className="text-label-caps underline">
                {ui.ctaButton}
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
