import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { TransitionLink as Link } from "@/components/site/TransitionLink";
import { CtaBand, CtaLink, Eyebrow, PageHero, Reveal, SectionHeading } from "@/components/site/ui";
import { images } from "@/lib/images";
import { seo } from "@/lib/seo";
import { getServiceBySlug, serviceDetails } from "@/lib/service-details";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => loaderData
    ? seo(`${loaderData.t} | CREATOV Engineering Consultancy`, `${loaderData.d} Learn about our approach, deliverables and project support in Kerala.`)
    : seo("Service | CREATOV Engineering Consultancy", "Explore design, engineering and construction consultancy services from CREATOV."),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const service = Route.useLoaderData();
  const serviceIndex = serviceDetails.findIndex((item) => item.slug === service.slug);
  const relatedServices = Array.from(
    { length: 3 },
    (_, offset) => serviceDetails[(serviceIndex + offset + 1) % serviceDetails.length]!,
  );

  return (
    <>
      <PageHero
        eyebrow={`Services / ${service.n}`}
        image={images[service.img]}
        title={service.t}
        intro={service.d}
        actions={
          <>
            <CtaLink to="/contact" variant="light">Discuss Your Project</CtaLink>
            <CtaLink to="/services" variant="ghost-light">View All Services</CtaLink>
          </>
        }
      />

      <section className="site-container section-space grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)] lg:items-start lg:gap-16">
        <div className="min-w-0">
          <SectionHeading eyebrow="Service Overview" title={`A coordinated approach to ${service.t.toLowerCase()}.`} />
          <Reveal delay={100} className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg">
            {service.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </Reveal>
          <Reveal delay={160} className="mt-8 flex flex-wrap gap-3 sm:mt-10">
            <CtaLink to="/contact">Request a Consultation</CtaLink>
            <CtaLink to="/process" variant="outline">See Our Process</CtaLink>
          </Reveal>
        </div>
        <Reveal clip className="relative min-w-0 lg:sticky lg:top-28">
          <img src={images[service.img]} alt={`${service.t} by CREATOV Engineering Consultancy`} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover sm:aspect-[5/4]" />
          <div className="absolute right-0 bottom-0 left-0 bg-ink/95 p-5 text-ink-foreground sm:p-6">
            <p className="label-mono text-signal">CREATOV Service {service.n}</p>
            <p className="mt-2 font-display text-xl font-bold sm:text-2xl">From planning through practical execution.</p>
          </div>
        </Reveal>
      </section>

      <section className="blueprint-grid border-y border-border">
        <div className="site-container section-space-compact">
          <SectionHeading eyebrow="Scope of Service" title="What We Can Deliver" intro="The exact scope is tailored to your project stage, available information and required level of support." />
          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {service.deliverables.map((deliverable, index) => (
              <Reveal key={deliverable} delay={(index % 3) * 80} className="min-w-0 bg-background p-5 sm:p-7">
                <span className="label-mono text-signal">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 text-lg leading-snug font-extrabold sm:mt-8 sm:text-xl">{deliverable}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="blueprint-grid-dark absolute inset-0" aria-hidden />
        <div className="site-container section-space relative">
          <SectionHeading dark eyebrow="How We Work" title="A clear path from requirements to results." />
          <ol className="mt-10 grid gap-px bg-ink-line sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <Reveal as="li" key={step.title} delay={index * 90} className="min-w-0 bg-ink p-5 sm:p-7 lg:min-h-64">
                <span className="label-mono text-signal">Step {String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-8 text-2xl font-extrabold">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="site-container section-space grid min-w-0 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>Who This Is For</Eyebrow>
          <Reveal as="ul" className="mt-7 border-t border-border sm:mt-8">
            {service.idealFor.map((item) => (
              <li key={item} className="flex min-w-0 items-start gap-4 border-b border-border py-5">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-signal" />
                <span className="font-display text-lg font-bold sm:text-xl">{item}</span>
              </li>
            ))}
          </Reveal>
        </div>
        <div>
          <Eyebrow>Project Value</Eyebrow>
          <Reveal as="ul" delay={100} className="mt-7 border-t border-border sm:mt-8">
            {service.outcomes.map((item) => (
              <li key={item} className="flex min-w-0 items-start gap-4 border-b border-border py-5">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="font-display text-lg font-bold sm:text-xl">{item}</span>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-paper">
        <div className="site-container section-space-compact">
          <SectionHeading eyebrow="Continue Exploring" title="Related Services" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((related, index) => (
              <Reveal as="article" key={related.slug} delay={index * 80} className="group min-w-0 bg-background">
                <Link to="/services/$slug" params={{ slug: related.slug }} className="block h-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
                  <div className="overflow-hidden">
                    <img src={images[related.img]} alt="" loading="lazy" decoding="async" className="aspect-[16/10] w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="label-mono text-signal">Service {related.n}</p>
                    <h3 className="mt-3 text-xl font-extrabold transition-colors group-hover:text-primary sm:text-2xl">{related.t}</h3>
                    <span className="label-mono mt-5 inline-flex items-center gap-2 text-primary">
                      View details <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
