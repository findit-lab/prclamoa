import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { LOCALES, LOCALE_REGISTRY, DEFAULT_LOCALE } from "@/i18n/config";
import { BLOG_LOCALES, getPosts } from "@/data/blog";

const BASE_URL = "https://clamoa.com";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  /** hreflang cluster: locale -> path */
  cluster?: { hreflang: string; path: string }[];
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const ENTRIES: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  ...LOCALES.filter((l) => l !== DEFAULT_LOCALE).map((l) => ({
    path: LOCALE_REGISTRY[l].prefix,
    changefreq: "weekly" as const,
    priority: "0.9",
  })),
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/services", changefreq: "monthly", priority: "0.9" },
  { path: "/services/celebrity-seeding", changefreq: "monthly", priority: "0.8" },
  { path: "/services/stylist-relations", changefreq: "monthly", priority: "0.8" },
  { path: "/services/ppl-content-placement", changefreq: "monthly", priority: "0.8" },
  { path: "/services/influencer-pr", changefreq: "monthly", priority: "0.8" },
  { path: "/services/editorial-viral-pr", changefreq: "monthly", priority: "0.8" },
  { path: "/services/offline-event-pr", changefreq: "monthly", priority: "0.8" },
  { path: "/services/brand-ambassador", changefreq: "monthly", priority: "0.8" },
  { path: "/services/global-expansion", changefreq: "monthly", priority: "0.8" },
  { path: "/case-studies", changefreq: "weekly", priority: "0.9" },
  { path: "/star", changefreq: "monthly", priority: "0.7" },
  { path: "/magazine", changefreq: "monthly", priority: "0.7" },
  { path: "/influencer", changefreq: "monthly", priority: "0.7" },
  { path: "/brand-ambassador", changefreq: "monthly", priority: "0.7" },
  { path: "/event", changefreq: "monthly", priority: "0.7" },
  { path: "/process", changefreq: "monthly", priority: "0.7" },
  { path: "/faq", changefreq: "monthly", priority: "0.6" },
  { path: "/insights", changefreq: "weekly", priority: "0.7" },
  { path: "/contact", changefreq: "yearly", priority: "0.7" },
  { path: "/privacy", changefreq: "yearly", priority: "0.3" },
  { path: "/terms", changefreq: "yearly", priority: "0.3" },
  ...BLOG_LOCALES.map((l) => ({
    path: `/${l}/journal`,
    changefreq: "weekly" as const,
    priority: "0.8",
    cluster: BLOG_LOCALES.map((x) => ({
      hreflang: LOCALE_REGISTRY[x].bcp47,
      path: `/${x}/journal`,
    })),
  })),
  ...BLOG_LOCALES.flatMap((l) =>
    getPosts(l).map((post) => ({
      path: `/${l}/journal/${post.slug}`,
      lastmod: post.updated,
      changefreq: "monthly" as const,
      priority: "0.7",
      cluster: BLOG_LOCALES.filter((x) => getPosts(x).some((p) => p.slug === post.slug)).map(
        (x) => ({ hreflang: LOCALE_REGISTRY[x].bcp47, path: `/${x}/journal/${post.slug}` }),
      ),
    })),
  ),
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const homeCluster = new Set<string>([
          "/",
          ...LOCALES.filter((l) => l !== DEFAULT_LOCALE).map((l) => LOCALE_REGISTRY[l].prefix),
        ]);
        const alternates = (e: SitemapEntry) =>
          e.cluster
            ? [
                ...e.cluster.map(
                  (c) =>
                    `    <xhtml:link rel="alternate" hreflang="${c.hreflang}" href="${BASE_URL}${c.path}" />`,
                ),
                `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${e.cluster[0].path}" />`,
              ]
            : homeCluster.has(e.path)
            ? [
                ...LOCALES.map(
                  (l) =>
                    `    <xhtml:link rel="alternate" hreflang="${LOCALE_REGISTRY[l].bcp47}" href="${BASE_URL}${LOCALE_REGISTRY[l].prefix || "/"}" />`,
                ),
                `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/" />`,
              ]
            : [];
        const urls = ENTRIES.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            ...alternates(e),
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
