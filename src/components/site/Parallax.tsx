import { useEffect, useRef, type ComponentPropsWithoutRef, type RefObject } from "react";
import { cn } from "@/lib/utils";

type ScrollFrame = {
  scrollY: number;
  viewportHeight: number;
  viewportWidth: number;
  pageHeight: number;
  reducedMotion: boolean;
  coarsePointer: boolean;
};
type ScrollListener = (frame: ScrollFrame, measure: boolean) => void;

const listeners = new Set<ScrollListener>();
let animationFrame = 0;
let shouldMeasure = true;
let stopListening: (() => void) | undefined;
let requestUpdate: ((measure?: boolean) => void) | undefined;

/** One scroll listener and animation frame for all decorative motion on the page. */
function subscribeToScroll(listener: ScrollListener) {
  listeners.add(listener);
  if (!stopListening) {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = window.matchMedia("(pointer: coarse)");
    let viewportHeight = window.innerHeight;
    let viewportWidth = window.innerWidth;
    let pageHeight = document.documentElement.scrollHeight;
    const schedule = (measure = false) => {
      shouldMeasure ||= measure;
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0;
        const measureNow = shouldMeasure;
        shouldMeasure = false;
        if (measureNow) {
          viewportHeight = window.innerHeight;
          viewportWidth = window.innerWidth;
          pageHeight = document.documentElement.scrollHeight;
        }
        const frame: ScrollFrame = {
          scrollY: window.scrollY,
          viewportHeight,
          viewportWidth,
          pageHeight,
          reducedMotion: motion.matches,
          coarsePointer: pointer.matches,
        };
        listeners.forEach((update) => update(frame, measureNow));
      });
    };
    requestUpdate = schedule;
    const onScroll = () => schedule();
    const onResize = () => schedule(true);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    motion.addEventListener("change", onResize);
    pointer.addEventListener("change", onResize);
    const resize = "ResizeObserver" in window ? new ResizeObserver(onResize) : undefined;
    resize?.observe(document.body);
    stopListening = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      motion.removeEventListener("change", onResize);
      pointer.removeEventListener("change", onResize);
      resize?.disconnect();
    };
    schedule(true);
  } else {
    // New route content can change both its own position and the document height.
    requestUpdate?.(true);
  }
  return () => {
    listeners.delete(listener);
    if (!listeners.size) {
      stopListening?.();
      stopListening = undefined;
      requestUpdate = undefined;
    }
  };
}

function useParallax(
  frameRef: RefObject<HTMLDivElement | null>,
  layerRef: RefObject<HTMLElement | null>,
  strength: number,
) {
  useEffect(() => {
    const frameElement = frameRef.current;
    const layer = layerRef.current;
    if (!frameElement || !layer) return;
    let visible = true;
    let top = 0;
    let height = 0;
    let measureNext = true;
    const update: ScrollListener = (frame, measure) => {
      if (measure || measureNext) {
        const bounds = frameElement.getBoundingClientRect();
        top = bounds.top + frame.scrollY;
        height = bounds.height;
        measureNext = false;
      }
      if (frame.reducedMotion || !height) {
        layer.style.transform = "none";
        layer.style.willChange = "auto";
        return;
      }
      if (!visible) return;
      // Scaling reserves 5% above/below. Stay inside that cover at every viewport size.
      const mobile = frame.viewportWidth < 768 || frame.coarsePointer;
      const travel = Math.min(Math.max(0, strength) * (mobile ? 0.5 : 1), height * 0.045);
      const progress = Math.max(
        -1,
        Math.min(
          1,
          (2 * (frame.scrollY + frame.viewportHeight / 2 - top - height / 2)) /
            (frame.viewportHeight + height),
        ),
      );
      layer.style.transform = `translate3d(0, ${(progress * travel).toFixed(2)}px, 0) scale(1.1)`;
      layer.style.willChange = "transform";
    };
    const unsubscribe = subscribeToScroll(update);
    const intersection =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            ([entry]) => {
              visible = Boolean(entry?.isIntersecting);
              layer.style.willChange = visible ? "transform" : "auto";
              if (visible) {
                measureNext = true;
                requestUpdate?.();
              }
            },
            { rootMargin: "80px 0px" },
          )
        : undefined;
    intersection?.observe(frameElement);
    return () => {
      intersection?.disconnect();
      unsubscribe();
      layer.style.transform = "none";
      layer.style.willChange = "auto";
    };
  }, [frameRef, layerRef, strength]);
}

type ParallaxImageProps = ComponentPropsWithoutRef<"img"> & {
  containerClassName?: string;
  /** Maximum vertical travel in pixels; mobile motion is halved. */
  strength?: number;
};

/** The outer frame needs an aspect ratio, height, or absolute inset placement. */
export function ParallaxImage({
  containerClassName,
  className,
  strength = 24,
  style,
  ...imageProps
}: ParallaxImageProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  useParallax(frameRef, imageRef, strength);
  return (
    <div
      ref={frameRef}
      data-parallax="image"
      className={cn("relative overflow-hidden", containerClassName)}
    >
      <img
        {...imageProps}
        ref={imageRef}
        data-parallax-layer
        className={cn("absolute inset-0 h-full w-full object-cover", className)}
        style={style}
      />
    </div>
  );
}

type ParallaxProps = ComponentPropsWithoutRef<"div"> & {
  containerClassName?: string;
  strength?: number;
};

/** For clipped, decorative backgrounds; keep interactive content outside the moving layer. */
export function Parallax({
  children,
  className,
  containerClassName,
  strength = 16,
  ...props
}: ParallaxProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  useParallax(frameRef, layerRef, strength);
  return (
    <div
      {...props}
      ref={frameRef}
      data-parallax="layer"
      className={cn("relative overflow-hidden", containerClassName)}
    >
      <div ref={layerRef} data-parallax-layer className={cn("absolute inset-0", className)}>
        {children}
      </div>
    </div>
  );
}

export function ScrollProgress({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(
    () =>
      subscribeToScroll(({ scrollY, viewportHeight, pageHeight }) => {
        const progress = Math.max(
          0,
          Math.min(1, scrollY / Math.max(1, pageHeight - viewportHeight)),
        );
        if (ref.current) ref.current.style.transform = `scaleX(${progress.toFixed(4)})`;
      }),
    [],
  );
  return (
    <div
      ref={ref}
      data-scroll-progress
      aria-hidden="true"
      className={cn("pointer-events-none origin-left", className)}
      style={{ transform: "scaleX(0)" }}
    />
  );
}
