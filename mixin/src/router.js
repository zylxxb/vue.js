import Vue from 'vue'     // 导入vue.js库
import Router from 'vue-router'    // 引入vue-router插件，管理内容页面的跳转
import Home from './views/Home.vue'   // 显示引入页面，同步引入页面

Vue.use(Router)   // 安装路由插件

// let routes= [
//   {
//     path: '/',
//     name: 'home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'about',
//     component: () => import('./views/About.vue')
//   }
// ]

// export default new Router({
//   routes
// )}

export default new Router({   // 导出路由对象
  routes: [
    {
      path: '/',
      // redirect: '/about',
      // alias: '/index',
      name: 'home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: '关于'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // 动态加载  异步引入
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),   // ES6简写
      // component: function(){
      //    return import('./views/About.vue')
      beforeEnter(to, from, next){
        console.log('进入选中页面时执行(路由独享守卫)')
        next()
      }
    },
    {
      path: '/star',
      name: 'star',
      component: () => import('./views/Star.vue')
    },
    {
      path: '/user/:id',
      name: 'user',
      component: () => import('./views/User.vue'),
      beforeEnter(to, from, next){
        console.log('进入user页面之前)')
        next()
      }

    }
  ]
})
