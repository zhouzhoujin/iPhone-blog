import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
Vue.config.productionTip = false
import '@/assets/css/reset.css';
import '@/assets/js/rem.js'
import './plugins/element.js'
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
