const pkg = require('./package')
// const baseUrl= process.env.BASE_URL || 'http://localhost:3000';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
// app: {
    /*
  ** Headers of the page
  */
  // head: {
  //   title: 'Jared Works | Digital Creator',
  //   meta: [
  //     { charset: 'utf-8' },
  //     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  //     { hid: 'description', name: 'description', content: pkg.description },
  //     { name: 'google-site-verification', content: '_WkKKAHMW01uVgzipZpkprVt56czMzidpY4XOuel1qo'},

  //       {
  //         hid: `og:title`,
  //         property: 'og:title',
  //         content: 'Jared Works | Digital Creator'
  //       },
  //       {
  //         hid: `og:image`,
  //         property: 'og:image',
  //         content: baseUrl + '/open-graph.png'
  //       },
  //       {
  //         hid: `og:type`,
  //         property: 'og:type',
  //         content: 'website'
  //       },
  //       {
  //         hid: `og:description`,
  //         property: 'og:description',
  //         content: 'A website supporting Jared Works'
  //       }


  //   ],
  //   link: [
  //     { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  //   ]
  // },

// },

    /*
  ** Global CSS
  */
  css: [
    '~/assets/stylesheets/styles.scss',
    '~/assets/stylesheets/fonts.scss',

  ],

  vite: {
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler', // or 'modern'
            },
        },
    },
},
  


  modules: [// ['@nuxtjs/google-analytics', {
  //   id: 'UA-56965162-1'
  // }],
  'nuxt-svgo', '@nuxt/eslint', '@nuxt/icon'],
  
  svgo: {
    autoImportPath: './assets/images/projects/',
    defaultImport: 'component'
  },


})