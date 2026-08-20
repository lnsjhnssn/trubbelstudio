// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

// Local Keystatic admin is for `astro dev` only (no SSR adapter in this pass).
const enableKeystatic = process.env.NODE_ENV !== "production";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    mdx(),
    sitemap(),
    react(),
    markdoc(),
    ...(enableKeystatic ? [keystatic()] : []),
  ],
});
