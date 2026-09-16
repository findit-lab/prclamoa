import { Link, useRouter, useRouterState } from "@tanstack/react-router";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { archivePath, type ArchiveSlug } from "@/data/archive";
import type { Locale } from "@/i18n/config";

const TABS: { slug: ArchiveSlug; label: string; num: string }[] = [
  { slug: "star", label: "STAR", num: "01" },
  { slug: "viral", label: "VIRAL", num: "02" },
  { slug: "magazine", label: "MAGAZINE", num: "03" },
  { slug: "influencer", label: "INFLUENCER", num: "04" },
  { slug: "event", label: "EVENT", num: "05" },
  { slug: "brand-ambassador", label: "AMBASSADOR", num: "06" },
];

const LOCALE_HOME = {
  ko: "/",
  en: "/en",
  ja: "/ja",
  zh: "/zh",
  vi: "/vi",
  th: "/th",
} as const;

type Variant = "light" | "dark";

interface Props {
  variant?: Variant;
  rightSlot?: React.ReactNode;
  locale?: Locale;
}

export function ArchiveTabs({ variant = "light", rightSlot, locale = "ko" }: Props) {
  const router = useRouter();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isDark = variant === "dark";
  const shellBg = isDark ? "bg-deep-ink/95 border-white/10" : "bg-surface/95 border-deep-ink/10";
  const textColor = isDark ? "text-inverse-on-surface" : "text-deep-ink";
  const mutedColor = isDark ? "text-white/45" : "text-secondary";
  const activeChip = isDark ? "bg-neon-signal text-deep-ink" : "bg-deep-ink text-neon-signal";
  const inactiveChip = isDark
    ? "text-white/65 hover:text-white border border-white/15 hover:border-white/40"
    : "text-deep-ink/65 hover:text-deep-ink border border-deep-ink/15 hover:border-deep-ink/60";

  const goHome = () => router.navigate({ to: LOCALE_HOME[locale] });

  return (
    <header className={`sticky top-0 z-40 backdrop-blur-md border-b ${shellBg} ${textColor}`}>
      {/* row 1 — brand / back */}
      <div className="flex items-center justify-between gap-3 px-4 md:px-10 pt-3 md:pt-4">
        <button
          type="button"
          onClick={goHome}
          className="flex items-center gap-2 group"
          aria-label="Back to home"
        >
          <span className="material-symbols-outlined text-[18px] md:text-[20px] group-hover:-translate-x-1 transition-transform">
            arrow_back
          </span>
          <span className="text-label-caps font-mono">CLAMOA / ARCHIVE</span>
        </button>
        <div className="flex items-center gap-4">
          <div className={`text-label-caps font-mono ${mutedColor} hidden md:block`}>
            {rightSlot}
          </div>
          <LanguageSwitcher locale={locale} />
        </div>
      </div>

      {/* row 2 — chip tabs */}
      <nav
        aria-label="Archive sections"
        className="overflow-x-auto [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        <ul className="flex items-center gap-2 md:gap-3 px-4 md:px-10 py-3 md:py-4 whitespace-nowrap">
          {TABS.map((t) => {
            const to = archivePath(locale, t.slug);
            const active = pathname === to;
            return (
              <li key={t.slug}>
                <Link
                  to={to}
                  className={`group inline-flex items-center gap-2 rounded-full pl-2 pr-3.5 md:pl-2.5 md:pr-4 py-1.5 md:py-2 transition-all duration-200 ${
                    active ? activeChip : inactiveChip
                  }`}
                >
                  <span
                    className={`inline-flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full text-[9px] md:text-[10px] font-mono tracking-tight ${
                      active
                        ? isDark
                          ? "bg-deep-ink text-neon-signal"
                          : "bg-neon-signal text-deep-ink"
                        : isDark
                          ? "bg-white/10"
                          : "bg-deep-ink/8"
                    }`}
                  >
                    {t.num}
                  </span>
                  <span className="text-[11px] md:text-[12px] tracking-[0.18em] font-bold uppercase">
                    {t.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
