import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { TransitionLink as Link } from "@/components/site/TransitionLink";
import {
  aboutLinks,
  isNavigationGroupActive,
  primaryNavigation,
  serviceLinks,
  type NavigationGroupId,
} from "@/lib/navigation";
import { cn } from "@/lib/utils";

const navItemClass =
  "relative inline-flex h-full min-h-12 items-center justify-center gap-1.5 whitespace-nowrap px-1.5 font-sans text-[14px] leading-none font-bold tracking-[0.005em] text-foreground transition-colors duration-200 hover:text-primary focus-visible:outline-offset-[-3px] after:absolute after:inset-x-1.5 after:bottom-4 after:h-0.5 after:origin-left after:scale-x-0 after:bg-signal after:transition-transform after:duration-200 hover:after:scale-x-100 data-[active=true]:text-primary data-[active=true]:after:scale-x-100 data-[open=true]:text-primary data-[open=true]:after:scale-x-100 xl:px-2 xl:after:inset-x-2";

/** Ordinary navigation links with two accessible, hover-enhanced disclosures. */
export function DesktopNavigation() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState<NavigationGroupId | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const triggers = useRef<Record<NavigationGroupId, HTMLButtonElement | null>>({
    about: null,
    services: null,
  });
  const panels = useRef<Record<NavigationGroupId, HTMLDivElement | null>>({
    about: null,
    services: null,
  });
  const closeTimer = useRef<number | null>(null);
  const pendingFocus = useRef<"first" | "last" | null>(null);
  const openingSource = useRef<"hover" | "activation" | null>(null);
  const currentOpen = useRef<NavigationGroupId | null>(null);
  const instanceId = useId();

  const cancelClose = useCallback(() => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  // Pointer entry and click can arrive before React commits a hover render.
  const changeOpen = useCallback(
    (group: NavigationGroupId | null, source: "hover" | "activation" | null = null) => {
      currentOpen.current = group;
      openingSource.current = group ? source : null;
      setOpen(group);
    },
    [],
  );

  const closeMenu = useCallback(() => {
    cancelClose();
    pendingFocus.current = null;
    changeOpen(null);
  }, [cancelClose, changeOpen]);

  function scheduleClose(group: NavigationGroupId) {
    cancelClose();
    closeTimer.current = window.setTimeout(() => {
      closeTimer.current = null;
      // Keyboard users can continue through a panel while the mouse is elsewhere.
      if (panels.current[group]?.contains(document.activeElement)) return;
      if (currentOpen.current === group) changeOpen(null);
    }, 150);
  }

  const focusPanelLink = useCallback((group: NavigationGroupId, edge: "first" | "last") => {
    const links = panels.current[group]?.querySelectorAll<HTMLAnchorElement>("a[href]");
    const target = edge === "last" ? links?.[links.length - 1] : links?.[0];
    target?.focus();
  }, []);

  function handleTriggerKeyDown(event: KeyboardEvent<HTMLButtonElement>, group: NavigationGroupId) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    cancelClose();
    const edge = event.key === "ArrowUp" ? "last" : "first";
    if (open === group) {
      changeOpen(group, "activation");
      focusPanelLink(group, edge);
    } else {
      pendingFocus.current = edge;
      changeOpen(group, "activation");
    }
  }

  useEffect(() => {
    if (open && pendingFocus.current) {
      focusPanelLink(open, pendingFocus.current);
      pendingFocus.current = null;
    }
  }, [open, focusPanelLink]);

  useEffect(() => {
    if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    closeTimer.current = null;
    pendingFocus.current = null;
    changeOpen(null);
  }, [pathname, changeOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (desktop.matches) return;
      if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
      changeOpen(null);
    };
    desktop.addEventListener("change", onChange);
    return () => {
      desktop.removeEventListener("change", onChange);
      if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    };
  }, [changeOpen]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !navRef.current?.contains(event.target)) closeMenu();
    };
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      const trigger = triggers.current[open];
      closeMenu();
      trigger?.focus({ preventScroll: true });
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, closeMenu]);

  return (
    <nav
      ref={navRef}
      aria-label="Main"
      data-desktop-navigation
      className="static hidden self-stretch lg:flex"
    >
      <ul className="flex items-stretch gap-1 xl:gap-2 2xl:gap-3">
        {primaryNavigation.map((item) => {
          if (item.type === "link") {
            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <li key={item.to} className="flex items-stretch">
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  data-active={active}
                  onClick={closeMenu}
                  onPointerEnter={(event) => {
                    if (event.pointerType === "mouse") closeMenu();
                  }}
                  className={navItemClass}
                >
                  {item.label}
                </Link>
              </li>
            );
          }

          const group = item.id;
          const expanded = open === group;
          const triggerId = `${instanceId}-${group}-trigger`;
          const panelId = `${instanceId}-${group}-panel`;
          return (
            <li
              key={group}
              data-navigation-group={group}
              className={cn("flex items-stretch", group === "about" ? "relative" : "static")}
              onPointerEnter={(event) => {
                if (event.pointerType !== "mouse") return;
                cancelClose();
                pendingFocus.current = null;
                if (currentOpen.current !== group) changeOpen(group, "hover");
              }}
              onPointerLeave={(event) => {
                if (event.pointerType === "mouse") scheduleClose(group);
              }}
              onFocus={cancelClose}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) closeMenu();
              }}
            >
              <button
                ref={(element) => {
                  triggers.current[group] = element;
                }}
                id={triggerId}
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                data-active={isNavigationGroupActive(group, pathname)}
                data-open={expanded}
                onClick={(event) => {
                  cancelClose();
                  pendingFocus.current = null;
                  // Pointer entry precedes click: keep that first activation open.
                  if (
                    event.detail > 0 &&
                    currentOpen.current === group &&
                    openingSource.current === "hover"
                  ) {
                    changeOpen(group, "activation");
                    return;
                  }
                  changeOpen(currentOpen.current === group ? null : group, "activation");
                }}
                onKeyDown={(event) => handleTriggerKeyDown(event, group)}
                className={navItemClass}
              >
                {item.label}
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 shrink-0 transition-transform duration-200",
                    expanded && "rotate-180",
                  )}
                  aria-hidden
                />
              </button>

              {group === "about" && (
                <div
                  ref={(element) => {
                    panels.current.about = element;
                  }}
                  id={panelId}
                  aria-labelledby={triggerId}
                  hidden={!expanded}
                  inert={!expanded}
                  data-navigation-panel="about"
                  className="absolute top-full -left-4 z-50 max-h-[calc(100dvh-5rem)] w-[23rem] overflow-y-auto border border-border border-t-signal bg-background p-3 shadow-xl shadow-ink/10 animate-in fade-in duration-150 motion-reduce:animate-none"
                  onPointerEnter={cancelClose}
                >
                  <p className="label-mono px-3 pt-2 pb-3 text-[0.6rem] text-muted-foreground">
                    The people. The process. The purpose.
                  </p>
                  <ul className="divide-y divide-border">
                    {aboutLinks.map((link) => (
                      <li key={link.to}>
                        <Link
                          to={link.to}
                          activeOptions={{ exact: true }}
                          onClick={closeMenu}
                          data-active={pathname === link.to}
                          className="group flex min-h-20 items-start gap-4 px-3 py-4 transition-colors hover:bg-paper data-[active=true]:bg-paper"
                        >
                          <span className="min-w-0 flex-1">
                            <span className="block font-display text-[15px] leading-snug font-bold text-primary transition-colors group-hover:text-ink">
                              {link.label}
                            </span>
                            <span className="mt-1 block text-[13px] leading-relaxed text-muted-foreground">
                              {link.description}
                            </span>
                          </span>
                          <ArrowUpRight
                            className="mt-0.5 h-4 w-4 shrink-0 text-signal transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            aria-hidden
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {group === "services" && (
                <div
                  ref={(element) => {
                    panels.current.services = element;
                  }}
                  id={panelId}
                  aria-labelledby={triggerId}
                  hidden={!expanded}
                  inert={!expanded}
                  data-navigation-panel="services"
                  className="absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-5rem)] overflow-y-auto border-y border-border bg-background shadow-2xl shadow-ink/10 animate-in fade-in duration-150 motion-reduce:animate-none"
                  onPointerEnter={cancelClose}
                >
                  <div className="site-container-wide grid grid-cols-[minmax(13rem,0.8fr)_minmax(0,2.6fr)] gap-7 py-7 xl:gap-10 xl:py-8">
                    <div className="relative flex min-w-0 flex-col overflow-hidden bg-ink p-6 text-ink-foreground xl:p-7">
                      <div
                        className="blueprint-grid-dark pointer-events-none absolute inset-0 opacity-40"
                        aria-hidden
                      />
                      <div className="relative flex h-full flex-col">
                        <p className="label-mono text-[0.6rem] text-ink-muted">
                          One coordinated team
                        </p>
                        <p className="mt-5 max-w-[13rem] font-display text-[clamp(1.45rem,2.2vw,1.85rem)] leading-[1.15] font-bold tracking-tight">
                          From concept
                          <br />
                          to completion.
                        </p>
                        <span className="mt-5 h-0.5 w-9 bg-signal" aria-hidden />
                        <p className="mt-4 text-[13px] leading-relaxed text-ink-muted">
                          Design, engineering and practical guidance for every stage of your
                          project.
                        </p>
                        <Link
                          to="/services"
                          activeOptions={{ exact: true }}
                          onClick={closeMenu}
                          className="group mt-auto flex min-h-11 items-center justify-between gap-3 border-t border-ink-line pt-5 text-[13px] leading-snug font-bold text-ink-foreground transition-colors hover:text-white"
                        >
                          Explore all services{" "}
                          <ArrowUpRight
                            className="h-4 w-4 shrink-0 text-signal transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            aria-hidden
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="min-w-0">
                      <div className="mb-2 flex items-center justify-between gap-4 border-b border-border pb-3">
                        <p className="label-mono text-[0.62rem] text-muted-foreground">
                          Our expertise
                        </p>
                        <span className="text-[12px] leading-snug text-muted-foreground">
                          09 specialist services
                        </span>
                      </div>
                      <ul className="grid grid-cols-3 gap-x-3 xl:gap-x-5">
                        {serviceLinks.map((link) => (
                          <li key={link.to} className="min-w-0 border-b border-border">
                            <Link
                              to={link.to}
                              activeOptions={{ exact: true }}
                              onClick={closeMenu}
                              data-active={pathname === link.to}
                              className="group flex h-full min-h-27 min-w-0 gap-2.5 px-2 py-4 transition-colors hover:bg-paper data-[active=true]:bg-paper xl:gap-3"
                            >
                              <span
                                className="label-mono mt-0.5 shrink-0 text-[0.6rem] text-primary"
                                aria-hidden
                              >
                                {link.number}
                              </span>
                              <span className="min-w-0 flex-1">
                                <span className="block font-display text-[14px] leading-snug font-bold text-primary transition-colors group-hover:text-ink xl:text-[15px]">
                                  {link.label}
                                </span>
                                <span className="mt-1.5 block text-[12px] leading-[1.55] text-muted-foreground line-clamp-2 xl:text-[13px]">
                                  {link.description}
                                </span>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
