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
  it("renders Project 1 and Residential Building with interactive galleries and details", async () => {
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
    expect(screen.getByText("Under Construction")).toBeInTheDocument();
    expect(screen.getAllByText("3D Elevation & Lighting").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Structural Engineering").length).toBeGreaterThan(0);

    // Check Residential Building (Alappuzha)
    expect(screen.getByRole("heading", { name: /Residential Building/i })).toBeInTheDocument();
    expect(screen.getAllByText(/Vandanam P\.O\., Alappuzha/i).length).toBeGreaterThan(0);
    expect(screen.getByText("Completed")).toBeInTheDocument();
    expect(screen.getAllByText("Interior & Courtyard Design").length).toBeGreaterThan(0);

    // Check default active photo is 3D Elevation Day for Project 1
    expect(screen.getByText(/3D Elevation — Day View/i)).toBeInTheDocument();

    // Find and click the next thumbnail (Dusk) on Project 1
    const duskThumb = screen.getByRole("button", { name: /Lighting & Facade/i });
    fireEvent.click(duskThumb);
    expect(screen.getByText(/3D Elevation — Dusk & Lighting/i)).toBeInTheDocument();

    // Check Residential Building gallery items
    expect(screen.getByText(/Exterior Elevation — Front Facade/i)).toBeInTheDocument();
    const interiorThumb = screen.getByRole("button", { name: /Interior Design/i });
    fireEvent.click(interiorThumb);
    expect(
      screen.getByText(/Interior Architecture — Sunken Courtyard & Dining/i),
    ).toBeInTheDocument();
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

    // Click Residential filter - both projects should appear
    const residentialBtn = screen.getByRole("button", { name: "Residential" });
    fireEvent.click(residentialBtn);
    expect(screen.getByRole("heading", { name: "Project 1" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Residential Building/i })).toBeInTheDocument();

    // Click Commercial filter - empty state should appear
    const commercialBtn = screen.getByRole("button", { name: "Commercial" });
    fireEvent.click(commercialBtn);
    expect(screen.getByText(/Our project portfolio is being curated/i)).toBeInTheDocument();
  });
});
