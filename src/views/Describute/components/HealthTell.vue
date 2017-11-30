<template>
  <div class="health-box" v-if='healthList'>
    <h4>{{healthList.health_title}}</h4>
    <ul>
      <li v-for='(item, index) in healthList.questions' :key="index">
        <div v-html='item.content'></div>
        <p v-if="item.answers.length > 0">
          <span v-for='(item2,index2) in item.answers' :key="index2">
            <input type="radio" name='rad' :value="item2.value" :id="item2.value" v-model='item.control_value'>
            <label :for="item2.value">{{item2.name}}</label>
          </span>
        </p>
      </li>
    </ul>
    <button class="next" @click='submit'>下一步</button>
  </div>
</template>
<script>
  import Professional from '@/components/Professional'
  export default {
    props: ['healthList', 'datas'],
    components: {
      Professional
    },
    data () {
      return {
        conVal: this.healthList.control_value
      }
    },
    watch: {
      conVal (newval) {
        console.log(newval)
      }
    },
    methods: {
      submit () {
        this.$store.dispatch('ProductList/GetSubmit', {
          id: this.datas.product.product_id,
          healthId: this.healthList.health_id,
          questions: this.healthList.questions,
          genes: this.datas.genes
        }).then(ress => {
          this.$store.dispatch('ProductList/GetHealth', {id: this.datas.product.product_id}).then(res => {
            this.$router.push({name: 'Insure', params: {needHealth: res, id: this.datas.product.product_id, price: this.datas.product.price, healthAnswerId: ress.healthAnswerId}})
          })
        })
      }
    }
  }
</script>
<style lang="less" scoped>
.health-box{
  width:100%;
  height:100%;
  background:#fff;
  position: absolute;
  z-index: 99999;
  h4{
    text-align: center;
    font-size: 20px;
    line-height: 50px;
  }
  ul{
    margin-top: 20px;
    padding:0 10px;
    box-sizing: border-box;
    li{
      line-height: 1.5em;
      margin-top: 10px;
      text-indent: 2em;
    }
  }
  .next{
    display: block;
    width:80%;
    margin-top: 30px;
    background:#f03;
    color:#fff;
    line-height: 40px;
    margin-left: 10%;
    border:none;
    border-radius: 5px;
  }
}
</style>
