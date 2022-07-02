import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/styles/tailwind.css", "@/assets/styles/globals.scss"],
  modules: ["@pinia/nuxt"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  runtimeConfig: {
    // Server-side ENV variables

    // Client-side ENV variables
    public: {
      appName: process.env.NUXT_PUBLIC_APP_NAME,
    },
  },
});
