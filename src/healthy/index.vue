<template>
  <div>
    <div class="head">
      <p style="line-height: 44px;">健康管理</p>
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
    <p>这是健康管理页面</p>
  </div>
</template>
<script>
export default {
    //created 实例创建完成后被立即调用
  created:function() {
    // console.log('11',this.$route)
  },
}
</script>
<style>
p {
  font-size: 14px;
}
</style>