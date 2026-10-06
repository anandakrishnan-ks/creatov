import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, as: Tag = "div", delay = 0, clip = false }: { children: ReactNode; className?: string; as?: ElementType; delay?: number; clip?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { setShown(true); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} data-shown={shown} style={{ transitionDelay: `${delay}ms` }} className={cn(clip ? "clip-reveal" : "reveal", className)}>
      {children}
    </Tag>
  );
}

export function Eyebrow({ children, className, dark }: { children: ReactNode; className?: string; dark?: boolean }) {
  return (
    <p className={cn("label-mono flex items-center gap-3", dark ? "text-ink-muted" : "text-muted-foreground", className)}>
      <span className="inline-block h-px w-8 bg-signal" />
      {children}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, intro, dark, className }: { eyebrow?: string; title: ReactNode; intro?: ReactNode; dark?: boolean; className?: string }) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      {eyebrow && <Eyebrow dark={!!dark}>{eyebrow}</Eyebrow>}
      <h2 className={cn("mt-5 text-4xl font-extrabold leading-[1.02] md:text-6xl", dark ? "text-ink-foreground" : "text-foreground")}>{title}</h2>
      {intro && <div className={cn("mt-6 max-w-2xl text-lg leading-relaxed", dark ? "text-ink-muted" : "text-muted-foreground")}>{intro}</div>}
    </Reveal>
  );
}

type BtnProps = { to: string; children: ReactNode; variant?: "solid" | "outline" | "light" | "ghost-light"; className?: string };
export function CtaLink({ to, children, variant = "solid", className }: BtnProps) {
  const styles = {
    solid: "bg-primary text-primary-foreground hover:bg-ink",
    outline: "border border-foreground/80 text-foreground hover:bg-foreground hover:text-background",
    light: "bg-ink-foreground text-ink hover:bg-signal hover:text-ink-foreground",
    "ghost-light": "border border-ink-foreground/50 text-ink-foreground hover:bg-ink-foreground hover:text-ink",
  }[variant];
  return (
    <Link to={to} className={cn("group inline-flex items-center gap-3 px-6 py-4 text-xs font-bold tracking-[0.18em] uppercase transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring", styles, className)}>
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}

export function PageHero({ eyebrow, title, intro, image }: { eyebrow: string; title: ReactNode; intro?: ReactNode; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-ink pt-40 pb-20 text-ink-foreground md:pt-48 md:pb-28">
      {image && <img src={image} alt="" aria-hidden className="ken-burns absolute inset-0 h-full w-full object-cover opacity-30" />}
      <div className="blueprint-grid-dark absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <Eyebrow dark>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-5xl text-5xl font-extrabold leading-[0.98] md:text-7xl lg:text-8xl">{title}</h1>
        {intro && <div className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted">{intro}</div>}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="blueprint-grid-dark absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-[1.4fr_1fr] md:items-end md:px-10 md:py-32">
        <Reveal>
          <p className="label-mono text-primary-foreground/70">Plan Better. Build Smarter.</p>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.02] md:text-6xl">Planning to build?<br />Let's talk before you start.</h2>
        </Reveal>
        <Reveal delay={150} className="flex flex-wrap gap-3 md:justify-end">
          <CtaLink to="/contact" variant="light">Start Your Project</CtaLink>
          <CtaLink to="/services" variant="ghost-light">Explore Our Services</CtaLink>
        </Reveal>
      </div>
    </section>
  );
}
