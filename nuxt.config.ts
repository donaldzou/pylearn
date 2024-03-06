// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", '@nuxtjs/supabase'],
  supabase: {
    redirectOptions: {
      login: '/signin',
      exclude: ['/signup']
    }
  },
  // css: ['bootstrap'],

  app: {
    head: {

      script: [{
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
        integrity: "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz",
        crossorigin: "anonymous"
      }]
    }
  }
})