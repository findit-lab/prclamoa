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
  logo: "[로고 URL]",
  sameAs: [
    "[인스타그램 URL]",
    "[기타 프로필 URL]",
  ],
  areaServed: ["KR", "JP", "TW", "CN"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Seoul",
    addressRegion: "Apgujeong",
    addressCountry: "KR",
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "CLAMOA",
  url: SITE_URL,
  image: "[쇼룸/로고 이미지 URL]",
  telephone: "[전화번호]",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "[압구정 쇼룸 도로명 주소]",
    addressLocality: "Gangnam-gu",
    addressRegion: "Seoul",
    postalCode: "[우편번호]",
    addressCountry: "KR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "[위도]",
    longitude: "[경도]",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "[10:00]",
      closes: "[19:00]",
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
