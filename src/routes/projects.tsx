import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { images } from "@/lib/images";
import { projectCategories, projects } from "@/lib/site";
import { CtaBand, CtaLink, PageHero, Reveal } from "@/components/site/ui";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects")({
  head: () => seo("Projects | CREATOV Engineering Consultancy", "Residential, commercial, industrial, renovation and development projects by CREATOV Engineering Consultancy."),
  component: Projects,
});

function Projects() {
  const [cat, setCat] = useState<(typeof projectCategories)[number]>("All");
  const list = cat === "All" ? projects : projects.filter((p) => p.category === cat);

  return (
    <>
      <PageHero eyebrow="Projects" image={images.commercial} title="Work, in drawings and in concrete." />
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-2 border-b border-border pb-6">
          {projectCategories.map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)} className={cn("label-mono border px-4 py-2.5 transition-colors", cat === c ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-foreground")}>
              {c}
            </button>
          ))}
        </div>

        {list.length > 0 ? (
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {list.map((p) => (
              <article key={p.title} className="group">
                <div className="overflow-hidden"><img src={p.image} alt={p.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-1000 group-hover:scale-105" /></div>
                <p className="label-mono mt-5 text-signal">{p.category}{p.location ? ` · ${p.location}` : ""}</p>
                <h2 className="mt-2 text-2xl font-extrabold">{p.title}</h2>
              </article>
            ))}
          </div>
        ) : (
          <div className="blueprint-grid mt-12 grid items-center gap-10 border border-border p-8 md:grid-cols-[1fr_auto] md:p-16">
            <Reveal>
              <p className="label-mono text-muted-foreground">{cat === "All" ? "Portfolio" : cat}</p>
              <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">Our project portfolio is being curated.</h2>
              <p className="mt-4 max-w-xl text-muted-foreground">Completed and ongoing CREATOV projects will be published here soon. In the meantime, we'd be glad to talk through yours.</p>
            </Reveal>
            <CtaLink to="/contact">Discuss Your Project</CtaLink>
          </div>
        )}
      </section>
      <CtaBand />
    </>
  );
}
