import tailwindTypography from '@tailwindcss/typography';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  ui: {
    icons: ["mdi"]
  },
  tailwindcss: {
    config: {
      plugins: [tailwindTypography]
    }
  }
})