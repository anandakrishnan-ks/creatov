import { useEffect, useRef, useState } from "react";
import { processSteps } from "@/lib/site";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";

const stepImages = [images.hero, images.drawings, images.model, images.drawings, images.commercial, images.construction];

/** Scroll-linked blueprint line connecting the six stages. */
export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const on = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh * 0.6 - r.top) / r.height;
      setProgress(Math.max(0, Math.min(1, p)));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); };
  }, []);
  const active = Math.min(processSteps.length - 1, Math.floor(progress * processSteps.length));

  return (
    <div ref={ref} className="relative">
      <div className="absolute top-0 bottom-0 left-3 w-px bg-ink-line sm:left-[1.4rem] md:left-1/2" aria-hidden />
      <div className="absolute top-0 left-3 w-px origin-top bg-signal sm:left-[1.4rem] md:left-1/2" style={{ height: `${progress * 100}%` }} aria-hidden />
      <ol className="space-y-14 sm:space-y-20 md:space-y-24 lg:space-y-28">
        {processSteps.map((s, i) => {
          const on = i <= active;
          const left = i % 2 === 0;
          return (
            <li key={s.n} className="relative grid min-w-0 gap-6 pl-10 sm:gap-8 sm:pl-16 md:grid-cols-2 md:gap-12 md:pl-0 lg:gap-20">
              <span className={cn("absolute top-1 left-3 flex h-4 w-4 -translate-x-1/2 items-center justify-center border transition-colors duration-500 sm:left-[1.4rem] md:left-1/2", on ? "border-signal bg-signal" : "border-ink-muted bg-ink")} aria-hidden />
              <div className={cn("transition-all duration-700", left ? "md:text-right" : "md:order-2", on ? "opacity-100" : "opacity-35")}>
                <p className="font-display text-6xl font-extrabold text-ink-foreground/15 sm:text-7xl md:text-8xl">{s.n}</p>
                <h3 className="-mt-5 text-2xl font-extrabold tracking-tight uppercase sm:-mt-6 sm:text-3xl md:text-4xl">{s.t}</h3>
                <p className={cn("mt-3 max-w-sm text-base leading-relaxed text-ink-muted sm:mt-4 sm:text-lg", left && "md:ml-auto")}>{s.d}</p>
              </div>
              <div className={cn("overflow-hidden transition-all duration-1000", left ? "" : "md:order-1", on ? "opacity-100" : "opacity-20")}>
                <img src={stepImages[i]} alt={`${s.t} stage illustration`} loading="lazy" className={cn("aspect-[16/10] w-full object-cover grayscale transition-all duration-1000", on && "grayscale-0 scale-100", !on && "scale-105")} />
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
