
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  //target: 'server',
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Bubekiti Web creating | Jamstack Web制作フリーランス',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      //{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'description', content: 'Bubekiti(ブベキチ)は、東京・神奈川を拠点に活動しているWeb制作フリーランス(SOHO)です。Jamstack等のモダン技術を用いた制作で、クライアント様の要望にお応えします。' },

      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Bubekiti | Jamstack Web制作フリーランス' },
      { property: 'og:description', content: 'Bubekiti(ブベキチ)は、東京・神奈川を拠点に活動しているWeb制作フリーランス(SOHO)です。Jamstack等のモダン技術を用いた制作で、クライアント様の要望にお応えします。' },
      { property: 'og:url', content: 'https://bubekiti.com' },
      { property: 'og:site_name', content: 'Bubekiti Web creating' },
      { property: 'og:image', content: '/ogimage.jpg' },

      { property: 'fb:app_id', content: '591933487923354' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@bubekiti' },
      { name: 'twitter:domain', content: 'bubekiti.com' },
      { name: 'twitter:title', content: 'Bubekiti | Jamstack Web制作フリーランス' },
      { name: 'twitter:description', content: 'Bubekiti(ブベキチ)は、東京・神奈川を拠点に活動しているWeb制作フリーランス(SOHO)です。Jamstack等のモダン技術を用いた制作で、クライアント様の要望にお応えします。' },
      { property: 'twitter:image', content: '/ogimage.jpg' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Russo+One&display=swap' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '~/plugins/particles', mode: 'client' },
    // { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
