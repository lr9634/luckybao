<template>
  <div class="jobs-page">
    <div class="pro-box">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="less" scoped>
.jobs-page{
  width:100%;
  height: 100%;
  background:rgba(0,0,0,.1);
  position: fixed;
  left: 0;
  bottom:0;
  z-index: 999;
  .pro-box{
    width:100%;
    height:100%;
    background:#fff;
  }
}
</style>
