import { Link } from "@tanstack/react-router";
import { BLOG_UI, getPosts, type BlogLocale } from "@/data/blog";

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

export function BlogIndexPage({ locale }: { locale: BlogLocale }) {
  const ui = BLOG_UI[locale];
  const posts = getPosts(locale);

  return (
    <div className="min-h-screen bg-surface text-deep-ink">
      <header className="fixed top-0 w-full z-50 bg-surface/95 border-b border-deep-ink flex justify-between items-center px-5 md:px-16 py-5 md:py-6">
        <Link to={LOCALE_HOME[locale]} className="text-label-caps tracking-[0.25em]">
          CLAMOA
        </Link>
        <Link to={LOCALE_HOME[locale]} className="text-label-caps text-secondary hover:text-deep-ink">
          {ui.home}
        </Link>
      </header>

      <main className="pt-28 md:pt-40 px-5 md:px-16 pb-24 md:pb-32">
        <span className="text-label-caps text-secondary block mb-6">{ui.eyebrow}</span>
        <h1 className="text-display-lg md:text-display-xl leading-tight mb-8">{ui.title}</h1>
        <p className="text-body-lg max-w-3xl border-l-4 border-neon-signal pl-6 mb-16 md:mb-24">
          {ui.subtitle}
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-deep-ink border-2 border-deep-ink">
          {posts.map((post) => (
            <li key={post.slug} className="bg-surface">
              <Link
                to={LOCALE_POST[locale]}
                params={{ slug: post.slug }}
                className="flex h-full flex-col justify-between p-8 md:p-10 hover:bg-neon-signal transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-deep-ink"
              >
                <div>
                  <span className="text-label-caps text-secondary block mb-4">{post.category}</span>
                  <h2 className="text-headline-md mb-4 leading-snug">{post.title}</h2>
                  <p className="text-body-md text-secondary leading-relaxed">{post.excerpt}</p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-label-caps">
                  {ui.readMore}
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <section className="mt-20 md:mt-28 border-2 border-deep-ink p-8 md:p-14">
          <h2 className="text-headline-lg mb-4">{ui.ctaTitle}</h2>
          <p className="text-body-md text-secondary max-w-2xl mb-8">{ui.ctaBody}</p>
          <Link
            to="/contact"
            className="inline-block border-2 border-deep-ink px-8 py-4 text-label-caps hover:bg-deep-ink hover:text-neon-signal transition-colors"
          >
            {ui.ctaButton}
          </Link>
        </section>
      </main>
    </div>
  );
}
