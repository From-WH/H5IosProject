<template>
  <div class="p-wrap">
    <div class="h-wrap">
      <img class="title" src="../../images/title.png">
    </div>
    <div class="c-wrap">
      <div class="content-wrap">
        <div class="content-item">
          <span>用户名</span>
          <input type="text" maxlength="11"  v-model="loginForm.username">
        </div>
        <div class="content-item">
          <span>密码</span>
          <input type="password"  maxlength="20" v-model="loginForm.password">
        </div>
        <div class="content-btn" @click="login">
          登录
        </div>
      </div>
    </div>
    <div class="f-wrap">
      <img class="foot" src="../../images/foot.png">
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        loginForm: {
          username: "18211131111",
          password: "123456"
        },
        UserToken: ""
      };
    },
    methods: {
      login(){
        if(this.isTrue()){
          let token = 'xxxxx';
          sessionStorage.setItem('iosWebToke',token)
          alert('登录成功');
          this.$router.push({ path: "/tabs/todayplease" });

          this.Ajax.post("/Mobile/login",this.loginForm).then(res=>{
            let token = 'xxxxx';
            sessionStorage.setItem('iosWebToke',token)
            alert('登录成功');
            this.$router.push({ path: "/tabs/todayplease" });
          })
        }
      },
      isTrue(){
        const subForm = this.loginForm;
        if(!/^1[34578]\d{9}$/.test(subForm.username)){
          alert('请输入正确的手机号码');
          return false;
        }
        if(subForm.password.length <6){
          alert('密码最少6位');
          return false;
        }
        return true;

      },
    }
  };
</script>
<style scoped>
  .p-wrap {
    height: 100%;
    background: url("../../images/backgroundColor.png") center;
  }

  .h-wrap {
    text-align: center;
    padding-top: 3rem;
    margin-bottom: 2rem;
  }

  .h-wrap .title {
    width: 60%;
  }

  .c-wrap {
    width: 60%;
    margin: 0 auto;
    padding: 1rem 0.5rem;
    background: rgb(230,230,230);
    border: rgb(27,134,255) 3px solid;
    border-radius: 0.2rem;
  }
  .c-wrap .content-item{
    display: flex;
    align-items: center;
    margin-bottom: 0.45rem;
  }
  .c-wrap .content-item span{
    display: inline-block;
    width: 1rem;
    font-size: 0.23rem;
  }
  .c-wrap .content-item input{
    flex: 1;
    border: 2px solid #ddd;
    outline: none;
    height: 0.5rem;
    width: 100%;
    border-radius: 0.1rem;
  }
  .c-wrap .content-btn{
    width: 1rem;
    color: #fff;
    background: rgb(27,134,255);
    margin: 0 auto;
    padding: 0.1rem 0.02rem;
    text-align: center;
    border-radius: 0.09rem;
  }
  .f-wrap {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
</style>
