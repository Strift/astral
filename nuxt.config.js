import fs from 'fs'
import path from 'path'
import Mode from 'frontmatter-markdown-loader/mode'

import database from './lib/database'

function getBlogPaths () {
  return fs
    .readdirSync(path.resolve(__dirname, 'content'))
    .filter(filename => path.extname(filename) === '.md')
    .map(filename => `/blog/${path.parse(filename).name}`)
}

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Catamaran:wght@600&family=Raleway:wght@400;600&display=swap' }
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
    /*
    ** PostCSS configuration
     */
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // add frontmatter-markdown-loader
      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, 'content'),
        loader: 'frontmatter-markdown-loader',
        options: {
          mode: [Mode.VUE_COMPONENT, Mode.META]
        }
      })
    }
  },
  /*
  ** Generate configuration
  */
  generate: {
    routes: getBlogPaths()
  },
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
