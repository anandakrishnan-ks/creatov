import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { images } from "@/lib/images";
import { benefits } from "@/lib/site";
import { CtaBand, PageHero, Reveal, SectionHeading, Eyebrow } from "@/components/site/ui";

export const Route = createFileRoute("/why-creatov")({
  head: () =>
    seo(
      "Why CREATOV | Plan Better. Build Smarter.",
      "Before you build, know what you're building. CREATOV helps you plan with drawings, quantities and realistic project planning.",
    ),
  component: Why,
});

function Why() {
  return (
    <>
      <PageHero
        eyebrow="Why CREATOV"
        image={images.planningBanner}
        title="Before You Build, Know What You're Building."
        intro="Construction mistakes can become expensive."
      />

      <section className="site-container section-space grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-xl leading-snug font-semibold text-balance sm:text-2xl md:text-3xl">
            Poor planning, inaccurate quantities, unsuitable designs and unexpected changes can
            increase both cost and construction time.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <Eyebrow>
            CREATOV helps you plan before you build — so your decisions are based on
          </Eyebrow>
          <ul className="mt-8 border-t border-border">
            {["Drawings", "Quantities", "Technical Requirements", "Realistic Project Planning"].map(
              (x, i) => (
                <li
                  key={x}
                  className="flex min-w-0 items-baseline gap-4 border-b border-border py-4 sm:gap-6 sm:py-5"
                >
                  <span className="label-mono shrink-0 text-signal">0{i + 1}</span>
                  <span className="min-w-0 font-display text-xl font-extrabold break-words sm:text-2xl md:text-3xl">
                    {x}
                  </span>
                </li>
              ),
            )}
          </ul>
        </Reveal>
      </section>

      <section className="bg-primary px-4 py-16 text-center text-primary-foreground sm:py-20 md:py-24 lg:py-28">
        <Reveal>
          <p className="font-display text-[clamp(2.4rem,7vw,5rem)] leading-[0.95] font-black tracking-tight">
            Plan Better.
            <br />
            Build Smarter.
          </p>
        </Reveal>
      </section>

      <section className="site-container section-space">
        <SectionHeading
          eyebrow="Professional consultancy"
          title="Why Clients Choose Professional Consultancy"
        />
        <div className="mt-12 grid gap-y-10 sm:mt-16 md:grid-cols-12 md:gap-y-12 lg:gap-y-14">
          {benefits.map((b, i) => (
            <Reveal
              key={b.t}
              delay={i * 80}
              className={i % 2 === 0 ? "md:col-span-5" : "md:col-span-5 md:col-start-8 lg:mt-12"}
            >
              <div className="flex gap-4 border-t border-foreground pt-5 sm:gap-6 sm:pt-6">
                <span
                  aria-hidden="true"
                  className="shrink-0 font-display text-4xl font-black text-primary/60 sm:text-5xl"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl font-extrabold">{b.t}</h3>
                  <p className="mt-2 text-muted-foreground">{b.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
