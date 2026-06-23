import { Link, useRouterState } from "@tanstack/react-router";

import { getInsightsForService } from "@/data/insights";
import {
  SITE_URL,
  breadcrumbSchema,
  serviceSchema,
} from "@/lib/schema";

export type ServiceFAQ = { q: string; a: string };
export type ServiceStep = { title: string; desc: string };

/** Per-slug meta used to build Service + Breadcrumb JSON-LD. */
const SERVICE_META: Record<
  string,
  { serviceType: string; label: string; areaServed: string[] }
> = {
  "celebrity-seeding": { serviceType: "Celebrity Seeding", label: "Celebrity Seeding (셀럽 협찬)", areaServed: ["KR"] },
  "stylist-relations": { serviceType: "Stylist Relations", label: "Stylist Relations (스타일리스트 릴레이션)", areaServed: ["KR"] },
  "ppl-content-placement": { serviceType: "Product Placement", label: "PPL & Content Placement", areaServed: ["KR"] },
  "influencer-pr": { serviceType: "Influencer Marketing", label: "Influencer PR", areaServed: ["KR"] },
  "editorial-viral-pr": { serviceType: "Editorial & Viral PR", label: "Editorial & Viral PR", areaServed: ["KR"] },
  "offline-event-pr": { serviceType: "Event PR", label: "Offline Event PR", areaServed: ["KR"] },
  "brand-ambassador": { serviceType: "Brand Ambassador Campaign", label: "Brand Ambassador Campaign", areaServed: ["KR"] },
  "global-expansion": { serviceType: "Global Distribution & PR", label: "Global Expansion", areaServed: ["KR", "JP", "TW", "CN"] },
};

type Props = {
  eyebrow: string;
  title: string;
  /** 40~50 word direct-answer definition. First sentence of page. */
  definition: string;
  /** Who this service fits — bullet list of brand archetypes. */
  fitFor: string[];
  /** CLAMOA's process steps. */
  steps: ServiceStep[];
  /** Expected deliverables / outputs. */
  deliverables: string[];
  /** 3~5 FAQ entries. */
  faqs: ServiceFAQ[];
  /** Optional extra block rendered before FAQ (e.g. regional table). */
  extra?: React.ReactNode;
};

export function ServiceDetailPage({
  eyebrow,
  title,
  definition,
  fitFor,
  steps,
  deliverables,
  faqs,
  extra,
}: Props) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const serviceSlug = pathname.startsWith("/services/")
    ? pathname.replace("/services/", "").replace(/\/$/, "")
    : undefined;
  const relatedInsights = getInsightsForService(serviceSlug);
  const meta = serviceSlug ? SERVICE_META[serviceSlug] : undefined;
  const url = serviceSlug ? `${SITE_URL}/services/${serviceSlug}` : SITE_URL;

  const schemas: unknown[] = [];
  if (meta) {
    schemas.push(
      serviceSchema({
        serviceType: meta.serviceType,
        name: meta.label,
        description: definition,
        url,
        areaServed: meta.areaServed,
      }),
    );
    schemas.push(
      breadcrumbSchema([
        { name: "Home", url: `${SITE_URL}/` },
        { name: "Services", url: `${SITE_URL}/services` },
        { name: meta.label, url },
      ]),
    );
  }


  return (
    <main className="min-h-screen bg-surface text-deep-ink">



      {/* HERO + DEFINITION */}
      <section className="px-5 md:px-12 pt-28 md:pt-40 pb-16 md:pb-24 border-b-2 border-deep-ink">
        <span className="text-label-caps text-secondary block mb-6">{eyebrow}</span>
        <h1
          className="uppercase font-serif font-bold leading-[0.9] tracking-[-0.03em] mb-10"
          style={{ fontSize: "clamp(44px, 9vw, 140px)" }}
        >
          {title}
        </h1>
        <p className="text-body-lg md:text-headline-sm max-w-3xl border-l-4 border-neon-signal pl-6 leading-relaxed">
          {definition}
        </p>
      </section>

      {/* WHO IT'S FOR */}
      <section className="px-5 md:px-12 py-16 md:py-24 border-b border-deep-ink/15">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <span className="text-label-caps text-secondary block mb-3">01 — FIT</span>
            <h2 className="text-headline-md uppercase">어떤 브랜드에 적합한가</h2>
          </div>
          <ul className="col-span-12 md:col-span-8 grid sm:grid-cols-2 gap-4">
            {fitFor.map((item, i) => (
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

      {/* PROCESS */}
      <section className="px-5 md:px-12 py-16 md:py-24 border-b border-deep-ink/15 bg-surface-low">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-10">
          <div className="col-span-12 md:col-span-4">
            <span className="text-label-caps text-secondary block mb-3">02 — PROCESS</span>
            <h2 className="text-headline-md uppercase">클라모아 진행 방식</h2>
          </div>
          <p className="col-span-12 md:col-span-8 text-body-md text-secondary max-w-2xl">
            브리프부터 리포팅까지, 단계별로 결과를 추적합니다.
          </p>
        </div>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((s, i) => (
            <li
              key={i}
              className="bg-surface border-2 border-deep-ink p-6 md:p-7 flex flex-col gap-4"
            >
              <span className="text-label-caps text-secondary font-mono">
                STEP {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-headline-sm uppercase leading-tight">{s.title}</h3>
              <p className="text-body-sm text-secondary leading-relaxed">{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* DELIVERABLES */}
      <section className="px-5 md:px-12 py-16 md:py-24 border-b border-deep-ink/15">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <span className="text-label-caps text-secondary block mb-3">03 — OUTPUT</span>
            <h2 className="text-headline-md uppercase">기대 산출물</h2>
          </div>
          <ul className="col-span-12 md:col-span-8 grid sm:grid-cols-2 gap-3">
            {deliverables.map((d, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-body-md leading-relaxed"
              >
                <span className="mt-2 h-2 w-2 bg-neon-signal flex-shrink-0" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {extra && (
        <section className="px-5 md:px-12 py-16 md:py-24 border-b border-deep-ink/15">
          {extra}
        </section>
      )}

      {/* FAQ */}
      <section className="px-5 md:px-12 py-16 md:py-24 border-b-2 border-deep-ink">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <span className="text-label-caps text-secondary block mb-3">04 — FAQ</span>
            <h2 className="text-headline-md uppercase">자주 묻는 질문</h2>
          </div>
          <dl className="col-span-12 md:col-span-8 divide-y divide-deep-ink/15 border-y border-deep-ink/15">
            {faqs.map((f, i) => (
              <div key={i} className="py-6">
                <dt className="text-body-lg font-semibold mb-2">Q. {f.q}</dt>
                <dd className="text-body-md text-secondary leading-relaxed">A. {f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* RELATED INSIGHTS */}
      {relatedInsights.length > 0 && (
        <section className="px-5 md:px-12 py-16 md:py-24 border-b-2 border-deep-ink">
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 md:col-span-4">
              <span className="text-label-caps text-secondary block mb-3">05 — INSIGHTS</span>
              <h2 className="text-headline-md uppercase">관련 인사이트</h2>
            </div>
            <ul className="col-span-12 md:col-span-8 divide-y divide-deep-ink/15 border-y border-deep-ink/15">
              {relatedInsights.map((i) => (
                <li key={i.slug}>
                  <Link
                    to="/insights/$slug"
                    params={{ slug: i.slug }}
                    className="flex items-start justify-between gap-6 py-5 hover:text-neon-signal transition-colors group"
                  >
                    <div>
                      <span className="text-label-caps text-secondary block mb-2">{i.category}</span>
                      <span className="text-body-lg">{i.title}</span>
                    </div>
                    <span className="material-symbols-outlined text-[20px] mt-1 group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="px-5 md:px-12 py-20 md:py-32 bg-deep-ink text-inverse-on-surface">
        <div className="max-w-4xl">
          <span className="text-label-caps text-neon-signal block mb-6">— LET&apos;S TALK</span>
          <h2
            className="uppercase font-serif font-bold leading-[0.95] mb-10"
            style={{ fontSize: "clamp(36px, 6vw, 80px)" }}
          >
            브랜드에 맞는 PR 설계,<br />클라모아와 시작하세요.
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-neon-signal text-deep-ink px-8 md:px-12 py-5 md:py-6 text-label-caps hover:bg-surface transition-colors border-2 border-neon-signal"
          >
            <span>상담 요청하기</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </Link>
        </div>
      </section>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </main>
  );
}
