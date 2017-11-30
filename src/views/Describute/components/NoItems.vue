<template>
  <div class="desc-page">
    <template v-for='(item, index) in datas'>
      <Cell
      :title="item.label"
      :value='item.value'
      :key='index'
      is-link
      @click.native='detail(item)'
      ></Cell>
    </template>
    <AlertDetail v-if='flg' :title='details.label' :details='details.description'></AlertDetail>
  </div>
</template>

<script>
  import { Cell } from 'vux'
  import AlertDetail from './AlertDetail'
  export default {
    props: ['datas'],
    data () {
      return {
        details: '',
        flg: false
      }
    },
    components: {
      Cell,
      AlertDetail
    },
    methods: {
      detail (val) {
        console.log(val)
        this.details = val
        this.flg = true
      }
    }
  }
</script>

<style lang="less" scoped>
.share{
  width:100%;
}
</style>
