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
            intro="Meet Mr. Riyas Basheer, Structural Engineer and Managing Director of CREATOV Engineering Consultancy."
          />

          {/* Profile & Biography */}
          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
            {/* Portrait Photo */}
            <Reveal clip className="lg:col-span-5">
              <div className="group relative border border-border bg-card">
                <div className="aspect-[4/5] w-full overflow-hidden bg-muted">
                  <img
                    src={images.managingDirector}
                    alt="Mr. Riyas Basheer, Managing Director of CREATOV Engineering Consultancy"
                    loading="lazy"
                    decoding="async"
                    width={882}
                    height={1024}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="border-t border-border bg-background/95 p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="font-display text-lg font-extrabold text-foreground">
                        Mr. Riyas Basheer
                      </p>
                      <p className="label-mono text-xs text-muted-foreground">Managing Director</p>
                    </div>
                    <span className="label-mono border border-signal/30 bg-signal/5 px-2.5 py-1 text-[0.68rem] font-semibold text-signal">
                      Structural Engineer
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Bio content */}
            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="label-mono border border-border bg-paper px-3 py-1 text-xs font-semibold text-foreground">
                    12+ Years Industry Experience
                  </span>
                  <span className="label-mono border border-border bg-paper px-3 py-1 text-xs font-semibold text-foreground">
                    Structural Engineering
                  </span>
                  <span className="label-mono border border-border bg-paper px-3 py-1 text-xs font-semibold text-foreground">
                    Consultancy Management
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                  Engineering Rigor &amp; Practical Industry Exposure
                </h3>
              </Reveal>

              <Reveal
                delay={140}
                className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                <p>
                  Mr. Riyas Basheer is a Structural Engineer with over 12 years of professional
                  experience in the engineering and construction industry. With a strong technical
                  foundation and extensive industry exposure, he has developed expertise in
                  structural engineering, construction management, and consultancy.
                </p>
                <p>
                  With his technical expertise, entrepreneurial experience, and visionary
                  leadership, he brings a strong commitment to excellence, innovation, and
                  sustainable development.
                </p>
              </Reveal>

              <Reveal delay={200} className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="border border-border bg-paper/60 p-4">
                  <p className="label-mono text-signal">Foundation</p>
                  <p className="mt-1 font-display text-base font-bold text-foreground">
                    Technical Foundation
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Structural engineering analysis &amp; sound execution
                  </p>
                </div>
                <div className="border border-border bg-paper/60 p-4">
                  <p className="label-mono text-signal">Leadership</p>
                  <p className="mt-1 font-display text-base font-bold text-foreground">
                    Consultancy Management
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Comprehensive project oversight &amp; coordination
                  </p>
                </div>
                <div className="border border-border bg-paper/60 p-4">
                  <p className="label-mono text-signal">Vision</p>
                  <p className="mt-1 font-display text-base font-bold text-foreground">
                    Sustainable Growth
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Commitment to excellence &amp; modern innovation
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Award Spotlight (Photo 2 context) */}
          <Reveal delay={120} className="mt-12 sm:mt-16">
            <div className="relative overflow-hidden border border-border bg-paper p-6 sm:p-8 lg:p-10">
              <div
                className="blueprint-grid pointer-events-none absolute inset-0 opacity-40"
                aria-hidden
              />
              <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
                {/* Content */}
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 border border-signal/30 bg-signal/10 px-3 py-1.5 text-signal">
                    <Award className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span className="label-mono text-xs font-semibold">
                      International Recognition &bull; Oman
                    </span>
                  </div>
                  <h4 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                    Best Consultancy Award in the South Region of Oman
                  </h4>
                  <p className="mt-1 label-mono text-xs text-muted-foreground">
                    Jalan Bani Bu Ali &bull; Construction Consultancy Excellence
                  </p>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                    In addition to his engineering career, he established and managed a construction
                    consultancy in Oman. His dedication to quality, professional excellence, and
                    client satisfaction earned him the prestigious Best Consultancy Award in the
                    South Region of Oman (Jalan Bani Bu Ali).
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
                    <span className="label-mono border border-border bg-background px-3 py-1.5 text-xs text-foreground">
                      Dedication to Quality
                    </span>
                    <span className="label-mono border border-border bg-background px-3 py-1.5 text-xs text-foreground">
                      Professional Excellence
                    </span>
                    <span className="label-mono border border-border bg-background px-3 py-1.5 text-xs text-foreground">
                      Client Satisfaction
                    </span>
                  </div>
                </div>

                {/* Award Ceremony Photo */}
                <div className="lg:col-span-5">
                  <div className="group relative overflow-hidden border border-border bg-background shadow-xs">
                    <div className="aspect-[4/3] sm:aspect-[16/12] w-full overflow-hidden bg-muted">
                      <img
                        src={images.mdAward}
                        alt="Mr. Riyas Basheer receiving the Best Consultancy Award in the South Region of Oman (Jalan Bani Bu Ali)"
                        loading="lazy"
                        decoding="async"
                        width={720}
                        height={800}
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    </div>
                    <div className="border-t border-border bg-background/95 p-3.5 sm:p-4 text-xs text-muted-foreground">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-foreground">
                          Award Presentation Ceremony
                        </span>
                        <span className="label-mono text-[0.68rem] text-signal font-semibold">
                          Oman
                        </span>
                      </div>
                      <p className="mt-0.5 text-[0.76rem] text-muted-foreground">
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
