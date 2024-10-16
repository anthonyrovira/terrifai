// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  experimental: {
    contentLayer: true,
  },
  integrations: [
    tailwind({
      configFile: "./tailwind.config.mjs",
      applyBaseStyles: true,
      nesting: true,
    }),
  ],
});