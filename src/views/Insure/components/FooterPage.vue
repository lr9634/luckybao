<template>
  <div class="foot-page">
    <div class="price">¥{{price}}</div>
    <div class="btn">
      <button>提交</button>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        price: this.$route.params.price
      }
    }
  }
</script>
<style lang="less" scoped>
.foot-page{
  width:100%;
  height: 50px;
  background:#333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left:0;
  .price{
    line-height: 50px;
    margin-left: 10px;
  }
  .btn{
    button{
      width:80px;
      background:#ff4774;
      color:#fff;
      display: block;
      line-height: 50px;
      border:none;
      outline: none;
    }
  }
}
</style>
