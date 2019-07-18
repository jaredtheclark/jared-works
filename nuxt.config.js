const pkg = require('./package')

const baseUrl= process.env.BASE_URL || 'http://localhost:3000';

module.exports = {
  mode: 'universal',




    devtools: true,


  /*
  ** Headers of the page
  */
  head: {
    title: 'Jared Works | Digital Creator',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'google-site-verification', content: '_WkKKAHMW01uVgzipZpkprVt56czMzidpY4XOuel1qo'},

        {
          hid: `og:title`,
          property: 'og:title',
          content: 'Jared Works | Digital Creator'
        },
        {
          hid: `og:image`,
          property: 'og:image',
          content: baseUrl + '/open-graph.png'
        },
        {
          hid: `og:type`,
          property: 'og:type',
          content: 'website'
        },
        {
          hid: `og:description`,
          property: 'og:description',
          content: 'A website supporting Jared Works'
        }


    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/stylesheets/styles.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{
    src: '~/plugins/scrollMagic.js',
    ssr: false
  }
],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    'nuxt-svg-loader',
    ['@nuxtjs/google-analytics', {
       id: 'UA-56965162-1'
     }]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

    }

  }
}
