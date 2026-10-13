export const contact = {
  company: "CREATOV Engineering Consultancy Pvt. Ltd.",
  phones: ["8075607280", "6238802093"],
  email: "creatov.ec24@gmail.com",
  location: "Kollam, Kerala",
};

export const tagline = "From concept to completion....";

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/process", label: "Our Process" },
  { to: "/why-creatov", label: "Why CREATOV" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export const sectors = ["Residential", "Commercial", "Renovation", "Development", "Construction Consultancy"];

export const pillars = [
  { t: "Professional Design", d: "Practical, modern and project-specific design solutions." },
  { t: "Engineering Expertise", d: "Solutions developed with structural and technical considerations in mind." },
  { t: "Transparent Estimation", d: "Understand project requirements and expected costs before construction begins." },
  { t: "Approval Support", d: "Assistance and coordination for necessary planning and approval processes." },
  { t: "Construction Guidance", d: "Technical support throughout the execution stage." },
  { t: "One Professional Team", d: "Multiple construction requirements coordinated through one consultancy." },
];

export const services = serviceDetails;

export const technical = [
  "Design & Supervision", "Cost Management", "Survey", "3D Elevations", "3D Interior & Exterior Design",
  "Industrial Building Projects", "BMS – Building Management Systems", "PMC – Project Management Consultancy", "MEP Services",
];

export const audiences = [
  { k: "For Homeowners", h: "Planning your dream home?", d: "We help you understand the construction process before you start spending." },
  { k: "For Landowners", h: "Not sure what can be built on your property?", d: "We help evaluate the possibilities and plan accordingly." },
  { k: "For Builders & Developers", h: "Support for your projects.", d: "Professional design, estimation and technical consultancy to support your projects." },
  { k: "For Commercial Clients", h: "Spaces that work.", d: "Create functional spaces designed around your business requirements." },
  { k: "For Investors", h: "Informed decisions.", d: "Make informed construction decisions with proper planning, estimation and technical guidance." },
  { k: "For Existing Property Owners", h: "Planning an extension, renovation or modification?", d: "We can help transform your existing space." },
];

export const processSteps = [
  { n: "01", t: "Consult", d: "Tell us about your land, project and requirements." },
  { n: "02", t: "Plan", d: "We study your requirements and develop the right approach." },
  { n: "03", t: "Design", d: "Our team develops practical and customized design solutions." },
  { n: "04", t: "Estimate", d: "Understand quantities, materials and projected construction costs." },
  { n: "05", t: "Approve", d: "Get assistance with the required approval and documentation process." },
  { n: "06", t: "Execute", d: "Build with professional technical guidance and project support." },
];

export const benefits = [
  { t: "Better Planning", d: "Reduce avoidable changes during construction." },
  { t: "Cost Awareness", d: "Understand project requirements before execution." },
  { t: "Technical Guidance", d: "Make construction decisions with professional support." },
  { t: "Better Space Utilization", d: "Design your building according to the site and your requirements." },
  { t: "Long-Term Thinking", d: "Plan not just for today, but for how the building will be used in the future." },
];

export const insights = [
  { c: "Planning", t: "Before You Build: 10 Things to Know", img: "drawings" },
  { c: "Cost", t: "How Much Does It Cost to Build a House?", img: "hero" },
  { c: "Estimation", t: "Why BOQ Is Important Before Construction", img: "construction" },
  { c: "Design", t: "Architectural Design vs Structural Design", img: "model" },
  { c: "Cost", t: "How to Plan Your Construction Budget", img: "interior" },
  { c: "Approvals", t: "Building Approval Process", img: "commercial" },
  { c: "Visualization", t: "How 3D Visualization Helps Before Construction", img: "model" },
  { c: "Execution", t: "Common Construction Mistakes to Avoid", img: "construction" },
] as const;

export const projectCategories = ["All", "Residential", "Commercial", "Industrial", "Renovation", "Development"] as const;

// Add real CREATOV projects here — the Projects page renders them automatically.
export type Project = { title: string; category: Exclude<(typeof projectCategories)[number], "All">; location?: string; image: string };
export const projects: Project[] = [];
import { serviceDetails } from "@/lib/service-details";
