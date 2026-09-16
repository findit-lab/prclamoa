export const ARCHIVE_SLUGS = [
  "star",
  "viral",
  "magazine",
  "influencer",
  "event",
  "brand-ambassador",
] as const;

export type ArchiveSlug = (typeof ARCHIVE_SLUGS)[number];

/** Service detail slug each archive page points to. */
export const ARCHIVE_SERVICE: Record<ArchiveSlug, string> = {
  star: "celebrity-seeding",
  viral: "editorial-viral-pr",
  magazine: "editorial-viral-pr",
  influencer: "influencer-pr",
  event: "offline-event-pr",
  "brand-ambassador": "brand-ambassador",
};

export interface ArchiveCopy {
  metaTitle: string;
  metaDescription: string;
  intro: string;
  ctaTitle: string;
  ctaDescription: string;
}

export interface ArchiveUI {
  /** eyebrow on the CTA block */
  dive: string;
  /** CTA button label */
  ctaLabel: string;
  /** influencer page — profile bio line */
  influencerBio: string;
  /** influencer page — location line */
  influencerLocation: string;
  /** influencer page — screen-reader heading for the feed */
  feedHeading: string;
  /** influencer page — screen-reader heading for the featured post */
  featuredHeading: string;
  /** influencer page — featured post caption */
  featuredCaption: string;
  /** event page — scrapbook side note */
  eventScrapNote: string;
}

export interface ArchiveDict {
  ui: ArchiveUI;
  pages: Record<ArchiveSlug, ArchiveCopy>;
}
