import { useEffect, useRef, useState } from "react";
import { processSteps } from "@/lib/site";
import { images } from "@/lib/images";
import { cn } from "@/lib/utils";

const stepImages = [
  {
    src: images.processConsult,
    alt: "Engineer and clients discussing their project around a studio table",
  },
  {
    src: images.processPlan,
    alt: "Architects walking a tropical plot with a site plan",
  },
  {
    src: images.processDesign,
    alt: "Architect developing a design beside a physical building model",
  },
  {
    src: images.processEstimate,
    alt: "Quantity surveyor reviewing project drawings and an estimate",
  },
  {
    src: images.processApprove,
    alt: "Professional team reviewing organized drawings and permit documents",
  },
  {
    src: images.processExecute,
    alt: "Construction team inspecting a reinforced concrete building frame",
  },
] as const;

/** One animation frame per scroll update; the line transforms without relayout. */
export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(processSteps.length - 1);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const bounds = el.getBoundingClientRect();
      const progress = motion.matches
        ? 1
        : Math.max(
            0,
            Math.min(1, (window.innerHeight * 0.6 - bounds.top) / Math.max(bounds.height, 1)),
          );
      if (progressRef.current) progressRef.current.style.transform = `scaleY(${progress})`;
      const next = Math.min(processSteps.length - 1, Math.floor(progress * processSteps.length));
      setActive((current) => (current === next ? current : next));
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    motion.addEventListener("change", schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      motion.removeEventListener("change", schedule);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <div
        className="absolute top-0 bottom-0 left-3 w-px bg-ink-line sm:left-[1.4rem] md:left-1/2"
        aria-hidden
      />
      <div
        ref={progressRef}
        className="absolute top-0 bottom-0 left-3 w-px origin-top bg-signal sm:left-[1.4rem] md:left-1/2"
        style={{ transform: "scaleY(0)" }}
        aria-hidden
      />
      <ol className="space-y-14 sm:space-y-20 md:space-y-24 lg:space-y-28">
        {processSteps.map((s, i) => {
          const on = i <= active;
          const left = i % 2 === 0;
          const visual = stepImages[i]!;
          return (
            <li
              key={s.n}
              className="relative grid min-w-0 gap-6 pl-10 sm:gap-8 sm:pl-16 md:grid-cols-2 md:gap-12 md:pl-0 lg:gap-20"
            >
              <span
                className={cn(
                  "absolute top-1 left-3 flex h-4 w-4 -translate-x-1/2 items-center justify-center border transition-colors duration-500 sm:left-[1.4rem] md:left-1/2",
                  on ? "border-signal bg-signal" : "border-ink-muted bg-ink",
                )}
                aria-hidden
              />
              <div
                className={cn(
                  "transition-opacity duration-700 motion-reduce:transition-none",
                  left ? "md:text-right" : "md:order-2",
                  on ? "opacity-100" : "opacity-70",
                )}
              >
                <p
                  aria-hidden="true"
                  className="font-display text-6xl font-extrabold text-ink-foreground/40 sm:text-7xl md:text-8xl"
                >
                  {s.n}
                </p>
                <h3 className="-mt-5 text-2xl font-extrabold tracking-tight uppercase sm:-mt-6 sm:text-3xl md:text-4xl">
                  {s.t}
                </h3>
                <p
                  className={cn(
                    "mt-3 max-w-sm text-base leading-relaxed text-ink-muted sm:mt-4 sm:text-lg",
                    left && "md:ml-auto",
                  )}
                >
                  {s.d}
                </p>
              </div>
              <div
                className={cn(
                  "overflow-hidden transition-opacity duration-700 motion-reduce:transition-none",
                  !left && "md:order-1",
                  on ? "opacity-100" : "opacity-75",
                )}
              >
                <img
                  src={visual.src}
                  alt={visual.alt}
                  width={1400}
                  height={933}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
