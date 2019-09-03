<template>
  <div>
    <div class="head">
      <p>医芯智能家庭医生</p>
      
    </div>
    <p>vuex：{{$store.state.test}}</p>
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
.head {
  width: 100%;
  height: 44px;
}
</style>