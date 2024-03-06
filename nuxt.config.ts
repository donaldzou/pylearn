// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", '@nuxtjs/supabase',],
  supabase: {
    redirectOptions: {
      login: '/signin'
    }
  },
  plugins: [

  ],
  // css: ['bootstrap'],

  app: {
    head: {

    }
  }
})