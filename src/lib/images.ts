import hero from "@/assets/hero.jpg";
import drawings from "@/assets/drawings.jpg";
import commercial from "@/assets/commercial.jpg";
import construction from "@/assets/construction.jpg";
import interior from "@/assets/interior.jpg";
import model from "@/assets/model.jpg";
import logoUrl from "@/assets/logo.png";
import logoAltUrl from "@/assets/logo-alt.png";

export const images = { hero, drawings, commercial, construction, interior, model } as const;
export type ImageKey = keyof typeof images;
export { logoUrl, logoAltUrl };
