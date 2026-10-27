import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    tsconfigPaths(),
    TanStackRouterVite({ autoCodeSplitting: true }),
    react(),
  ],
  // Keep diagrams cacheable and load them only when their images enter the page.
  build: { assetsInlineLimit: 0 },
});
