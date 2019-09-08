import Vue from 'vue';
import App from './App.vue';
import store from './store/store';
import Vant from 'vant';
import '@vant/touch-emulator';
import './style/index.css';
import 'vant/lib/index.css';
import { Button } from 'vant';
import VueRouter from 'vue-router';

import Home from './homePage/homeIndex.vue';
import Healthy from './healthy/index.vue';
import MyIndex from './myIndex/index.vue';

Vue.use(Button);
Vue.use(Vant);
Vue.config.productionTip = false;
Vue.use(VueRouter);//执行VueRouter

const routes = [
  { path: '/',//浏览器访问路径
    component: Home//模板，对应import引入的模板信息
   },
  { path: '/healthy', component: Healthy },
  { path: '/myindex', component: MyIndex },
]

// 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
new Vue({
  router,
  render: h => h(App),
  store, // 使用store
}).$mount('#app')
