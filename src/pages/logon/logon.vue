<template>
  <div class="p-wrap">
    <div class="h-wrap">
      <span>注册</span>
    </div>
    <div class="c-wrap">
      <div class="content-wrap">
        <div class="content-item">
          <span>用户名</span>
          <input type="text" maxlength="11" v-model="loginForm.username">
        </div>
        <div class="content-item">
          <span>密码</span>
          <input type="password" maxlength="20" v-model="loginForm.password">
        </div>
        <div class="content-item">
          <span>取现密码</span>
          <input type="password" maxlength="20" v-model="loginForm.iconPassword">
        </div>
        <div class="content-item">
          <span>邀请码</span>
          <input type="password" maxlength="20" v-model="loginForm.invitedCOde">
        </div>
        <div class="content-item">
          <span>联系电话</span>
          <input type="password" maxlength="20" v-model="loginForm.mobile">
        </div>
        <div class="content-item">
          <span>真实姓名</span>
          <input type="password" maxlength="20" v-model="loginForm.realname">
        </div>
        <div class="content-item">
          <span>身份证号</span>
          <input type="password" maxlength="20" v-model="loginForm.id_card">
        </div>
        <div class="content-btnSty">
          <div class="content-btn" @click="login">去登录</div>
          <div class="content-btn" @click="logon">提交注册</div>
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
  name: "Logon",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        iconPassword: "",
        invitedCOde: "",
        mobile: "",
        realname: "",
        id_card: ""
      },
      UserToken: ""
    };
  },
  methods: {
    login() {
      this.$router.push({ path: "/login" });
    },
    logon() {
      this.Ajax.post("register", this.loginForm).then(res => {
        if (res.status == 200) {
          sessionStorage.setItem("iosWebToke", token);
          alert("登录成功");
          this.$router.push({ path: "/tabs/announcement" });
        }
      });
    }
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
  margin-bottom: 0.5rem;
}
.h-wrap span {
  font-size: 1rem;
  color: #fff;
}

.h-wrap .title {
  width: 60%;
}

.content-btnSty {
  display: flex;
}
.c-wrap {
  width: 75%;
  margin: 0 auto;
  padding: 1rem 0.5rem;
  background: rgb(230, 230, 230);
  border: rgb(27, 134, 255) 3px solid;
  border-radius: 0.2rem;
}
.c-wrap .content-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.45rem;
}
.c-wrap .content-item span {
  display: inline-block;
  width: 1rem;
  font-size: 0.23rem;
}
.c-wrap .content-item input {
  flex: 1;
  border: 2px solid #ddd;
  outline: none;
  height: 0.5rem;
  width: 100%;
  border-radius: 0.1rem;
}
.c-wrap .content-btn {
  width: 1rem;
  color: #fff;
  background: rgb(27, 134, 255);
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
