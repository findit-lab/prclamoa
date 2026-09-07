import { LOCALE_REGISTRY, SITE_URL } from "./config";
import {
  SERVICE_LOCALES,
  getServiceUI,
  type ServiceContent,
  type ServiceLocale,
} from "@/data/services";

export function servicesHubUrl(locale: ServiceLocale) {
  return `${SITE_URL}/${locale}/services`;
}

export function serviceDetailUrl(locale: ServiceLocale, slug: string) {
  return `${SITE_URL}/${locale}/services/${slug}`;
}

function alternates(make: (l: ServiceLocale) => string, koUrl: string) {
  return [
    { rel: "alternate" as const, hreflang: LOCALE_REGISTRY.ko.bcp47, href: koUrl },
    ...SERVICE_LOCALES.map((l) => ({
      rel: "alternate" as const,
      hreflang: LOCALE_REGISTRY[l].bcp47,
      href: make(l),
    })),
    { rel: "alternate" as const, hreflang: "x-default", href: koUrl },
  ];
}

function baseMeta(locale: ServiceLocale, title: string, description: string, url: string) {
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:locale", content: LOCALE_REGISTRY[locale].ogLocale },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
}

export function servicesHubHead(locale: ServiceLocale) {
  const ui = getServiceUI(locale);
  const url = servicesHubUrl(locale);
  return {
    meta: [
      ...baseMeta(locale, ui.hubMetaTitle, ui.hubMetaDescription, url),
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: url },
      ...alternates(servicesHubUrl, `${SITE_URL}/services`),
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: ui.hubMetaTitle,
          description: ui.hubMetaDescription,
          url,
          inLanguage: LOCALE_REGISTRY[locale].bcp47,
        }),
      },
    ],
  };
}

export function serviceDetailHead(locale: ServiceLocale, service: ServiceContent) {
  const ui = getServiceUI(locale);
  const url = serviceDetailUrl(locale, service.slug);
  return {
    meta: [
      ...baseMeta(locale, service.metaTitle, service.metaDescription, url),
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: url },
      ...alternates(
        (l) => serviceDetailUrl(l, service.slug),
        `${SITE_URL}/services/${service.slug}`,
      ),
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.cardTitle,
          description: service.definition,
          url,
          inLanguage: LOCALE_REGISTRY[locale].bcp47,
          provider: { "@type": "Organization", name: "CLAMOA", url: SITE_URL },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: ui.home,
              item: `${SITE_URL}/${locale}`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: ui.allServices,
              item: servicesHubUrl(locale),
            },
            { "@type": "ListItem", position: 3, name: service.cardTitle, item: url },
          ],
        }),
      },
    ],
  };
}

/** hreflang links to add on the Korean service pages. */
export function koServiceAlternates(slug?: string) {
  const koUrl = slug ? `${SITE_URL}/services/${slug}` : `${SITE_URL}/services`;
  const make = (l: ServiceLocale) => (slug ? serviceDetailUrl(l, slug) : servicesHubUrl(l));
  return alternates(make, koUrl);
}
