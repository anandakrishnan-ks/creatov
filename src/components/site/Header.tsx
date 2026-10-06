import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { nav, contact } from "@/lib/site";
import { logoUrl } from "@/lib/images";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 border-b transition-all duration-300", scrolled ? "border-border bg-background/95 backdrop-blur" : "border-transparent bg-background")}>
      <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-6 px-5 md:px-10">
        <Link to="/" className="shrink-0 py-3" aria-label="CREATOV Engineering Consultancy — home">
          <img src={logoUrl} alt="CREATOV Engineering Consultancy Pvt. Ltd." className={cn("w-auto transition-all duration-300", scrolled ? "h-11 md:h-12" : "h-12 md:h-16")} />
        </Link>
        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-7">
            {nav.slice(1).map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="label-mono relative py-2 text-[0.68rem] text-foreground/75 transition-colors hover:text-primary data-[status=active]:text-primary after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-signal after:transition-transform hover:after:scale-x-100 data-[status=active]:after:scale-x-100">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a href={`tel:${contact.phones[0]}`} className="flex h-11 w-11 items-center justify-center border border-border xl:hidden" aria-label="Call CREATOV">
            <Phone className="h-4 w-4" />
          </a>
          <Link to="/contact" className="hidden bg-primary px-5 py-3.5 text-[0.68rem] font-bold tracking-[0.18em] text-primary-foreground uppercase transition-colors hover:bg-signal sm:inline-flex">
            Start Your Project
          </Link>
          <button onClick={() => setOpen(true)} className="flex h-11 w-11 items-center justify-center border border-border xl:hidden" aria-label="Open menu" aria-expanded={open}>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className={cn("fixed inset-0 z-50 flex flex-col bg-ink text-ink-foreground transition-opacity duration-300 xl:hidden", open ? "opacity-100" : "pointer-events-none opacity-0")} role="dialog" aria-modal="true" aria-label="Menu">
        <div className="blueprint-grid-dark absolute inset-0" aria-hidden />
        <div className="relative flex items-center justify-between px-5 py-5">
          <span className="label-mono text-ink-muted">Menu</span>
          <button onClick={() => setOpen(false)} className="flex h-11 w-11 items-center justify-center border border-ink-line" aria-label="Close menu"><X className="h-5 w-5" /></button>
        </div>
        <ul className="relative flex-1 overflow-y-auto px-5">
          {nav.map((n, i) => (
            <li key={n.to} className="border-b border-ink-line">
              <Link to={n.to} onClick={() => setOpen(false)} className="flex items-baseline gap-4 py-4 font-display text-3xl font-extrabold">
                <span className="label-mono text-signal">0{i + 1}</span>{n.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="relative space-y-1 px-5 py-6 text-sm text-ink-muted">
          <Link to="/contact" onClick={() => setOpen(false)} className="mb-4 flex justify-center bg-signal py-4 text-xs font-bold tracking-[0.18em] text-ink-foreground uppercase">Start Your Project</Link>
          {contact.phones.map((p) => <a key={p} href={`tel:${p}`} className="block">{p}</a>)}
          <a href={`mailto:${contact.email}`} className="block">{contact.email}</a>
        </div>
      </div>
    </header>
  );
}
