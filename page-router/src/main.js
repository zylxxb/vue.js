import Vue from 'vue'
import App from './App.vue'
// 引入和安装插件
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 引入组件(页面)
import PageOne from './view/PageOne.vue'
import PageTwo from './view/PageTwo.vue'
import PageThree from './view/PageThree.vue'
import BookOne from './view/BookOne.vue'
import BookTwo from './view/BookTwo.vue'
import BookThree from './view/BookThree.vue'

// 配置路由表
const routes =[
  {
    path: '/1',
    component: PageOne
  },
  {
    path: '/2',
    component: PageTwo
  },
  {
    path: '/3',
    component: PageThree
  },
  {
    path: '/4',
    component: BookOne
  },
  {
    path: '/5',
    component: BookTwo
  },
  {
    path: '/6',
    component: BookThree
  }
]
Vue.config.productionTip = false

// 配置路由插件
const router =new VueRouter({
  routes
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
