import { Link } from "@tanstack/react-router";

import { LOCALE_SERVICE_DETAIL, LocalizedServiceNav } from "@/components/LocalizedServiceNav";
import { getServiceUI, getServices, type ServiceLocale } from "@/data/services";

export function LocalizedServicesHub({ locale }: { locale: ServiceLocale }) {
  const ui = getServiceUI(locale);
  const services = getServices(locale);

  return (
    <main className="min-h-screen bg-surface text-deep-ink">
      <LocalizedServiceNav locale={locale} homeLabel={ui.home} servicesLabel={ui.allServices} />

      <section className="px-5 md:px-12 pt-16 md:pt-24 pb-16 md:pb-24 border-b-2 border-deep-ink">
        <span className="text-label-caps text-secondary block mb-6">{ui.hubEyebrow}</span>
        <h1
          className="uppercase font-serif font-bold leading-[0.88] tracking-[-0.04em] mb-10"
          style={{ fontSize: "clamp(56px, 11vw, 180px)" }}
        >
          {ui.hubTitleTop}
          <br />
          <span className="italic font-normal">{ui.hubTitleBottom}</span>
        </h1>
        <p className="text-body-lg max-w-2xl border-l-4 border-neon-signal pl-6 leading-relaxed">
          {ui.hubIntro}
        </p>
      </section>

      <section className="px-5 md:px-12 py-12 md:py-16">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                to={LOCALE_SERVICE_DETAIL[locale]}
                params={{ slug: s.slug }}
                className="group block h-full bg-surface border-2 border-deep-ink p-6 md:p-7 hover:bg-deep-ink hover:text-inverse-on-surface transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-neon-signal"
              >
                <div className="flex items-baseline justify-between mb-8">
                  <span className="text-label-caps font-mono text-secondary group-hover:text-neon-signal">
                    {s.no}
                  </span>
                  <span className="material-symbols-outlined text-[18px] opacity-40 group-hover:opacity-100 group-hover:text-neon-signal transition">
                    arrow_outward
                  </span>
                </div>
                <h2 className="text-headline-sm uppercase leading-tight mb-2">{s.cardTitle}</h2>
                <p className="text-label-caps text-secondary group-hover:text-neon-signal mb-5">
                  {s.cardSubtitle}
                </p>
                <p className="text-body-sm leading-relaxed opacity-80">{s.cardDesc}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
