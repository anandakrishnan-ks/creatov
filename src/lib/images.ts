import hero from "@/assets/hero.jpg";
import drawings from "@/assets/drawings.jpg";
import commercial from "@/assets/commercial.jpg";
import construction from "@/assets/construction.jpg";
import interior from "@/assets/interior.jpg";
import model from "@/assets/model.jpg";
import estimationBoq from "@/assets/estimation-boq.jpg";
import buildingApprovals from "@/assets/building-approvals.jpg";
import developmentPlanning from "@/assets/development-planning.jpg";
import logoUrl from "@/assets/logo.png";
import logoAltUrl from "@/assets/logo-alt.png";

export const images = {
  hero,
  drawings,
  commercial,
  construction,
  interior,
  model,
  estimationBoq,
  buildingApprovals,
  developmentPlanning,
} as const;
export type ImageKey = keyof typeof images;
export { logoUrl, logoAltUrl };
