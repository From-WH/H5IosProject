<template>
  <div class="allPage">
    <div class="querypage">
      <router-view></router-view>
    </div>
    <!-- <div class="footer">
      <div class="f-footIcon">
        <div v-for="(item,index) in tabs" :key="index" @click="itemClick(index)">
          <img :src="item.icon" alt="申请打卡" v-if="item.isSelect">
          <img :src="item.noIcon" alt="申请打卡" v-else>
          <p>{{item.title}}</p>
        </div>
      </div>
    </div> -->
    <van-tabbar route  v-model="active">
      <van-tabbar-item replace to="/tabs/Announcement?index=0" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/tabs/order?index=1" icon="search">订单</van-tabbar-item>
      <van-tabbar-item replace to="/tabs/memessage?index=2" icon="setting-o">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "QueryPage",
  data() {
    return {
      Please: false,
      PleaseOut: true,
      me: true,
      active: 0,
      tabs: [
        // {
        //   title: "首页",
        //   noIcon: require("../../images/Please.png"),
        //   icon: require("../../images/Pleasehover.png"),
        //   isSelect: false,
        //   path: "/tabs/Announcement?index=0"
        // },
        // {
        //   title: "订单",
        //   noIcon: require("../../images/pleaseGoOut.png"),
        //   icon: require("../../images/pleaseGoOutHover.png"),
        //   isSelect: false,
        //   path: "/tabs/order?index=1"
        // },
        // {
        //   title: "个人",
        //   noIcon: require("../../images/me.png"),
        //   icon: require("../../images/hoverMe.png"),
        //   isSelect: false,
        //   path: "/tabs/memessage?index=2"
        // }
      ]
    };
  },
  watch: {
    $route(to, from) {
      console.log("to", to);
      this.changeRoute(to.query.index);
    }
  },
  methods: {
    itemClick(index) {
      this.changeSelect(index);
      this.$router.push({ path: this.tabs[index].path });
    },
    changeSelect(index) {
      index = Number(index);
      let tabs = this.tabs;
      for (let i = 0; i < tabs.length; i++) {
        if (index === i) {
          tabs[i].isSelect = true;
        } else {
          tabs[i].isSelect = false;
        }
      }
    },
    changeRoute(index) {
      if (index === undefined) {
        index = 0;
      }
      this.changeSelect(index);
    }
  },
  mounted() {
    let index = this.$route.query.index;
    this.changeRoute(index);
  }
};
</script>

<style scoped>
.allPage,
.querypage {
  height: 100%;
}
.footer {
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
}

.f-footIcon {
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* height: 91px; */
  padding: 0.05rem 0;
  background-color: #ffffff;
}

.f-footIcon div {
  width: 33.333%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.f-footIcon div img {
  margin: 0 auto;
  width: 0.5rem;
  height: 0.5rem;
}

.f-footIcon div p {
  margin-top: 0.08rem;
  font-size: 0.2rem;
}
</style>
