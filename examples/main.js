import Vue from 'vue'
import App from './App.vue'

import chooseItem from '../packages/index.js'

Vue.use(chooseItem)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
