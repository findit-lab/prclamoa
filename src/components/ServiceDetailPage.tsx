import { Link, useRouterState } from "@tanstack/react-router";
import { SubPageNav } from "@/components/SubPageNav";
import { getInsightsForService } from "@/data/insights";

export type ServiceFAQ = { q: string; a: string };
export type ServiceStep = { title: string; desc: string };

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
  return (
    <main className="min-h-screen bg-surface text-deep-ink">
      <SubPageNav variant="light" />

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
    </main>
  );
}
