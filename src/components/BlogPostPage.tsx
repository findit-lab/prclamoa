import { Link } from "@tanstack/react-router";
import { BLOG_UI, getPosts, type BlogLocale, type BlogPost } from "@/data/blog";

const LOCALE_HOME = { en: "/en", ja: "/ja", zh: "/zh", vi: "/vi", th: "/th" } as const;
const LOCALE_POST = {
  en: "/en/journal/$slug",
  ja: "/ja/journal/$slug",
  zh: "/zh/journal/$slug",
  vi: "/vi/journal/$slug",
  th: "/th/journal/$slug",
} as const;
const LOCALE_BLOG = {
  en: "/en/journal",
  ja: "/ja/journal",
  zh: "/zh/journal",
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

      <main className="px-5 pb-24 pt-28 md:px-16 md:pb-32 md:pt-40">
        <header className="mx-auto max-w-5xl md:mx-0">
          <span className="mb-4 block text-label-caps text-secondary md:mb-6">
            {post.category}
          </span>
          <h1 className="mb-7 break-words font-sans text-[30px] font-bold leading-[1.22] md:mb-8 md:max-w-5xl md:font-display md:text-display-xl md:font-normal md:leading-[0.94]">
            {post.title}
          </h1>
          <div className="mb-14 border-y border-deep-ink/15 bg-surface-low px-5 py-5 md:mb-16 md:max-w-3xl md:border-y-0 md:border-l-4 md:border-neon-signal md:bg-transparent md:px-0 md:py-0 md:pl-6">
            <p className="text-[17px] font-medium leading-[1.68] md:text-body-lg md:font-normal">
              {post.excerpt}
            </p>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-8">
          <article className="col-span-12 space-y-14 border-t-2 border-deep-ink pt-9 md:col-span-8 md:space-y-12 md:pt-12">
            <p className="text-[17px] leading-[1.75] md:text-body-md md:leading-relaxed">{post.intro}</p>
            {post.sections.map((s) => (
              <section key={s.heading} className="border-t border-deep-ink/15 pt-8 md:border-0 md:pt-0">
                <h2 className="mb-5 break-words font-sans text-[22px] font-bold leading-[1.25] md:mb-4 md:font-display md:text-headline-md md:font-normal">
                  {s.heading}
                </h2>
                {s.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="mt-5 text-[17px] leading-[1.75] text-secondary first:mt-0 md:text-body-md md:leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </section>
            ))}
            <section className="border-2 border-deep-ink p-6 md:p-8">
              <span className="text-label-caps text-secondary block mb-3">{ui.takeaway}</span>
              <p className="text-[17px] font-medium leading-[1.7] md:text-body-lg md:font-normal md:leading-relaxed">
                {post.takeaway}
              </p>
            </section>
          </article>

          <aside className="col-span-12 space-y-10 border-t border-deep-ink/20 pt-12 md:col-span-4 md:space-y-12 md:border-l md:border-t-0 md:pl-8">
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
