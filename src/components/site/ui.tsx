import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type ElementType,
  type CSSProperties,
} from "react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { TransitionLink as Link } from "@/components/site/TransitionLink";
import { cn } from "@/lib/utils";
import { Parallax, ParallaxImage } from "@/components/site/Parallax";

export function Reveal({
  children,
  className,
  as: Tag = "div",
  delay = 0,
  clip = false,
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
  clip?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      data-shown={shown}
      style={{ transitionDelay: `${Math.min(delay, 240)}ms` }}
      className={cn(clip ? "clip-reveal" : "reveal", className)}
    >
      {children}
    </Tag>
  );
}

export function Eyebrow({
  children,
  className,
  dark,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <p
      className={cn(
        "label-mono flex max-w-full items-start gap-3 leading-relaxed",
        dark ? "text-ink-muted" : "text-muted-foreground",
        className,
      )}
    >
      <span className="mt-[0.55em] inline-block h-px w-6 shrink-0 bg-signal sm:w-8" />
      <span className="min-w-0">{children}</span>
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  dark,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      {eyebrow && <Eyebrow dark={!!dark}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "mt-4 text-[clamp(2rem,4.8vw,3.25rem)] leading-[1.1] font-extrabold text-balance sm:mt-5",
          dark ? "text-ink-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {intro && (
        <div
          className={cn(
            "mt-5 max-w-2xl text-base leading-relaxed sm:mt-6 sm:text-lg",
            dark ? "text-ink-muted" : "text-muted-foreground",
          )}
        >
          {intro}
        </div>
      )}
    </Reveal>
  );
}

type BtnProps = {
  to: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "light" | "ghost-light";
  className?: string;
};
export function CtaLink({ to, children, variant = "solid", className }: BtnProps) {
  const styles = {
    solid: "bg-primary text-primary-foreground hover:bg-ink",
    outline:
      "border border-foreground/80 text-foreground hover:bg-foreground hover:text-background",
    light: "bg-ink-foreground text-ink hover:bg-signal hover:text-ink-foreground",
    "ghost-light":
      "border border-ink-foreground/50 text-ink-foreground hover:bg-ink-foreground hover:text-ink",
  }[variant];
  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex max-w-full items-center justify-center gap-3 px-5 py-3.5 text-center text-xs leading-snug font-bold tracking-[0.16em] uppercase transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:px-6 sm:py-4 sm:tracking-[0.18em]",
        styles,
        className,
      )}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}

type BreadcrumbItem = { label: string; to?: string };

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imagePosition = "center 50%",
  imagePositionMobile = "65% 50%",
  breadcrumbs,
  titleClassName,
  actions,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: string;
  imagePosition?: string;
  imagePositionMobile?: string;
  breadcrumbs?: BreadcrumbItem[];
  titleClassName?: string;
  actions?: ReactNode;
}) {
  const trail = breadcrumbs ?? [{ label: eyebrow }];
  return (
    <section
      data-page-hero
      className="page-hero relative isolate overflow-hidden bg-ink pt-28 pb-12 text-ink-foreground sm:pt-32 sm:pb-14 md:pt-36 md:pb-16 lg:pt-40 lg:pb-20"
    >
      {image && (
        <ParallaxImage
          strength={18}
          containerClassName="absolute inset-0"
          src={image}
          alt=""
          aria-hidden
          decoding="async"
          fetchPriority="high"
          className="page-hero__image object-cover"
          style={
            {
              "--banner-position": imagePosition,
              "--banner-position-mobile": imagePositionMobile,
            } as CSSProperties
          }
        />
      )}
      <div className="page-hero__scrim absolute inset-0" aria-hidden />
      <div
        className="blueprint-grid-dark pointer-events-none absolute inset-0 opacity-25"
        aria-hidden
      />
      <div className="site-container relative">
        <div className="flex items-start gap-3">
          <span className="mt-2 h-px w-6 shrink-0 bg-signal sm:w-8" aria-hidden />
          <nav aria-label="Breadcrumb" className="min-w-0">
            <ol className="label-mono flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.65rem] leading-relaxed tracking-[0.12em] text-ink-foreground/80">
              <li>
                <Link
                  to="/"
                  activeOptions={{ exact: true }}
                  className="transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>
              {trail.map((item, index) => (
                <li key={item.label} className="flex min-w-0 items-center gap-2">
                  <ChevronRight className="h-3 w-3 shrink-0 text-ink-foreground/50" aria-hidden />
                  {item.to && index < trail.length - 1 ? (
                    <Link
                      to={item.to}
                      activeOptions={{ exact: true }}
                      className="transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="min-w-0 text-ink-foreground">
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
        <h1
          className={cn(
            "mt-5 max-w-5xl text-[clamp(2.5rem,8vw,6rem)] font-extrabold text-balance sm:mt-6",
            titleClassName,
            "leading-[0.98]",
          )}
        >
          {title}
        </h1>
        {intro && (
          <div className="mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/85 sm:mt-8 sm:text-lg">
            {intro}
          </div>
        )}
        {actions && <div className="mt-7 flex flex-wrap gap-3 sm:mt-9">{actions}</div>}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <Parallax
        strength={12}
        containerClassName="pointer-events-none absolute inset-0"
        className="blueprint-grid-dark"
        aria-hidden
      />
      <div className="site-container section-space-compact relative grid gap-7 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-10">
        <Reveal>
          <p className="label-mono text-primary-foreground/70">Plan Better. Build Smarter.</p>
          <h2 className="mt-4 text-[clamp(2.25rem,6vw,3.75rem)] leading-[1.04] font-extrabold text-balance sm:mt-5">
            Planning to build?
            <br />
            Let's talk before you start.
          </h2>
        </Reveal>
        <Reveal delay={150} className="flex flex-wrap gap-3 lg:justify-end">
          <CtaLink to="/contact" variant="light">
            Start Your Project
          </CtaLink>
          <CtaLink to="/services" variant="ghost-light">
            Explore Our Services
          </CtaLink>
        </Reveal>
      </div>
    </section>
  );
}
