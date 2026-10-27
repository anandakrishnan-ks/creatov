import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { TransitionLink as Link } from "@/components/site/TransitionLink";
import { CtaBand, PageHero, Reveal, SectionHeading } from "@/components/site/ui";
import { images } from "@/lib/images";
import { seo } from "@/lib/seo";
import { services, technical } from "@/lib/site";

export const Route = createFileRoute("/services/")({
  head: () =>
    seo(
      "Services | CREATOV Engineering Consultancy",
      "Residential and commercial projects, architectural design, structural engineering, estimation & BOQ, building approvals, renovation and construction consultancy in Kerala.",
    ),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        image={images.servicesBanner}
        title="Everything You Need to Build with Confidence"
        intro="Design, engineering, estimation, approvals and execution support — coordinated through one consultancy."
      />

      <section className="site-container section-space-compact">
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
          {services.map((service, index) => (
            <Reveal
              key={service.n}
              delay={(index % 3) * 100}
              as="article"
              className="group min-w-0"
            >
              <Link
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                <div id={`s-${service.n}`} className="relative scroll-mt-28 overflow-hidden">
                  <img
                    src={images[service.img]}
                    alt={service.imageAlt}
                    loading="lazy"
                    decoding="async"
                    width={1536}
                    height={1024}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                  />
                  <span className="label-mono absolute top-0 left-0 bg-background px-3 py-2 text-signal">
                    {service.n}
                  </span>
                </div>
                <h2 className="mt-6 text-2xl font-extrabold transition-colors group-hover:text-primary">
                  {service.t}
                </h2>
                <p className="mt-3 text-muted-foreground">{service.d}</p>
                <span className="label-mono mt-5 inline-flex items-center gap-2 text-primary">
                  <span className="border-b border-transparent group-hover:border-signal">
                    View service details
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="blueprint-grid-dark absolute inset-0" aria-hidden />
        <div className="site-container section-space-compact relative grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
          <SectionHeading dark eyebrow="Beyond the core" title="Additional Technical Services" />
          <ul className="border-t border-ink-line">
            {technical.map((service, index) => (
              <li
                key={service}
                className="group flex min-w-0 items-baseline gap-4 border-b border-ink-line py-4 transition-all duration-300 hover:pl-2 hover:text-signal sm:gap-6 sm:py-5 sm:hover:pl-4"
              >
                <span className="label-mono w-8 shrink-0 text-ink-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 font-display text-lg font-bold break-words sm:text-xl md:text-2xl">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
