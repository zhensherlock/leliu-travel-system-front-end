import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@/common/rem';
import { Lazyload } from 'vant';

Vue.use(Lazyload);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
