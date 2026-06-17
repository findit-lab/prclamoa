import { useEffect, useRef, useState, useCallback } from "react";

interface DraggableMarqueeProps {
  images: string[];
  speed?: number; // pixels per second
  altPrefix?: string;
}

export function DraggableMarquee({
  images,
  speed = 40,
  altPrefix = "CLAMOA look",
}: DraggableMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const halfWidthRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const pausedRef = useRef(false);

  const dragStateRef = useRef<{
    active: boolean;
    startX: number;
    startOffset: number;
    moved: boolean;
    pointerId: number | null;
  }>({ active: false, startX: 0, startOffset: 0, moved: false, pointerId: null });

  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const doubled = [...images, ...images];

  const normalize = (v: number) => {
    const hw = halfWidthRef.current;
    if (hw <= 0) return v;
    let x = v % hw;
    if (x > 0) x -= hw;
    return x; // in range (-hw, 0]
  };

  const applyTransform = (v: number) => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${v}px,0,0)`;
    }
  };

  const measure = useCallback(() => {
    if (!trackRef.current) return;
    halfWidthRef.current = trackRef.current.scrollWidth / 2;
  }, []);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mq.matches);
    const onChange = () => setIsReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => {
      ro.disconnect();
      mq.removeEventListener("change", onChange);
    };
  }, [measure]);

  useEffect(() => {
    const tick = (ts: number) => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;
      if (!pausedRef.current && !dragStateRef.current.active && !isReducedMotion) {
        offsetRef.current = normalize(offsetRef.current - speed * dt);
        applyTransform(offsetRef.current);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTsRef.current = null;
    };
  }, [speed, isReducedMotion]);

  // Smooth animated step for arrow clicks
  const animateBy = useCallback((delta: number, duration = 600) => {
    const start = offsetRef.current;
    const target = start + delta;
    const startTime = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    pausedRef.current = true;
    const step = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      const v = start + (target - start) * ease(t);
      offsetRef.current = normalize(v);
      applyTransform(offsetRef.current);
      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        pausedRef.current = false;
      }
    };
    requestAnimationFrame(step);
  }, []);

  const getStep = () => {
    const vp = viewportRef.current;
    if (!vp) return 320;
    // Approx one card width including gap
    const firstChild = trackRef.current?.firstElementChild as HTMLElement | null;
    if (firstChild) return firstChild.offsetWidth + 24;
    return vp.clientWidth * 0.4;
  };

  const onPrev = () => animateBy(getStep());
  const onNext = () => animateBy(-getStep());

  // Pointer drag handlers
  const onPointerDown = (e: React.PointerEvent) => {
    dragStateRef.current = {
      active: true,
      startX: e.clientX,
      startOffset: offsetRef.current,
      moved: false,
      pointerId: e.pointerId,
    };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const s = dragStateRef.current;
    if (!s.active) return;
    const dx = e.clientX - s.startX;
    if (Math.abs(dx) > 3) s.moved = true;
    offsetRef.current = normalize(s.startOffset + dx);
    applyTransform(offsetRef.current);
  };

  const endDrag = (e: React.PointerEvent) => {
    const s = dragStateRef.current;
    if (!s.active) return;
    s.active = false;
    if (s.pointerId != null) {
      try {
        (e.currentTarget as HTMLElement).releasePointerCapture(s.pointerId);
      } catch {
        /* noop */
      }
    }
  };

  return (
    <div className="relative">
      <div
        ref={viewportRef}
        className="relative overflow-hidden marquee-mask select-none touch-pan-y cursor-grab active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
      >
        <div
          ref={trackRef}
          className="flex w-max gap-6 will-change-transform"
          style={{ transform: "translate3d(0,0,0)" }}
        >
          {doubled.map((src, i) => (
            <div
              key={i}
              className="group relative shrink-0 overflow-hidden"
              style={{
                width: "clamp(240px, 28vw, 380px)",
                height: "clamp(320px, 38vw, 520px)",
              }}
            >
              <img
                src={src}
                alt={`${altPrefix} ${(i % images.length) + 1}`}
                loading="lazy"
                draggable={false}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        aria-label="Previous"
        onClick={onPrev}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-11 h-11 md:w-14 md:h-14 rounded-full bg-surface/15 hover:bg-surface/30 backdrop-blur-md border border-surface/30 text-surface transition-all duration-300 hover:scale-110"
      >
        <span className="material-symbols-outlined text-[22px] md:text-[26px]">arrow_back</span>
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={onNext}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-11 h-11 md:w-14 md:h-14 rounded-full bg-surface/15 hover:bg-surface/30 backdrop-blur-md border border-surface/30 text-surface transition-all duration-300 hover:scale-110"
      >
        <span className="material-symbols-outlined text-[22px] md:text-[26px]">arrow_forward</span>
      </button>
    </div>
  );
}
