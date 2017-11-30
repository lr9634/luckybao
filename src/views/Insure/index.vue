<template>
  <div class="insure-page">
    <div class="data">
      <b>*</b>
      <label for="">起保日期</label>
    </div>
    <template  v-if='insureList'>
      <div class="list" v-for='(item, index) in insureList.models' :key="index">
        <Content :content='item'></Content>
      </div>
    </template>
    <FootPage></FootPage>
  </div>
</template>
<script>
  import Content from './components/Content'
  import FootPage from './components/FooterPage'
  export default {
    name: 'Insure',
    data () {
      return {
        insureList: this.$route.params.needHealth
      }
    },
    created () {
      console.log(this.insureList)
    },
    methods: {
    },
    components: {
      Content,
      FootPage
    }
  }
</script>
<style lang="less" scoped>
.insure-page{
  width:100%;
  overflow-x: hidden;
  .data{
    display: flex;
    .weui-cell.vux-tap-active.weui-cell_access{
      padding: 0;
      justify-content: space-between;
    }
  }
}
</style>
