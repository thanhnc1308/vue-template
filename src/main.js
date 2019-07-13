import Vue from 'vue'
import App from './App.vue'

// i18n
import i18n from './i18n/i18n'

// Vuex
import {store} from './store/store'

// global components
import globalComponents from './global/globalComponents'

// router
import {router} from './router'

Vue.config.productionTip = false

new Vue({
  i18n,
  store,
  router,
  globalComponents,
  render: h => h(App),
}).$mount('#app')
