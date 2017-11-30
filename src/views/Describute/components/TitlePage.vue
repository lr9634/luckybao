<template>
  <div class="title">
    <h4>{{desc.product.title}}</h4>
    <span><img :src="desc.company.logo" alt=""></span>
  </div>
</template>

<script>
  export default {
    props: ['desc'],
    data () {
      return {
      }
    },
    components: {
    }
  }
</script>

<style lang="less" scoped>
.title{
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
  align-items: center;
  h4{
    font-size: 18px;
  }
  img{
    width: 100px;
    position: relative;
    top: 5px;
  }
}
</style>
