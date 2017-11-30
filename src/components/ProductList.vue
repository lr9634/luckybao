<template>
  <div class="product">
    <template v-for='item in products'>
      <dl v-if='item.cover' :key='item.product_id' @click='getDesc(item.product_id)'>
        <dt><img :src="item.cover"></dt>
        <dd>
          <h3>{{item.title}}</h3>
          <p class="con">{{item.features}}</p>
          <p class="pro-bottom"><span><b>{{item.price}}</b>元起购</span><small>{{item.sale_num}}已购买</small></p>
        </dd>
      </dl>
    </template>
  </div>
</template>

<script>
export default {
  props: ['products'],
  methods: {
    getDesc (id) {
      this.$emit('getId', id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.product{
  width:100%;
  dl{
    width:100%;
    display: flex;
    padding: 10px;
    box-sizing: border-box;
    position: relative;
    &::after{
      content: '';
      width: 200%;
      height: 1px;
      background: #eee;
      position: absolute;
      bottom:0;
      left:10px;
    }
    dt{
      width: 150px;
      height: 100px;
      overflow: hidden;
      margin-right: 10px;
      img{
        display:block;
        height:100%;
      }
    }
    dd{
      flex:1;
      position: relative;
      b{
        font-weight: normal;
      }
      h3{
        font-size: 18px;
      }
      .con{
        font-size: 14px;
      }
      h3, .con{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        word-break: break-all;
        -webkit-line-clamp:1;
      }
      .pro-bottom{
        width:100%;
        display: flex;
        justify-content: space-between;
        position: absolute;
        line-height: 2em;
        bottom: 0px;
        small{
          font-size: 14px;
        }
        span{
          color: #ff4883
        }
        b{
          font-size: 24px;
        }
      }
    }
  }
}
</style>
