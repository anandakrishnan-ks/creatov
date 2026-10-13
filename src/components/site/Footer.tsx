import { TransitionLink as Link } from "@/components/site/TransitionLink";
import { contact, services, tagline } from "@/lib/site";
import { logoAltUrl } from "@/lib/images";
const links = [
  { to: "/", l: "Home" }, { to: "/about", l: "About Us" }, { to: "/services", l: "Services" }, { to: "/projects", l: "Projects" },
  { to: "/process", l: "Our Process" }, { to: "/why-creatov", l: "Why CREATOV" }, { to: "/insights", l: "Insights" }, { to: "/contact", l: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative bg-ink text-ink-foreground">
      <div className="blueprint-grid-dark absolute inset-0 opacity-60" aria-hidden />
      <div className="site-container relative pt-16 pb-8 sm:pt-20 sm:pb-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-12">
          <div>
            <div className="inline-block max-w-full bg-ink-foreground p-3 sm:p-4">
              <img src={logoAltUrl} alt="CREATOV Engineering Consultancy Pvt. Ltd." className="h-11 w-auto sm:h-14" loading="lazy" />
            </div>
            <p className="mt-6 font-display text-2xl font-extrabold sm:mt-8 sm:text-3xl">Design. Build. Deliver.</p>
            <p className="mt-2 text-ink-muted">{tagline}</p>
          </div>
          <FooterCol title="Navigate">
            {links.map((x) => <li key={x.to}><Link to={x.to} className="hover:text-ink-foreground">{x.l}</Link></li>)}
          </FooterCol>
          <FooterCol title="Services">
            {services.map((service) => <li key={service.slug}><Link to="/services/$slug" params={{ slug: service.slug }} className="hover:text-ink-foreground">{service.t}</Link></li>)}
          </FooterCol>
          <FooterCol title="Contact">
            {contact.phones.map((p) => <li key={p}><a href={`tel:${p}`} className="hover:text-ink-foreground">{p}</a></li>)}
            <li><a href={`mailto:${contact.email}`} className="break-all hover:text-ink-foreground">{contact.email}</a></li>
            <li>{contact.location}</li>
          </FooterCol>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-ink-line pt-6 text-xs leading-relaxed text-ink-muted sm:mt-16 md:flex-row">
          <p>© {new Date().getFullYear()} {contact.company}</p>
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
      <ul className="mt-6 space-y-2.5 text-sm text-ink-muted">{children}</ul>
    </div>
  );
}
