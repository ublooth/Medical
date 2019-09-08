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
    
  </div>
</template>
<script>
import Apis from '../apis'

export default {
   //created 实例创建完成后被立即调用
  created:function() {
    // console.log('this1',this)
    // console.log('this2',this.$store)
    // console.log('this2',this.$store.state.test)

    Apis.getUserInfo()
    .then((data) => {
      console.log('data个人', data)
    })
    Apis.getMembers()
    .then((data) => {
      console.log('data成员', data)
    })
    
    // console.log('11',this.$route)
  
  }
  
}
</script>
<style>

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

</style>