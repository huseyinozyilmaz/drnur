import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  telemetry: false,
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  // Removes client side hydration by removing JSON Payloads
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: false
  },

  // // Removes client side hydration by removing all JavaScripts
  routeRules: {
    '/': { prerender: true, experimentalNoScripts: true }
  },

  nitro: {
    preset: 'static'
  },

  modules: [],
  compatibilityDate: '2025-02-10'
})