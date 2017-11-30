<template>
<Professional v-if='jobs'  ref="list">
<div class="title">职业查询<a href="javascript:;" @click="closeJob">X</a></div>
  <div class="wrapper" ref='wrapper'>
    <div class="content">
        <div class="job-box">
          <div v-for='(item,index1) in jobs' :key="index1">
            <h4>{{item.name}}</h4>
            <ul>
              <li v-for='(item2, index2) in item.child' :key="index2" value="item2.name" @click='showList(index1 + "-" + index2)'>{{item2.name}}
                <ol v-show='idx === index1 + "-" + index2'>
                  <li v-for='(item3, index3) in item2.child' :key="index3">{{item3.name}}</li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
    </div>
  </div>
</Professional>
</template>

<script>
  import Bscroll from 'better-scroll'
  import Professional from './Professional'
  export default {
    props: ['jobs'],
    data () {
      return {
        idx: 0,
        scrollbarObj: {
          fade: true
        },
        startY: 0,  // 纵轴方向初始化位置
        scrollToX: 0,
        scrollToY: 0,
        scrollToTime: 700,
        items: []
      }
    },
    components: {
      Professional
    },
    mounted () {
      this.$nextTick(() => {
        console.log(11)
        this.scroll = new Bscroll(this.$refs.wrapper, {
          scrollY: true,
          scrollbar: true
        })
      })
    },
    methods: {
      showList (index) {
        if (index === this.idx) {
          this.idx = ''
        } else {
          this.idx = index
        }
      },
      closeJob () {
        this.$parent.proFlg = false
      }
    }
  }
</script>

<style lang="less" scoped>
.wrapper{
  width: 100%;
  height:100%;
  position: fixed;
  z-index: 9999;
  left: 0;
  top:40px;
  background:#fff;
  .content{
    width:100%;
  }
}
.title{
  line-height: 39px;
  text-align: center;
  border-bottom: 1px solid #eee;
  position: relative;
  a{
    position: absolute;
    right: 10px;
    top: -5px;
  }
}
.job-box{
  width:100%;
  background:#fff;
  z-index: 99999;
  bottom:0;
  left:0;
  min-height: 200px;
  overflow-y: auto;
  animation: alert .5s linear forwards;
  div{
    background: #fff;
    margin-bottom:10px;
  }
  h4{
    text-align: center;
    line-height: 40px;
    border-bottom: 1px solid #eee;
  }
  p{
    padding-left: 10px;
  }
  ul{
    border: 1px solid #eee;
    padding: 10px;
    box-sizing: border-box;
    & > li{
      color:#ccc;
      border-bottom: 1px solid #eee;
      line-height: 40px;
      ol{
        background:#d5d5d5;
        color:#333;
        li{
          list-style-type: none;
        }
      }
    }
  }
  .weui-select option{
    width:100%;
  }
}
@keyframes alert {
  from {
    bottom: -100%;
  }
  to{
    bottom: 0;
  }
}
</style>
