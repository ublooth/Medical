import Vue from 'vue';
import App from './App.vue';
import store from './store/store';
import Vant from 'vant';
import '@vant/touch-emulator';
import './style/index.css';
import 'vant/lib/index.css';
import { Button } from 'vant';

Vue.use(Button);
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store, // 使用store
}).$mount('#app')
