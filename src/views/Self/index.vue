<template>
  <div class="self">
    <div class="head">
      <CanvasWave></CanvasWave>
      <a href="javascript:;" class="message">
        <p><img src="http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIAuEpoah2qm3q2dOza8Sicbvh5uyE7hiaib4wp88QBk2lfFBIYUrZe55E4PROG4t5zmFf6sZnLBDjyg/0" alt=""></p>
        <h4>{{username}}</h4>
      </a>
    </div>
    <FooterBar></FooterBar>
  </div>
</template>
<script>
  import FooterBar from '@/components/FooterBar'
  import CanvasWave from '@/components/CanvasWave'
  export default {
    name: 'Self',
    data () {
      return {
        username: this.$route.params.username
      }
    },
    components: {
      FooterBar,
      CanvasWave
    },
    created () {
      this.$store.dispatch('UserMessage/GetUser').then(res => {
        console.log(res)
        this.username = res.username
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
</script>

<style lang="less" scoped>
.self{
  width:100%;
  overflow-x: hidden;
  .head{
    position: relative;
    top:0;
    left:0;
    width:100%;
    height:200px;
    background: #f09;
    .message p {
      border: 0;
      width: 50px;
      height:50px;
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width:100%;
        height: 50px;
        height:auto;
        border-radius: 50%;
      }
    }
    .message{
      width:100%;
      height:90px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      position: absolute;
      bottom:20px;
      img{
        width:30px;
        height:30px;
        border-radius: 50%;
        display:block;
      }
      h4{
        width:100%;
        text-align: center;
        color:#fff;
      }
    }
  }
}
</style>
