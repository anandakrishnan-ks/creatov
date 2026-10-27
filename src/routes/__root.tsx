import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  HeadContent,
  isNotFound,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { NotFoundPage } from "@/components/site/NotFoundPage";
import {
  pageTransitionEvent,
  TransitionLink as Link,
  type PageTransitionDetail,
} from "@/components/site/TransitionLink";
import { contact, tagline } from "@/lib/site";
import { notFoundSeo, seo } from "@/lib/seo";

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    // Error reporting removed
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-input bg-background px-4 py-2 text-sm font-medium text-foreground"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: ({ matches }) =>
    matches.some((match) => isNotFound(match.error))
      ? notFoundSeo()
      : seo(
          "CREATOV Engineering Consultancy",
          "Architectural design, structural engineering and construction consultancy in Kochi and Kollam, Kerala.",
        ),
  component: RootComponent,
  notFoundComponent: NotFoundPage,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => {
    // Keep the HTML fallback until React mounts the route's own metadata.
    document.head.querySelectorAll("[data-static-meta]").forEach((tag) => tag.remove());
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <HeadContent />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <BrickPageTransition pathname={pathname} />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <a
        href={`https://wa.me/91${contact.phones[0]}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 md:right-6 md:bottom-6 md:h-14 md:w-14"
        aria-label="Chat with us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
      </a>
    </QueryClientProvider>
  );
}

const masonryRows = [5, 6, 5, 6, 5, 6];
const initialLoaderDuration = 1000;
const routeTransitionDuration = 760;

export function BrickPageTransition({ pathname }: { pathname: string }) {
  const router = useRouter();
  const previousPath = useRef(pathname);
  const controlledPath = useRef<string | null>(null);
  const finishTimer = useRef<number | undefined>(undefined);
  const [transition, setTransition] = useState({
    active: true,
    id: 0,
    duration: initialLoaderDuration,
    message: "Preparing your experience",
  });

  const finish = useCallback(() => {
    setTransition((current) => ({ ...current, active: false }));
  }, []);

  const playTransition = useCallback(() => {
    window.clearTimeout(finishTimer.current);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }
    setTransition(({ id }) => ({
      active: true,
      id: id + 1,
      duration: routeTransitionDuration,
      message: "Building next page",
    }));
    finishTimer.current = window.setTimeout(finish, routeTransitionDuration);
  }, [finish]);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      if (preference.matches) {
        window.clearTimeout(finishTimer.current);
        finish();
      }
    };
    if (preference.matches) finish();
    else finishTimer.current = window.setTimeout(finish, initialLoaderDuration);
    preference.addEventListener("change", updatePreference);
    return () => {
      window.clearTimeout(finishTimer.current);
      preference.removeEventListener("change", updatePreference);
    };
  }, [finish]);

  useEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;
    if (controlledPath.current === pathname) {
      controlledPath.current = null;
      return;
    }
    playTransition();
  }, [pathname, playTransition]);

  useEffect(() => {
    const onNavigate = (event: Event) => {
      const { href, pathname: destinationPath } = (event as CustomEvent<PageTransitionDetail>)
        .detail;
      controlledPath.current = destinationPath;
      playTransition();
      // Start navigation immediately; the wall animates over the incoming page.
      void router.navigate({ href }).catch(finish);
    };
    window.addEventListener(pageTransitionEvent, onNavigate);
    return () => window.removeEventListener(pageTransitionEvent, onNavigate);
  }, [playTransition, router, finish]);

  if (!transition.active) return null;

  return (
    <div
      key={transition.id}
      className="brick-transition"
      style={{ "--loader-duration": `${transition.duration}ms` } as CSSProperties}
      role="status"
      aria-live="polite"
      aria-label={transition.message}
    >
      <div className="brick-transition__blueprint" aria-hidden="true" />
      <div className="brick-transition__content">
        <span className="brick-transition__brand" aria-hidden="true">
          CREATOV
        </span>
        <div className="brick-transition__wall" aria-hidden="true">
          {masonryRows.map((brickCount, rowIndex) => (
            <div key={rowIndex} className="brick-transition__row">
              {Array.from({ length: brickCount }, (_, brickIndex) => (
                <span
                  key={brickIndex}
                  className="brick-transition__brick"
                  style={{ animationDelay: `${rowIndex * 74 + brickIndex * 18}ms` }}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="brick-transition__label">
          <strong>{tagline}</strong>
          <span className="brick-transition__progress" aria-hidden="true">
            <i />
          </span>
        </div>
      </div>
    </div>
  );
}
