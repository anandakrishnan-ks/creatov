import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { TransitionLink as Link } from "@/components/site/TransitionLink";
import { CtaLink, PageHero } from "@/components/site/ui";
import { contact, offices } from "@/lib/site";
import {
  policyLinks,
  policyUpdated,
  policyUpdatedISO,
  type PolicyDocument,
  type PolicyReference,
} from "@/lib/policies";

function ReferenceLink({ reference }: { reference: PolicyReference }) {
  const className =
    "inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary";
  if (reference.to.startsWith("/")) {
    const [path, hash] = reference.to.split("#");
    return (
      <Link to={path ?? "/"} {...(hash ? { hash } : {})} className={className}>
        {reference.label}
        <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      </Link>
    );
  }
  return (
    <a href={reference.to} target="_blank" rel="noopener noreferrer" className={className}>
      {reference.label}
      <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function PolicyLayout({ policy }: { policy: PolicyDocument }) {
  const emailHref = `mailto:${contact.email}${policy.emailSubject ? `?subject=${encodeURIComponent(policy.emailSubject)}` : ""}`;
  return (
    <>
      <PageHero
        eyebrow={policy.title}
        title={policy.title}
        titleClassName="max-w-4xl text-[clamp(2.5rem,7vw,3.75rem)] leading-[0.98]"
        intro={policy.intro}
      />
      <div className="site-container grid gap-7 py-8 sm:py-10 lg:grid-cols-[13.5rem_minmax(0,1fr)] lg:gap-12">
        <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs leading-relaxed text-muted-foreground">
            Last updated{" "}
            <time dateTime={policyUpdatedISO} className="font-semibold text-foreground">
              {policyUpdated}
            </time>
          </p>
          <nav aria-label="On this page" className="mt-4 border-y border-border py-3">
            <p className="label-mono mb-1 text-muted-foreground">On this page</p>
            <ol className="grid sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-1">
              {policy.sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="group flex min-h-11 items-center gap-3 py-2 text-sm leading-snug font-medium transition-colors hover:text-primary"
                  >
                    <span
                      className="text-xs text-muted-foreground group-hover:text-signal"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>
        <article aria-label={policy.title} className="min-w-0 max-w-[65ch]">
          {policy.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-title`}
              className="scroll-mt-28 border-b border-border py-6 first:pt-0 sm:py-7"
            >
              <h2
                id={`${section.id}-title`}
                className="text-xl leading-tight font-bold tracking-tight sm:text-2xl"
              >
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-base leading-7 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-3 space-y-2 pl-5 text-base leading-7 text-muted-foreground marker:text-signal list-disc">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {section.table && (
                <div className="mt-4 overflow-x-auto border border-border">
                  <table className="w-full table-fixed text-left text-sm leading-relaxed">
                    <caption className="sr-only">{section.table.caption}</caption>
                    <thead className="border-b border-border bg-paper">
                      <tr>
                        {section.table.headings.map((heading) => (
                          <th key={heading} scope="col" className="p-3 font-semibold sm:p-4">
                            {heading}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row) => (
                        <tr key={row[0]}>
                          {row.map((cell, index) =>
                            index === 0 ? (
                              <th
                                key={cell}
                                scope="row"
                                className="break-words p-3 align-top font-medium text-foreground sm:p-4"
                              >
                                {cell}
                              </th>
                            ) : (
                              <td key={cell} className="p-3 align-top text-muted-foreground sm:p-4">
                                {cell}
                              </td>
                            ),
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {section.links && (
                <ul className="mt-2 flex flex-col items-start">
                  {section.links.map((reference) => (
                    <li key={reference.to}>
                      <ReferenceLink reference={reference} />
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <section
            aria-labelledby="policy-contact-title"
            className="mt-7 border border-border bg-paper p-5 sm:p-6"
          >
            <h2 id="policy-contact-title" className="text-xl font-bold">
              {policy.contactHeading ?? "Questions about this page?"}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {policy.contactDescription ??
                "Speak to our team about this information or your next project."}
            </p>
            <p className="mt-4 text-sm font-semibold">{contact.company}</p>
            <div className="mt-1 flex flex-col items-start">
              <a
                href={emailHref}
                className="inline-flex min-h-11 max-w-full items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="break-all">{contact.email}</span>
              </a>
              <div className="flex items-start gap-2">
                <Phone className="mt-3.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <div className="flex flex-wrap gap-x-5">
                  {contact.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="inline-flex min-h-11 items-center text-sm font-semibold hover:text-primary"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-3 grid gap-4 border-t border-border pt-4 sm:grid-cols-2">
              {offices.map((office) => (
                <address
                  key={office.id}
                  className="text-xs leading-relaxed not-italic text-muted-foreground"
                >
                  <span className="mb-1 block font-bold text-foreground">
                    {office.name}
                    {office.primary ? " · Main Office" : ""}
                  </span>
                  {office.address}
                  {office.landmark && <span className="mt-1 block">{office.landmark}</span>}
                </address>
              ))}
            </div>
            <CtaLink to="/contact" variant="outline" className="mt-5">
              Contact Our Team
            </CtaLink>
          </section>
          <nav aria-label="Related website policies" className="mt-7">
            <h2 className="label-mono mb-1 text-muted-foreground">Related Policies</h2>
            <ul className="flex flex-wrap gap-x-5">
              {policyLinks
                .filter((link) => link.to !== policy.path)
                .map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="inline-flex min-h-11 items-center text-sm font-semibold text-primary hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </article>
      </div>
    </>
  );
}
