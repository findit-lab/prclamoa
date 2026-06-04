import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CLAMOA — Art of Marketing" },
      { name: "description", content: "A creative studio championing the undone aesthetic — strategic disruption meets high-fashion precision." },
      { property: "og:title", content: "CLAMOA — Art of Marketing" },
      { property: "og:description", content: "Where strategic disruption meets high-fashion precision." },
    ],
  }),
  component: Index,
});

const IMG_1 = "https://lh3.googleusercontent.com/aida/AP1WRLsD8tWlHR_9eWUfX5ZqQcEYwyH18-p0i0yY9vDYF3bmH1k0vCw82xhmXXO-g3BytJTTa-LQYINMSfz9SXbKXA8iBmUoFmhMdmq1IHa-XUSH3mfOb-gackisoN3Pcv8qbxN_gE4p4rnh6IVxMHjj8X90Te1KDbwd9lwDpdfAZogyGHJyX7Jm2G4tL5V4T2p1cxplBT1UElB2R6cs3Kp4jHiu1sc1WQ7x5xGg6OrpVPyTOu3vRYdhJYEg";
const IMG_2 = "https://lh3.googleusercontent.com/aida/AP1WRLsb02NmkEopZRUf1_bAb4R9kE8rzzOVgjcMV4dhDXyQoKpdeXpeIJ7IUc2g4IR322y197oawNEYw2DyEfTG0CkFJ-iASLmu7XTVCXvObHlRtrtE1AgQOthEvRVP9j1qWaawE5FJcwPuiS3Q3yrM8Mc8njDeeihtLkBnOA-zL88_c5b8tEpOu5BXyg3Bd1mC5m4_prR9GqYwC1CfNrsaQqVm2cRqtt9mmZhhSYxbQxPVtHGrbwSt-CxmEQ";

function Index() {
  const parallaxText = useRef<HTMLDivElement>(null);
  const parallaxContainer = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("active")),
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
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

  const navLinks = ["WORK", "SERVICES", "AGENCY", "THOUGHTS", "CONTACT"];

  return (
    <div className="text-deep-ink min-h-screen">
      {/* Nav */}
      <nav
        ref={navRef}
        className="fixed top-0 w-full z-50 bg-white border-b-2 border-deep-ink flex justify-between items-center px-6 md:px-16 py-6 transition-all duration-500"
      >
        <div className="text-headline-md font-bold tracking-tighter">CLAMOA</div>
        <div className="hidden md:flex gap-10">
          {navLinks.map((l, i) => (
            <a
              key={l}
              href="#"
              className={`text-label-caps transition-colors duration-200 ${i === 0 ? "text-neon-signal" : "hover:text-neon-signal"}`}
              style={i === 0 ? { color: "#a8c800" } : undefined}
            >
              {l}
            </a>
          ))}
        </div>
        <button className="bg-neon-signal text-deep-ink px-6 py-3 text-label-caps hover:bg-deep-ink hover:text-neon-signal transition-all duration-300 border border-deep-ink active:scale-95">
          GET IN TOUCH
        </button>
      </nav>

      <main className="pt-32">
        {/* Hero */}
        <section className="px-6 md:px-16 mb-32 md:mb-40 reveal">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-8">
              <h1 className="text-display-xl uppercase mb-12">
                CLAMOA:<br />ART OF<br />MARKETING
              </h1>
              <div className="max-w-xl">
                <p className="text-body-lg border-l-4 border-neon-signal pl-6">
                  Where strategic disruption meets high-fashion precision. We don't just build brands; we curate cultural movements for those who define the avant-garde.
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="border-2 border-deep-ink p-8 bg-neon-signal hover-lift shadow-[8px_8px_0px_0px_rgba(26,28,28,1)]">
                <span className="text-label-caps block mb-4">ESTABLISHED 2024</span>
                <h2 className="text-headline-md">CHAMPIONING THE UNDONE AESTHETIC.</h2>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery 1 */}
        <section className="px-6 md:px-16 mb-32 md:mb-40 reveal">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-7 relative group overflow-hidden border-2 border-deep-ink">
              <img
                src={IMG_1}
                alt="Exhibition"
                className="w-full aspect-[1.5] object-cover grayscale hover:grayscale-0 transition-all duration-1000 hover:scale-110"
              />
              <div className="absolute -bottom-6 -right-6 bg-deep-ink text-surface p-10 max-w-xs hidden md:block transition-transform duration-500 group-hover:-translate-x-4 group-hover:-translate-y-4">
                <p className="text-body-md italic font-serif">
                  "Visual impact is the only currency that never devalues in a saturated market."
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
              <div className="border-t-2 border-deep-ink pt-8 mt-16 md:mt-0">
                <span className="text-label-caps text-secondary mb-4 block">01 / BRAND IDENTITY</span>
                <h3 className="text-headline-lg mb-6">RAW ELEGANCE</h3>
                <p className="text-body-md mb-8">
                  We lean into the tension between brutalist architecture and editorial luxury. Every project starts with a rejection of the status quo.
                </p>
                <a href="#" className="inline-flex items-center gap-4 text-label-caps group border-b border-transparent hover:border-deep-ink pb-1 transition-all duration-300">
                  VIEW CASE STUDY
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="bg-deep-ink text-surface py-32 md:py-40 px-6 md:px-16 mb-32 md:mb-40 overflow-hidden relative">
          <div ref={parallaxContainer} className="absolute inset-0 opacity-10 pointer-events-none select-none overflow-hidden">
            <div ref={parallaxText} className="whitespace-nowrap font-serif font-bold leading-none transform rotate-[-5deg]" style={{ fontSize: "300px" }}>
              DISRUPTION DISRUPTION DISRUPTION
            </div>
          </div>
          <div className="relative z-10 grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-10 md:col-start-2">
              <h2 className="text-headline-lg mb-12 reveal">
                WE OPERATE AT THE INTERSECTION OF{" "}
                <span className="text-neon-signal">CRITICAL ARTISTRY</span> AND{" "}
                <span className="italic underline decoration-neon-signal underline-offset-8">COMMERCIAL NECESSITY.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 reveal-group">
                {[
                  ["METHOD", "Curated chaos. We break the grid to create memory."],
                  ["VISION", "Brutal honesty. No shadows, no masks, just raw data."],
                  ["RESULT", "High-fashion impact with strategic permanence."],
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

        {/* Gallery 2 */}
        <section className="px-6 md:px-16 mb-32 md:mb-40 reveal">
          <div className="grid grid-cols-12 gap-6 items-start">
            <div className="col-span-12 md:col-span-4 order-2 md:order-1">
              <div className="border-t-2 border-deep-ink pt-8">
                <span className="text-label-caps text-secondary mb-4 block">02 / EXPERIENTIAL</span>
                <h3 className="text-headline-lg mb-6">SPATIAL RHYTHM</h3>
                <p className="text-body-md mb-8">
                  Designing the physical echoes of digital brands. From gallery openings to subterranean launches, we curate the air.
                </p>
                <div className="flex flex-wrap gap-4">
                  {["SCENOGRAPHY", "CURATION", "ATMOSPHERICS"].map((t) => (
                    <span key={t} className="border border-deep-ink px-4 py-1 font-bold tracking-widest text-[10px] uppercase hover:bg-deep-ink hover:text-surface transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-8 order-1 md:order-2 overflow-hidden border-4 border-deep-ink">
              <img src={IMG_2} alt="Spatial" className="w-full aspect-[1.5] object-cover hover:scale-105 transition-transform duration-[2000ms] ease-out" />
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="px-6 md:px-16 mb-32 reveal">
          <div className="bg-neon-signal border-2 border-deep-ink p-12 md:p-24 flex flex-col md:flex-row justify-between items-center gap-12 group">
            <h2 className="text-headline-lg text-center md:text-left transition-transform duration-500 group-hover:scale-105">
              JOIN THE <br />INNER CIRCLE.
            </h2>
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
      </main>

      {/* Footer */}
      <footer className="w-full mt-32 bg-surface border-t-2 border-deep-ink grid grid-cols-12 gap-6 px-6 md:px-16 py-20">
        <div className="col-span-12 mb-20 reveal">
          <div className="text-display-xl opacity-10 uppercase select-none pointer-events-none">CLAMOA AGENCY</div>
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col gap-6 reveal">
          <div className="text-headline-md font-bold tracking-tighter">CLAMOA</div>
          <p className="text-body-md max-w-xs">
            A creative studio dedicated to the elevation of luxury brands through curated disruption.
          </p>
        </div>
        <div className="col-span-6 md:col-span-2 flex flex-col gap-4 reveal">
          <span className="text-label-caps text-secondary">SOCIAL</span>
          {["INSTAGRAM", "LINKEDIN", "TWITTER"].map((l) => (
            <a key={l} href="#" className="text-body-md hover:underline decoration-2">{l}</a>
          ))}
        </div>
        <div className="col-span-6 md:col-span-2 flex flex-col gap-4 reveal">
          <span className="text-label-caps text-secondary">LEGAL</span>
          {["PRIVACY", "TERMS"].map((l) => (
            <a key={l} href="#" className="text-body-md hover:underline decoration-2">{l}</a>
          ))}
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col justify-end items-start md:items-end gap-4 mt-12 md:mt-0 reveal">
          <div className="text-body-md text-right">© 2024 CLAMOA AGENCY. ALL RIGHTS RESERVED.</div>
        </div>
      </footer>
    </div>
  );
}
