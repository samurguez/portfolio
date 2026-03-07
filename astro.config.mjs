import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
// import sitemap from "@astrojs/sitemap"; // Temporarily disabled

// https://astro.build/config
export default defineConfig({
	site: "https://www.samuelrodriguezdesign.com",
	integrations: [tailwind()],
});
