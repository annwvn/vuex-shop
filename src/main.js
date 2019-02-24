import 'amfe-flexible'
import Vue from 'vue'
import router from 'router'
import App from 'view/App'
import store from './store/index.js'

import 'common/css/style.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
