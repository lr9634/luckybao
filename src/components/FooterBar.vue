<template>
  <div class="footer">
    <router-link tag='div' class="tab" to='/home' active-class="active">
      <img src="../static/images/icons/home-active.png">
      <span>首页</span>
    </router-link>
    <router-link tag='div' class="tab" to='/share' active-class="active">
      <img src="../static/images/icons/share.png">
      <span>发现</span>
    </router-link>
    <router-link tag='div' class="tab" to='/self' active-class="active">
      <img src="../static/images/icons/zoom.png">
      <span>我的</span>
    </router-link>
  </div>
</template>
<script>
export default {
  components: {
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
.footer{
  position: fixed;
  left:0;
  bottom:0;
  width:100%;
  height:40px;
  z-index: 333;
  display:flex;
  background:#fff;
  border-top: 1px solid #eee;
  .tab{
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    img{
      width:20px;
      height:20px;
    }
    &.active{
      color: red;
    }
  }
}
</style>
