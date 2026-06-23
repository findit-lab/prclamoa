/**
 * JSON-LD schema generators for CLAMOA.
 * Values in [BRACKETS] are placeholders to be replaced by the brand owner.
 */

export const SITE_URL = "https://clamoa.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CLAMOA",
  alternateName: "클라모아",
  url: SITE_URL,
  logo: `${SITE_URL}/__l5e/assets-v1/085b2230-7ab0-414e-abd3-c2dcbc1ed4a5/clamoa-logo.png`,
  sameAs: [
    "[인스타그램 URL]",
  ],
  areaServed: ["KR", "JP", "TW", "CN"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "선릉로155길 23-3, 3층",
    addressLocality: "Gangnam-gu",
    addressRegion: "Seoul",
    addressCountry: "KR",
  },
  telephone: "+82-507-1322-0092",
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "CLAMOA",
  url: SITE_URL,
  image: `${SITE_URL}/__l5e/assets-v1/085b2230-7ab0-414e-abd3-c2dcbc1ed4a5/clamoa-logo.png`,
  telephone: "+82-507-1322-0092",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "선릉로155길 23-3, 3층",
    addressLocality: "Gangnam-gu",
    addressRegion: "Seoul",
    addressCountry: "KR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  areaServed: ["KR", "JP", "TW", "CN"],
};

export function serviceSchema(opts: {
  serviceType: string;
  name: string;
  description: string;
  url: string;
  areaServed?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.serviceType,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    areaServed: opts.areaServed ?? ["KR"],
    provider: {
      "@type": "Organization",
      name: "CLAMOA",
      url: SITE_URL,
    },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function jsonLdScriptProps(schema: unknown) {
  return {
    type: "application/ld+json" as const,
    dangerouslySetInnerHTML: { __html: JSON.stringify(schema) },
  };
}
