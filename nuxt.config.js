export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,
  generate: {
    fallback: true,
  },
  // head() {
  //   meta: [
  //   { charset: 'utf-8' },
  //   {
  //     hid: 'og:image',
  //     property: 'og:image',
  //     content: '/my_image.jpg',
  //   },
  // ],
  // }
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    hid: 'og:title',
    property: 'og:title',
    title: 'gideon kirimanjaro portfolio',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0; maximum-scale=1.0; minimum-scale=1.0; user-scalable=0',
      },
      {
        hid: 'og:description',
        name: 'description',
        content:
          'Welcome to my portfolio where you will have a view of my skills, education and projects.',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://gideonkirimanjaro.netlify.app/',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/favicon.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/sitemap',
    // {
    //   icons: false,
    // },
  ],
  sitemap: {
    hostname: 'https://gideonkirimanjaro.com',
    gzip: true,
    routes: [
      '/dashboard',
      '/internet',
      '/support',
      {
        url: '/',
        priority: 1,
      },
    ],
  },
  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {},
    babel: { compact: true },
  },
}
