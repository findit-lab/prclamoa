import { useEffect, useRef, useState } from "react";
import { LOCALES, LOCALE_REGISTRY, localeHomePath, type Locale } from "@/i18n/config";

/**
 * Language selector for the top navigation.
 * Each option is a real link to the locale-prefixed home URL so crawlers can follow it.
 */
export function LanguageSwitcher({
  locale,
  className = "",
}: {
  locale: Locale;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const current = LOCALE_REGISTRY[locale];

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        aria-label="Select language"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-label-caps border border-deep-ink px-3 py-1.5 hover:bg-neon-signal transition-colors"
      >
        <span className="material-symbols-outlined text-[16px]">language</span>
        {current.short}
        <span className="material-symbols-outlined text-[16px]">
          {open ? "expand_less" : "expand_more"}
        </span>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full mt-2 min-w-[150px] bg-surface border border-deep-ink z-50"
        >
          {LOCALES.map((l) => (
            <li key={l}>
              <a
                href={localeHomePath(l)}
                hrefLang={LOCALE_REGISTRY[l].bcp47}
                lang={LOCALE_REGISTRY[l].bcp47}
                aria-current={l === locale ? "true" : undefined}
                className={`block px-4 py-3 text-body-sm border-b border-deep-ink/15 last:border-b-0 hover:bg-neon-signal ${
                  l === locale ? "font-bold" : ""
                }`}
              >
                {LOCALE_REGISTRY[l].label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
