import { ArrowUpRight, MapPin } from "lucide-react";
import { offices } from "@/lib/site";
import { cn } from "@/lib/utils";

export function OfficeLocations({
  compact = false,
  dark = false,
}: {
  compact?: boolean;
  dark?: boolean;
}) {
  return (
    <ol className={cn("min-w-0 divide-y", dark ? "divide-ink-line" : "divide-border")}>
      {offices.map((office, index) => (
        <li
          key={office.id}
          className={cn(
            "min-w-0 first:pt-0 last:pb-0",
            compact ? "py-4" : "grid grid-cols-[1.25rem_minmax(0,1fr)] gap-3 py-5 sm:gap-4 sm:py-6",
          )}
        >
          {!compact && (
            <span className="label-mono pt-1.5 text-signal" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <p
                className={cn(
                  "font-display font-bold tracking-tight",
                  compact ? "text-sm" : "text-xl sm:text-2xl",
                  dark && "text-ink-foreground",
                )}
              >
                {office.name}
              </p>
              {office.primary && (
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 px-2 py-1 text-[0.6rem] leading-none font-bold tracking-[0.09em] uppercase",
                    dark
                      ? "bg-ink-foreground/10 text-ink-foreground"
                      : "bg-primary text-primary-foreground",
                  )}
                >
                  <span className="h-1 w-1 bg-signal" aria-hidden="true" />
                  Main Office
                </span>
              )}
            </div>
            <address
              className={cn(
                "mt-2 text-sm leading-relaxed not-italic",
                dark ? "text-ink-muted" : "text-muted-foreground",
              )}
            >
              {office.address}
              {office.landmark && (
                <span className="mt-1 flex items-center gap-1.5 text-xs">
                  <MapPin className="h-3 w-3 shrink-0 text-signal" aria-hidden="true" />
                  {office.landmark}
                </span>
              )}
            </address>
            <a
              href={office.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Get directions to our ${office.city} office (opens in a new tab)`}
              className={cn(
                "group mt-1 inline-flex min-h-11 items-center gap-2 text-xs font-bold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4",
                dark ? "text-ink-foreground" : "text-primary",
              )}
            >
              Get directions
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </li>
      ))}
    </ol>
  );
}
