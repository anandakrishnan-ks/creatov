import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { TransitionLink as Link } from "@/components/site/TransitionLink";
import { CtaLink, PageHero } from "@/components/site/ui";
import { nav, services } from "@/lib/site";
import { policyLinks } from "@/lib/policy-links";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/sitemap")({
  head: () =>
    seo(
      "Site Map | CREATOV Engineering Consultancy",
      "Find CREATOV pages, all engineering and design services, frequently asked questions and website policies in one place.",
    ),
  component: SiteMap,
});

function SiteMap() {
  return (
    <>
      <PageHero
        eyebrow="Site Map"
        title="The whole site, at a glance."
        titleClassName="max-w-4xl text-[clamp(2.5rem,7vw,3.75rem)]"
        intro="Find a service, get an answer or explore how we work."
      />
      <section
        className="site-container section-space-compact grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3"
        aria-label="Website directory"
      >
        <nav
          aria-labelledby="sitemap-pages-heading"
          className="min-w-0 border border-border bg-paper p-5 sm:p-7"
        >
          <p className="label-mono text-primary" aria-hidden>
            01
          </p>
          <h2 id="sitemap-pages-heading" className="mt-3 text-2xl font-extrabold">
            Explore CREATOV
          </h2>
          <ul className="mt-5 divide-y divide-border border-t border-border">
            {[...nav, { to: "/faq", label: "Frequently Asked Questions" }].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: true }}
                  className="group flex min-h-12 items-center justify-between gap-3 py-3 text-sm font-semibold transition-colors hover:text-primary"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav
          aria-labelledby="sitemap-services-heading"
          className="min-w-0 border border-border bg-paper p-5 sm:p-7"
        >
          <p className="label-mono text-primary" aria-hidden>
            02
          </p>
          <h2 id="sitemap-services-heading" className="mt-3 text-2xl font-extrabold">
            Our Services
          </h2>
          <ul className="mt-5 divide-y divide-border border-t border-border">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="group flex min-h-12 items-center justify-between gap-3 py-3 text-sm font-semibold transition-colors hover:text-primary"
                >
                  <span>{service.t}</span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav
          aria-labelledby="sitemap-information-heading"
          className="min-w-0 border border-border bg-paper p-5 sm:p-7"
        >
          <p className="label-mono text-primary" aria-hidden>
            03
          </p>
          <h2 id="sitemap-information-heading" className="mt-3 text-2xl font-extrabold">
            Useful Information
          </h2>
          <ul className="mt-5 divide-y divide-border border-t border-border">
            {policyLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="group flex min-h-12 items-center justify-between gap-3 py-3 text-sm font-semibold transition-colors hover:text-primary"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Not sure which service fits your project? Tell us what you have in mind.
          </p>
          <CtaLink to="/contact" variant="outline" className="mt-5">
            Speak to Our Team
          </CtaLink>
        </nav>
      </section>
    </>
  );
}
