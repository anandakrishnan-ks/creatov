import { createFileRoute } from "@tanstack/react-router";
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
      <CtaBand />
    </>
  );
}
