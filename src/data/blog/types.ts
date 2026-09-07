export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  /** ISO date of last significant content change. */
  updated: string;
  /** Slug under /services/<slug> this post is tied to, if any. */
  serviceSlug?: string;
  serviceLabel?: string;
  intro: string;
  sections: BlogSection[];
  takeaway: string;
};

export const BLOG_SLUGS = [
  "korea-celebrity-seeding-guide",
  "showroom-and-stylist-relations",
  "ppl-vs-celebrity-seeding",
  "influencer-pr-for-fashion-brands",
  "global-expansion-with-korean-pr",
  "offline-event-pr-playbook",
] as const;

export type BlogSlug = (typeof BLOG_SLUGS)[number];
