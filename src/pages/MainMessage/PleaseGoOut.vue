<template>
  <div class="p-wrap">
    <div class="topColor"></div>
    <div class="h-Leave">请假申请</div>
    <div class="c-Types">
      <div class="c-type-left">
        <img src="../../images/leave-xing.png" alt="">
        <span>请假类型</span>
      </div>
      <div class="c-type-right" v-on:click="someThings()">
        <span>{{someThing}}</span>
        <img src="../../images/leave-x.png" alt="">
      </div>
    </div>
    <div class="c-times">
      <div class="c-times-top">
        <div class="c-times-star">
          <div>
            <span>开始时间</span>
          </div>
          <div v-on:click="changestarTimes()">
            <span id="starTime">{{starTimeYear}}{{starTimeMouth}}{{starTimeDate}}</span>
            <img src="../../images/leave-x.png" alt="">
          </div>
        </div>
      </div>
      <div class="c-times-bottom">
        <div class="c-times-last">
          <div>
            <span>结束时间</span>
          </div>
          <div v-on:click="changeLastTimes()">
            <span>{{lastTimeYear}}{{lastTimeMouth}}{{lastTimeDate}}</span>
            <img src="../../images/leave-x.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="c-c-someThings">
      <div class="c-c-someThings-top">
        <img src="../../images/leave-xing.png" alt="">
        <span>请假事由</span>
      </div>
      <div class="text">
        <textarea v-model="textVal" id="" rows="10"
                  placeholder="请输入请假事由"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
  import 'weui';
  import weui from 'weui.js';

  export default {
    name: 'PleaseGoOut',
    data() {
      return {
        someThing: '事假',
        starTimeYear: '2000年',
        starTimeMouth: '1月',
        starTimeDate: '1日',
        lastTimeYear: '2000年',
        lastTimeMouth: '1月',
        lastTimeDate: '1日',
        textVal:''
      }
    },
    methods: {
      someThings() {
        weui.picker([{
          label: '事假',
          value: 0
        }, {
          label: '病假',
          value: 1
        }], {
          onChange: (result) => {
            this.someThing = result[0].label
            console.log(result[0].label);
          },
          onConfirm: (result) => {
            this.someThing = result[0].label
            console.log(result);
          }
        });
      },
      changestarTimes() {
        weui.datePicker({
          start: 2000,
          end: new Date().getFullYear(),
          onChange: (result) => {

          },
          onConfirm: (result) => {
            this.starTimeYear = result[0].label
            this.starTimeMouth = result[1].label
            this.starTimeDate = result[2].label
          }
        });
      },
      changeLastTimes(){
        weui.datePicker({
          start: 2000,
          end: new Date().getFullYear(),
          onChange: (result) => {

          },
          onConfirm: (result) => {
            this.lastTimeYear = result[0].label
            this.lastTimeMouth = result[1].label
            this.lastTimeDate = result[2].label
          }
        });
      },
  },
  mounted()
  {

  }
  }
</script>

<style scoped>

  .topColor {
    height: 0.8rem;
    background-color: rgb(51, 146, 251);
  }

  .p-wrap {
    height: 100%;
    background: rgb(245, 245, 245) center;
    font-size: 0.27rem;
  }

  .p-wrap .h-Leave {
    text-align: center;
    padding: 0.2rem 0;
    color: rgb(27, 134, 255);
    font-size: 0.35rem;
    margin-bottom: 0.8rem;
    background: #fff center;
  }

  .p-wrap .c-Types {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.1rem 0.2rem;
    background: #fff center;
    margin-bottom: 0.5rem;
  }

  .p-wrap .c-Types .c-type-right img {
    width: 0.2rem;
    height: 0.2rem;
    margin-left: 0.09rem;
  }

  .p-wrap .c-Types .c-type-right, .p-wrap .c-Types .c-type-left {
    display: flex;
    align-items: center;
  }

  .p-wrap .c-Types .c-type-left img {
    width: 0.1rem;
    height: 0.1rem;
    margin-right: 0.09rem;
  }

  .c-times {
    margin-bottom: 0.5rem;
  }

  .c-times-star, .c-times-last {
    display: flex;
    background-color: #fff;
    padding: 0.1rem 0.2rem;
    padding-left: 0.38rem;
    justify-content: space-between;
  }

  .c-times-star img, .c-times-last img {
    width: 0.2rem;
    height: 0.2rem;
  }

  .c-c-someThings {
    background-color: #fff;
    padding: 0.1rem 0.2rem;
  }

  .c-c-someThings img {
    margin-right: 0.09rem;
  }

  .c-c-someThings .c-c-someThings-top {
    display: flex;
    align-items: center;
  }

  .c-c-someThings .c-c-someThings-top img {

    width: 0.1rem;
    height: 0.1rem;
  }

  .text {
    width: 100%;
  }

  .text textarea {
    width: 90%;
    outline: none;
    padding: 0.3rem;
    resize: none;
    border: 0;
    font-size: 0.3rem;
  }
</style>
