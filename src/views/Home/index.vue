<template>
  <div class="box">
    <Swiper
      :list='list'
      :auto='true'
      dots-position='center'
    />
    <Sticky :check-sticky-support="false">
      <Tab
        :line-width='1'
        active-color='#ff4883'
        bar-active-color='#ff4883'
      >
        <TabItem v-for='(item, index) in homeList' :key='index' :selected='index == idx' @on-item-click='itemClick'>{{item.cat_name}}</TabItem>
      </Tab>
    </Sticky>
    <ProductList :products='datas' @getId='getId'></ProductList>
    <LoadMore v-show='flg == false' tip='正在加载'></LoadMore>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import { Swiper, Tab, TabItem, Sticky, LoadMore } from 'vux'
import ProductList from '@/components/ProductList'
import FooterBar from '@/components/FooterBar'
export default {
  name: 'Home',
  data () {
    return {
      list: [
        {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/1.jpg'
        },
        {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/5.jpg',
          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        }
      ],
      datas: [],
      flg: true,
      page: 0,
      pageSize: 10,
      cartId: 0,
      homeFlg: true,
      homeList: [],
      idx: 0
    }
  },
  created () {
    this.getData(this.page, this.pageSize, this.cartId)
    this.getHomeIndex()
  },
  methods: {
    getData (page, pageSize, cartId) {
      this.$store.dispatch('ProductList/GetProductList', {page, pageSize, cartId}).then(res => {
        if (res.length <= 0) {
          this.homeFlg = false
          this.flg = true
          console.log(this.flg)
          return false
        }
        this.datas.push(...res)
        this.flg = true
        console.log(res)
      })
    },
    getHomeIndex () {
      this.$store.dispatch('ProductList/GetHomeIndex').then(res => {
        this.homeList = res.cart_list
        console.log(res)
      })
    },
    getId (id) {
      this.$router.push('/describute/' + id)
    },
    IsScroll () {
      if (window.scrollY + window.innerHeight >= document.body.offsetHeight && this.flg) {
        this.flg = false
        this.getData(++this.page)
      }
    },
    itemClick (index) {
      this.page = 0
      this.pageSize = 10
      this.datas = []
      this.getData(this.page, this.pageSize, this.homeList[index].cat_id)
      console.log(index)
    }
  },
  components: {
    Swiper,
    Sticky,
    Tab,
    TabItem,
    ProductList,
    FooterBar,
    LoadMore
  },
  mounted () {
    if (this.homeFlg) {
      document.addEventListener('scroll', this.IsScroll, false)
    }
  }
}
</script>

<style scoped lang="less">
@import '~vux/src/styles/1px.less';
.box{
  padding-bottom: 60px;
  overflow-x: hidden;
}
</style>
