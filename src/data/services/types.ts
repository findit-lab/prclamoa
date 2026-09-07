export const SERVICE_SLUGS = [
  "celebrity-seeding",
  "stylist-relations",
  "ppl-content-placement",
  "influencer-pr",
  "editorial-viral-pr",
  "offline-event-pr",
  "brand-ambassador",
  "global-expansion",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceStep {
  title: string;
  desc: string;
}

export interface ServiceContent {
  slug: ServiceSlug;
  /** "01" ~ "08" — same order as SERVICE_SLUGS */
  no: string;
  /** Small caps line above the H1, e.g. "01 — CELEBRITY SEEDING" */
  eyebrow: string;
  /** H1. May contain "\n" for a line break. */
  title: string;
  /** Card title on the services hub */
  cardTitle: string;
  /** Card subtitle (localized service name) on the services hub */
  cardSubtitle: string;
  /** Card one-line description on the services hub */
  cardDesc: string;
  /** Direct-answer definition, first paragraph of the page */
  definition: string;
  fitFor: string[];
  processIntro: string;
  steps: ServiceStep[];
  /** Overrides the OUTPUT heading (e.g. "Expected impact") */
  deliverablesTitle?: string;
  deliverables: string[];
  faqs: ServiceFAQ[];
  metaTitle: string;
  metaDescription: string;
}

export interface ServiceUI {
  /** hub */
  hubEyebrow: string;
  hubTitleTop: string;
  hubTitleBottom: string;
  hubIntro: string;
  hubMetaTitle: string;
  hubMetaDescription: string;
  /** detail sections */
  fitLabel: string;
  fitTitle: string;
  processLabel: string;
  processTitle: string;
  outputLabel: string;
  outputTitle: string;
  faqLabel: string;
  faqTitle: string;
  stepWord: string;
  /** chrome */
  home: string;
  allServices: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaButton: string;
}

export interface ServiceLocaleData {
  ui: ServiceUI;
  services: Record<ServiceSlug, ServiceContent>;
}
