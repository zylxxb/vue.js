import Vue from 'vue'
import Alert from './Alert.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Alert),
}).$mount('#Alert')
