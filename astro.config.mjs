import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://tudorpop.fr",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/merci"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
