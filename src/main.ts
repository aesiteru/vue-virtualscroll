import 'normalize.css'
import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import Default from './layout/Default.vue'
import Side from './layout/Side.vue'

Vue.config.productionTip = false

Vue.component('default-layout', Default)
Vue.component('side-layout', Side)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
