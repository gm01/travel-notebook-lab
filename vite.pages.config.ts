import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";

const projectRoot = process.cwd();

export default defineConfig({
  root: resolve(projectRoot, "pages-src"),
  publicDir: resolve(projectRoot, "public"),
  base: "/travel-notebook-lab/",
  plugins: [react()],
  css: {
    postcss: resolve(projectRoot, "postcss.config.mjs"),
  },
  build: {
    outDir: resolve(projectRoot, "pages-dist"),
    emptyOutDir: true,
  },
});
