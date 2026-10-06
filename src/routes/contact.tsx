import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { contact } from "@/lib/site";
import { ContactForm } from "@/components/site/ContactForm";
import { Eyebrow, Reveal } from "@/components/site/ui";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact CREATOV | Start Your Project", "Planning to build? Talk to CREATOV Engineering Consultancy in Kollam, Kerala — call 8075607280 or email creatov.ec24@gmail.com."),
  component: Contact,
});

const qs = ["Have a plot?", "Have a building idea?", "Have an old building to renovate?", "Planning a commercial project?", "Not sure where to start?"];

function Contact() {
  return (
    <section className="blueprint-grid pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:px-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-6 text-5xl leading-[0.98] font-extrabold md:text-6xl">Planning to Build? Let's Talk Before You Start.</h1>
          <ul className="mt-10 space-y-3">
            {qs.map((q, i) => (
              <Reveal as="li" key={q} delay={i * 80} className="flex items-baseline gap-4 font-display text-xl font-bold">
                <span className="h-px w-6 shrink-0 translate-y-[-0.3em] bg-signal" />{q}
              </Reveal>
            ))}
          </ul>
          <dl className="mt-14 grid gap-6 border-t border-border pt-8 sm:grid-cols-2">
            <div className="sm:col-span-2"><dt className="label-mono text-muted-foreground">Company</dt><dd className="mt-1 font-semibold">{contact.company}</dd></div>
            <div><dt className="label-mono text-muted-foreground">Phone</dt><dd className="mt-1 space-y-1 font-semibold">{contact.phones.map((p) => <a key={p} href={`tel:${p}`} className="block hover:text-primary">{p}</a>)}</dd></div>
            <div><dt className="label-mono text-muted-foreground">Email</dt><dd className="mt-1 font-semibold"><a href={`mailto:${contact.email}`} className="break-all hover:text-primary">{contact.email}</a></dd></div>
            <div><dt className="label-mono text-muted-foreground">Location</dt><dd className="mt-1 font-semibold">{contact.location}</dd></div>
          </dl>
        </div>
        <Reveal delay={150}><ContactForm /></Reveal>
      </div>
    </section>
  );
}
