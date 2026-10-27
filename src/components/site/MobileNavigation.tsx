import { useEffect, useId, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { TransitionLink as Link } from "@/components/site/TransitionLink";
import { logoUrl } from "@/lib/images";
import {
  aboutLinks,
  isNavigationGroupActive,
  primaryNavigation,
  serviceLinks,
  type NavigationGroupId,
} from "@/lib/navigation";
import { contact } from "@/lib/site";
import { cn } from "@/lib/utils";

const serviceMenuLinks = [{ label: "All Services", to: "/services" }, ...serviceLinks];

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<NavigationGroupId | null>(null);
  const pathname = useRouterState({
    select: (state) => state.location.pathname.replace(/\/+$/, "") || "/",
  });
  const menuId = useId();

  const close = () => setOpen(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    closeOnDesktop();
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, [open]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="flex h-11 w-11 shrink-0 items-center justify-center border border-border text-primary transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-ink lg:hidden" />
        <Dialog.Content className="fixed inset-0 z-[70] flex h-[100dvh] max-h-[100dvh] min-w-0 flex-col bg-ink pb-[env(safe-area-inset-bottom)] text-ink-foreground outline-none lg:hidden">
          <Dialog.Title className="sr-only">Menu</Dialog.Title>
          <Dialog.Description className="sr-only">
            Explore CREATOV. Expand About Us or Services to see their pages.
          </Dialog.Description>
          <div className="flex shrink-0 items-center justify-between gap-4 border-b border-ink-line px-4 py-3 sm:px-6">
            <Link
              to="/"
              onClick={close}
              aria-label="CREATOV Engineering Consultancy — home"
              className="inline-flex min-h-11 items-center bg-background px-2.5 py-1.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-foreground"
            >
              <img
                src={logoUrl}
                alt="CREATOV Engineering Consultancy Pvt. Ltd."
                className="h-8 w-auto"
              />
            </Link>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close menu"
                className="flex h-11 w-11 shrink-0 items-center justify-center border border-ink-line text-ink-foreground transition-colors hover:border-ink-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-foreground"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-4 sm:px-6 sm:pb-6">
            <nav aria-label="Mobile main">
              <ul className="divide-y divide-ink-line">
                {primaryNavigation.map((item) => {
                  if (item.type === "link") {
                    const active = pathname === item.to;
                    return (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          onClick={close}
                          activeOptions={{ exact: true }}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "flex min-h-14 items-center gap-3 py-3 font-display text-[1.375rem] leading-tight font-bold focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink-foreground",
                            active
                              ? "text-ink-foreground"
                              : "text-ink-muted hover:text-ink-foreground",
                          )}
                        >
                          {active && (
                            <span className="h-1.5 w-1.5 shrink-0 bg-signal" aria-hidden="true" />
                          )}
                          {item.label}
                        </Link>
                      </li>
                    );
                  }

                  const expanded = expandedGroup === item.id;
                  const active = isNavigationGroupActive(item.id, pathname);
                  const panelId = `${menuId}-${item.id}`;
                  const links = item.id === "about" ? aboutLinks : serviceMenuLinks;
                  return (
                    <li key={item.id}>
                      <button
                        id={`${panelId}-trigger`}
                        type="button"
                        aria-expanded={expanded}
                        aria-controls={panelId}
                        onClick={() => setExpandedGroup(expanded ? null : item.id)}
                        className={cn(
                          "flex min-h-14 w-full items-center justify-between gap-4 py-3 text-left font-display text-[1.375rem] leading-tight font-bold focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink-foreground",
                          active || expanded
                            ? "text-ink-foreground"
                            : "text-ink-muted hover:text-ink-foreground",
                        )}
                      >
                        <span className="inline-flex items-center gap-3">
                          {active && (
                            <span className="h-1.5 w-1.5 shrink-0 bg-signal" aria-hidden="true" />
                          )}
                          {item.label}
                        </span>
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 shrink-0 transition-transform duration-200",
                            expanded && "rotate-180 text-signal",
                          )}
                          aria-hidden="true"
                        />
                      </button>
                      <ul
                        id={panelId}
                        aria-labelledby={`${panelId}-trigger`}
                        hidden={!expanded}
                        className="mb-3 ml-1 border-l border-ink-line pl-4 sm:pl-5"
                      >
                        {links.map((entry) => {
                          const current = pathname === entry.to;
                          return (
                            <li key={entry.to}>
                              <Link
                                to={entry.to}
                                onClick={close}
                                activeOptions={{ exact: true }}
                                aria-current={current ? "page" : undefined}
                                className={cn(
                                  "flex min-h-11 items-center py-2 text-[0.9375rem] leading-snug font-medium focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink-foreground",
                                  current
                                    ? "font-semibold text-ink-foreground underline decoration-signal underline-offset-4"
                                    : "text-ink-muted hover:text-ink-foreground",
                                )}
                              >
                                {entry.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="mt-5 border-t border-ink-line pt-4">
              <Link
                to="/contact"
                onClick={close}
                className="flex min-h-11 items-center justify-center gap-3 bg-signal px-4 py-3 text-center text-xs font-bold tracking-[0.12em] text-white uppercase transition-colors hover:bg-ink-foreground hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-foreground"
              >
                Start Your Project
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
              <div className="mt-2 flex flex-wrap gap-x-5 text-sm">
                {contact.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    onClick={close}
                    aria-label={`Call CREATOV on ${phone}`}
                    className="inline-flex min-h-11 items-center font-medium text-ink-muted hover:text-ink-foreground"
                  >
                    {phone}
                  </a>
                ))}
              </div>
              <a
                href={`mailto:${contact.email}`}
                onClick={close}
                className="inline-flex min-h-11 max-w-full items-center break-all text-sm font-medium text-ink-muted hover:text-ink-foreground"
              >
                {contact.email}
              </a>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
