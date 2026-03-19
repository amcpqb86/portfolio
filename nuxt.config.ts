// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt'
  ],

  devtools: {
    enabled: true
  },

  runtimeConfig: {
    public: {
      amelienDevUmamiId: "",
      abFrUmamiId: ""
    }
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: "Amélien BERNARD",
      link: [
        { rel: 'icon', type: 'image/png', href: '/_favicons/favicon-96x96.png' },
        { rel: 'shortcut icon', href: '/_favicons/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/_favicons/apple-touch-icon.png' },
        { rel: 'manifest', href: '/_favicons/site.webmanifest' },
      ],
      meta: [
        { name: 'apple-mobile-web-app-title', content: 'Amélien BERNARD' },
      ]
    }
  },

  compatibilityDate: '2024-11-01',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  }
})
