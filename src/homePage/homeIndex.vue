<template>
  <div>
    <div class="head">
      <p style="line-height: 44px;">医芯智能家庭医生</p>
      <ul class="key rightKeys">
        <li class="leftKey">
          <div class="small"></div>
          <div class="large"></div>
          <div class="small"></div>
        </li>
        <li class="line"></li>
        <li class="rightKey">
          <div class="aod">
            <div class="whn"></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="banner">
      <div class="slogan">
        <p style="width: 90px;height: 17px;line-height: 17px;margin-bottom: 8px;">智能家庭医生</p>
        <p style="width: 180px;height: 23px;line-height: 23px;">为您的健康保驾护航</p>
      </div>
    </div>
    <p style="font-size:14px">vuex：{{$store.state.test}}</p>
    <van-button type="default">默认按钮</van-button><br>
    <van-button type="primary">主要按钮</van-button>
    <div class="navigation">
      <ul class="ngn">
        <li></li>
        <li></li>
      </ul>
      <ul class="ngn">
        <li></li>
        <li></li>
      </ul>
      <ul class="ngn">
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
   //created 实例创建完成后被立即调用
  created:function() {
    console.log('this1',this)
    console.log('this2',this.$store)
    console.log('this2',this.$store.state.test)
  }
  
}
</script>
<style>
/* 头部 */
.head {
  width: 100%;
  height: 44px;
  /* line-height: 44px; */
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
/* 横幅 */
.banner {
  width: 100%;
  height: 125px;
  background-color: #0043BE;
}
.slogan {
  padding: 36px 0 0 27px;
}
.slogan p:nth-child(1) {
  color: rgba(255, 255, 255, 1);
  font-size: 15px;
}
.slogan p:nth-child(2) {
  color: rgba(250, 209, 120, 1);
  font-size: 20px;
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
  background-color: rgba(250, 209, 120, .5);
}
</style>