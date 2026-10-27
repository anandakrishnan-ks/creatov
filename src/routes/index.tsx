import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { TransitionLink as Link } from "@/components/site/TransitionLink";
import { seo } from "@/lib/seo";
import { images } from "@/lib/images";
import { sectors, pillars, services, audiences, tagline } from "@/lib/site";
import { CtaLink, Eyebrow, Reveal, SectionHeading } from "@/components/site/ui";
import { HomeContact } from "@/components/site/HomeContact";
import { FaqSection } from "@/components/site/FaqSection";
import { homeFaqs } from "@/lib/home-faqs";
import { Parallax, ParallaxImage } from "@/components/site/Parallax";

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
        <ParallaxImage
          strength={32}
          containerClassName="absolute inset-0"
          src={images.hero}
          alt="Contemporary Kerala residence with laterite walls and teak louvers at dusk"
          width={1920}
          height={1088}
          decoding="async"
          fetchPriority="high"
          className="object-cover"
        />
        <div className="hero-scrim absolute inset-0" aria-hidden />
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            className="draw-line"
            d="M0 760 H1440 M120 0 V900 M1320 0 V900"
            stroke="currentColor"
            strokeWidth="0.6"
            fill="none"
          />
        </svg>
        <div className="site-container-wide relative pt-32 pb-10 sm:pt-36 sm:pb-14 md:pt-40 md:pb-16 lg:pb-20">
          <Reveal>
            <Eyebrow dark>Engineering Consultancy · Kochi &amp; Kollam, Kerala</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-5 text-[clamp(3rem,10vw,9.5rem)] leading-[0.88] font-black tracking-[-0.045em] sm:mt-6">
              Design.
              <br />
              Build.
              <br />
              <span className="text-signal">Deliver.</span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="hero-tagline mt-6 w-fit border-l-2 border-signal pl-4 font-display text-lg leading-relaxed font-semibold tracking-[0.015em] text-ink-foreground sm:mt-7 sm:pl-5 sm:text-2xl">
              {tagline}
              <span className="mt-1 block font-sans text-xs font-normal tracking-[0.08em] text-ink-foreground/75 sm:text-sm">
                One team. Every stage of your build.
              </span>
            </p>
          </Reveal>
          <div className="mt-8 grid gap-6 border-t border-ink-line pt-6 sm:mt-10 sm:gap-8 sm:pt-8 lg:grid-cols-[1fr_1fr_auto] lg:items-end lg:gap-10">
            <Reveal delay={240}>
              <p className="font-display text-xl font-bold sm:text-2xl md:text-3xl">
                Your Vision. Our Expertise.
                <br />A Better Way to Build.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <p className="max-w-md text-ink-muted">
                A complete construction consultancy for turning ideas, land and plans into
                successful projects. From the first idea to the final structure, CREATOV helps you
                plan, design and manage your construction journey with clarity and confidence.
              </p>
            </Reveal>
            <Reveal delay={400} className="flex flex-wrap gap-3">
              <CtaLink to="/contact" variant="light">
                Start Your Project
              </CtaLink>
              <CtaLink to="/services" variant="ghost-light">
                Explore Our Services
              </CtaLink>
            </Reveal>
          </div>
          <ul className="label-mono mt-8 flex flex-wrap gap-x-4 gap-y-2 leading-relaxed text-ink-muted sm:mt-10 sm:gap-x-6">
            {sectors.map((s, i) => (
              <li key={s} className="flex items-center gap-4 sm:gap-6">
                {i > 0 && <span className="h-3 w-px shrink-0 bg-signal" />}
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* INTRO */}
      <section className="blueprint-grid">
        <div className="site-container section-space">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-12">
            <SectionHeading
              eyebrow="Why CREATOV"
              title={<>Building is More Than Construction. It's a Process.</>}
            />
            <Reveal delay={150}>
              <p className="font-display text-xl font-bold">
                A successful project starts long before the first brick is laid.
              </p>
              <p className="mt-4 text-muted-foreground">
                At CREATOV, we help you make the right decisions at every stage — from land and
                concept to drawings, approvals, estimates and execution.
              </p>
            </Reveal>
          </div>
          <div className="mt-9 grid border-t border-l border-border bg-background sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal
                key={p.t}
                delay={i * 70}
                className="group relative border-r border-b border-border p-6 transition-colors duration-500 hover:bg-ink hover:text-ink-foreground sm:p-8"
              >
                <span className="label-mono text-signal">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-8 text-2xl font-extrabold sm:mt-10">{p.t}</h3>
                <p className="mt-3 text-muted-foreground transition-colors group-hover:text-ink-muted">
                  {p.d}
                </p>
                <span
                  className="absolute top-6 right-6 h-3 w-3 border-t border-r border-foreground/30 group-hover:border-signal sm:top-8 sm:right-8"
                  aria-hidden
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SPLIT */}
      <section className="site-container grid gap-8 pb-12 sm:pb-16 lg:grid-cols-2 lg:items-center lg:gap-12 lg:pb-20">
        <Reveal clip className="relative">
          <ParallaxImage
            strength={20}
            containerClassName="aspect-[4/5] w-full"
            src={images.homeAbout}
            alt="Architectural house model, drawings and material samples on a studio worktable"
            loading="lazy"
            decoding="async"
            width={1122}
            height={1402}
            className="object-cover"
          />
          <span className="label-mono absolute bottom-0 left-0 bg-background px-4 py-3">
            From ideas to built form
          </span>
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="About Us"
            title="Engineering Ideas. Creating Possibilities."
            intro="CREATOV Engineering Consultancy Pvt. Ltd. is a professional construction consultancy focused on delivering practical, efficient and technically sound solutions for residential, commercial and development projects."
          />
          <Reveal delay={150} className="mt-7">
            <p className="font-display text-xl font-bold">We believe every project is different.</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {["Land", "Requirements", "Lifestyle", "Budget", "Future Plans"].map((x) => (
                <li key={x} className="border border-foreground/20 px-4 py-2 text-sm font-semibold">
                  {x}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-muted-foreground">
              That's why we don't simply provide a standard design. We work to understand the
              project and develop solutions around it.
            </p>
            <div className="mt-8">
              <CtaLink to="/about" variant="outline">
                About CREATOV
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* APPROACH */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <Parallax
          strength={12}
          containerClassName="pointer-events-none absolute inset-0"
          className="blueprint-grid-dark"
          aria-hidden
        />
        <div className="site-container section-space relative">
          <SectionHeading
            dark
            eyebrow="Our Approach"
            title="One clear line, from first conversation to handover."
          />
          <ol className="mt-9 grid gap-x-6 gap-y-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-px lg:gap-y-0">
            {approach.map((a, i) => (
              <Reveal
                as="li"
                key={a}
                delay={i * 120}
                className="relative border-t border-ink-line pt-6 lg:pr-5 lg:pt-8 xl:pr-6"
              >
                <span
                  className="absolute -top-[5px] left-0 h-[9px] w-[9px] bg-signal"
                  aria-hidden
                />
                <span className="label-mono text-ink-muted">Step {i + 1}</span>
                <p className="mt-3 font-display text-2xl font-extrabold uppercase xl:text-3xl 2xl:text-4xl">
                  {a}
                </p>
                {i < approach.length - 1 && (
                  <span className="label-mono absolute top-8 right-3 hidden text-signal lg:block xl:right-4">
                    →
                  </span>
                )}
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="site-container section-space">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="Services" title="Everything You Need to Build with Confidence" />
          <Reveal>
            <CtaLink to="/services" variant="outline">
              All Services
            </CtaLink>
          </Reveal>
        </div>
        <ul className="mt-9 border-t border-border sm:mt-12">
          {services.map((s, i) => (
            <Reveal as="li" key={s.n} delay={(i % 3) * 55}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group grid min-w-0 grid-cols-[2.25rem_minmax(0,1fr)_auto] items-center gap-3 border-b border-border py-5 transition-colors hover:bg-paper sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:gap-4 sm:py-6 lg:grid-cols-[5rem_minmax(0,1fr)_minmax(0,1.2fr)_auto] lg:gap-8 lg:px-4"
              >
                <span className="label-mono text-signal">{s.n}</span>
                <span className="min-w-0 font-display text-lg leading-tight font-extrabold transition-transform duration-300 group-hover:translate-x-1 sm:text-xl lg:text-3xl lg:group-hover:translate-x-2">
                  {s.t}
                </span>
                <span className="hidden min-w-0 text-muted-foreground lg:block">{s.d}</span>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-primary" />
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* WHO WE SERVE */}
      <section className="bg-paper">
        <div className="site-container section-space">
          <SectionHeading
            eyebrow="Who We Serve"
            title="One Consultancy. Different Construction Needs."
          />
          <div className="mt-9 grid gap-px bg-border sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {audiences.map((a, i) => (
              <Reveal key={a.k} delay={i * 60} className="flex flex-col bg-paper p-6 sm:p-8">
                <span className="label-mono text-primary">{a.k}</span>
                <h3 className="mt-8 text-2xl font-extrabold leading-tight">{a.h}</h3>
                <p className="mt-3 text-muted-foreground">{a.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY / KNOW */}
      <section className="site-container section-space grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-14">
        <div>
          <SectionHeading
            eyebrow="Before You Build"
            title="Before You Build, Know What You're Building."
            intro={
              <>
                <strong className="text-foreground">
                  Construction mistakes can become expensive.
                </strong>{" "}
                Poor planning, inaccurate quantities, unsuitable designs and unexpected changes can
                increase both cost and construction time.
              </>
            }
          />
          <Reveal delay={150} className="mt-10">
            <CtaLink to="/why-creatov">Why CREATOV</CtaLink>
          </Reveal>
        </div>
        <Reveal clip>
          <ParallaxImage
            strength={18}
            containerClassName="aspect-[4/3] w-full"
            src={images.construction}
            alt="Site engineer reviewing structural drawings beside reinforced concrete columns"
            loading="lazy"
            width={1280}
            height={960}
            className="object-cover"
          />
        </Reveal>
      </section>

      <FaqSection
        id="home-faq"
        items={homeFaqs}
        eyebrow="Frequently asked questions"
        title="Before the first brick, a few answers."
        intro="Planning a project comes with questions. Here are a few useful places to start."
      />
      <HomeContact />
    </>
  );
}
