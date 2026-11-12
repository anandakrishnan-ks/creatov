import { fireEvent, render, screen } from "@testing-library/react";
import {
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { describe, expect, it } from "vitest";
import { Route as ProjectsRoute } from "@/routes/projects";

describe("Projects page", () => {
  it("renders Project 1 with interactive gallery, thumbnails, and details", async () => {
    const rootRoute = createRootRoute();
    const projectsRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/projects",
      component: ProjectsRoute.options.component,
    });
    const routeTree = rootRoute.addChildren([projectsRoute]);
    const router = createRouter({
      routeTree,
      history: createMemoryHistory({ initialEntries: ["/projects"] }),
    });

    await router.load();
    render(<RouterProvider router={router} />);

    // Check Project 1 title and subtitle
    expect(screen.getByRole("heading", { name: "Project 1" })).toBeInTheDocument();
    expect(screen.getByText("Contemporary Two-Storey Residence")).toBeInTheDocument();

    // Check status pill and scope items
    expect(screen.getByText("Under Construction")).toBeInTheDocument();
    expect(screen.getByText("3D Elevation & Lighting")).toBeInTheDocument();
    expect(screen.getByText("Structural Engineering")).toBeInTheDocument();

    // Check default active photo is 3D Elevation Day
    expect(screen.getByText(/3D Elevation — Day View/i)).toBeInTheDocument();

    // Find and click the next thumbnail (Dusk)
    const duskThumb = screen.getByRole("button", { name: /Lighting & Facade/i });
    fireEvent.click(duskThumb);
    expect(screen.getByText(/3D Elevation — Dusk & Lighting/i)).toBeInTheDocument();

    // Click next arrow button
    const nextBtn = screen.getByRole("button", { name: /Next project photo/i });
    fireEvent.click(nextBtn);
    expect(screen.getByText(/Site Execution — Plinth & Foundation/i)).toBeInTheDocument();
  });

  it("filters projects by category", async () => {
    const rootRoute = createRootRoute();
    const projectsRoute = createRoute({
      getParentRoute: () => rootRoute,
      path: "/projects",
      component: ProjectsRoute.options.component,
    });
    const routeTree = rootRoute.addChildren([projectsRoute]);
    const router = createRouter({
      routeTree,
      history: createMemoryHistory({ initialEntries: ["/projects"] }),
    });

    await router.load();
    render(<RouterProvider router={router} />);

    // Click Residential filter
    const residentialBtn = screen.getByRole("button", { name: "Residential" });
    fireEvent.click(residentialBtn);
    expect(screen.getByRole("heading", { name: "Project 1" })).toBeInTheDocument();

    // Click Commercial filter
    const commercialBtn = screen.getByRole("button", { name: "Commercial" });
    fireEvent.click(commercialBtn);
    expect(screen.getByText(/Our project portfolio is being curated/i)).toBeInTheDocument();
  });
});
