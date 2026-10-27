import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { TransitionLink as Link } from "@/components/site/TransitionLink";
import { DesktopNavigation } from "@/components/site/DesktopNavigation";
import { MobileNavigation } from "@/components/site/MobileNavigation";
import { ScrollProgress } from "@/components/site/Parallax";
import { contact } from "@/lib/site";
import { logoUrl } from "@/lib/images";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-primary/15 bg-background transition-shadow duration-200",
        scrolled
          ? "shadow-[0_5px_24px_-12px_rgba(13,27,62,0.24)]"
          : "shadow-[0_1px_0_rgba(13,27,62,0.04)]",
      )}
    >
      <ScrollProgress className="pointer-events-none absolute inset-x-0 -bottom-px h-0.5 bg-signal" />
      <div className="site-container-wide flex min-h-16 items-center justify-between gap-3 sm:min-h-18 sm:gap-4 lg:min-h-20">
        <Link to="/" className="shrink-0 py-3" aria-label="CREATOV Engineering Consultancy — home">
          <img
            src={logoUrl}
            alt="CREATOV Engineering Consultancy Pvt. Ltd."
            className={cn(
              "w-auto transition-[height] duration-200",
              scrolled ? "h-9 sm:h-10 lg:h-11" : "h-10 sm:h-11 lg:h-12",
            )}
          />
        </Link>
        <DesktopNavigation />
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={`tel:${contact.phones[0]}`}
            className="flex h-11 w-11 items-center justify-center border border-primary/20 text-primary transition-colors hover:bg-paper lg:hidden"
            aria-label="Call CREATOV"
          >
            <Phone className="h-4 w-4" aria-hidden />
          </a>
          <Link
            to="/contact"
            className="hidden min-h-11 items-center justify-center bg-primary px-4 py-3 text-[0.6875rem] font-bold tracking-[0.08em] text-primary-foreground uppercase transition-colors hover:bg-ink sm:inline-flex xl:px-5"
          >
            Start Your Project
          </Link>
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
