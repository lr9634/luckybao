<template>
  <div class="detail-page">
    <div class="content">
      <a href="javascript:;" @click='close'>X</a>
      <h4>{{title}}</h4>
      <p ref='con'></p>
    </div>
  </div>
</template>

<script>
  import { Cell } from 'vux'
  export default {
    props: ['details', 'title'],
    mounted () {
      this.$refs.con.innerHTML = this.details
    },
    components: {
      Cell
    },
    methods: {
      close () {
        this.$parent.flg = false
      }
    }
  }
</script>

<style lang="less" scoped>
.detail-page{
  width:100%;
  height:100%;
  position: fixed;
  z-index: 4444;
  left: 0;
  top:0;
  background: rgba(0, 0, 0, .5);
  .content{
    width:100%;
    height:60%;
    background:#fff;
    position: fixed;
    left: 0;
    bottom: 0;
    overflow-x: auto;
    padding: 0 20px;
    box-sizing: border-box;
    animation: alert 1s linear forwards;
    h4{
      text-align: center;
      line-height: 50px;
      border-bottom: 1px solid #eee;
      font-size: 18px;
      margin-top: 20px;
    }
    p{
      text-indent: 2em;
      line-height: 1.5em;
      margin-top: 20px;
    }
    a{
      position: absolute;
      right: 10px;
      top:10px;
    }
  }
}
@keyframes alert {
  from {
    bottom: -100%;
  }
  to {
    bottom: 0%;
  }
}
</style>
