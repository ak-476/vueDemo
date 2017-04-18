import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import mockjs from 'mockjs'
import _data from './assets/js/data'
import _Util from './assets/js/utils'

Vue.config.productionTip = false
Vue.use(mockjs);

Vue.prototype.$http = axios;
Vue.prototype._data = _data;
Vue.prototype._Util = _Util;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
