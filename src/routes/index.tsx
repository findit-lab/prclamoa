import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CLAMOA — Art of Fashion PR" },
      {
        name: "description",
        content:
          "CLAMOA is a Seoul-based fashion PR agency building cultural visibility through showroom strategy, celebrity seeding, stylist relations, and data-driven campaigns.",
      },
      { property: "og:title", content: "CLAMOA — Art of Fashion PR" },
      {
        property: "og:description",
        content: "Where strategic disruption meets high-fashion precision.",
      },
    ],
  }),
  component: Index,
});

const IMG_SHOWROOM =
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80&auto=format&fit=crop";
const IMG_RACK =
  "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&q=80&auto=format&fit=crop";
const IMG_CASE_1 =
  "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=1200&q=80&auto=format&fit=crop";
const IMG_CASE_2 =
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80&auto=format&fit=crop";
const IMG_CASE_3 =
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80&auto=format&fit=crop";

function Index() {
  const parallaxText = useRef<HTMLDivElement>(null);
  const parallaxContainer = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("active")),
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".reveal, .reveal-group").forEach((el) => observer.observe(el));

    const onScroll = () => {
      const scrolled = window.pageYOffset;
      if (parallaxText.current && parallaxContainer.current) {
        const top = parallaxContainer.current.offsetTop;
        const h = parallaxContainer.current.offsetHeight;
        if (scrolled + window.innerHeight > top && scrolled < top + h) {
          const rel = scrolled - top;
          parallaxText.current.style.transform = `rotate(-5deg) translateX(${rel * 0.15 - 200}px)`;
        }
      }
      if (navRef.current) {
        if (scrolled > 50) {
          navRef.current.classList.add("py-4", "backdrop-blur-md");
          navRef.current.classList.remove("py-6");
        } else {
          navRef.current.classList.add("py-6");
          navRef.current.classList.remove("py-4", "backdrop-blur-md");
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const navLinks = [
    ["WORK", "#work"],
    ["SERVICES", "#services"],
    ["AGENCY", "#agency"],
    ["INSIGHTS", "#insights"],
    ["CONTACT", "#contact"],
  ];

  const services = [
    ["Celebrity & Stylist Seeding", "Connect collections with celebrities, stylists, wardrobe teams, and cultural tastemakers."],
    ["Showroom PR Operation", "Operate a curated showroom where stylists, editors, influencers, and celebrities discover brand items."],
    ["Fashion Campaign Strategy", "Plan and execute launch campaigns, seasonal collection PR, collaborations, and brand moments."],
    ["Influencer & Creator Marketing", "Build creator-led campaigns that generate social proof, visual assets, and audience engagement."],
    ["Editorial Content Production", "Produce lookbooks, AI model visuals, campaign images, short-form videos, and digital assets."],
    ["AI & Data-Driven PR", "Track product movement, stylist requests, exposure, content performance, and campaign outcomes."],
  ];

  const process = [
    ["01", "BRAND DIAGNOSIS", "Analyze brand identity, target audience, collection story, product line, and campaign objectives."],
    ["02", "PR STRATEGY DESIGN", "Define the best PR mix across showroom exposure, celebrity seeding, stylist outreach, creator campaigns, and media relations."],
    ["03", "NETWORK ACTIVATION", "Activate stylists, influencers, celebrities, editors, creators, and showroom visitors."],
    ["04", "CAMPAIGN EXECUTION", "Manage logistics, communication, product lending, pickup, return, content production, and publishing."],
    ["05", "MONITORING & REPORTING", "Track placements, content performance, campaign exposure, audience response, and measurable outcomes."],
  ];

  const cases = [
    [IMG_CASE_1, "01", "New Collection Launch PR", "Showroom activation, stylist seeding, creator content, and digital exposure for seasonal fashion collections."],
    [IMG_CASE_2, "02", "Celebrity Placement Campaign", "Strategic product seeding and wardrobe coordination for celebrity-driven brand visibility."],
    [IMG_CASE_3, "03", "AI Fashion Content Production", "AI-assisted lookbook visuals, model content, and short-form campaign assets for digital channels."],
  ];

  const differentiators = [
    "Direct stylist and celebrity network",
    "Premium showroom-based brand exposure",
    "Campaign execution from strategy to delivery",
    "AI-assisted content production",
    "PR monitoring and reporting",
    "Korea-to-global fashion expansion support",
  ];

  return (
    <div className="text-deep-ink min-h-screen">
      {/* Nav */}
      <nav
        ref={navRef}
        className="fixed top-0 w-full z-50 bg-surface/95 border-b border-deep-ink flex justify-between items-center px-6 md:px-16 py-6 transition-all duration-500"
      >
        <a href="#top" className="text-2xl font-serif font-bold tracking-tighter">CLAMOA</a>
        <div className="hidden md:flex gap-10">
          {navLinks.map(([l, h]) => (
            <a key={l} href={h} className="text-label-caps hover:text-neon-signal transition-colors duration-200">
              {l}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden md:inline-block bg-neon-signal text-deep-ink px-6 py-3 text-label-caps hover:bg-deep-ink hover:text-neon-signal transition-all duration-300 border border-deep-ink active:scale-95"
        >
          GET IN TOUCH
        </a>
        <button
          aria-label="Toggle menu"
          className="md:hidden text-label-caps border border-deep-ink px-4 py-2"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-surface border-b border-deep-ink md:hidden flex flex-col">
            {navLinks.map(([l, h]) => (
              <a
                key={l}
                href={h}
                onClick={() => setMenuOpen(false)}
                className="text-label-caps px-6 py-5 border-t border-deep-ink/20 hover:bg-neon-signal"
              >
                {l}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-label-caps px-6 py-5 bg-neon-signal border-t border-deep-ink"
            >
              GET IN TOUCH →
            </a>
          </div>
        )}
      </nav>

      <main id="top" className="pt-32">
        {/* Hero */}
        <section className="px-6 md:px-16 mb-32 md:mb-40 reveal">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-8">
              <span className="text-label-caps text-secondary block mb-8">SEOUL — FASHION PR AGENCY</span>
              <h1 className="text-display-xl uppercase mb-12">
                CLAMOA:<br />ART OF<br />FASHION PR
              </h1>
              <div className="max-w-xl space-y-6">
                <p className="text-body-lg border-l-4 border-neon-signal pl-6 italic font-serif">
                  Where strategic disruption meets high-fashion precision.
                </p>
                <p className="text-body-md pl-6 max-w-lg">
                  CLAMOA builds cultural visibility for fashion and lifestyle brands through showroom strategy, celebrity seeding, stylist relations, creator campaigns, and data-driven PR execution.
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="border-2 border-deep-ink p-8 bg-neon-signal hover-lift shadow-[8px_8px_0px_0px_rgba(26,28,28,1)]">
                <span className="text-label-caps block mb-4">ESTABLISHED 2024</span>
                <h2 className="text-headline-md uppercase">CHAMPIONING<br />THE UNDONE<br />AESTHETIC.</h2>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work Preview */}
        <section id="work" className="px-6 md:px-16 mb-32 md:mb-40 reveal">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-7 relative group overflow-hidden border-2 border-deep-ink">
              <img
                src={IMG_SHOWROOM}
                alt="Showroom"
                className="w-full aspect-[1.5] object-cover grayscale hover:grayscale-0 transition-all duration-1000 hover:scale-110"
              />
              <div className="absolute -bottom-6 -right-6 bg-deep-ink text-surface p-10 max-w-xs hidden md:block transition-transform duration-500 group-hover:-translate-x-4 group-hover:-translate-y-4">
                <p className="text-body-md italic font-serif">
                  "Visibility is not bought. It is staged, seeded, and remembered."
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
              <div className="border-t-2 border-deep-ink pt-8 mt-16 md:mt-0">
                <span className="text-label-caps text-secondary mb-4 block">01 / BRAND VISIBILITY</span>
                <h3 className="text-headline-lg mb-6 uppercase">RAW<br />INFLUENCE</h3>
                <p className="text-body-md mb-8">
                  We turn product placement, showroom access, and cultural relationships into measurable brand momentum.
                </p>
                <a href="#work" className="inline-flex items-center gap-4 text-label-caps group border-b border-transparent hover:border-deep-ink pb-1 transition-all duration-300">
                  VIEW CASE STUDY
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Dark Statement */}
        <section className="bg-deep-ink text-surface py-32 md:py-40 px-6 md:px-16 mb-32 md:mb-40 overflow-hidden relative">
          <div ref={parallaxContainer} className="absolute inset-0 opacity-10 pointer-events-none select-none overflow-hidden">
            <div ref={parallaxText} className="whitespace-nowrap font-serif font-bold leading-none transform rotate-[-5deg]" style={{ fontSize: "300px" }}>
              INFLUENCE INFLUENCE INFLUENCE
            </div>
          </div>
          <div className="relative z-10 grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-10 md:col-start-2">
              <h2 className="text-headline-lg mb-12 reveal uppercase">
                WE OPERATE AT THE INTERSECTION OF{" "}
                <span className="text-neon-signal">CULTURAL RELEVANCE</span> AND{" "}
                <span className="italic underline decoration-neon-signal underline-offset-8">COMMERCIAL NECESSITY.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 reveal-group">
                {[
                  ["METHOD", "Curated chaos. We build influence through showroom access, stylist coordination, and strategic seeding."],
                  ["VISION", "Fashion PR should feel cultural, not mechanical. Every placement must carry intent."],
                  ["RESULT", "High-fashion visibility with measurable brand exposure, creator content, and commercial impact."],
                ].map(([h, b]) => (
                  <div key={h} className="border-l border-white/30 pl-6 hover:border-neon-signal transition-colors duration-300">
                    <span className="text-neon-signal text-label-caps block mb-4">{h}</span>
                    <p className="text-body-md">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services intro */}
        <section id="services" className="px-6 md:px-16 mb-32 md:mb-40 reveal">
          <div className="grid grid-cols-12 gap-6 items-start">
            <div className="col-span-12 md:col-span-4 order-2 md:order-1">
              <div className="border-t-2 border-deep-ink pt-8">
                <span className="text-label-caps text-secondary mb-4 block">02 / SERVICES</span>
                <h3 className="text-headline-lg mb-6 uppercase">SPATIAL<br />RHYTHM</h3>
                <p className="text-body-md mb-8">
                  From showroom curation to celebrity placement, we design the physical and digital moments that make brands visible.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["SHOWROOM", "CELEBRITY SEEDING", "STYLIST RELATIONS", "CREATOR CAMPAIGN", "AI CONTENT", "PR MONITORING"].map((t) => (
                    <span key={t} className="border border-deep-ink px-4 py-1 font-bold tracking-widest text-[10px] uppercase hover:bg-deep-ink hover:text-surface transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-8 order-1 md:order-2 overflow-hidden border-4 border-deep-ink">
              <img src={IMG_RACK} alt="Showroom rack" className="w-full aspect-[1.5] object-cover grayscale hover:scale-105 transition-transform duration-[2000ms] ease-out" />
            </div>
          </div>
        </section>

        {/* Core Services Grid */}
        <section className="px-6 md:px-16 mb-32 md:mb-40">
          <div className="border-t-2 border-deep-ink pt-12 reveal">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <span className="text-label-caps text-secondary">CORE CAPABILITIES</span>
              <h2 className="text-headline-lg uppercase max-w-2xl">A full-stack PR engine for fashion brands.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-deep-ink">
              {services.map(([t, d], i) => (
                <div key={t} className="border-r border-b border-deep-ink p-10 hover:bg-deep-ink hover:text-surface transition-colors duration-300 group">
                  <span className="text-label-caps text-secondary group-hover:text-neon-signal block mb-6">0{i + 1}</span>
                  <h3 className="text-headline-md mb-4 uppercase">{t}</h3>
                  <p className="text-body-md opacity-90">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Agency Difference */}
        <section id="agency" className="bg-deep-ink text-surface py-32 md:py-40 px-6 md:px-16 mb-32 md:mb-40 reveal">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-5">
              <span className="text-neon-signal text-label-caps block mb-6">THE CLAMOA DIFFERENCE</span>
              <h2 className="text-display-xl uppercase mb-8">BEYOND<br />TRADITIONAL<br />PR</h2>
              <p className="text-body-lg max-w-md text-surface/80">
                CLAMOA is not only a fashion PR agency. We are building an operating system for fashion influence — connecting offline showroom activity, stylist relationships, celebrity exposure, creator content, and digital campaign data into one execution engine.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 mt-12 md:mt-8">
              <ul className="divide-y divide-white/20 border-t border-b border-white/20">
                {differentiators.map((d, i) => (
                  <li key={d} className="flex items-start gap-6 py-6 group">
                    <span className="text-neon-signal text-label-caps pt-1">0{i + 1}</span>
                    <span className="text-headline-md font-serif group-hover:text-neon-signal transition-colors">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="px-6 md:px-16 mb-32 md:mb-40 reveal">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 border-t-2 border-deep-ink pt-12">
            <span className="text-label-caps text-secondary">PROCESS</span>
            <h2 className="text-headline-lg uppercase max-w-2xl">HOW WE CREATE VISIBILITY</h2>
          </div>
          <div className="divide-y divide-deep-ink border-t border-b border-deep-ink">
            {process.map(([n, t, d]) => (
              <div key={n} className="grid grid-cols-12 gap-6 py-10 group hover:bg-neon-signal transition-colors duration-300">
                <div className="col-span-12 md:col-span-2">
                  <span className="font-serif text-5xl">{n}</span>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <h3 className="text-headline-md uppercase">{t}</h3>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <p className="text-body-md max-w-xl">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Case studies */}
        <section id="insights" className="px-6 md:px-16 mb-32 md:mb-40 reveal">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 border-t-2 border-deep-ink pt-12">
            <span className="text-label-caps text-secondary">SELECTED WORK</span>
            <h2 className="text-headline-lg uppercase max-w-2xl">RECENT CAMPAIGNS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cases.map(([img, n, t, d]) => (
              <article key={t} className="border-2 border-deep-ink group flex flex-col">
                <div className="overflow-hidden border-b-2 border-deep-ink">
                  <img src={img} alt={t} className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <div className="p-8 flex flex-col gap-4 flex-1">
                  <span className="text-label-caps text-secondary">CASE {n}</span>
                  <h3 className="text-headline-md uppercase">{t}</h3>
                  <p className="text-body-md flex-1">{d}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="px-6 md:px-16 mb-32 reveal">
          <div className="bg-neon-signal border-2 border-deep-ink p-12 md:p-24 flex flex-col md:flex-row justify-between items-center gap-12 group">
            <div className="max-w-md">
              <h2 className="text-headline-lg uppercase mb-4">JOIN THE<br />INNER CIRCLE.</h2>
              <p className="text-body-md">Receive curated signals from fashion, celebrity culture, showroom PR, and brand visibility.</p>
            </div>
            <div className="w-full max-w-md">
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="YOUR EMAIL"
                  className="bg-transparent border-b-2 border-deep-ink focus:outline-none p-4 text-label-caps placeholder:text-deep-ink/50 w-full"
                />
                <button
                  type="submit"
                  className="bg-deep-ink text-neon-signal py-6 px-12 text-label-caps hover:bg-surface hover:text-deep-ink transition-all duration-300 active:scale-95 hover:shadow-[8px_8px_0px_0px_rgba(26,28,28,1)]"
                >
                  SUBSCRIBE TO DISPATCH
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-6 md:px-16 mb-32 reveal">
          <div className="grid grid-cols-12 gap-6 border-t-2 border-deep-ink pt-12">
            <div className="col-span-12 md:col-span-5">
              <span className="text-label-caps text-secondary mb-6 block">CONTACT</span>
              <h2 className="text-display-xl uppercase mb-8">LET'S BUILD<br />YOUR BRAND<br />PRESENCE.</h2>
              <p className="text-body-md max-w-md">
                Whether you are launching a new collection, entering Korea, expanding globally, or building stronger cultural visibility, CLAMOA designs the PR strategy and execution system to move your brand forward.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="col-span-12 md:col-span-6 md:col-start-7 grid grid-cols-2 gap-6"
            >
              {[
                ["Name", "text", "col-span-2 md:col-span-1"],
                ["Company / Brand", "text", "col-span-2 md:col-span-1"],
                ["Email", "email", "col-span-2 md:col-span-1"],
                ["Phone", "tel", "col-span-2 md:col-span-1"],
              ].map(([label, type, span]) => (
                <label key={label} className={`flex flex-col gap-2 ${span}`}>
                  <span className="text-label-caps text-secondary">{label}</span>
                  <input
                    type={type}
                    className="bg-transparent border-b border-deep-ink py-3 text-body-md focus:outline-none focus:border-neon-signal"
                  />
                </label>
              ))}
              <label className="flex flex-col gap-2 col-span-2">
                <span className="text-label-caps text-secondary">Service Interest</span>
                <select className="bg-transparent border-b border-deep-ink py-3 text-body-md focus:outline-none focus:border-neon-signal">
                  <option>Showroom PR</option>
                  <option>Celebrity Seeding</option>
                  <option>Stylist Relations</option>
                  <option>Creator Campaign</option>
                  <option>Editorial Content</option>
                  <option>Full Brand PR</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 col-span-2">
                <span className="text-label-caps text-secondary">Message</span>
                <textarea
                  rows={4}
                  className="bg-transparent border border-deep-ink p-4 text-body-md focus:outline-none focus:border-neon-signal resize-none"
                />
              </label>
              <button
                type="submit"
                className="col-span-2 bg-deep-ink text-neon-signal py-6 text-label-caps hover:bg-neon-signal hover:text-deep-ink border border-deep-ink transition-all duration-300 active:scale-95"
              >
                SEND INQUIRY
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full mt-32 bg-surface border-t-2 border-deep-ink grid grid-cols-12 gap-6 px-6 md:px-16 py-20">
        <div className="col-span-12 mb-20 reveal">
          <div className="text-display-xl opacity-10 uppercase select-none pointer-events-none whitespace-nowrap overflow-hidden">CLAMOA AGENCY</div>
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col gap-6 reveal">
          <div className="text-2xl font-serif font-bold tracking-tighter">CLAMOA</div>
          <p className="text-body-md max-w-xs">
            A fashion PR agency dedicated to building cultural visibility for fashion and lifestyle brands.
          </p>
        </div>
        <div className="col-span-6 md:col-span-2 flex flex-col gap-4 reveal">
          <span className="text-label-caps text-secondary">SOCIAL</span>
          {["INSTAGRAM", "LINKEDIN", "YOUTUBE"].map((l) => (
            <a key={l} href="#" className="text-body-md hover:text-neon-signal transition-colors">{l}</a>
          ))}
        </div>
        <div className="col-span-6 md:col-span-2 flex flex-col gap-4 reveal">
          <span className="text-label-caps text-secondary">LEGAL</span>
          {["PRIVACY", "TERMS"].map((l) => (
            <a key={l} href="#" className="text-body-md hover:text-neon-signal transition-colors">{l}</a>
          ))}
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col justify-end items-start md:items-end gap-4 mt-12 md:mt-0 reveal">
          <span className="text-label-caps text-secondary">SEOUL</span>
          <div className="text-body-md text-right">© 2026 CLAMOA AGENCY. ALL RIGHTS RESERVED.</div>
        </div>
      </footer>
    </div>
  );
}
