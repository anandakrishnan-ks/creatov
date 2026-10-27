import hero from "@/assets/images/home/residence-at-dusk.jpg";
import homeAbout from "@/assets/images/home/about-studio.jpg";
import construction from "@/assets/images/home/site-review.jpg";
import interior from "@/assets/images/about/courtyard-interior.jpg";
import drawings from "@/assets/images/services/cinematic/architectural-design.webp";
import commercial from "@/assets/images/services/cinematic/commercial-projects.webp";
import estimationBoq from "@/assets/images/services/cinematic/estimation-and-boq.webp";
import buildingApprovals from "@/assets/images/services/cinematic/building-approvals.webp";
import developmentPlanning from "@/assets/images/services/cinematic/development-projects.webp";
import residential from "@/assets/images/services/cinematic/residential-projects.webp";
import structural from "@/assets/images/services/cinematic/structural-engineering.webp";
import consultancy from "@/assets/images/services/cinematic/construction-consultancy.webp";
import renovation from "@/assets/images/services/cinematic/renovation-and-modification.webp";
import aboutBanner from "@/assets/images/banners/cinematic/about.webp";
import insightsBanner from "@/assets/images/banners/cinematic/insights.webp";
import contactBanner from "@/assets/images/banners/cinematic/contact.webp";
import servicesBanner from "@/assets/images/banners/cinematic/services.webp";
import projectsBanner from "@/assets/images/banners/cinematic/projects.webp";
import processBanner from "@/assets/images/banners/cinematic/process.webp";
import planningBanner from "@/assets/images/banners/cinematic/why-creatov.webp";
import processConsult from "@/assets/images/process/cinematic/consult.webp";
import processPlan from "@/assets/images/process/cinematic/plan.webp";
import processDesign from "@/assets/images/process/cinematic/design.webp";
import processEstimate from "@/assets/images/process/cinematic/estimate.webp";
import processApprove from "@/assets/images/process/cinematic/approve.webp";
import processExecute from "@/assets/images/process/cinematic/execute.webp";
import insightPlanning from "@/assets/images/insights/before-you-build.svg";
import insightCost from "@/assets/images/insights/house-cost.svg";
import insightBoq from "@/assets/images/insights/boq.svg";
import insightDesign from "@/assets/images/insights/architecture-structure.svg";
import insightBudget from "@/assets/images/insights/budget.svg";
import insightApprovals from "@/assets/images/insights/approvals.svg";
import insightVisualization from "@/assets/images/insights/visualization.svg";
import insightExecution from "@/assets/images/insights/site-coordination.svg";
import logoUrl from "@/assets/images/brand/creatov-logo.png";

/** Each photo has one editorial placement; service cards share their service identity. */
export const images = {
  hero,
  homeAbout,
  construction,
  interior,
  drawings,
  commercial,
  estimationBoq,
  buildingApprovals,
  developmentPlanning,
  residential,
  structural,
  consultancy,
  renovation,
  aboutBanner,
  insightsBanner,
  contactBanner,
  servicesBanner,
  projectsBanner,
  processBanner,
  planningBanner,
  processConsult,
  processPlan,
  processDesign,
  processEstimate,
  processApprove,
  processExecute,
  insightPlanning,
  insightCost,
  insightBoq,
  insightDesign,
  insightBudget,
  insightApprovals,
  insightVisualization,
  insightExecution,
} as const;
export type ImageKey = keyof typeof images;
// The original light/dark logo files were identical. Keep one shared brand asset.
const logoAltUrl = logoUrl;
export { logoUrl, logoAltUrl };
