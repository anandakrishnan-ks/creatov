import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { images } from "@/lib/images";
import { CtaBand, PageHero, Reveal, SectionHeading, Eyebrow } from "@/components/site/ui";

export const Route = createFileRoute("/about")({
  head: () => seo("About CREATOV | Engineering Ideas. Creating Possibilities.", "CREATOV Engineering Consultancy brings engineering expertise, design thinking, project management and construction execution together under one professional platform."),
  component: About,
});

const values = ["Technical Excellence", "Transparency", "Reliability", "Innovation", "Client Satisfaction"];

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" image={images.model} title="Engineering Ideas. Creating Possibilities." intro="CREATOV Engineering Consultancy Pvt. Ltd. is a professional construction consultancy focused on delivering practical, efficient and technically sound solutions for residential, commercial and development projects." />

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-36 lg:grid-cols-[1fr_1.1fr]">
        <Reveal clip><img src={images.interior} alt="Double-height Kerala home interior with central courtyard" loading="lazy" className="aspect-[4/5] w-full object-cover" /></Reveal>
        <div className="lg:pt-12">
          <SectionHeading eyebrow="Our Background" title="Built Around Engineering Expertise." />
          <Reveal delay={120} className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>CREATOV Engineering Consultancy Pvt. Ltd. was established with the vision of bringing engineering expertise, design thinking, project management and construction execution together under one professional platform.</p>
            <p>The company focuses on providing clients with a coordinated approach to construction projects, reducing the difficulties that can arise when design, estimation, execution and technical services are managed separately.</p>
            <p>CREATOV works across residential, commercial and industrial building projects, providing services according to the requirements and scale of each project.</p>
          </Reveal>
        </div>
      </section>

      <section className="blueprint-grid border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <Eyebrow>Every project is different</Eyebrow>
          <div className="mt-10 grid gap-px bg-border sm:grid-cols-5">
            {["Land", "Requirements", "Lifestyle", "Budget", "Future Plans"].map((x, i) => (
              <Reveal key={x} delay={i * 80} className="bg-background p-6">
                <span className="label-mono text-signal">0{i + 1}</span>
                <p className="mt-8 font-display text-2xl font-extrabold">{x}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-lg text-muted-foreground">That's why we don't simply provide a standard design. We work to understand the project and develop solutions around it.</p>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="bg-ink px-6 py-24 text-ink-foreground md:px-16 md:py-32">
          <Eyebrow dark>Our Vision</Eyebrow>
          <Reveal><blockquote className="mt-8 font-display text-3xl leading-tight font-extrabold md:text-4xl">“To become a trusted and professionally recognized engineering and construction solutions provider, delivering innovative, sustainable, and quality-focused projects.”</blockquote></Reveal>
          <ul className="mt-12 flex flex-wrap gap-2">
            {values.map((v) => <li key={v} className="label-mono border border-ink-line px-3 py-2 text-ink-muted">{v}</li>)}
          </ul>
        </div>
        <div className="bg-paper px-6 py-24 md:px-16 md:py-32">
          <Eyebrow>Our Mission</Eyebrow>
          <Reveal><p className="mt-8 font-display text-3xl leading-tight font-extrabold md:text-4xl">Our mission is to provide integrated engineering, design, consultancy and construction solutions that deliver <span className="text-primary">measurable value</span> to our clients.</p></Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
