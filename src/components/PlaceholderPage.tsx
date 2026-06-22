import { SubPageNav } from "@/components/SubPageNav";

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PlaceholderPage({ eyebrow, title, description }: Props) {
  return (
    <main className="min-h-screen bg-surface text-deep-ink">
      <SubPageNav variant="light" />
      <section className="px-5 md:px-16 pt-32 md:pt-48 pb-24 md:pb-40 max-w-5xl">
        {eyebrow && (
          <span className="text-label-caps text-secondary block mb-6">{eyebrow}</span>
        )}
        <h1
          className="uppercase font-serif font-bold leading-[0.9] tracking-[-0.03em] mb-10"
          style={{ fontSize: "clamp(40px, 8vw, 120px)" }}
        >
          {title}
        </h1>
        <p className="text-body-lg max-w-2xl border-l-4 border-neon-signal pl-6">
          {description}
        </p>
      </section>
    </main>
  );
}
