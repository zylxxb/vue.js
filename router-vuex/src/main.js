import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuex from 'vuex'
Vue.use(vuex)
Vue.config.productionTip = false

const store = new vuex.Store({
  state:{
    name: ''
  },
  mutations: {
    setName(state, name){
      state.name = name
    }
  }
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
