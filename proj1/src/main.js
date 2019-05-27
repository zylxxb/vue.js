import Vue from 'vue'  // 插件导入  vue
import App from './App.vue'  // 引入组件

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// 另一种挂载写法  vue-cli 热更新
// new Vue({
//   render: h => h(App),
//   el: '#app'
// })
