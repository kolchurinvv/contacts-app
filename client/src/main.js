import Vue from 'vue'
import App from './App.vue'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'
import router from './router'

Vue.config.productionTip = false

sync(store, router)

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
