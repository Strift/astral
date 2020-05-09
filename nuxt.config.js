import database from './lib/database'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'Astral',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Astral est une guilde PVE HL sur le serveur WoW Classic Sulfuron (JcJ)' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon32.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:400,600|Catamaran:600&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#5CFFED' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/main.css',
    '~assets/css/tooltip.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/compositionApi',
    '~/plugins/firestore'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-99085502-3'
    }],
    '@nuxtjs/robots',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  /*
  ** Generate configuration
  */
  hooks: {
    generate: {
      done (builder) {
        database.terminate()
      }
    }
  },
  /*
  ** PurgeCSS configuration
  */
  purgeCSS: {
    mode: 'postcss'
  }
}
