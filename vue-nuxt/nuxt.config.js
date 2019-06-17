
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: '管理系统',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // 加载太慢
      // { rel:'stylesheet' , href:'https://cdn.bootcss.com/twitter-bootstrap/4.3.1/css/bootstrap.css'}
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
    'element-ui/lib/theme-chalk/index.css',
    '@static/font-awesome/css/font-awesome.min.css',
    // '@static/bootstrap/bootstrap.min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/bootstrap-vue.js',
    '@/plugins/login.js'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    vendor: ['bootstrap', 'bootstrapvue'], // 打包插件
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  // 中间键配置,应用于全部页面,可以单独放在指定页面实现中间键效果
  // router: {
  //   middleware: ['counter']
  // }
}
