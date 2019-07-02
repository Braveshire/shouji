import Vue from 'vue'
import App from './App.vue'

// Vue.config.productionTip = false

import './assets/js/font'
import './assets/css/base.css'
import './assets/css/app.css'
import './assets/css/public.css'
import './assets/css/style.css'
import './assets/css/app.css'
// import axios from 'axios'
import axios from './axios'
// import './assets/js/app'
// import './assets/js/jquery-1.7.2.min'
import router from './router'
// import axios from './axios';
import 'animate.css'
import store from './store'
new Vue({
  render: h => h(App),
  router,store
}).$mount('#app')
