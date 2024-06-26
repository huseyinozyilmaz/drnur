// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  telemetry: false,
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
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
  modules: []
})