import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { seo } from "@/lib/seo";
import { images } from "@/lib/images";
import { projectCategories, projects, type Project } from "@/lib/site";
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

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const gallery =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [{ src: project.image, label: project.title, stage: project.category }];

  const current = gallery[activeIdx] ?? gallery[0]!;

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  if (featured) {
    return (
      <article className="border border-border bg-card p-6 shadow-xs sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
          {/* Gallery Media (Left) */}
          <div className="lg:col-span-7">
            <div className="group relative overflow-hidden border border-border bg-muted">
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src={current.src}
                  alt={`${project.title} — ${current.label}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>

              {/* Stage Badge & Status */}
              <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-3 sm:p-4">
                <span className="label-mono bg-ink/90 px-3 py-1 text-xs font-semibold text-ink-foreground backdrop-blur-xs">
                  {current.stage}
                </span>
                {project.status && (
                  <span className="label-mono border border-signal/40 bg-signal px-3 py-1 text-xs font-bold text-white">
                    {project.status}
                  </span>
                )}
              </div>

              {/* Prev / Next Buttons */}
              {gallery.length > 1 && (
                <div className="pointer-events-none absolute inset-x-2 inset-y-0 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous project photo"
                    className="pointer-events-auto flex h-9 w-9 items-center justify-center bg-ink/75 text-ink-foreground backdrop-blur-xs transition-colors hover:bg-ink focus-visible:outline-signal"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next project photo"
                    className="pointer-events-auto flex h-9 w-9 items-center justify-center bg-ink/75 text-ink-foreground backdrop-blur-xs transition-colors hover:bg-ink focus-visible:outline-signal"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              )}

              {/* Caption & Counter */}
              <div className="flex items-center justify-between border-t border-border bg-background/95 px-4 py-2.5 text-xs backdrop-blur-xs">
                <span className="truncate pr-2 font-semibold text-foreground">{current.label}</span>
                <span className="label-mono shrink-0 text-muted-foreground">
                  {activeIdx + 1} / {gallery.length}
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            {gallery.length > 1 && (
              <div className="mt-3 grid grid-cols-4 gap-2 sm:gap-3">
                {gallery.map((item, idx) => {
                  const isActive = idx === activeIdx;
                  return (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => setActiveIdx(idx)}
                      className={cn(
                        "group relative overflow-hidden border p-1 text-left transition-all",
                        isActive
                          ? "border-signal bg-signal/5 ring-2 ring-signal/30"
                          : "border-border bg-background hover:border-foreground/50",
                      )}
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                        <img
                          src={item.src}
                          alt=""
                          aria-hidden="true"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p
                        className={cn(
                          "label-mono mt-1.5 truncate px-0.5 text-[0.65rem] leading-tight",
                          isActive ? "font-bold text-signal" : "text-muted-foreground",
                        )}
                      >
                        {item.stage.replace(/ Stage| & Visualization/, "")}
                      </p>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Details (Right) */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="label-mono flex items-center gap-1 font-semibold text-signal">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  {project.category}
                  {project.location ? ` · ${project.location}` : ""}
                </span>
              </div>

              <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
                {project.title}
              </h2>
              {project.subtitle && (
                <p className="mt-1 text-lg font-semibold text-primary">{project.subtitle}</p>
              )}

              {project.description && (
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              )}

              {project.scope && project.scope.length > 0 && (
                <div className="mt-6 border-t border-border pt-5">
                  <p className="label-mono text-xs font-semibold text-foreground">Project Scope</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.scope.map((s) => (
                      <span
                        key={s}
                        className="label-mono border border-border bg-paper px-2.5 py-1 text-xs font-medium text-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-5">
                <div className="border border-border bg-paper/60 p-3 sm:p-4">
                  <p className="label-mono text-[0.68rem] text-signal">Concept</p>
                  <p className="mt-0.5 font-display text-sm font-bold text-foreground">
                    3D Elevations
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Day &amp; night architectural design
                  </p>
                </div>
                <div className="border border-border bg-paper/60 p-3 sm:p-4">
                  <p className="label-mono text-[0.68rem] text-signal">Execution</p>
                  <p className="mt-0.5 font-display text-sm font-bold text-foreground">
                    On-Site Build
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Plinth foundation to superstructure
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <CtaLink to="/contact">Discuss A Similar Project</CtaLink>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Standard grid view for multiple projects
  return (
    <article className="group overflow-hidden border border-border bg-card">
      <div className="relative overflow-hidden bg-muted">
        <div className="aspect-[4/3] w-full overflow-hidden">
          <img
            src={current.src}
            alt={`${project.title} — ${current.label}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Floating Badges */}
        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-3">
          <span className="label-mono bg-ink/90 px-2.5 py-0.5 text-[0.68rem] font-semibold text-ink-foreground backdrop-blur-xs">
            {current.stage}
          </span>
          {project.status && (
            <span className="label-mono bg-signal px-2.5 py-0.5 text-[0.68rem] font-bold text-white">
              {project.status}
            </span>
          )}
        </div>

        {/* Nav arrows if multiple */}
        {gallery.length > 1 && (
          <div className="pointer-events-none absolute inset-x-2 inset-y-0 flex items-center justify-between">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous photo"
              className="pointer-events-auto flex h-8 w-8 items-center justify-center bg-ink/75 text-ink-foreground backdrop-blur-xs transition-colors hover:bg-ink"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next photo"
              className="pointer-events-auto flex h-8 w-8 items-center justify-center bg-ink/75 text-ink-foreground backdrop-blur-xs transition-colors hover:bg-ink"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* Thumbnails strip */}
      {gallery.length > 1 && (
        <div className="grid grid-cols-4 gap-1 border-t border-border bg-background p-1.5">
          {gallery.map((item, idx) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={cn(
                "aspect-[4/3] overflow-hidden border transition-all",
                idx === activeIdx
                  ? "border-signal ring-1 ring-signal"
                  : "border-border opacity-70 hover:opacity-100",
              )}
            >
              <img
                src={item.src}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      <div className="p-5 sm:p-6">
        <p className="label-mono text-signal">
          {project.category}
          {project.location ? ` · ${project.location}` : ""}
        </p>
        <h2 className="mt-2 text-2xl font-extrabold text-foreground">{project.title}</h2>
        {project.subtitle && (
          <p className="mt-0.5 text-sm font-semibold text-muted-foreground">{project.subtitle}</p>
        )}
        {project.description && (
          <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{project.description}</p>
        )}
      </div>
    </article>
  );
}

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
          <div className="mt-10 sm:mt-12">
            {list.length === 1 ? (
              <ProjectCard project={list[0]!} featured={true} />
            ) : (
              <div className="grid gap-8 md:grid-cols-2">
                {list.map((p) => (
                  <ProjectCard key={p.title} project={p} />
                ))}
              </div>
            )}
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
