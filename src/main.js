import Vue from 'vue'
import App from './App.vue'
import router from '../src/router/router'
window.$ = window.jQuery = require('jquery')
import 'bootstrap'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
