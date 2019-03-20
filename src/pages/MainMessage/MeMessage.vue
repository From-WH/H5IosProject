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
        <div class="h-tabs h-tabsLast" @click="$router.push({path:'/tabs/pleasegoout?index=1'})">
          请假
        </div>
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
          },
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
        this.$router.push({path: '/approval'});
      }
      //上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
      //   upCallback(page) {
      //     //联网请求
      //     axios
      //       .get('http://192.168.1.139/Mobile/perLeave', {
      //         params: {
      //           num: page.num, //页码
      //           size: page.size //每页长度
      //         }
      //       })
      //       .then(response => {
      //         //请求的列表数据
      //         let arr = response.data
      //         console.log(response)
      //         //如果是第一页需手动制空列表
      //         if (page.num == 1) this.dataList = []
      //         //把请求到的数据添加到列表
      //         this.dataList = this.dataList.concat(arr)
      //         //数据渲染成功后,隐藏下拉刷新的状态
      //         this.$nextTick(() => {
      //           this.mescroll.endSuccess(arr.length)
      //         })
      //       })
      //       .catch(e => {
      //         //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
      //         this.mescroll.endErr()
      //       })
      //   }
      // },
      // // 进入路由时,恢复列表状态
      // beforeRouteEnter(to, from, next) {
      //   // 如果没有配置回到顶部按钮或isBounce,则beforeRouteEnter不用写
      //   next(vm => {
      //     if (vm.mescroll) {
      //       // 恢复到之前设置的isBounce状态
      //       if (vm.mescroll.lastBounce != null) vm.mescroll.setBounce(vm.mescroll.lastBounce)
      //       // 滚动到之前列表的位置 (注意:路由使用keep-alive才生效)
      //       if (vm.mescroll.lastScrollTop) {
      //         vm.mescroll.setScrollTop(vm.mescroll.lastScrollTop)
      //         setTimeout(() => {
      //           // 需延时,因为setScrollTop内部会触发onScroll,可能会渐显回到顶部按钮
      //           vm.mescroll.setTopBtnFadeDuration(0) // 设置回到顶部按钮显示时无渐显动画
      //         }, 16)
      //       }
      //     }
      //   })
      // },
      // // 离开路由时,记录列表状态
      // beforeRouteLeave(to, from, next) {
      //   // 如果没有配置回到顶部按钮或isBounce,则beforeRouteLeave不用写
      //   if (this.mescroll) {
      //     this.mescroll.lastBounce = this.mescroll.optUp.isBounce // 记录当前是否禁止ios回弹
      //     this.mescroll.setBounce(true) // 允许bounce
      //     this.mescroll.lastScrollTop = this.mescroll.getScrollTop() // 记录当前滚动条的位置
      //     this.mescroll.hideTopBtn(0) // 隐藏回到顶部按钮,无渐隐动画
      //   }
      //   next()
    }
  };
</script>

<style scoped>
  .all-Select{
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
    border-top: 1.2rem solid rgb(252,150,75);
    border-right: 1.2rem solid transparent;
  }

  .c-listMsg > span {
    position: absolute;
    color: #fff;
    top: 0.33rem;
    left: 0;
    transform: rotate(-45deg);
  }

  .c-leftTime, .c-rightTime p {
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

  .c-leftTime {
  }
</style>
