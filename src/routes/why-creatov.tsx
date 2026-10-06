import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { images } from "@/lib/images";
import { benefits } from "@/lib/site";
import { CtaBand, PageHero, Reveal, SectionHeading, Eyebrow } from "@/components/site/ui";

export const Route = createFileRoute("/why-creatov")({
  head: () => seo("Why CREATOV | Plan Better. Build Smarter.", "Before you build, know what you're building. CREATOV helps you plan with drawings, quantities and realistic project planning."),
  component: Why,
});

function Why() {
  return (
    <>
      <PageHero eyebrow="Why CREATOV" image={images.drawings} title="Before You Build, Know What You're Building." intro="Construction mistakes can become expensive." />

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:px-10 md:py-36 lg:grid-cols-2">
        <Reveal>
          <p className="text-2xl leading-snug font-semibold md:text-3xl">Poor planning, inaccurate quantities, unsuitable designs and unexpected changes can increase both cost and construction time.</p>
        </Reveal>
        <Reveal delay={150}>
          <Eyebrow>CREATOV helps you plan before you build — so your decisions are based on</Eyebrow>
          <ul className="mt-8 border-t border-border">
            {["Drawings", "Quantities", "Technical Requirements", "Realistic Project Planning"].map((x, i) => (
              <li key={x} className="flex items-baseline gap-6 border-b border-border py-5">
                <span className="label-mono text-signal">0{i + 1}</span>
                <span className="font-display text-2xl font-extrabold md:text-3xl">{x}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="bg-primary py-20 text-center text-primary-foreground md:py-28">
        <Reveal><p className="font-display text-5xl font-black tracking-tight md:text-8xl">Plan Better.<br />Build Smarter.</p></Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
        <SectionHeading eyebrow="Professional consultancy" title="Why Clients Choose Professional Consultancy" />
        <div className="mt-16 grid gap-y-14 md:grid-cols-12">
          {benefits.map((b, i) => (
            <Reveal key={b.t} delay={i * 80} className={i % 2 === 0 ? "md:col-span-5" : "md:col-span-5 md:col-start-8 md:mt-24"}>
              <div className="flex gap-6 border-t border-foreground pt-6">
                <span className="font-display text-5xl font-black text-primary/20">{String(i + 1).padStart(2, "0")}</span>
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
