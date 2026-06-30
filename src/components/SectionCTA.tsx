import { Link } from "@tanstack/react-router";

interface Props {
  eyebrow: string;
  title: string;
  description: string;
  to: string;
  ctaLabel?: string;
}

export function SectionCTA({
  eyebrow,
  title,
  description,
  to,
  ctaLabel = "서비스 상세 보기",
}: Props) {
  return (
    <section className="px-5 md:px-12 py-20 md:py-32 bg-deep-ink text-inverse-on-surface border-t-2 border-deep-ink">
      <div className="max-w-4xl">
        <span className="text-label-caps text-neon-signal block mb-6">— {eyebrow}</span>
        <h2
          className="uppercase font-serif font-bold leading-[0.95] mb-8"
          style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
        >
          {title}
        </h2>
        <p className="text-body-lg md:text-headline-sm text-white/80 max-w-2xl mb-10 leading-relaxed">
          {description}
        </p>
        <Link
          to={to}
          className="inline-flex items-center gap-3 bg-neon-signal text-deep-ink px-8 md:px-12 py-5 md:py-6 text-label-caps hover:bg-surface transition-colors border-2 border-neon-signal"
        >
          <span>{ctaLabel}</span>
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </Link>
      </div>
    </section>
  );
}
