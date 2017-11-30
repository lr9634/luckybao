<template>
  <div class="list-page" v-if='list'>
    <label for="type">{{title}}</label>
    <select name="" id="type" v-model='value' class="select">
      <option value="请选择" selected>请选择</option>
      <option v-for='(item,index) in list' :key="index" :value="item.label">{{item.label}}</option>
    </select>
  </div>
</template>

<script>
  import { PopupPicker } from 'vux'
  export default {
    props: ['type', 'list', 'title'],
    data () {
      return {
        value: '请选择'
      }
    },
    created () {
    },
    watch: {
      value (newVal) {
        console.log(newVal)
        // this.$emit('input', newVal[0])
      }
    },
    components: {
      PopupPicker
    }
  }
</script>

<style lang="less" scoped>
.list-page{
  flex:1;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  label{
    font-size: 14px;
  }
  .select{
    width:70px;
    border: none;
    outline: none;
    position: relative;
    text-align: center;
    option{
      position: absolute;
      left:-10px;
    }
  }
}
.weui-cell.vux-tap-active.weui-cell_access{
  padding: 0;
  justify-content: space-between;
}
</style>
