import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { seo } from "@/lib/seo";
import { images } from "@/lib/images";
import { sectors, pillars, services, audiences } from "@/lib/site";
import { CtaBand, CtaLink, Eyebrow, Reveal, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "CREATOV Engineering Consultancy | Design, Build & Construction Consultancy",
      "CREATOV Engineering Consultancy provides architectural design, structural engineering, estimation, approvals and construction consultancy for residential, commercial and development projects in Kerala.",
    ),
  component: Home,
});

const approach = ["Listen", "Understand", "Design", "Plan", "Deliver"];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink text-ink-foreground">
        <img src={images.hero} alt="Contemporary Kerala residence with laterite walls and teak louvers at dusk" width={1920} height={1088} className="ken-burns absolute inset-0 h-full w-full object-cover" />
        <div className="hero-scrim absolute inset-0" aria-hidden />
        <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-40" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden>
          <path className="draw-line" d="M0 760 H1440 M120 0 V900 M1320 0 V900" stroke="currentColor" strokeWidth="0.6" fill="none" />
        </svg>
        <div className="relative mx-auto w-full max-w-[88rem] px-6 pt-40 pb-14 md:px-10 md:pb-20">
          <Reveal><Eyebrow dark>Engineering Consultancy · Kollam, Kerala</Eyebrow></Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 text-[clamp(3.2rem,10vw,9.5rem)] leading-[0.88] font-black tracking-[-0.045em]">
              Design.<br />Build.<br /><span className="text-signal">Deliver.</span>
            </h1>
          </Reveal>
          <div className="mt-12 grid gap-10 border-t border-ink-line pt-8 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
            <Reveal delay={240}>
              <p className="font-display text-2xl font-bold md:text-3xl">Your Vision. Our Expertise.<br />A Better Way to Build.</p>
            </Reveal>
            <Reveal delay={320}>
              <p className="max-w-md text-ink-muted">A complete construction consultancy for turning ideas, land and plans into successful projects. From the first idea to the final structure, CREATOV helps you plan, design and manage your construction journey with clarity and confidence.</p>
            </Reveal>
            <Reveal delay={400} className="flex flex-wrap gap-3">
              <CtaLink to="/contact" variant="light">Start Your Project</CtaLink>
              <CtaLink to="/services" variant="ghost-light">Explore Our Services</CtaLink>
            </Reveal>
          </div>
          <ul className="label-mono mt-10 flex flex-wrap gap-x-6 gap-y-2 text-ink-muted">
            {sectors.map((s, i) => <li key={s} className="flex items-center gap-6">{i > 0 && <span className="h-3 w-px bg-signal" />}{s}</li>)}
          </ul>
        </div>
      </section>

      {/* INTRO */}
      <section className="blueprint-grid">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <SectionHeading eyebrow="Why CREATOV" title={<>Building is More Than Construction. It's a Process.</>} />
            <Reveal delay={150}>
              <p className="font-display text-xl font-bold">A successful project starts long before the first brick is laid.</p>
              <p className="mt-4 text-muted-foreground">At CREATOV, we help you make the right decisions at every stage — from land and concept to drawings, approvals, estimates and execution.</p>
            </Reveal>
          </div>
          <div className="mt-20 grid border-t border-l border-border bg-background md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.t} delay={i * 70} className="group relative border-r border-b border-border p-8 transition-colors duration-500 hover:bg-ink hover:text-ink-foreground md:p-10">
                <span className="label-mono text-signal">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-16 text-2xl font-extrabold">{p.t}</h3>
                <p className="mt-3 text-muted-foreground transition-colors group-hover:text-ink-muted">{p.d}</p>
                <span className="absolute top-8 right-8 h-3 w-3 border-t border-r border-foreground/30 group-hover:border-signal" aria-hidden />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SPLIT */}
      <section className="mx-auto grid max-w-7xl gap-14 px-6 pb-24 md:px-10 md:pb-36 lg:grid-cols-2 lg:items-center">
        <Reveal clip className="relative">
          <img src={images.drawings} alt="Architectural floor plan and section drawings on a drafting table" loading="lazy" width={1280} height={1280} className="aspect-[4/5] w-full object-cover" />
          <span className="label-mono absolute bottom-0 left-0 bg-background px-4 py-3">Sheet A-01 · Concept</span>
        </Reveal>
        <div>
          <SectionHeading eyebrow="About Us" title="Engineering Ideas. Creating Possibilities." intro="CREATOV Engineering Consultancy Pvt. Ltd. is a professional construction consultancy focused on delivering practical, efficient and technically sound solutions for residential, commercial and development projects." />
          <Reveal delay={150} className="mt-10">
            <p className="font-display text-xl font-bold">We believe every project is different.</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {["Land", "Requirements", "Lifestyle", "Budget", "Future Plans"].map((x) => (
                <li key={x} className="border border-foreground/20 px-4 py-2 text-sm font-semibold">{x}</li>
              ))}
            </ul>
            <p className="mt-6 text-muted-foreground">That's why we don't simply provide a standard design. We work to understand the project and develop solutions around it.</p>
            <div className="mt-8"><CtaLink to="/about" variant="outline">About CREATOV</CtaLink></div>
          </Reveal>
        </div>
      </section>

      {/* APPROACH */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="blueprint-grid-dark absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <SectionHeading dark eyebrow="Our Approach" title="One clear line, from first conversation to handover." />
          <ol className="mt-20 grid gap-px md:grid-cols-5">
            {approach.map((a, i) => (
              <Reveal as="li" key={a} delay={i * 120} className="relative border-t border-ink-line pt-8 md:pr-6">
                <span className="absolute -top-[5px] left-0 h-[9px] w-[9px] bg-signal" aria-hidden />
                <span className="label-mono text-ink-muted">Step {i + 1}</span>
                <p className="mt-3 font-display text-3xl font-extrabold uppercase lg:text-4xl">{a}</p>
                {i < approach.length - 1 && <span className="label-mono absolute top-8 right-4 hidden text-signal md:block">→</span>}
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="Services" title="Everything You Need to Build with Confidence" />
          <Reveal><CtaLink to="/services" variant="outline">All Services</CtaLink></Reveal>
        </div>
        <ul className="mt-16 border-t border-border">
          {services.map((s) => (
            <li key={s.n}>
              <Link to="/services" hash={`s-${s.n}`} className="group grid grid-cols-[3rem_1fr_auto] items-center gap-4 border-b border-border py-6 transition-colors hover:bg-paper md:grid-cols-[5rem_1fr_1.2fr_auto] md:gap-8 md:px-4">
                <span className="label-mono text-signal">{s.n}</span>
                <span className="font-display text-xl font-extrabold transition-transform duration-300 group-hover:translate-x-2 md:text-3xl">{s.t}</span>
                <span className="hidden text-muted-foreground md:block">{s.d}</span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-primary" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* WHO WE SERVE */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
          <SectionHeading eyebrow="Who We Serve" title="One Consultancy. Different Construction Needs." />
          <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {audiences.map((a, i) => (
              <Reveal key={a.k} delay={i * 60} className="flex min-h-72 flex-col bg-paper p-8 md:p-10">
                <span className="label-mono text-primary">{a.k}</span>
                <h3 className="mt-auto pt-12 text-2xl font-extrabold leading-tight">{a.h}</h3>
                <p className="mt-3 text-muted-foreground">{a.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY / KNOW */}
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-36 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <SectionHeading eyebrow="Before You Build" title="Before You Build, Know What You're Building." intro={<><strong className="text-foreground">Construction mistakes can become expensive.</strong> Poor planning, inaccurate quantities, unsuitable designs and unexpected changes can increase both cost and construction time.</>} />
          <Reveal delay={150} className="mt-10"><CtaLink to="/why-creatov">Why CREATOV</CtaLink></Reveal>
        </div>
        <Reveal clip>
          <img src={images.construction} alt="Site engineer reviewing structural drawings beside reinforced concrete columns" loading="lazy" width={1280} height={960} className="aspect-[4/3] w-full object-cover" />
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
