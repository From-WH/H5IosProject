<template>
  <div class="h-warp">
    <div class="topColor" @click="backOut()">
      <img src="../../images/Back.png" alt="">
    </div>
    <div class="h-title">
      申请请假
    </div>
    <div class="c-msg">
      <div class="c-applicant">
        <span>申请人：某某某</span>
      </div>
      <div class="c-starTime">
        <span>开始日期：2019年几月几日</span>
      </div>
      <div class="c-stopTime">
        <span>结束时间：2019年几月几日</span>
      </div>
      <div class="c-timaLangs">
        <span>时间段：14:00-15:00</span>
      </div>
    </div>
    <div class="c-someThings">
      <div class="c-someThingsTop">
        请假事由：<span>啊实打实的撒旦撒多</span>
      </div>
    </div>
    <span class="c-PromptMessage">温馨提示：如果您的申请长时间没有通过审核请通过电话联系</span>
    <div class="f-Approval">
      <div class="f-select" v-for="(item,index) in tabs" :key="index" @click="selectTabs(index)">
        <div>
          <span :class="{active:(item.action===true)}">{{item.title}}</span>
        </div>
      </div>

    </div>
    <div class="f-adopt">通过审核</div>
  </div>

</template>

<script>
  export default {
    name: "Approval",
    data(){
      return{
        tabs:[
          {
            title:'通过审核',
            action:true
          },
          {
            title:'审核中',
            action:false
          },
          {
            title:'驳回审核',
            action:false
          }
        ]
      }
    },
    methods:{
      selectTabs(index){
        let tabs = this.tabs;
        for (let i = 0; i < tabs.length; i++) {
          if (index === i) {
            tabs[i].action = true
          } else {
            tabs[i].action = false
          }
        }
      },
      backOut(){
        this.$router.push({path: 'tabs/memessage?index=2'});
      }
    }
  }
</script>

<style scoped>
  body {
    background: rgb(245, 245, 245)
  }

  .topColor {
    height: 0.8rem;
    background-color: rgb(51, 146, 251);
    display: flex;
    align-items: center;
  }
  .topColor > img{
    width: 0.3rem;
    height: 0.5rem;
    margin-left: 0.2rem;
  }

  .h-warp {
    height: 100%;
    background: rgb(245, 245, 245) center;
  }
  .h-warp .h-title {
    text-align: center;
    padding: 0.2rem 0;
    color: rgb(27, 134, 255);
    font-size: 0.35rem;
    margin-bottom: 0.5rem;
    background: #fff center;
  }
  .c-applicant ,.c-starTime ,.c-stopTime,.c-timaLangs{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.25rem;
    padding: 0.2rem 0.2rem;
    background: #fff center;
    border-bottom: 1px solid rgb(207,207,207);
  }
  .c-timaLangs{
    border-bottom: none;
    margin-bottom: 0.4rem;
  }
  .c-someThingsTop{
    display: flex;
    height: 2.5rem;
    font-size: 0.25rem;
    padding: 0.2rem 0.2rem;
    background: #fff center;
  }
  .c-PromptMessage{
    text-align: center;
    display: block;
    font-size: 0.2rem;
    padding: 0.3rem 0;
    color: #ddd;
    margin-bottom: 0.5rem;
  }
  .f-Approval{
    display: flex;
    justify-content: space-around;
  }

  .f-Approval .f-select span{
    display: flex;
    padding: 0.15rem 0.2rem;
    border-radius: 10px;
    background-color: rgb(230,230,230);
    color: #fff;
  }
  .f-Approval .f-select .active{
    background-color: rgb(51, 146, 251);
  }
  .f-adopt{
    width: 1rem;
    margin: 0 auto;
    margin-top: 1.6rem;
    text-align: center;
    padding: 0.15rem 0.25rem;
    border-radius: 10px;
    background-color: rgb(51, 146, 251);;
    color: #fff;
  }
</style>
