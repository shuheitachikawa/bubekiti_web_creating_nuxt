
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
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Bubekiti Web creating | 神奈川県秦野市のWeb制作フリーランス',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      //{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'description', content: '神奈川県秦野市を拠点に活動しているWeb制作フリーランス(SOHO)です。神奈川・東京を中心にWeb制作業務(ホームページ制作 / HTMLコーディング / レスポンシブデザイン / CMS構築)を承っております。' },

      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Bubekiti Web creating | 神奈川県秦野市のWeb制作フリーランス' },
      { property: 'og:description', content: '神奈川県秦野市を拠点に活動しているWeb制作フリーランス(SOHO)です。神奈川・東京を中心にWeb制作業務(ホームページ制作 / HTMLコーディング / レスポンシブデザイン / CMS構築)を承っております。' },
      { property: 'og:url', content: 'https://bubekiti.com' },
      { property: 'og:site_name', content: 'Bubekiti Web creating' },
      { property: 'og:image', content: '/ogimage.jpg' },

      { property: 'fb:app_id', content: '591933487923354' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@bubekiti' },
      { name: 'twitter:domain', content: 'bubekiti.com' },
      { name: 'twitter:title', content: 'Bubekiti Web creating | 神奈川県秦野市のWeb制作フリーランス' },
      { name: 'twitter:description', content: '神奈川県秦野市を拠点に活動しているWeb制作フリーランス(SOHO)です。神奈川・東京を中心にWeb制作業務(ホームページ制作 / HTMLコーディング / レスポンシブデザイン / CMS構築)を承っております。' },
      { property: 'twitter:image', content: '/ogimage.jpg' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
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
  //  { src: '~/plugins/particles', mode: 'client' }
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
