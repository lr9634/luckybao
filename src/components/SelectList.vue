<template>
  <div class="list-page" v-if='step'>
    <popup-picker
      :data="list1"
      v-model="listVal"
    ></popup-picker>
    <div class="con-page">
    </div>
  </div>
</template>

<script>
  import { PopupPicker } from 'vux'
  export default {
    props: ['step', 'val'],
    data () {
      return {
        list1: [],
        listVal: [this.val]
      }
    },
    created () {
      let arr = []
      for (let i = this.step.min; i <= this.step.max; i++) {
        arr.push(i + '' + this.step.unit)
      }
      this.list1.push(arr)
    },
    watch: {
      listVal (newVal) {
        this.$emit('input', newVal[0])
      }
    },
    components: {
      PopupPicker
    }
  }
</script>

<style lang="less" scoped>
.weui-cell.vux-tap-active.weui-cell_access{
  padding: 0;
}
</style>
