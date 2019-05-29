import Vue from 'vue'          // 引入vue.js文件
import App from './App.vue'     // 引入页面文件
import router from './router'      // 引入路由（要么是目录的index.js）
                                   // 要么是router.js或者router.vue

Vue.config.productionTip = false

router.beforeEach(function(to, form, next){
  console.log('每次进入路由前运行(全局前置守卫)')
  next()
})

router.afterEach((to, form) =>{
  console.log('每次结束退出路由后运行(全局后置钩子)')
})

new Vue({               // 实例化vue.js项目，使用路由控制程序跳转
  router,
  render: h => h(App)
}).$mount('#app')
