import { Link } from "@tanstack/react-router";

import type { ServiceLocale } from "@/data/services";

export const LOCALE_HOME = { en: "/en", ja: "/ja", vi: "/vi", th: "/th" } as const;
export const LOCALE_SERVICES = {
  en: "/en/services",
  ja: "/ja/services",
  vi: "/vi/services",
  th: "/th/services",
} as const;
export const LOCALE_SERVICE_DETAIL = {
  en: "/en/services/$slug",
  ja: "/ja/services/$slug",
  vi: "/vi/services/$slug",
  th: "/th/services/$slug",
} as const;

export function LocalizedServiceNav({
  locale,
  homeLabel,
  servicesLabel,
}: {
  locale: ServiceLocale;
  homeLabel: string;
  servicesLabel: string;
}) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-surface/90 border-b border-deep-ink/15 text-deep-ink">
      <div className="flex items-center justify-between gap-4 px-5 md:px-12 py-4">
        <Link to={LOCALE_HOME[locale]} className="text-label-caps tracking-[0.25em]">
          CLAMOA
        </Link>
        <nav className="flex items-center gap-5">
          <Link
            to={LOCALE_HOME[locale]}
            className="text-label-caps text-secondary hover:text-deep-ink transition-colors"
          >
            {homeLabel}
          </Link>
          <Link
            to={LOCALE_SERVICES[locale]}
            className="text-label-caps text-secondary hover:text-deep-ink transition-colors"
            activeProps={{ className: "text-label-caps text-deep-ink" }}
          >
            {servicesLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
}
