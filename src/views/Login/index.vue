<template>
  <div class="login">
    <h1>账号密码登录</h1>
    <div class="form">
      <ul>
        <li><input type="text" placeholder="请输入用户名/手机号/邮箱" v-model='phone'></li>
        <li><input type="password" placeholder="请输入密码" v-model='pwd'></li>
      </ul>
      <button @click='login'>登录</button>
      <p class="msg">
        <span>立即注册</span>
        <span>忘记密码</span>
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Login',
    data () {
      return {
        phone: '',
        pwd: ''
      }
    },
    components: {
    },
    methods: {
      login () {
        if (this.phone.trim() !== '' && this.pwd.trim() !== '') {
          this.$http.get('/api/test-login').then(res => {
            console.log(res)
            this.$router.replace({name: 'Self', params: {username: res.data.username}})
          })
        }
      }
    }
  }
</script>

<style lang="less" scoped>
.login{
  width:100%;
  h1{
    line-height: 200px;
    padding-left: 30px;
  }
  .form{
    width:100%;
    ul{
      width:100%;
      padding:0 30px;
      box-sizing: border-box;
      li{
        line-height: 60px;
        border-bottom: 1px solid #eeeeee;
        list-style-type: none;
        input{
          width:100%;
          line-height: 60px;
          border: none;
          outline: none;
          padding-left: 20px;
          font-size: 16px;
        }
      }
    }
    button{
      width:90%;
      margin-left: 5%;
      line-height: 40px;
      margin-top: 30px;
      color:#fff;
      background: #ff4774;
      border: none;
    }
  }
  .msg{
    width:100%;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    line-height: 40px;
    font-size: 14px;
  }
}
</style>
