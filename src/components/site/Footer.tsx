import { Link } from "@tanstack/react-router";
import { contact } from "@/lib/site";
import { logoAltUrl } from "@/lib/images";
const links = [
  { to: "/", l: "Home" }, { to: "/about", l: "About Us" }, { to: "/services", l: "Services" }, { to: "/projects", l: "Projects" },
  { to: "/process", l: "Our Process" }, { to: "/insights", l: "Insights" }, { to: "/contact", l: "Contact" },
];
const svc = ["Architectural Design", "Structural Design", "Construction Consultancy", "Estimation & BOQ", "3D Design", "PMC", "MEP", "Survey"];

export function Footer() {
  return (
    <footer className="relative bg-ink text-ink-foreground">
      <div className="blueprint-grid-dark absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-10 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="inline-block bg-ink-foreground p-4">
              <img src={logoAltUrl} alt="CREATOV Engineering Consultancy Pvt. Ltd." className="h-14 w-auto" loading="lazy" />
            </div>
            <p className="mt-8 font-display text-3xl font-extrabold">Design. Build. Deliver.</p>
            <p className="mt-2 text-ink-muted">From Concept to Completion…</p>
          </div>
          <FooterCol title="Navigate">
            {links.map((x) => <li key={x.to}><Link to={x.to} className="hover:text-ink-foreground">{x.l}</Link></li>)}
          </FooterCol>
          <FooterCol title="Services">
            {svc.map((s) => <li key={s}><Link to="/services" className="hover:text-ink-foreground">{s}</Link></li>)}
          </FooterCol>
          <FooterCol title="Contact">
            {contact.phones.map((p) => <li key={p}><a href={`tel:${p}`} className="hover:text-ink-foreground">{p}</a></li>)}
            <li><a href={`mailto:${contact.email}`} className="break-all hover:text-ink-foreground">{contact.email}</a></li>
            <li>{contact.location}</li>
          </FooterCol>
        </div>
        <div className="mt-20 flex flex-col justify-between gap-3 border-t border-ink-line pt-6 text-xs text-ink-muted md:flex-row">
          <p>© {new Date().getFullYear()} {contact.company}</p>
          <p className="label-mono">Builders · Architecture · Structural</p>
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
