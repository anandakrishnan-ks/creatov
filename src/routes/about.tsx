import { createFileRoute } from "@tanstack/react-router";
import { Award } from "lucide-react";
import { seo } from "@/lib/seo";
import { images } from "@/lib/images";
import { ParallaxImage } from "@/components/site/Parallax";
import { CtaBand, PageHero, Reveal, SectionHeading, Eyebrow } from "@/components/site/ui";

export const Route = createFileRoute("/about")({
  head: () =>
    seo(
      "About CREATOV | Engineering Ideas. Creating Possibilities.",
      "CREATOV Engineering Consultancy brings engineering expertise, design thinking, project management and construction execution together under one professional platform.",
    ),
  component: About,
});

const values = [
  "Technical Excellence",
  "Transparency",
  "Reliability",
  "Innovation",
  "Client Satisfaction",
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        image={images.aboutBanner}
        imagePosition="center 50%"
        imagePositionMobile="72% 50%"
        title="Engineering Ideas. Creating Possibilities."
        intro="CREATOV Engineering Consultancy Pvt. Ltd. is a professional construction consultancy focused on delivering practical, efficient and technically sound solutions for residential, commercial and development projects."
      />

      <section className="site-container section-space grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <Reveal clip>
          <ParallaxImage
            strength={20}
            containerClassName="aspect-[4/5] w-full"
            src={images.interior}
            alt="Double-height Kerala home interior with central courtyard"
            loading="lazy"
            decoding="async"
            width={1280}
            height={960}
            className="object-cover"
          />
        </Reveal>
        <div className="lg:pt-6">
          <SectionHeading eyebrow="Our Background" title="Built Around Engineering Expertise." />
          <Reveal
            delay={120}
            className="mt-8 max-w-prose space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            <p>
              CREATOV Engineering Consultancy Pvt. Ltd. was established with the vision of bringing
              engineering expertise, design thinking, project management and construction execution
              together under one professional platform.
            </p>
            <p>
              The company focuses on providing clients with a coordinated approach to construction
              projects, reducing the difficulties that can arise when design, estimation, execution
              and technical services are managed separately.
            </p>
            <p>
              CREATOV works across residential, commercial and industrial building projects,
              providing services according to the requirements and scale of each project.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="blueprint-grid border-y border-border">
        <div className="site-container section-space-compact">
          <Eyebrow>Every project is different</Eyebrow>
          <div className="mt-8 grid gap-px bg-border sm:grid-cols-2 lg:mt-10 lg:grid-cols-5">
            {["Land", "Requirements", "Lifestyle", "Budget", "Future Plans"].map((x, i) => (
              <Reveal key={x} delay={i * 80} className="min-w-0 bg-background p-5 sm:p-6">
                <span className="label-mono text-signal">0{i + 1}</span>
                <p className="mt-6 font-display text-xl font-extrabold break-words sm:mt-8 sm:text-2xl lg:text-xl xl:text-2xl">
                  {x}
                </p>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-10 sm:text-lg">
            That's why we don't simply provide a standard design. We work to understand the project
            and develop solutions around it.
          </p>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="bg-ink px-[clamp(1rem,6vw,4rem)] py-[clamp(3rem,6vw,5.5rem)] text-ink-foreground">
          <Eyebrow dark>Our Vision</Eyebrow>
          <Reveal>
            <blockquote className="mt-6 font-display text-[clamp(1.75rem,4vw,2.25rem)] leading-tight font-extrabold text-balance sm:mt-8">
              “To become a trusted and professionally recognized engineering and construction
              solutions provider, delivering innovative, sustainable and quality-focused projects.”
            </blockquote>
          </Reveal>
          <ul className="mt-12 flex flex-wrap gap-2">
            {values.map((v) => (
              <li key={v} className="label-mono border border-ink-line px-3 py-2 text-ink-muted">
                {v}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-paper px-[clamp(1rem,6vw,4rem)] py-[clamp(3rem,6vw,5.5rem)]">
          <Eyebrow>Our Mission</Eyebrow>
          <Reveal>
            <p className="mt-6 font-display text-[clamp(1.75rem,4vw,2.25rem)] leading-tight font-extrabold text-balance sm:mt-8">
              Our mission is to provide integrated engineering, design, consultancy and construction
              solutions that deliver <span className="text-signal">measurable value</span> to our
              clients.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MANAGING DIRECTOR / LEADERSHIP SECTION */}
      <section id="managing-director" className="border-t border-border bg-background">
        <div className="site-container section-space">
          <SectionHeading
            eyebrow="Leadership"
            title="Driven by Technical Rigor. Guided by Experience."
            intro="Meet the leadership team guiding CREATOV Engineering Consultancy."
          />

          {/* Directors Grid */}
          <div className="mt-10 grid gap-8 sm:mt-12 lg:grid-cols-2">
            {/* Managing Director: Mr. Riyas Basheer */}
            <Reveal clip className="h-full">
              <div className="flex h-full flex-col border border-border bg-card p-5 shadow-xs sm:p-6">
                <div className="grid gap-5 sm:grid-cols-[170px_1fr] sm:gap-6">
                  {/* Smaller Photo */}
                  <div className="mx-auto w-40 shrink-0 overflow-hidden border border-border bg-muted sm:w-full">
                    <img
                      src={images.managingDirector}
                      alt="Mr. Riyas Basheer, Managing Director of CREATOV Engineering Consultancy"
                      loading="lazy"
                      decoding="async"
                      width={882}
                      height={1024}
                      className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                    />
                  </div>

                  {/* Info & Typography (Smaller & Refined) */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="label-mono border border-signal/30 bg-signal/5 px-2.5 py-0.5 text-[0.68rem] font-semibold text-signal">
                          Managing Director
                        </span>
                        <span className="label-mono border border-border bg-paper px-2 py-0.5 text-[0.65rem] text-muted-foreground">
                          12+ Yrs Experience
                        </span>
                      </div>

                      <h3 className="mt-2.5 font-display text-xl font-extrabold text-foreground sm:text-2xl">
                        Mr. Riyas Basheer
                      </h3>
                      <p className="label-mono text-[0.72rem] font-semibold text-primary">
                        Structural Engineering &amp; Construction Consultancy
                      </p>

                      <div className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                        <p>
                          Mr. Riyas Basheer is the Managing Director with over 12 years of
                          professional experience in the engineering and construction industry. With
                          a strong technical foundation and extensive industry exposure, he has
                          developed expertise in structural engineering, construction management,
                          and consultancy.
                        </p>
                        <p>
                          With his technical expertise, entrepreneurial experience, and visionary
                          leadership, he brings a strong commitment to excellence, innovation, and
                          sustainable development.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Director: Sadeena Noorjahan */}
            <Reveal clip delay={100} className="h-full">
              <div className="flex h-full flex-col border border-border bg-card p-5 shadow-xs sm:p-6">
                <div className="grid gap-5 sm:grid-cols-[170px_1fr] sm:gap-6">
                  {/* Matching Smaller Photo */}
                  <div className="mx-auto w-40 shrink-0 overflow-hidden border border-border bg-muted sm:w-full">
                    <img
                      src={images.directorSadeena}
                      alt="Sadeena Noorjahan, Director of CREATOV Engineering Consultancy"
                      loading="lazy"
                      decoding="async"
                      width={788}
                      height={1024}
                      className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                    />
                  </div>

                  {/* Info & Typography */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="label-mono border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[0.68rem] font-semibold text-primary">
                          Director
                        </span>
                        <span className="label-mono border border-border bg-paper px-2 py-0.5 text-[0.65rem] text-muted-foreground">
                          Management &amp; Operations
                        </span>
                      </div>

                      <h3 className="mt-2.5 font-display text-xl font-extrabold text-foreground sm:text-2xl">
                        Sadeena Noorjahan
                      </h3>
                      <p className="label-mono text-[0.72rem] font-semibold text-primary">
                        Executive Oversight &amp; Strategic Direction
                      </p>

                      <div className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                        <p>
                          As Director at CREATOV Engineering Consultancy, Sadeena Noorjahan plays an
                          integral role in strategic management, operational excellence, and
                          organizational growth. She ensures every project reflects the firm’s
                          commitment to quality and transparency.
                        </p>
                        <p>
                          Working alongside the technical and execution teams, she brings dedicated
                          leadership towards client satisfaction, seamless project coordination, and
                          establishing lasting client partnerships.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Award Spotlight (Photo 2 context) */}
          <Reveal delay={120} className="mt-10 sm:mt-12">
            <div className="relative overflow-hidden border border-border bg-paper p-5 sm:p-6 lg:p-8">
              <div
                className="blueprint-grid pointer-events-none absolute inset-0 opacity-40"
                aria-hidden
              />
              <div className="relative grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-10">
                {/* Content */}
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 border border-signal/30 bg-signal/10 px-3 py-1.5 text-signal">
                    <Award className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span className="label-mono text-xs font-semibold">
                      International Recognition &bull; Oman
                    </span>
                  </div>
                  <h4 className="mt-3 font-display text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
                    Best Engineering Consultancy Award in south region of oman
                  </h4>
                  <p className="mt-1 label-mono text-xs text-muted-foreground">
                    Jalan Bani Bu Ali &bull; Construction Consultancy Excellence
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    In addition to his engineering career, he established and managed a construction
                    consultancy in Oman. His dedication to quality, professional excellence, and
                    client satisfaction earned him the prestigious Best Engineering Consultancy
                    Award in south region of oman (Jalan Bani Bu Ali).
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="label-mono border border-border bg-background px-2.5 py-1 text-[0.72rem] text-foreground">
                      Dedication to Quality
                    </span>
                    <span className="label-mono border border-border bg-background px-2.5 py-1 text-[0.72rem] text-foreground">
                      Professional Excellence
                    </span>
                    <span className="label-mono border border-border bg-background px-2.5 py-1 text-[0.72rem] text-foreground">
                      Client Satisfaction
                    </span>
                  </div>
                </div>

                {/* Award Ceremony Photo */}
                <div className="lg:col-span-5">
                  <div className="group relative mx-auto max-w-md overflow-hidden border border-border bg-background shadow-xs">
                    <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                      <img
                        src={images.mdAward}
                        alt="Mr. Riyas Basheer receiving the Best Engineering Consultancy Award in south region of oman (Jalan Bani Bu Ali)"
                        loading="lazy"
                        decoding="async"
                        width={720}
                        height={800}
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="border-t border-border bg-background/95 p-3 text-xs text-muted-foreground">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-foreground">
                          Award Presentation Ceremony
                        </span>
                        <span className="label-mono text-[0.68rem] text-signal font-semibold">
                          Oman
                        </span>
                      </div>
                      <p className="mt-0.5 text-[0.72rem] text-muted-foreground">
                        South Region of Oman (Jalan Bani Bu Ali)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
