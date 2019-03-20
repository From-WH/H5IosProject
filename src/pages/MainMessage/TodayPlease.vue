<template>
  <div class="h-wrap">
    <div class="h-header">
      <p class="h-time">{{NowTime}}</p>
      <p class="h-date">{{NowDate}} 星期{{day}}</p>
    </div>
    <div class="c-main">
      <div class="c-leftLine">
        <div class="c-line"></div>
        <div class="c-scolAction">
          <div class="c-scol"></div>
          <div class="c-scol"></div>
          <div class="c-scol"></div>
        </div>
      </div>
      <div class="c-content">
        <div class="c-moring">
          <p>上午打卡</p>
          <p>{{MorningTime}}</p>
        </div>
        <div class="c-Afternoon">
          <p>下午打卡</p>
          <p>{{AfternoonTime}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name:'TodayPlease',
  data() {
    return {
      NowTime: '',
      NowDate: '',
      day: '',
      MorningTime: '08:30',
      AfternoonTime: '6:00' || '未打卡'
    }
  },
  methods: {
    NowTimeLook() {
      var date = new Date()
      this.NowTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
      this.NowDate = date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日'
      this.day = '日一二三四五六'.charAt(date.getDay())
    },
    nowTimes() {
      setInterval(this.NowTimeLook, 1000)
    }
  },
  // 挂载完成时
  mounted() {
    this.NowTimeLook();
    this.nowTimes()
  }
}
</script>

<style>
body, p {
  margin: 0px;
  padding: 0px;
}
.h-wrap {
  height: 100%;
  background: url('../../images/backgroundColor.png') center;
}
.h-header {
  padding-top: 0.7rem;
  color: #fff;
  padding-left: 0.3rem;
}
.h-header .h-time {
  font-size: 1.2rem;
  font-weight: bold;
}
.h-header .h-date {
  font-size: 0.4rem;
}
.c-main {
  height: 6.3rem;
  margin: 1rem 0.2rem 0 0.2rem;
  border-radius: 15px;
  background-color: #fff;
  position: relative;
}
.c-leftLine .c-line {
  height: 5.6rem;
  border: 1px solid #deeeff;
  display: inline-flex;
  margin-left: 1.14rem;
  margin-top: 0.3rem;
}
.c-leftLine .c-scolAction {
  position: absolute;
  top: 0;
}
.c-scolAction .c-scol {
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50px;
  background-color: #3594fd;
  margin-bottom: 1.7rem;
  margin-left: 1rem;
  margin-top: 1rem;
}
.c-content {
  position: absolute;
  top: 1.8rem;
  left: 1.8rem;
  color: #0379fd;
  font-size: 0.3rem;
}
.c-content p{
  padding: 0.1rem 0;
}
.c-content .c-moring {
  margin-bottom: 0.9rem;
}



</style>
