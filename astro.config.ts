import path from "path";
import { fileURLToPath } from "url";

import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;

export default defineConfig({
  output: "static",

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon({
      include: {
        tabler: ["*"],
        "flat-color-icons": [
          "template",
          "gallery",
          "approval",
          "document",
          "advertising",
          "currency-exchange",
          "voice-presentation",
          "business-contact",
          "database",
        ],
      },
    }),
  ],

  image: {
    domains: ["cdn.pixabay.com"],
  },

  markdown: {},

  vite: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
  },
});
