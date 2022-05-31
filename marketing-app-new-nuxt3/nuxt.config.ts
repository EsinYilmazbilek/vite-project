import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

  head: {
    __dangerouslyDisableSanitizers: ['script'],
    script: [
      {
        hid: 'gtm-script2',
        innerHTML: `
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
          
          ga('create', 'UA-126979260-1', 'auto');
          ga('send', 'pageview');
        `,
        type: 'text/javascript',
        charset: 'utf-8',
      }
    ],
    title: 'Mercury Labs',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/static/svgs/favicon.jpg' }
    ],
  },


  buildModules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@hexdigital/nuxt-intercom'
  ],

  // intercom: {
  //   appId: 'fq0cdccg',
  //   config: {
  //     custom_launcher_selector: '.intercom_open',
  //   },
  // },


})
