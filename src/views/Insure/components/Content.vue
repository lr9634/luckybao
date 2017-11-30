<template>
  <div class="content">
    <h4>{{content.title}}</h4>
    <ul>
      <li v-for='(item2, index2) in content.attributes' :key="index2">
        <template v-if='item2.type === "text"'>
          <b>*</b> <label :for="'item2.type' + index2">{{item2.label}}</label><input type="text" :id="'item2.type' + index2" style='text-align:right'>
        </template>
        <template v-if='item2.type === "list" || item2.type == "radio"'>
          <b>*</b>
          <SelectList :type='item2.type' :title='item2.label' :list='item2.list'></SelectList>
        </template>
        <template v-if='item2.type === "date"'>
          <b>*</b>
          <label :for="item2.type">{{item2.label}}</label>
          <input type="date" :id="item2.type" v-model='birthday'>
        </template>
        <template v-if='item2.type === "jobs"'>
          <b>*</b>
          <label :for="item2.type">{{item2.label}}</label>
          <a href="javascript:;" @click='showJob'>查询职业</a>
        </template>
      </li>
    </ul>
    <JobsList v-if="proFlg" :jobs='jobs'></JobsList>
  </div>
</template>
<script>
  import SelectList from './SelectList'
  import JobsList from '@/components/JobsList'
  export default {
    props: ['content'],
    data () {
      return {
        data: ['2017/11/12'],
        proFlg: false,
        birthday: '2017-04-23'
      }
    },
    created () {
      console.log(this.insureList)
    },
    methods: {
      showJob () {
        console.log(this.$route.id)
        this.$store.dispatch('ProductList/GetProfessional', {
          'id': this.$route.params.id
        }).then(res => {
          this.jobs = res
          this.proFlg = true
        })
      }
    },
    watch: {
      birthday (newval) {
        console.log(newval)
      }
    },
    components: {
      SelectList,
      JobsList
    }
  }
</script>
<style lang="less" scoped>
.content{
  width:100%;
  h4{
    width:100%;
    background:#f8f8f8;
    height: 40px;
    line-height: 50px;
    font-weight: normal;
    padding-left: 10px;
    color:#ccc;
    position: relative;
    &:after{
      content: '';
      width:200%;
      height:1px;
      background:#d9d9d9;
      position: absolute;
      transform-origin: left top;
      left: 0;
      bottom:0;
      transform: scale(.5);
    }
    }
    ul{
      width:100%;
      padding-left: 10px;
      box-sizing: border-box;
    li{
      width:100%;
      line-height: 50px;
      position: relative;
      display:flex;
      padding-right: 20px;
      box-sizing: border-box;
      label{
        width:200px;
        display:block;
        margin-left: 10px;
        font-size: 14px;
      }
      a{
        color:#333;
        font-size: 14px;
        position: absolute;
        right: 15px;
        display: block;
        line-height: 50px;
        top:0;
        width:80px;
        text-align: center;
      }
      input{
        flex:1;
        border: none;
        outline: none;
      }
      b{
        color:#f03;
      }
      &:after{
        content: '';
        width:200%;
        height:1px;
        background:#d9d9d9;
        position: absolute;
        transform-origin: left top;
        left: 0;
        bottom:0;
        transform: scale(.5);
      }
    }
  }
}
</style>
