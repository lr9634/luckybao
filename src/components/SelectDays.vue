<template>
  <div class="p" v-if='list'>
    <div class="con-page">
      <span v-for='(item,index) in list' :key='index' :class='listVal === item.value ? "active" : ""' @click='tab(item.value)'>
        <label :for="item.value">{{item.value}}</label>
        <input type="radio" v-model='listVal' name='radio' >
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['list', 'label', 'val'],
    data () {
      return {
        listVal: this.val
      }
    },
    methods: {
      tab (value) {
        this.listVal = value
      }
    },
    watch: {
      listVal (newVal) {
        this.$emit('input', newVal)
      }
    }
  }
</script>

<style lang="less" scoped>
.p{
  span{
    display:inline-block;
    height: 30px;
    line-height: 30px;
    width:50px;
    text-align: center;
    border: 1px solid #eee;
    margin: 0 5px;
    position: relative;
    z-index: 8;
    border-radius: 5px;
    label{
      width:100%;
      height:100%;
      text-align: center;
      position: absolute;
      z-index: 66;
      left: 0;
      top:0;
    }
    input{
      background:rgba(0,0,0,0);
      opacity:0;
    }
  }
  .active{
    background:#f03;
    color:#fff;
  }
}
</style>
