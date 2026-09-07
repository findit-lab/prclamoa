import { Link } from "@tanstack/react-router";

import { LOCALE_HOME, LocalizedServiceNav } from "@/components/LocalizedServiceNav";
import { getServiceUI, type ServiceContent, type ServiceLocale } from "@/data/services";

export function LocalizedServiceDetail({
  locale,
  service,
}: {
  locale: ServiceLocale;
  service: ServiceContent;
}) {
  const ui = getServiceUI(locale);

  return (
    <main className="min-h-screen bg-surface text-deep-ink">
      <LocalizedServiceNav locale={locale} homeLabel={ui.home} servicesLabel={ui.allServices} />

      <section className="px-5 md:px-12 pt-16 md:pt-24 pb-16 md:pb-24 border-b-2 border-deep-ink">
        <span className="text-label-caps text-secondary block mb-6">{service.eyebrow}</span>
        <h1
          className="uppercase font-serif font-bold leading-[0.9] tracking-[-0.03em] mb-10 whitespace-pre-line"
          style={{ fontSize: "clamp(44px, 9vw, 140px)" }}
        >
          {service.title}
        </h1>
        <p className="text-body-lg md:text-headline-sm max-w-3xl border-l-4 border-neon-signal pl-6 leading-relaxed">
          {service.definition}
        </p>
      </section>

      <section className="px-5 md:px-12 py-16 md:py-24 border-b border-deep-ink/15">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <span className="text-label-caps text-secondary block mb-3">{ui.fitLabel}</span>
            <h2 className="text-headline-md uppercase">{ui.fitTitle}</h2>
          </div>
          <ul className="col-span-12 md:col-span-8 grid sm:grid-cols-2 gap-4">
            {service.fitFor.map((item, i) => (
              <li
                key={i}
                className="border-l-2 border-deep-ink pl-4 py-2 text-body-md leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 md:px-12 py-16 md:py-24 border-b border-deep-ink/15 bg-surface-low">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-10">
          <div className="col-span-12 md:col-span-4">
            <span className="text-label-caps text-secondary block mb-3">{ui.processLabel}</span>
            <h2 className="text-headline-md uppercase">{ui.processTitle}</h2>
          </div>
          <p className="col-span-12 md:col-span-8 text-body-md text-secondary max-w-2xl">
            {service.processIntro}
          </p>
        </div>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {service.steps.map((s, i) => (
            <li
              key={i}
              className="bg-surface border-2 border-deep-ink p-6 md:p-7 flex flex-col gap-4"
            >
              <span className="text-label-caps text-secondary font-mono">
                {ui.stepWord} {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-headline-sm uppercase leading-tight">{s.title}</h3>
              <p className="text-body-sm text-secondary leading-relaxed">{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="px-5 md:px-12 py-16 md:py-24 border-b border-deep-ink/15">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <span className="text-label-caps text-secondary block mb-3">{ui.outputLabel}</span>
            <h2 className="text-headline-md uppercase">
              {service.deliverablesTitle ?? ui.outputTitle}
            </h2>
          </div>
          <ul className="col-span-12 md:col-span-8 grid sm:grid-cols-2 gap-3">
            {service.deliverables.map((d, i) => (
              <li key={i} className="flex items-start gap-3 text-body-md leading-relaxed">
                <span className="mt-2 h-2 w-2 bg-neon-signal flex-shrink-0" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {service.regions && (
        <section className="px-5 md:px-12 py-16 md:py-24 border-b border-deep-ink/15">
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-4">
              <span className="text-label-caps text-secondary block mb-3">03.5 — REGIONS</span>
              <h2 className="text-headline-md uppercase">{service.regionsTitle}</h2>
            </div>
            <ul className="col-span-12 md:col-span-8 grid sm:grid-cols-3 gap-4">
              {service.regions.map((r) => (
                <li key={r.flag} className="border-2 border-deep-ink p-5 flex flex-col gap-3">
                  <span className="text-label-caps font-mono text-secondary">{r.flag}</span>
                  <h3 className="text-headline-sm uppercase">{r.title}</h3>
                  <p className="text-body-sm text-secondary leading-relaxed">{r.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="px-5 md:px-12 py-16 md:py-24 border-b-2 border-deep-ink">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <span className="text-label-caps text-secondary block mb-3">{ui.faqLabel}</span>
            <h2 className="text-headline-md uppercase">{ui.faqTitle}</h2>
          </div>
          <dl className="col-span-12 md:col-span-8 divide-y divide-deep-ink/15 border-y border-deep-ink/15">
            {service.faqs.map((f, i) => (
              <div key={i} className="py-6">
                <dt className="text-body-lg font-semibold mb-2">Q. {f.q}</dt>
                <dd className="text-body-md text-secondary leading-relaxed">A. {f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-5 md:px-12 py-20 md:py-32 bg-deep-ink text-inverse-on-surface">
        <div className="max-w-4xl">
          <span className="text-label-caps text-neon-signal block mb-6">{ui.ctaEyebrow}</span>
          <h2
            className="uppercase font-serif font-bold leading-[0.95] mb-10 whitespace-pre-line"
            style={{ fontSize: "clamp(36px, 6vw, 80px)" }}
          >
            {ui.ctaTitle}
          </h2>
          <Link
            to={LOCALE_HOME[locale]}
            hash="contact"
            className="inline-flex items-center gap-3 bg-neon-signal text-deep-ink px-8 md:px-12 py-5 md:py-6 text-label-caps hover:bg-surface transition-colors border-2 border-neon-signal"
          >
            <span>{ui.ctaButton}</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
