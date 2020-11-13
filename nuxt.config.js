export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'drnur',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'robots', content: 'index, follow' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/ico', href: '/favicon.ico', sizes: '16x16 32x32 48x48 64x64' },
      { rel: 'icon', type: 'image/png', href: '/assets/img/meta/favicon-16.png', sizes: '16x16' },
      { rel: 'icon', type: 'image/png', href: '/assets/img/meta/favicon-32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/assets/img/meta/favicon-128.png', sizes: '128x128' },
      { rel: 'canonical', href: 'https://drnur.co.uk/' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:400,300,700' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css' },
      { rel: 'stylesheet', href: '/assets/css/animate.css' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/assets/img/meta/touch-icon-60.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/assets/img/meta/touch-icon-76.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/assets/img/meta/touch-icon-120.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/assets/img/meta/touch-icon-152.png' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/v-smooth-scroll', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
