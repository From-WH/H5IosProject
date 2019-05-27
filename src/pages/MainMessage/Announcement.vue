<template>
  <div class="h-wrap">
    <div class="h-title">
      <p>公告</p>
    </div>
    <div class="c-Annou">
      <div class="c-annoucontent">{{announcement}}</div>
      <div class="b-btnMsg">
        <div class="b-btn">
          <div class="c-type">可接单/可提现额度：</div>
          <div class="c-money">¥{{}}</div>
        </div>
        <div class="b-btn">
          <div class="c-type">充值余额：</div>
          <div class="c-money">¥{{t_recharge_user}}</div>
        </div>
        <div class="b-btn">
          <div class="c-type">已接单金额：</div>
          <div class="c-money">¥{{t_recordflow}}</div>
        </div>
        <div class="b-btn">
          <div class="c-type">已接单奖励金额：</div>
          <div class="c-money">¥{{money_user_fee}}</div>
        </div>
        <div class="b-btn">
          <div class="c-type">一级推荐奖励金额：</div>
          <div class="c-money">¥{{money_user_fee_one}}</div>
        </div>
        <div class="b-btn">
          <div class="c-type">二级推荐奖励金额：</div>
          <div class="c-money">¥{{money_user_fee_two}}</div>
        </div>
      </div>
    </div>
    <van-dialog
      v-model="show1"
      title="充值"
      show-cancel-button
      show-confirm-button
      @confirm="clickRecharge"
    >
      <van-cell-group>
        <van-field v-model="value" placeholder="请输入用户名"/>
        <van-field v-model="value" placeholder="请输入用户名"/>
        <van-field v-model="value" placeholder="请输入用户名"/>
        <van-field v-model="value" placeholder="请输入用户名"/>
      </van-cell-group>
    </van-dialog>
    <van-dialog v-model="show2" title="提现" show-cancel-button @confirm="clickwithdraw">
      <img src="https://img.yzcdn.cn/1.jpg">
    </van-dialog>
    <div class="b-btnButton">
      <span class="Recharge" @click="Recharge">充值</span>
      <span class="withdraw" @click="withdraw">提现</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Announcement",
  data() {
    return {
      announcement: "111",
      show1: false,
      show2: false,
      Recharge: {
        pay_username: "",
        pay_bankno: "",
        money_recharge: "",
        img_url: "",
        create_time: "",
        sub_type: 0
      },
      withdraw: {
        pay_username: "",
        pay_bankno: "",
        money_recharge: "",
        img_url: "",
        create_time: "",
        sub_type: 1
      }
    };
  },
  // 挂载完成时
  mounted() {
    this.init()
  },
  methods: {
    init(){
      this.getData()
    },
    getData() {
      this.Ajax.post("", {
        token: sessionStorage.getItem("iosWebToke", token),
        data: this.withdraw
      }).then(res => {});
    },
    Recharge() {
      this.show1 = true;
    },
    withdraw() {
      this.show2 = true;
    },
    clickRecharge() {
      this.Ajax.post("", {
        token: sessionStorage.getItem("iosWebToke", token),
        data: this.withdraw
      }).then(res => {});
    },
    clickwithdraw() {
      this.Ajax.post("", {
        token: sessionStorage.getItem("iosWebToke", token),
        data: this.withdraw
      }).then(res => {});
    }
  }
};
</script>

<style>
body,
p {
  margin: 0px;
  padding: 0px;
}
.h-title {
  font-size: 18px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1rem;
  background-color: rgb(3, 169, 245);
}
.c-annoucontent {
  padding: 9px;
  margin: 9px;
  min-height: 200px;
  font-size: 14px;
  border-radius: 3px;
  background-color: rgb(0, 151, 136);
  color: rgb(240, 231, 231);
}
.c-type {
  font-size: 12px;
}
.c-money {
  color: rgb(196, 73, 90);
}
.b-btnMsg {
  display: flex;
  background-color: #fff;
  flex-wrap: wrap;
  margin: 9px;
  border-radius: 3px;
}
.b-btnMsg .b-btn {
  width: 33%;
  display: flex;
  margin: 5px 0;
  align-items: center;
  flex-direction: column;
}
.b-btnButton {
  display: flex;
  justify-content: center;
  margin-top: 0.4rem;
}
.b-btnButton span {
  width: 2.3rem;
  padding: 10px 0;
  display: block;
  text-align: center;
  color: #fff;
  border-radius: 3px;
}
.b-btnButton .Recharge {
  background-color: rgb(7, 193, 96);
  margin-right: 10px;
}
.b-btnButton .withdraw {
  background-color: rgb(3, 169, 245);
}
</style>
