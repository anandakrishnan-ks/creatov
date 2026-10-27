import { TransitionLink as Link } from "@/components/site/TransitionLink";
import { contact, services, tagline } from "@/lib/site";
import { logoAltUrl } from "@/lib/images";
import { OfficeLocations } from "@/components/site/OfficeLocations";
import { policyLinks } from "@/lib/policy-links";
const links = [
  { to: "/", l: "Home" },
  { to: "/about", l: "About Us" },
  { to: "/services", l: "Services" },
  { to: "/projects", l: "Projects" },
  { to: "/process", l: "Our Process" },
  { to: "/why-creatov", l: "Why CREATOV" },
  { to: "/insights", l: "Insights" },
  { to: "/faq", l: "FAQs" },
  { to: "/contact", l: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative bg-ink text-ink-foreground">
      <div className="blueprint-grid-dark absolute inset-0 opacity-60" aria-hidden />
      <div className="site-container relative pt-10 pb-6 sm:pt-12 sm:pb-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr_1.25fr] lg:gap-9">
          <div>
            <div className="inline-block max-w-full bg-ink-foreground p-3 sm:p-4">
              <img
                src={logoAltUrl}
                alt="CREATOV Engineering Consultancy Pvt. Ltd."
                className="h-11 w-auto sm:h-14"
                loading="lazy"
              />
            </div>
            <p className="mt-5 font-display text-2xl font-extrabold sm:text-3xl">
              Design. Build. Deliver.
            </p>
            <p className="mt-2 text-ink-muted">{tagline}</p>
          </div>
          <FooterCol title="Navigate">
            {links.map((x) => (
              <li key={x.to}>
                <Link to={x.to} className="hover:text-ink-foreground">
                  {x.l}
                </Link>
              </li>
            ))}
          </FooterCol>
          <FooterCol title="Services">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="hover:text-ink-foreground"
                >
                  {service.t}
                </Link>
              </li>
            ))}
          </FooterCol>
          <FooterCol title="Contact">
            {contact.phones.map((p) => (
              <li key={p}>
                <a href={`tel:${p}`} className="hover:text-ink-foreground">
                  {p}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${contact.email}`} className="break-all hover:text-ink-foreground">
                {contact.email}
              </a>
            </li>
            <li className="pt-3">
              <OfficeLocations compact dark />
            </li>
          </FooterCol>
        </div>
        <nav aria-label="Legal and site information" className="mt-7 border-t border-ink-line pt-3">
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-ink-muted">
            {[...policyLinks, { to: "/sitemap", label: "Site Map" }].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: true }}
                  className="inline-flex min-h-11 items-center transition-colors hover:text-ink-foreground focus-visible:text-ink-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-2 flex flex-col justify-between gap-3 text-xs leading-relaxed text-ink-muted md:flex-row">
          <p>
            © {new Date().getFullYear()} {contact.company}
          </p>
          <p className="label-mono leading-relaxed">Builders · Architecture · Structural</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="label-mono text-signal">{title}</p>
      <ul className="mt-4 space-y-2 text-sm text-ink-muted">{children}</ul>
    </div>
  );
}
