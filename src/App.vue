<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 路由出口,路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
     {{ $route.path }}
    <div class="navigation">
      <router-link to="/" class="ngn" :class="{'effect': $route.path === '/'}">
        <div><img :src="$route.path === '/' ? selectedIdx : notSelectedIdx"></div>
        <div>首页</div>
      </router-link>
      <router-link to="/healthy" class="ngn" :class="{'effect': /healthy/.test($route.path)}">
        <div><img :src="/healthy/.test($route.path) ? selectedHea : notSelectedHea"></div>
        <div>健康管理</div>
      </router-link>
      <router-link to="/myindex" class="ngn" :class="{'effect': /myindex/.test($route.path)}">
        <div><img :src="/myindex/.test($route.path) ? selectedMi : notSelectedMi"></div>
        <div>我的</div>
      </router-link>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import homeIndex from './homePage/homeIndex.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    homeIndex
  },
  data:function() {
    return {
      // 导航图标
      selectedIdx:require("./assets/idx.png"),
      notSelectedIdx:require("./assets/idx-2.png"),
      selectedHea:require("./assets/hea.png"),
      notSelectedHea:require("./assets/hea-2.png"),
      selectedMi:require("./assets/mi.png"),
      notSelectedMi:require("./assets/mi-2.png"),
    }
  },
  // //created 实例创建完成后被立即调用
  // created:function() {
  //   console.log('11',this.$route)
  // },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  font-size: 20px;
}
/* 头部 */
.head {
  width: 100%;
  height: 44px;
  background-color: #ffffff;
  text-align: center;
  font-size: 18px;
  position: relative;
}
.rightKeys {
  display: inline-block;
  width: 65px;
  height: 22px;
  border: 1px solid rgba(0, 0, 0, 0.24);
  border-radius:12px;
  position: absolute;
  right: 12px;
  top: 10px;
}
.key li {
  display: inline-block;
  vertical-align: middle;
}
.leftKey {
  height: 23px;
}
.leftKey div {
  display: inline-block;
  vertical-align: middle;
}
.small {
  width: 3px;
  height: 3px;
  background-color: rgba(0, 0, 0, 0.87);
  border-radius: 50%;
}
.large {
  margin: 0px 2px;
  width: 5px;
  height: 5px;
  background-color: rgba(0, 0, 0, 0.87);
  border-radius: 50%;
}
.line {
  width: 1px;
  height: 10px;
  background: rgba(0, 0, 0, 0.24);
  margin: 0 8px;
}
.aod {
  width: 11px;
  height: 11px;
  border: 1px solid rgba(0, 0, 0, 0.87);
  border-radius: 50%;
  position: relative;
}
.whn {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.87);
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -2.5px 0 0 -2.5px;
}
/* 底部导航 */
.navigation {
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 49px;
}
.ngn {
  display: inline-block;
  width: 33.33%;
  height: 49px;
  background-color: #ffffff;
}
.ngn div {
  text-align: center;
}
.ngn div:nth-child(1) {
  height:27px;
  padding-top: 4px;
}
.ngn div:nth-child(2) {
  font-size:10px
}
.effect {
  color: #156CDD;
}
</style>
