import { Link, type LinkComponentProps } from "@tanstack/react-router";
import type { MouseEvent } from "react";

export const pageTransitionEvent = "creatov:page-transition";

export type PageTransitionDetail = {
  href: string;
  pathname: string;
};

export function TransitionLink({ onClick, ...props }: LinkComponentProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      (event.currentTarget.target && event.currentTarget.target !== "_self") ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const destination = new URL(event.currentTarget.href, window.location.href);
    if (destination.origin !== window.location.origin || destination.pathname === window.location.pathname) return;

    event.preventDefault();
    window.dispatchEvent(
      new CustomEvent<PageTransitionDetail>(pageTransitionEvent, {
        detail: {
          href: `${destination.pathname}${destination.search}${destination.hash}`,
          pathname: destination.pathname,
        },
      }),
    );
  };

  return <Link {...props} onClick={handleClick} />;
}
