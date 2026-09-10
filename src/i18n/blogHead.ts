import { LOCALE_REGISTRY, SITE_URL, socialImageMeta } from "./config";
import { BLOG_LOCALES, BLOG_UI, getPost, type BlogLocale, type BlogPost } from "@/data/blog";


const LOGO_URL = `${SITE_URL}/__l5e/assets-v1/085b2230-7ab0-414e-abd3-c2dcbc1ed4a5/clamoa-logo.png`;

export function blogIndexUrl(locale: BlogLocale) {
  return `${SITE_URL}/${locale}/journal`;
}

export function blogPostUrl(locale: BlogLocale, slug: string) {
  return `${SITE_URL}/${locale}/journal/${slug}`;
}

function alternates(make: (l: BlogLocale) => string, hasPost: (l: BlogLocale) => boolean) {
  const live = BLOG_LOCALES.filter(hasPost);
  return [
    ...live.map((l) => ({
      rel: "alternate" as const,
      hreflang: LOCALE_REGISTRY[l].bcp47,
      href: make(l),
    })),
    { rel: "alternate" as const, hreflang: "x-default", href: make("en") },
  ];
}

export function blogIndexHead(locale: BlogLocale) {
  const ui = BLOG_UI[locale];
  const title = `${ui.title} | CLAMOA`;
  const description = ui.subtitle;
  const url = blogIndexUrl(locale);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: LOCALE_REGISTRY[locale].ogLocale },
      ...socialImageMeta(locale),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },

    ],
    links: [
      { rel: "canonical", href: url },
      ...alternates((l) => blogIndexUrl(l), () => true),
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: title,
          description,
          url,
          inLanguage: LOCALE_REGISTRY[locale].bcp47,
          publisher: {
            "@type": "Organization",
            name: "CLAMOA",
            url: SITE_URL,
            logo: { "@type": "ImageObject", url: LOGO_URL },
          },
        }),
      },
    ],
  };
}

export function blogPostHead(locale: BlogLocale, slug: string, post?: BlogPost) {
  if (!post) {
    return {
      meta: [
        { title: "Article unavailable | CLAMOA" },
        { name: "robots", content: "noindex" },
      ],
    };
  }
  const title = `${post.title} | CLAMOA`;
  const description = post.excerpt;
  const url = blogPostUrl(locale, slug);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "article" },
      { property: "og:locale", content: LOCALE_REGISTRY[locale].ogLocale },
      ...socialImageMeta(locale),
      { name: "twitter:card", content: "summary_large_image" },

      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [
      { rel: "canonical", href: url },
      ...alternates(
        (l) => blogPostUrl(l, slug),
        (l) => Boolean(getPost(l, slug)),
      ),
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description,
          url,
          mainEntityOfPage: url,
          inLanguage: LOCALE_REGISTRY[locale].bcp47,
          dateModified: post.updated,
          articleSection: post.category,
          author: { "@type": "Organization", name: "CLAMOA", url: SITE_URL },
          publisher: {
            "@type": "Organization",
            name: "CLAMOA",
            logo: { "@type": "ImageObject", url: LOGO_URL },
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "CLAMOA", item: `${SITE_URL}/${locale}` },
            {
              "@type": "ListItem",
              position: 2,
              name: BLOG_UI[locale].title,
              item: blogIndexUrl(locale),
            },
            { "@type": "ListItem", position: 3, name: post.title, item: url },
          ],
        }),
      },
    ],
  };
}
