<template>
  <div class="foot">
    <div class="foot-page">
      <div class="kefu">
        <img src="../../../static/images/kefu.png" alt="">
        <span>联系客服</span>
      </div>
      <div class="right" v-if='datas.product'>
        <div class="money">
          <i>¥</i>{{datas.product.price}}
        </div>
        <div class="btn" @click='insurance'>立即投保</div>
      </div>
    </div>
    <BtnLoad :datas='datas' v-if="btnflg" @GetPrice='GetPrice'></BtnLoad>
  </div>
</template>
<script>
  import BtnLoad from './BtnLoad'
  export default {
    props: ['datas'],
    data () {
      return {
        btnflg: false
      }
    },
    methods: {
      insurance () {
        this.btnflg = true
      },
      GetPrice (price) {
        this.$emit('GetPrice', price)
      }
    },
    components: {
      BtnLoad
    }
  }
</script>
<style lang="less" scoped>
.foot{
  width:100%;
  position: fixed;
  left: 0;
  bottom:0;
  .foot-page{
    width:100%;
    height: 40px;
    display: flex;
    background: #333333;
    color:#fff;
    .kefu{
      width:60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-right: 1px solid #666666;
      img{
        width:20px;
        height:20px;
      }
      span{
        font-size: 12px;
      }
    }
    .right{
      flex:1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .money{
        padding-left: 10px;
        i{
          margin-right: 5px;
        }
      }
      .btn{
        width:100px;
        line-height: 40px;
        background: #ff4774;
        text-align: center;
      }
    }
  }
}
</style>
