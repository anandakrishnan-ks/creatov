import { act, render, screen } from "@testing-library/react";
import {
  createMemoryHistory,
  createRootRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { afterEach, describe, expect, it, vi } from "vitest";

import { pageTransitionEvent } from "@/components/site/TransitionLink";
import { BrickPageTransition } from "@/routes/__root";

async function renderLoader() {
  const rootRoute = createRootRoute({ component: () => <BrickPageTransition pathname="/" /> });
  const router = createRouter({
    routeTree: rootRoute,
    history: createMemoryHistory({ initialEntries: ["/"] }),
  });
  await router.load();
  const view = render(<RouterProvider router={router} />);
  return { router, ...view };
}

function navigateTo(href: string) {
  window.dispatchEvent(new CustomEvent(pageTransitionEvent, { detail: { href, pathname: href } }));
}

describe("Brick page loader", () => {
  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("shows the brand tagline and completes the initial loader within a second", async () => {
    vi.useFakeTimers();
    await renderLoader();
    expect(screen.getByRole("status", { name: "Preparing your experience" })).toHaveTextContent(
      "From concept to completion",
    );
    act(() => vi.advanceTimersByTime(1000));
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  it("starts navigation immediately and accepts another destination during an animation", async () => {
    vi.useFakeTimers();
    const { router } = await renderLoader();
    const navigate = vi.spyOn(router, "navigate").mockResolvedValue(undefined);
    act(() => navigateTo("/services"));
    expect(navigate).toHaveBeenCalledWith({ href: "/services" });
    expect(screen.getByRole("status", { name: "Building next page" })).toBeInTheDocument();
    act(() => vi.advanceTimersByTime(300));
    act(() => navigateTo("/contact"));
    expect(navigate).toHaveBeenLastCalledWith({ href: "/contact" });
    act(() => vi.advanceTimersByTime(760));
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  it("skips loading animations for reduced motion without blocking navigation", async () => {
    vi.useFakeTimers();
    const matchMedia = window.matchMedia;
    vi.spyOn(window, "matchMedia").mockImplementation((query) => ({
      ...matchMedia(query),
      matches: query.includes("prefers-reduced-motion"),
    }));
    const { router } = await renderLoader();
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
    const navigate = vi.spyOn(router, "navigate").mockResolvedValue(undefined);
    act(() => navigateTo("/contact"));
    expect(navigate).toHaveBeenCalledWith({ href: "/contact" });
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });
});
