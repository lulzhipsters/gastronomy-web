import tailwindTypography from '@tailwindcss/typography';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  ssr: true,

  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxt/content"],
  ui: {
    icons: ["mdi"]
  },
  content: {
    sources: {
      github: {
        prefix: "",
        driver: "github",
        repo: "lulzhipsters/gastronomy",
        branch: "main",
        dir: ""
      }
    }
  },
  tailwindcss: {
    config: {
      plugins: [tailwindTypography]
    }
  }
})