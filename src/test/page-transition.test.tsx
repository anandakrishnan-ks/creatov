import { act, render, screen } from "@testing-library/react";
import { createMemoryHistory, createRootRoute, createRouter, RouterProvider } from "@tanstack/react-router";
import { afterEach, describe, expect, it, vi } from "vitest";

import { pageTransitionEvent } from "@/components/site/TransitionLink";
import { BrickPageTransition } from "@/routes/__root";

describe("Brick page loader", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("stays visible long enough to be noticed on initial load", async () => {
    vi.useFakeTimers();
    const rootRoute = createRootRoute({ component: () => <BrickPageTransition pathname="/" /> });
    const router = createRouter({
      routeTree: rootRoute,
      history: createMemoryHistory({ initialEntries: ["/"] }),
    });
    await router.load();

    render(<RouterProvider router={router} />);

    expect(screen.getByRole("status", { name: "Preparing your experience" })).toBeInTheDocument();
    expect(document.querySelectorAll(".brick-transition__row")).toHaveLength(18);
    expect(document.querySelectorAll(".brick-transition__brick")).toHaveLength(153);

    act(() => vi.advanceTimersByTime(2049));
    expect(screen.getByRole("status", { name: "Preparing your experience" })).toBeInTheDocument();

    act(() => vi.advanceTimersByTime(1));
    expect(screen.queryByRole("status", { name: "Preparing your experience" })).not.toBeInTheDocument();

    const navigate = vi.spyOn(router, "navigate").mockResolvedValue(undefined);
    act(() => {
      window.dispatchEvent(new CustomEvent(pageTransitionEvent, {
        detail: { href: "/services", pathname: "/services" },
      }));
    });

    expect(screen.getByRole("status", { name: "Building next page" })).toBeInTheDocument();
    act(() => vi.advanceTimersByTime(1124));
    expect(navigate).not.toHaveBeenCalled();

    act(() => vi.advanceTimersByTime(1));
    expect(navigate).toHaveBeenCalledWith({ href: "/services" });

    act(() => vi.advanceTimersByTime(925));
    expect(screen.queryByRole("status", { name: "Building next page" })).not.toBeInTheDocument();
  });
});
