
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/simply-delightful/",
  },

  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
    },
  },

  nitro: {
    preset: "github_pages",
  },
});
