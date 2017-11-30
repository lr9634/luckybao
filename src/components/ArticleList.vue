<template>
  <div class="product">
    <template v-for='item in products'>
      <dl v-if='item.cover' :key='item.product_id' @click='getDesc(item.product_id)'>
        <dd>
          <h3>{{item.title}}</h3>
          <p class="con">{{item.description}}</p>
        </dd>
        <dt><img :src="item.cover"></dt>
      </dl>
    </template>
  </div>
</template>

<script>
export default {
  props: ['products']
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
      width: 100px;
      height: 70px;
      overflow: hidden;
      margin-left: 10px;
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
      h3, .con{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        word-break: break-all;
        -webkit-line-clamp:1;
      }
      .con{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        word-break: break-all;
        -webkit-line-clamp:2;
        font-size: 14px;
      }
    }
  }
}
</style>
