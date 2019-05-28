import Vue from 'vue'          // 引入vue.js文件
import App from './App.vue'     // 引入页面文件
import router from './router'      // 引入路由（要么是目录的index.js）
                                   // 要么是router.js或者router.vue

Vue.config.productionTip = false

new Vue({               // 实例化vue.js项目，使用路由控制程序跳转
  router,
  render: h => h(App)  
}).$mount('#app')
