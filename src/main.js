import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

//OnsenUi
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import VueOnsen from 'vue-onsenui';
Vue.use(VueOnsen);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
