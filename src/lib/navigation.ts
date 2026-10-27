import { serviceDetails } from "@/lib/service-details";

export type NavigationGroupId = "about" | "services";
export type NavigationItem =
  | { type: "link"; label: string; to: string }
  | { type: "group"; label: string; id: NavigationGroupId };

export type NavigationEntry = { label: string; to: string; description: string };

export const primaryNavigation: readonly NavigationItem[] = [
  { type: "link", label: "Home", to: "/" },
  { type: "group", label: "About Us", id: "about" },
  { type: "group", label: "Services", id: "services" },
  { type: "link", label: "Projects", to: "/projects" },
  { type: "link", label: "Insights", to: "/insights" },
  { type: "link", label: "Contact", to: "/contact" },
];

export const aboutLinks: readonly NavigationEntry[] = [
  {
    label: "About CREATOV",
    to: "/about",
    description: "Our story and the expertise behind your project.",
  },
  {
    label: "Our Process",
    to: "/process",
    description: "A clear path from first conversation to execution.",
  },
  {
    label: "Why CREATOV",
    to: "/why-creatov",
    description: "The thinking that helps you plan better and build smarter.",
  },
];

export const serviceLinks: readonly (NavigationEntry & { number: string })[] = serviceDetails.map(
  (service) => ({
    label: service.t,
    to: `/services/${service.slug}`,
    description: service.d,
    number: service.n,
  }),
);

export function isNavigationGroupActive(group: NavigationGroupId, pathname: string) {
  const path = pathname.replace(/\/+$/, "") || "/";
  return group === "about"
    ? aboutLinks.some((link) => link.to === path)
    : path === "/services" || path.startsWith("/services/");
}
