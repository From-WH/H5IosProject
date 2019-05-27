<template>
  <div class="all-Select">
    <div class="h-title">
      <p>设置</p>
    </div>
    <div class="c-top">
      <van-cell title="用户ID" value="{{}}"/>
      <van-cell title="手机号" value="{{}}"/>
      <van-cell title="微信利率" value="{{}}"/>
      <van-cell title="支付宝利率" value="{{}}"/>
    </div>
    <div class="c-content">
      <van-cell icon="balance-list-o" title="资金明细" is-link to="index"/>
      <van-cell icon="qr" title="推广二维码" is-link to="index"/>
      <van-cell icon="friends-o" title="团队管理" is-link to="index"/>
      <van-cell icon="bill-o" title="账号管理" is-link to="/account"/>
    </div>
    <div class="c-footer">
      <van-cell icon="records" title="修改密码" is-link to="index"/>
      <van-cell icon="completed" title="修改二级密码" is-link to="index"/>
    </div>
  </div>
</template>

<script>
// import MeScroll from '../ExternalFile/js/mescroll.min.js'
// import '../ExternalFile/js/mescroll.min.css'

export default {
  name: "MeMessage",
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.h-title {
  font-size: 18px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1rem;
  background-color: rgb(3, 169, 245);
}
.c-top {
  margin-bottom: 15px;
}
.c-content {
  margin-bottom: 15px;
}
</style>
