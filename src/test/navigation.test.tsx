import { act, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import {
  createMemoryHistory,
  createRootRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import type { ReactElement } from "react";
import { describe, expect, it } from "vitest";
import { DesktopNavigation } from "@/components/site/DesktopNavigation";
import { MobileNavigation } from "@/components/site/MobileNavigation";

async function renderNavigation(component: () => ReactElement) {
  const rootRoute = createRootRoute({ component });
  const router = createRouter({
    routeTree: rootRoute,
    history: createMemoryHistory({ initialEntries: ["/"] }),
  });
  await router.load();
  render(<RouterProvider router={router} />);
}

function enterWithMouse(element: HTMLElement) {
  const event = new Event("pointerover", { bubbles: true });
  Object.defineProperty(event, "pointerType", { value: "mouse" });
  fireEvent(element, event);
}

describe("Grouped site navigation", () => {
  it("handles a click arriving before the hover render has committed", async () => {
    await renderNavigation(() => <DesktopNavigation />);
    const services = screen.getByRole("button", { name: "Services" });
    const entry = new Event("pointerover", { bubbles: true });
    Object.defineProperty(entry, "pointerType", { value: "mouse" });
    act(() => {
      services.dispatchEvent(entry);
      services.dispatchEvent(new MouseEvent("click", { bubbles: true, detail: 1 }));
    });
    expect(services).toHaveAttribute("aria-expanded", "true");
  });

  it("keeps the first mouse click open after pointer hover, and closes on the next click", async () => {
    await renderNavigation(() => <DesktopNavigation />);
    const services = screen.getByRole("button", { name: "Services" });
    enterWithMouse(services);
    expect(services).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(services, { detail: 1 });
    expect(services).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(services, { detail: 1 });
    expect(services).toHaveAttribute("aria-expanded", "false");
  });

  it("opens keyboard navigation into a panel and returns focus on Escape", async () => {
    await renderNavigation(() => <DesktopNavigation />);
    const services = screen.getByRole("button", { name: "Services" });
    services.focus();
    fireEvent.keyDown(services, { key: "ArrowDown" });
    const overview = screen.getByRole("link", { name: /Explore all services/i });
    expect(services).toHaveAttribute("aria-expanded", "true");
    expect(overview).toHaveFocus();
    fireEvent.keyDown(overview, { key: "Escape" });
    expect(services).toHaveAttribute("aria-expanded", "false");
    expect(services).toHaveFocus();
  });

  it("exposes only the expanded mobile group and restores focus when dismissed", async () => {
    await renderNavigation(() => <MobileNavigation />);
    const trigger = screen.getByRole("button", { name: "Open menu" });
    fireEvent.click(trigger);
    const menu = within(screen.getByRole("dialog", { name: "Menu" }));
    const services = menu.getByRole("button", { name: "Services" });
    const about = menu.getByRole("button", { name: "About Us" });
    expect(menu.queryByRole("link", { name: "Residential Projects" })).not.toBeInTheDocument();
    fireEvent.click(services);
    expect(menu.getByRole("link", { name: "All Services" })).toBeInTheDocument();
    expect(menu.getByRole("link", { name: "Residential Projects" })).toBeInTheDocument();
    fireEvent.click(about);
    expect(services).toHaveAttribute("aria-expanded", "false");
    expect(menu.queryByRole("link", { name: "Residential Projects" })).not.toBeInTheDocument();
    expect(menu.getByRole("link", { name: "Our Process" })).toBeInTheDocument();
    expect(menu.getByRole("link", { name: "Why CREATOV" })).toBeInTheDocument();
    fireEvent.click(menu.getByRole("button", { name: "Close menu" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    await waitFor(() => expect(trigger).toHaveFocus());
  });
});
