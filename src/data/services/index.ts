import en from "./en";
import ja from "./ja";
import th from "./th";
import vi from "./vi";
import zh from "./zh";
import {
  SERVICE_SLUGS,
  type ServiceContent,
  type ServiceLocaleData,
  type ServiceSlug,
} from "./types";

export { SERVICE_SLUGS };
export type { ServiceContent, ServiceSlug, ServiceLocaleData };
export type { ServiceFAQ, ServiceStep, ServiceUI } from "./types";

export const SERVICE_LOCALES = ["en", "ja", "zh", "vi", "th"] as const;
export type ServiceLocale = (typeof SERVICE_LOCALES)[number];

export const SERVICES: Record<ServiceLocale, ServiceLocaleData> = { en, ja, zh, vi, th };

export function getServiceUI(locale: ServiceLocale) {
  return SERVICES[locale].ui;
}

export function getServices(locale: ServiceLocale): ServiceContent[] {
  const data = SERVICES[locale].services;
  return SERVICE_SLUGS.map((slug) => data[slug]);
}

export function getService(locale: ServiceLocale, slug: string): ServiceContent | undefined {
  if (!(SERVICE_SLUGS as readonly string[]).includes(slug)) return undefined;
  return SERVICES[locale].services[slug as ServiceSlug];
}
