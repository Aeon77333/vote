export default {
  srcDir: 'src/',
  mode: 'spa',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'VOTE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'アイデア出し & 投票サイト',
      },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:title', name: 'og:title', content: 'VOTE' },
      { hid: 'og:url', name: 'og:url', content: '' },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'アイデア出し & 投票サイト',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content:
          'https://pearo-image.s3-ap-northeast-1.amazonaws.com/twitter-card/twitter-card.png',
      },
      { hid: 'og:site_name', name: 'og:site_name', content: 'VOTE' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        crossorigin: 'use-credentials',
        href: '/favicon.ico',
      },
    ],
  },
  pwa: {
    icon: {},
    meta: {
      // mobileAppIOSオプションを有効にする前に、以下記事を一読すること。
      // https://medium.com/@firt/dont-use-ios-web-app-meta-tag-irresponsibly-in-your-progressive-web-apps-85d70f4438cb
      // mobileAppIOS: true
    },
    manifest: {
      name: 'VOTE',
      short_name: 'VOTE',
      description: 'アイデア出し & 投票サイト',
      background_color: '#fdfdfd',
      theme_color: '#af0000',
      display: 'standalone',
      orientation: 'portrait',
      lang: 'ja',
    },
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/copy-store',
    { src: '@/plugins/font-awesome', ssr: true },
    '@/plugins/rest-client',
    '@/plugins/vue-textarea-autosize',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  styleResources: {
    scss: ['./assets/scss/_variables.scss', './assets/scss/_mixin.scss'],
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  server: {
    port: 8000, // default: 3000
    // host: '0.0.0.0', // default: localhost
    host: 'localhost', // default: localhost
  },
  env: {
    baseUrl: 'localhost:5000',
  },
};
