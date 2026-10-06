import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { seo } from "@/lib/seo";
import { images } from "@/lib/images";
import { services, technical } from "@/lib/site";
import { CtaBand, PageHero, Reveal, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/services")({
  head: () => seo("Services | CREATOV Engineering Consultancy", "Residential and commercial projects, architectural design, structural engineering, estimation & BOQ, building approvals, renovation and construction consultancy in Kerala."),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" image={images.drawings} title="Everything You Need to Build with Confidence" intro="Design, engineering, estimation, approvals and execution support — coordinated through one consultancy." />

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={(i % 3) * 100} as="article" className="group scroll-mt-28" >
              <div id={`s-${s.n}`} className="relative overflow-hidden">
                <img src={images[s.img]} alt={`${s.t} — illustrative image`} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
                <span className="label-mono absolute top-0 left-0 bg-background px-3 py-2 text-signal">{s.n}</span>
              </div>
              <h2 className="mt-6 text-2xl font-extrabold">{s.t}</h2>
              <p className="mt-3 text-muted-foreground">{s.d}</p>
              <Link to="/contact" className="label-mono mt-5 inline-flex items-center gap-2 text-primary">
                <span className="border-b border-transparent group-hover:border-signal">Discuss this service</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="blueprint-grid-dark absolute inset-0" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading dark eyebrow="Beyond the core" title="Additional Technical Services" />
          <ul className="border-t border-ink-line">
            {technical.map((t, i) => (
              <li key={t} className="group flex items-baseline gap-6 border-b border-ink-line py-5 transition-all duration-300 hover:pl-4 hover:text-signal">
                <span className="label-mono w-8 text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-xl font-bold md:text-2xl">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
