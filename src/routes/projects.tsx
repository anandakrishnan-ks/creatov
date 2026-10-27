import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { images } from "@/lib/images";
import { projectCategories, projects } from "@/lib/site";
import { CtaBand, CtaLink, PageHero, Reveal } from "@/components/site/ui";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects")({
  head: () =>
    seo(
      "Projects | CREATOV Engineering Consultancy",
      "Residential, commercial, industrial, renovation and development projects by CREATOV Engineering Consultancy.",
    ),
  component: Projects,
});

function Projects() {
  const [cat, setCat] = useState<(typeof projectCategories)[number]>("All");
  const list = cat === "All" ? projects : projects.filter((p) => p.category === cat);

  return (
    <>
      <PageHero
        eyebrow="Projects"
        image={images.projectsBanner}
        title="Work, in drawings and in concrete."
      />
      <section className="site-container section-space-compact">
        <div
          role="group"
          aria-label="Filter projects"
          className="flex flex-wrap gap-2 border-b border-border pb-6"
        >
          {projectCategories.map((c) => (
            <button
              key={c}
              aria-pressed={cat === c}
              onClick={() => setCat(c)}
              className={cn(
                "label-mono border px-4 py-2.5 transition-colors",
                cat === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:border-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        {list.length > 0 ? (
          <div className="mt-10 grid gap-8 sm:mt-12 md:grid-cols-2">
            {list.map((p) => (
              <article key={p.title} className="group">
                <div className="overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <p className="label-mono mt-5 text-signal">
                  {p.category}
                  {p.location ? ` · ${p.location}` : ""}
                </p>
                <h2 className="mt-2 text-2xl font-extrabold">{p.title}</h2>
              </article>
            ))}
          </div>
        ) : (
          <div className="blueprint-grid mt-10 grid min-w-0 items-center gap-8 border border-border p-6 sm:mt-12 sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10 lg:p-16">
            <Reveal>
              <p className="label-mono text-muted-foreground">
                {cat === "All" ? "Portfolio" : cat}
              </p>
              <h2 className="mt-4 text-[clamp(2rem,6vw,3rem)] leading-tight font-extrabold text-balance">
                Our project portfolio is being curated.
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Completed and ongoing CREATOV projects will be published here soon. In the meantime,
                we'd be glad to talk through yours.
              </p>
            </Reveal>
            <CtaLink to="/contact">Discuss Your Project</CtaLink>
          </div>
        )}
      </section>
      <CtaBand />
    </>
  );
}
