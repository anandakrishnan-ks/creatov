import { ArrowUpRight } from "lucide-react";
import { TransitionLink as Link } from "@/components/site/TransitionLink";
import { CtaLink, Eyebrow } from "@/components/site/ui";

export function NotFoundPage() {
  return (
    <section className="relative overflow-hidden bg-ink pt-28 pb-12 text-ink-foreground sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-20">
      <div
        className="blueprint-grid-dark pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      />
      <div className="site-container relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="min-w-0">
          <Eyebrow dark>404 · Page not found</Eyebrow>
          <h1 className="mt-5 max-w-xl text-[clamp(2.5rem,7vw,5rem)] leading-[1.02] font-extrabold text-balance">
            This page is off the plan.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
            The link may have changed, or the address may be incomplete. Let’s get you back to the
            right place.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <CtaLink to="/" variant="light">
              Back to Home
            </CtaLink>
            <CtaLink to="/services" variant="ghost-light">
              Explore Services
            </CtaLink>
          </div>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 border-t border-ink-line pt-5 text-sm">
            <Link
              to="/faq"
              className="inline-flex min-h-11 items-center gap-2 text-ink-foreground hover:underline"
            >
              Read our FAQs <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center gap-2 text-ink-foreground hover:underline"
            >
              Contact our team <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </div>
        <div
          className="relative hidden overflow-hidden border border-ink-line bg-ink p-5 sm:block sm:p-7"
          aria-hidden="true"
        >
          <svg viewBox="0 0 480 360" className="h-auto w-full" fill="none" focusable="false">
            <path
              d="M38 32h164v102h76V32h164v294H38V32Z"
              stroke="currentColor"
              strokeOpacity=".32"
              strokeWidth="2"
            />
            <path
              d="M38 134h88v92H38M442 134h-88v92h88M202 226v100M278 226v100M126 226h76m76 0h76M126 134h28m172 0h28"
              stroke="currentColor"
              strokeOpacity=".24"
              strokeWidth="1.5"
            />
            <path
              d="M202 134h76m-76 92h76"
              stroke="#ef9a8c"
              strokeWidth="2"
              strokeDasharray="5 5"
            />
            <path
              d="M19 12v10M14 17h10M451 340v10m-5-5h10M19 340v10m-5-5h10M451 12v10m-5-5h10"
              stroke="currentColor"
              strokeOpacity=".5"
            />
            <text
              x="240"
              y="204"
              textAnchor="middle"
              fill="currentColor"
              fontFamily="Archivo, sans-serif"
              fontSize="88"
              fontWeight="800"
              letterSpacing="-5"
            >
              404
            </text>
          </svg>
          <p className="label-mono mt-2 text-center text-ink-muted">A new direction starts here</p>
        </div>
      </div>
    </section>
  );
}
