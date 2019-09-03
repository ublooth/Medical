import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import './style/index.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store, // 使用store
}).$mount('#app')
