export default {
  head: {
    title: 'Fruit Vegetable Identifier',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'TODO:' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/gh/TimoScheuermann/Timos-Icons@3.1/public/resources/style.css'
      }
    ]
  },
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/pwa'],
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: ['~/assets/scss/variables.scss', '~/assets/scss/mixins.scss']
  },
  loaders: {
    ts: {
      silent: true
    }
  },
  loading: {
    color: '#25ca49'
  },
  css: [],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  pwa: {
    meta: {
      mobileAppIOS: true,
      appleStatusBarStyle: 'black-translucent',
      name: 'FV Identifier',
      title: 'FV Identifier',
      description: 'TODO:',
      nativeUI: true,
      ogHost: 'https://fvi.timos.design',
      theme_color: '#25ca49',
      themeColor: '#25ca49'
    },
    manifest: {
      background_color: '#25ca49',
      backgroundColor: '#25ca49',
      theme_color: '#25ca49',
      themeColor: '#25ca49',
      display: 'fullscreen'
    }
  },
  manifest: {
    background_color: '#25ca49',
    backgroundColor: '#25ca49',
    theme_color: '#25ca49',
    themeColor: '#25ca49',
    display: 'fullscreen',
    name: 'FV Identifier',
    display: 'fullscreen'
  }
}
