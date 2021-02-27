import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MH from './components/myHeader'
import axios from 'axios'

axios.defaults.baseURL="http://xzserver.applinzi.com"
Vue.prototype.axios=axios;

Vue.config.productionTip = false

Vue.component("my-header",MH);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
