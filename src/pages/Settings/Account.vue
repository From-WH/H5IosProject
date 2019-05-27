<template>
  <div>
    <div class="t-top">
      <div class="t-top-img">
        <img src="../../images/weixin.png" alt>
        <div class="t-status">
          <span>111{{wx_id}}</span>
          <span>状态:停用</span>
        </div>
      </div>
      <div>
        <van-switch v-model="checked"/>
      </div>
    </div>
    <div class="f-box">
      <div class="f-left">
        <span>订单数{{}}</span>
        <span>成单数{{}}</span>
        <span>收款金额{{}}</span>
        <span>最近收款时间{{}}</span>
        <span>账号添加时间{{}}</span>
      </div>
      <div class="f-right">
        <span>置顶</span>
        <span>删除</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Account",
  data() {
    return {
      checked: true
    };
  }
};
</script>
<style scoped>
.t-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 15px;
}
.t-top img {
  width: 70px;
  height: 70px;
}
.t-status {
  display: flex;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.t-top-img {
  display: flex;
}
.f-box {
  background-color: #fff;
  display: flex;
  font-size: 16px;
  padding: 15px;
  justify-content: space-between;
}
.f-left {
  display: flex;
  flex-direction: column;
}
.f-right {
  display: flex;
  flex-direction: column;
}
</style>
