import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";
import Beasties from "beasties";

// Inline critical CSS and make the remaining stylesheet non-render-blocking.
// Because this is a client-side SPA the rendered HTML at build time is mostly
// an empty shell, so very few rules will be inlined — but beasties will still
// convert the <link rel="stylesheet"> into an async load, which removes the
// render-blocking flag that PageSpeed Insights reports.
function criticalCssPlugin() {
  return {
    name: "vite-plugin-critical-css",
    apply: "build",
    async closeBundle() {
      const htmlPath = path.resolve(__dirname, "dist/index.html");
      if (!fs.existsSync(htmlPath)) return;

      const beasties = new Beasties({
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        preload: "media",   // async-load non-critical CSS via media="print" trick
        pruneSource: false, // keep the full stylesheet (non-critical rules still needed post-hydration)
        logLevel: "warn",
      });

      const html = fs.readFileSync(htmlPath, "utf-8");
      const result = await beasties.process(html);
      fs.writeFileSync(htmlPath, result);

      console.log("✓ Critical CSS inlined; remaining stylesheet loaded async.");
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), criticalCssPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
