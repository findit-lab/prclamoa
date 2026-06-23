import { Link, useRouter, useRouterState } from "@tanstack/react-router";

const TABS = [
  { to: "/services/celebrity-seeding", label: "STAR" },
  { to: "/services/editorial-viral-pr", label: "MAGAZINE" },
  { to: "/services/influencer-pr", label: "INFLUENCER" },
  { to: "/services/offline-event-pr", label: "EVENT" },
  { to: "/services/brand-ambassador", label: "BRAND AMBASSADOR" },
] as const;

type Variant = "light" | "dark";

interface Props {
  variant?: Variant;
  rightSlot?: React.ReactNode;
}

export function SubPageNav({ variant = "light", rightSlot }: Props) {
  const router = useRouter();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isDark = variant === "dark";
  const wrapBg = isDark
    ? "bg-deep-ink/90 border-white/15"
    : "bg-surface/90 border-deep-ink/15";
  const textColor = isDark ? "text-inverse-on-surface" : "text-deep-ink";
  const mutedColor = isDark ? "text-white/50" : "text-secondary";
  const activeText = isDark ? "text-neon-signal" : "text-deep-ink";
  const inactiveText = isDark
    ? "text-white/60 hover:text-white"
    : "text-deep-ink/60 hover:text-deep-ink";
  const activeUnderline = isDark ? "bg-neon-signal" : "bg-deep-ink";

  const goBack = () => {
    // Use browser history so we return to the exact previous scroll position.
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.history.back();
    } else {
      router.navigate({ to: "/" });
    }
  };

  return (
    <header className={`sticky top-0 z-40 backdrop-blur border-b ${wrapBg} ${textColor}`}>
      <div className="flex items-center justify-between gap-3 md:gap-4 px-3 md:px-8 py-3">
        <button
          type="button"
          onClick={goBack}
          className="flex items-center gap-1.5 md:gap-2 group shrink-0"
          aria-label="Back"
        >
          <span className="material-symbols-outlined text-[18px] md:text-[20px] group-hover:-translate-x-1 transition-transform">
            arrow_back
          </span>
          <span className="text-label-caps hidden sm:inline">BACK</span>
        </button>

        <nav
          className="flex-1 min-w-0 overflow-x-auto [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
          aria-label="Section navigation"
        >
          <ul className="flex items-center justify-start md:justify-center gap-3 md:gap-7 whitespace-nowrap px-2">
            {TABS.map((t) => {
              const active = pathname === t.to;
              return (
                <li key={t.to}>
                  <Link
                    to={t.to}
                    className={`relative inline-block py-1 text-[11px] md:text-[12px] tracking-[0.22em] uppercase font-bold transition-colors ${
                      active ? activeText : inactiveText
                    }`}
                  >
                    {t.label}
                    <span
                      className={`absolute left-0 right-0 -bottom-0.5 h-[2px] transition-opacity ${activeUnderline} ${
                        active ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={`shrink-0 text-label-caps ${mutedColor} hidden md:block min-w-[60px] text-right`}>
          {rightSlot}
        </div>
      </div>
    </header>
  );
}
