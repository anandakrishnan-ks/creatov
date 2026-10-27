import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { seo } from "@/lib/seo";
import { contact } from "@/lib/site";
import { images } from "@/lib/images";
import { ContactForm } from "@/components/site/ContactForm";
import { OfficeLocations } from "@/components/site/OfficeLocations";
import { PageHero, Reveal } from "@/components/site/ui";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo(
      "Contact CREATOV | Kochi & Kollam Offices",
      "Visit CREATOV's main office in Edappally, Kochi or our office in Thattamala, Kollam. Call 8075607280 or email creatov.ec24@gmail.com to discuss your project.",
    ),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        image={images.contactBanner}
        imagePositionMobile="75% 50%"
        title="Planning to Build? Let's Talk Before You Start."
        titleClassName="max-w-4xl text-[clamp(2.5rem,7vw,3.75rem)] leading-[0.98]"
        intro="Have a plot, a building idea, a renovation or a commercial project in mind? Tell us where you are in the process. We’ll help you take the next step."
      />
      <section className="blueprint-grid">
        <div className="site-container section-space-compact">
          <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-8">
            <div className="min-w-0 border border-border bg-background p-5 sm:p-7">
              <div className="border-b border-border pb-5">
                <p className="label-mono text-muted-foreground">Speak to our team</p>
                <div className="mt-2 flex items-start gap-3">
                  <Phone className="mt-3.5 h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                  <div className="flex flex-wrap gap-x-6">
                    {contact.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone}`}
                        className="inline-flex min-h-11 items-center font-semibold hover:text-primary"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex min-h-11 w-fit max-w-full items-center gap-3 text-sm font-semibold hover:text-primary"
                >
                  <Mail className="h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                  <span className="break-all">{contact.email}</span>
                </a>
              </div>
              <div className="pt-5">
                <h2 className="label-mono mb-5 text-muted-foreground">Our Offices</h2>
                <OfficeLocations />
              </div>
            </div>
            <Reveal delay={100} className="min-w-0 lg:sticky lg:top-28 lg:self-start">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
