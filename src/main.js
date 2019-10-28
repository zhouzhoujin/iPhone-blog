import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import '@/assets/css/reset.css';
import '@/assets/js/rem.js'
new Vue({
  render: h => h(App),
}).$mount('#app')
