/* eslint-disable no-undef */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '../router/router'
import {start} from './serve/time.js'
import {timer} from './serve/time.js'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(start)
Vue.use(timer)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
