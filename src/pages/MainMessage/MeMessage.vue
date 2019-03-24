<template>
  <div class="all-Select">
    <div class="h-Meheader">
      <div class="h-box">
        <div class="h-tabs">
          <span>待审核</span>
          <p>{{PendingReviewNum}}</p>
        </div>
        <div class="h-tabs">
          <span>请假</span>
          <p>{{LeaveNum}}</p>
        </div>
        <div class="h-tabs">
          <span>出差</span>
          <p>{{LeaveNum}}</p>
        </div>
        <div class="h-tabs h-tabsLast" @click="$router.push({path:'/tabs/pleasegoout?index=1'})">请假</div>
      </div>
    </div>
    <div>
      <!--mescroll滚动区域的基本结构-->
      <!--内容...-->
      <div v-for="(item,index) in dataList" class="c-mainMsg" :key="index" @click="xxx">
        <div class="c-listMsg">
          <div class="c-cirl"></div>
          <span>未审批</span>
          <div class="c-leftTime">
            <p>{{item.time}}</p>
            <p>{{item.date}}</p>
          </div>
          <div class="c-rightTime">
            <p>{{item.stardate}}</p>
            <p>{{item.lastdate}}</p>
            <p>{{item.leaveMsg}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import MeScroll from '../ExternalFile/js/mescroll.min.js'
// import '../ExternalFile/js/mescroll.min.css'

export default {
  name: "MeMessage",
  data() {
    return {
      PendingReviewNum: 2,
      LeaveNum: 3,
      TripNum: 4,
      mescroll: null, //mescroll实例对象
      dataList: [
        {
          time: "06:13",
          date: "2018年10月11日",
          stardate: "2018年11月11日",
          lastdate: "2018年12月11日",
          leaveMsg: "事假"
        },
        {
          time: "06:13",
          date: "2018年10月11日",
          stardate: "2018年11月11日",
          lastdate: "2018年12月11日",
          leaveMsg: "事假"
        },
        {
          time: "06:13",
          date: "2018年10月11日",
          stardate: "2018年11月11日",
          lastdate: "2018年12月11日",
          leaveMsg: "事假"
        },
        {
          time: "06:13",
          date: "2018年10月11日",
          stardate: "2018年11月11日",
          lastdate: "2018年12月11日",
          leaveMsg: "事假"
        },
        {
          time: "06:13",
          date: "2018年10月11日",
          stardate: "2018年11月11日",
          lastdate: "2018年12月11日",
          leaveMsg: "事假"
        },
        {
          time: "06:13",
          date: "2018年10月11日",
          stardate: "2018年11月11日",
          lastdate: "2018年12月11日",
          leaveMsg: "事假"
        }
      ] //列表数据
    };
  },
  mounted() {
    // this.mescroll = new MeScroll(this.$refs.mescroll, {
    //   //在mounted初始化mescroll,确保此处配置的ref有值
    // })
  },
  methods: {
    xxx(index) {
      this.$router.push({ path: "/approval" });
    }
  }
};
</script>

<style scoped>
.all-Select {
  background-color: rgb(250, 250, 250);
}
.h-Meheader {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  padding: 0.1rem 0.1rem;
  background-color: rgb(250, 250, 250);
  z-index: 1;
}

.h-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.8rem;
}

.h-box .h-tabs {
  width: 33.33%;
  text-align: center;
  font-size: 0.25rem;
}

.h-box .h-tabs span {
  display: inline-block;
  margin: 0.1rem 0;
}

.h-box .h-tabsLast {
  font-size: 0.4rem;
}

.c-listMsg {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 2rem;
  text-align: center;
  position: relative;
}

.c-listMsg .c-cirl {
  position: absolute;
  width: 0;
  height: 0;
  top: 0;
  left: 0;
  border-top: 1.2rem solid rgb(252, 150, 75);
  border-right: 1.2rem solid transparent;
}

.c-listMsg > span {
  position: absolute;
  color: #fff;
  top: 0.33rem;
  left: 0;
  transform: rotate(-45deg);
}

.c-leftTime,
.c-rightTime p {
  margin: 0.3rem;
}

ul {
  padding: 0;
  margin: 0;
  overflow: auto;
}

.mescroll {
  position: fixed;
  top: 44px;
  bottom: 0;
  height: auto; /*如设置bottom:50px,则需height:auto才能生效*/
}

.c-mainMsg {
  display: block;
  margin: 0.15rem 0.15rem;
  background-color: rgb(255, 255, 255);
  font-size: 0.25rem;
}

.c-mainMsg:nth-child(1) {
  margin-top: 1.2rem;
}

.c-mainMsg:nth-last-child(1) {
  margin-bottom: 1.4rem;
}
</style>
