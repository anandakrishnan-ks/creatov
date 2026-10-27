import { Mail, Phone } from "lucide-react";
import { contact } from "@/lib/site";
import { OfficeLocations } from "@/components/site/OfficeLocations";
import { CtaLink, Eyebrow, Reveal } from "@/components/site/ui";

export function HomeContact() {
  return (
    <section id="contact" aria-labelledby="home-contact-heading" className="bg-paper">
      <div className="site-container py-10 sm:py-12">
        <div className="grid min-w-0 border border-border lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="min-w-0 bg-ink p-6 text-ink-foreground sm:p-8 lg:p-9">
            <Reveal>
              <Eyebrow dark>Contact Us</Eyebrow>
              <h2
                id="home-contact-heading"
                className="mt-4 max-w-lg text-[clamp(1.875rem,3.2vw,2.5rem)] leading-[1.1] font-extrabold tracking-tight text-balance"
              >
                Your next project starts with a conversation.
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted sm:text-base">
                Meet us in Kochi or Kollam. Share your idea, and let's plan the way forward.
              </p>
              <CtaLink to="/contact" variant="light" className="mt-4">
                Discuss Your Project
              </CtaLink>
            </Reveal>
            <Reveal delay={100} className="mt-4 border-t border-ink-line pt-2 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="mt-3.5 h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                <div className="flex min-w-0 flex-wrap gap-x-5">
                  {contact.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="inline-flex min-h-11 items-center font-semibold transition-colors hover:text-ink-muted"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <a
                href={`mailto:${contact.email}`}
                className="flex min-h-11 w-fit max-w-full items-center gap-3 font-semibold transition-colors hover:text-ink-muted"
              >
                <Mail className="h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                <span className="break-all">{contact.email}</span>
              </a>
            </Reveal>
          </div>
          <Reveal delay={100} className="min-w-0 bg-background p-6 sm:p-8 lg:p-9">
            <div className="mb-5 flex items-center justify-between gap-3 border-b border-border pb-4">
              <h3 className="label-mono text-muted-foreground">Visit Our Offices</h3>
              <span className="text-xs text-muted-foreground">Kerala, India</span>
            </div>
            <OfficeLocations />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
