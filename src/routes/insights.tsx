import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { seo } from "@/lib/seo";
import { images } from "@/lib/images";
import { insights } from "@/lib/site";
import { CtaBand, PageHero, Reveal } from "@/components/site/ui";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/insights")({
  head: () => seo("Insights | Ideas That Help You Build Better — CREATOV", "Practical guidance on construction costs, BOQ, approvals, design and planning from CREATOV Engineering Consultancy."),
  component: Insights,
});

function Insights() {
  const [lead, ...rest] = insights;
  return (
    <>
      <PageHero eyebrow="Insights" title="Ideas That Help You Build Better." intro="A knowledge hub on planning, cost, design and approvals. Articles are being written — check back soon." />
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <Reveal as="article" className="group grid gap-10 border-b border-border pb-16 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div className="overflow-hidden"><img src={images[lead.img]} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-1000 group-hover:scale-105" /></div>
          <Card c={lead.c} t={lead.t} large />
        </Reveal>
        <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((a, i) => (
            <Reveal as="article" key={a.t} delay={(i % 3) * 90} className="group">
              <div className="overflow-hidden"><img src={images[a.img]} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover grayscale-[40%] transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0" /></div>
              <div className="mt-6"><Card c={a.c} t={a.t} /></div>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

function Card({ c, t, large }: { c: string; t: string; large?: boolean }) {
  return (
    <div>
      <p className="label-mono text-signal">{c}</p>
      <h2 className={cn("mt-3 font-extrabold leading-tight", large ? "text-4xl md:text-5xl" : "text-2xl")}>{t}</h2>
      <p className="mt-3 text-muted-foreground">Full article coming soon.</p>
      <Link to="/contact" className="label-mono mt-5 inline-flex items-center gap-2 text-primary">Ask us about this <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" /></Link>
    </div>
  );
}
