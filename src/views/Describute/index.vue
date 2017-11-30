<template>
  <div class="desc">
    <template v-if='desc.product'>
      <div class="banner">
        <img :src="desc.product.cover" alt="">
      </div>
      <TitlePage :desc='desc'></TitlePage>
      <div class="price">
        <div><span>¥<b>{{desc.product.price}}</b></span></div>
        <div>已售<span>{{desc.product.sale_num}}</span></div>
      </div>
      <div class="genes" v-if='desc.genes'>
        <span v-for='(item, index) in desc.genes' :key='index'>
          {{item.label}}:{{item.value}}
          <b>|</b>
        </span>
      </div>
      <div class="youhui">
        <div class='youList'>
          <templat  v-if='desc.product.features'>
          <span v-for='(item, index) in desc.product.features' :key='index'>
            <Icon type="success" class="ico"></Icon>
            <b>{{item}}</b>
          </span>
          </templat>
        </div>
        <p>右上角分享保险。即可获赠1张满保险优惠券</p>
      </div>
      <template v-if="desc.plan_list[0].plan_title">
        <div class="tab">
          <div class="tab-bar">
            <span v-for='(item, index) in desc.plan_list' :key='index' :class='{active: idx === index}' @click='tabClick(item.product_id, index)'>{{item.plan_title}}</span>
          </div>
        </div>
      </template>
      <NoItems :datas='desc.items'></NoItems>
      <div class="know">
        <p>更多详情，请阅读<a href="javascript:;" @click='AlertDetail(desc.data.insure_notice, "投保须知")'>《投保须知》</a>和<a href="javascript:;" @click='AlertDetail(desc.data.tips, "保险条款")'>《保险条款》</a></p>
      </div>
    </template>
    <FooterPage :datas='desc' @GetPrice='GetPrice'></FooterPage>
    <AlertDetail v-if='flg' :title='title' :details='con'></AlertDetail>
  </div>
</template>

<script>
  import NoItems from './components/NoItems'
  import FooterPage from './components/FooterPage'
  import TitlePage from './components/TitlePage'
  import AlertDetail from './components/AlertDetail'
  import { Icon } from 'vux'
  export default {
    name: 'Describute',
    data () {
      return {
        id: this.$route.params.id,
        desc: [],
        idx: 0,
        tab: 'NoItems',
        flg: false,
        title: '',
        con: ''
      }
    },
    components: {
      FooterPage,
      Icon,
      NoItems,
      TitlePage,
      AlertDetail
    },
    created () {
      this.getProduct(this.id)
    },
    methods: {
      tabClick (id, index) {
        this.idx = index
        this.getProduct(id)
      },
      AlertDetail (val, title) {
        this.title = title
        this.con = val
        this.flg = true
      },
      getProduct (id) {
        this.$store.dispatch('ProductList/GetProduct', {
          id
        }).then(res => {
          console.log(res)
          this.desc = res
        })
      },
      GetPrice (price) {
        this.desc.product.price = price
        console.log(price)
      }
    }
  }
</script>

<style lang="less" scoped>
.desc{
  padding-bottom: 40px;
  width:100%;
  .banner{
    width:100%;
    img{
      width:100%;
    }
  }
  .price{
    width:100%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    div{
      font-size: 12px;
    }
    span{
      color:#ff4774;
      margin-left: 5px;
      b{
        font-size: 16px;
      }
    }
  }
  .genes{
    font-size: 12px;
    color: #999eba;
    margin-left: 10px;
    b{
      margin:0 3px;
    }
  }
  .youhui{
    width:100%;
    background: #fafafa;
    margin-top: 20px;
    .youList{
      width:100%;
      height:40px;
      background: #fafafa;
      display: block;
      line-height: 40px;
      white-space: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
    }
    span{
      display: inline-block;
      line-height: 20px;
      margin-right: 10px;
      .ico{
        font-size: 13px !important;
        height:13px;
        color:#f03;
      }
      b{
        font-weight: normal;
        font-size: 12px;
      }
    }
    p{
      font-size: 14px;
      line-height: 36px;
      background:#ffebf0;
      color:#66758e;
      padding-left: 10px;
    }
  }
  .tab{
    width:100%;
    .tab-bar{
      width:100%;
      height: 40px;
      border-bottom: 1px solid #d9d9d9;
      span{
        display: inline-block;
        line-height: 40px;
        padding:0 5px;
        text-align: center;
        font-weight: bold;
        &.active{
          color: #ff509c;
          border-bottom: 1px solid #ff509c;
        }
      }
    }
  }
  .know{
    width:100%;
    p{
      margin-left: 10px;
      font-size: 14px;
      line-height: 40px;
      color: #999999;
      a{
        color:#1d50a2;
      }
    }
  }
}
</style>
