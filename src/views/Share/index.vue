<template>
  <div class="share">
    <Scroller lock-y :scrollbar-x='true'>
      <div class="box1">
        <div><img src='../../static/images/img1.jpg'></div>
        <div><img src='../../static/images/img1.jpg'></div>
        <div><img src='../../static/images/img1.jpg'></div>
      </div>
    </Scroller>
    <ArticleList :products='articleList'></ArticleList>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
  import FooterBar from '@/components/FooterBar'
  import ArticleList from '@/components/ArticleList'
  import { Scroller } from 'vux'
  export default {
    name: 'Share',
    data () {
      return {
        articleList: []
      }
    },
    components: {
      FooterBar,
      Scroller,
      ArticleList
    },
    created () {
      this.getArticleList()
    },
    methods: {
      getArticleList () {
        this.$store.dispatch('ProductList/GetArticleList').then(res => {
          console.log(res)
          this.articleList = res.list
        })
      }
    }
  }
</script>

<style lang="less" scoped>
.share{
  width:100%;
}
  .box1{
    width:1500px;
    height: 200px;
    white-space: nowrap;
    padding-right: 20px;
    background: #eee;
    div{
      width:350px;
      background: #eee;
      float: left;
      height:100%;
      padding: 10px 0;
      box-sizing: border-box;
      img{
        width:100%;
        height:100%;
        display: block;
        margin: 0 10px;
        border-radius: 10px;
      }
    }
  }
</style>
