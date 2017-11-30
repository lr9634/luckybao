<template>
  <div class="load-page" ref='load'>
    <div class="con-page" v-if='datas.product'>
      <TitlePage :desc='datas'></TitlePage>
      <div class="list">
        <div v-for='(item, index) in datas.genes' :key='index' class="li">
          <template v-if='item.type == "fixed"'>
            <label for="index" class="h5">{{item.label}}</label>
            <div class="p"><output id="index">{{item.value}}</output></div>
          </template>
          <template v-else-if='item.type == "list" || item.type == "list.days"'>
            <label for="index" class="h5">{{item.label}}</label>
            <SelectList v-if='JSON.parse(item.options).step' :step='JSON.parse(item.options).step' :label='item.label' :val='item.value' v-model='genesJson[item.gene_key]' ></SelectList>
            <SelectDays v-if='JSON.parse(item.options).list' :list='JSON.parse(item.options).list' :label='item.label' :val='item.value' v-model='genesJson[item.gene_key]' ></SelectDays>
          </template>
          <template v-else-if='item.type == "fixed.jobs"'>
            <label for="index" class="h5">{{item.label}}</label>
            <div class="p"><output id="index">{{item.value}}</output><a href="javascript:;" @click='professional($event)'>查询职业</a></div>
          </template>
        </div>
      </div>
      <!-- <ul class="list">
        <li v-for='(item, index) in datas.genes' :key='index'>
          <h5>{{item.label}}</h5>
          <p>
            <template v-if="item.type == 'fixed.job'">
              <span v-for='(val, j) in JSON.parse(item.options).list' :key='j' class="bor" :class='{color: val.value === item.value}' @click='tabSpan($event, item.gene_key, val.value)'>{{val.value}}</span>
            </template>
            <template v-else-if="item.type == 'list' || item.type == 'list.days'">
              <template v-if="JSON.parse(item.options).step">
                <span v-for='(i, j) in JSON.parse(item.options).step.max' class="bor" :class='{color: idx === j}' @click='tabSpan($event, item.gene_key, i)' :key='j'>{{j+JSON.parse(item.options).step.step}}{{JSON.parse(item.options).step.unit}}</span>
              </template>
              <template v-else-if="JSON.parse(item.options).list">
                <span v-for='(val, j) in JSON.parse(item.options).list' :key='j' class="bor" :class='{color: val.value === item.value}' @click='tabSpan($event, item.gene_key, val.value)'>{{val.value}}</span>
              </template>
              <template v-else>
                <span>
                  {{item.value}}
                  <template v-if='item.type == "fixed.jobs"'>
                    <a href="javascript:;">查询工作</a>
                  </template>
                </span>
              </template>
            </template>
            <template v-else>
              <span>
                {{item.value}}
                <template v-if='item.type == "fixed.jobs"'>
                  <a href="javascript:;">查询工作</a>
                </template>
              </span>
            </template>
          </p>
        </li>
      </ul> -->
      <div class="load-bottom">
        <h4>
          价格:¥{{datas.product.price}}
        </h4>
        <button @click='effect'>立即投保</button>
      </div>
    </div>
    <JobsList v-if='proFlg' :jobs='jobs' ref='jobs'></JobsList>
    <HealthTell v-if="healthFlg" :healthList='healthList' ref='Health' :datas='datas'></HealthTell>
  </div>
</template>

<script>
  import TitlePage from './TitlePage'
  import HealthTell from './HealthTell'
  import SelectList from '@/components/SelectList'
  import SelectDays from '@/components/SelectDays'
  import JobsList from '@/components/JobsList'
  export default {
    props: ['datas'],
    data () {
      return {
        genesJson: {},
        proFlg: false,
        jobs: [],
        idx: 0,
        healthFlg: false,
        healthList: []
      }
    },
    components: {
      TitlePage,
      SelectList,
      SelectDays,
      JobsList,
      HealthTell
    },
    methods: {
      getPrice () {
        this.$store.dispatch('ProductList/GetPrice', {
          'id': this.datas.product.product_id,
          'genes': this.genesJson
        }).then(res => {
          this.$emit('GetPrice', res.price)
        })
      },
      professional (e) {
        this.$store.dispatch('ProductList/GetProfessional', {
          'id': this.datas.product.product_id
        }).then(res => {
          this.jobs = res
          console.log(this.jobs)
          this.proFlg = true
          console.log(this.proFlg)
        })
      },
      showList (index) {
        if (index === this.idx) {
          this.idx = ''
        } else {
          this.idx = index
        }
      },
      effect () {
        console.log(this.datas.options.need_health)
        if (this.datas.options.need_health === 0) {
          this.$store.dispatch('ProductList/GetHealth', {id: this.datas.product.product_id}).then(res => {
            console.log(res)
            this.$router.push({name: 'Insure', params: {needHealth: res, id: this.datas.product.product_id, price: this.datas.product.price}})
          })
        } else {
          this.$store.dispatch('ProductList/GetAttr', {
            id: this.datas.product.product_id,
            genes: this.genesJson
          }).then(res => {
            this.healthList = res
            this.healthFlg = true
            console.log(this.healthFlg)
            console.log(res)
          })
        }
      }
    },
    created () {
      this.datas.genes.forEach(item => {
        this.$set(this.genesJson, item.gene_key, item.value)
        if (item.type === 'list') {
          this.$watch(() => {
            return this.genesJson[item.gene_key]
          }, () => {
            this.getPrice()
          })
        }
      })
      // console.log(this.genesJson)
    },
    mounted () {
      this.getPrice()
      this.$el.addEventListener('click', (e) => {
        if (e.target.className === 'load-page') {
          this.$parent.btnflg = false
        }
      }, false)
    }
  }
</script>

<style lang="less" scoped>
.load-page{
  position: fixed;
  width:100%;
  height:100%;
  z-index: 33;
  left: 0;
  top:0;
  background:rgba(0,0,0,.5);
  .con-page{
    width:100%;
    background: #fff;
    position: absolute;
    bottom:0;
    left:0;
    animation: alert .5s linear forwards;
    z-index: 555;
    max-height: 500px;
    overflow-y: auto;
    .list{
      width:100%;
      padding: 0 10px;
      box-sizing: border-box;
      .li{
        width:100%;
        border-bottom: 1px solid #eee;
        line-height: 40px;
        display:flex;
        .h5{
          width: 80px;
          height:100%;
        }
        .p{
          flex:1;
          margin-left: 10px;
          font-size: 12px;
          a{
            color:#f03;
            margin-left: 15px;
          }
          span{
            cursor: pointer;
            &.color{
              background: #f03;
              color:#fff;
              border: none;
              border-radius: 3px;
            }
          }
          .bor{
            display: inline-block;
            height: 25px;
            line-height: 25px;
            margin:0 5px;
            padding: 0 5px;
            border:1px solid #eee;
          }
        }
      }
    }
    .load-bottom{
      width:100%;
      display: flex;
      justify-content: space-between;
      height: 50px;
      align-items: center;
      h4{
        color:#f03;
        padding-left: 20px;
      }
      button{
        width:100px;
        background:#f03;
        color:#fff;
        height:100%;
        border: none;
      }
    }
  }
  .title{
    position: relative;
    text-align: center;
    line-height: 50px;
    a{
      position: absolute;
      right: 5px;
      top:3px;
    }
  }
  .job-box{
    width:100%;
    background:#fff;
    position: fixed;
    z-index: 9999;
    bottom:0;
    left:0;
    min-height: 200px;
    overflow-y: auto;
    background:#ccc;
    div{
      background: #fff;
      margin-bottom:10px;
    }
    h4{
      text-align: center;
      line-height: 2em;
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
