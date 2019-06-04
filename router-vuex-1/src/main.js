import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuex from 'vuex'
import axios from 'axios'
Vue.use(vuex)

Vue.config.productionTip = false

const store = new vuex.Store({
  state:{
    name: 'TEST',
    city: '北京'
  },
  getters:{
    reverseName(state){
      return state.name.split("").reverse().join("")
    }
  },
  mutations: {
    setName(state, name){
      state.name = name
    },
    setCity(state, city){
      state.city =city
    }
  },
  actions:{
    getData(context){
      axios.get('https://www.easy-mock.com/mock/5cede2f74f44830b96f13a09/example/student').then(res=>{
        let result = res.data.data
        let city =result[0].city
        context.commit('setCity', city)
      })
    }
  }
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
