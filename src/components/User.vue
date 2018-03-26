<template>
  <div class="order-list">
    <van-tabs :active="displayData.active" @click="onTabsClick" sticky swipeable>
      <van-tab>
        <div slot="title">
          未出行
        </div>
        <van-list
          v-model="displayData.notTravel.loading"
          :finished="displayData.notTravel.finished"
          @load="onNotTravelLoad">
          <van-panel title="【最苏州】2018年3月1日订车" v-for="item in notTravelList" :key="item">
            <div>3月1日-3月4日 苏州触发</div>
            <div>司机联系方式将于2月28日发送</div>
            <div slot="footer">
              <van-button type="default" bottom-action>行程通知单</van-button>
            </div>
          </van-panel>
        </van-list>
        <!--<van-steps direction="vertical">-->

          <!--<van-step>-->
            <!--<h3>【最苏州】2018年3月1日订车</h3>-->
            <!--<p>3月1日-3月4日 苏州触发</p>-->
            <!--<p>司机联系方式将于2月28日发送</p>-->
          <!--</van-step>-->
          <!--<van-step>-->
            <!--<h3>【最苏州】2018年3月1日订车</h3>-->
            <!--<p>3月1日-3月4日 苏州触发</p>-->
            <!--<p>司机联系方式将于2月28日发送</p>-->
          <!--</van-step>-->
          <!--<van-step>-->
            <!--<h3>【最苏州】2018年3月1日订车</h3>-->
            <!--<p>3月1日-3月4日 苏州触发</p>-->
            <!--<p>司机联系方式将于2月28日发送</p>-->
          <!--</van-step>-->

        <!--</van-steps>-->

      </van-tab>
      <van-tab>
        <div slot="title">
          已出行
        </div>
        <van-list
          v-model="displayData.traveled.loading"
          :finished="displayData.traveled.finished"
          @load="onTraveledLoad">
          <van-panel title="【最杭州】2018年3月1日订车" v-for="item in traveledList" :key="item">
            <div>3月1日-3月4日 杭州触发</div>
            <div>司机联系方式将于2月28日发送</div>
            <div slot="footer">
              <van-button type="default" bottom-action>行程通知单</van-button>
            </div>
          </van-panel>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import {
    Tab,
    Tabs,
    Step,
    Steps,
    Panel,
    List,
    Cell,
    Button
  } from 'vant';
  export default {
    name: 'User',
    data() {
      return {
        displayData: {
          traveled: {
            loading: false,
            refreshing: false,
            finished: false,
            offset: 10
          },
          notTravel: {
            loading: false,
            refreshing: false,
            finished: false,
            offset: 10
          },
          active: 0
        },
        traveledList: [],
        notTravelList: []
      };
    },
    methods: {
      onTabsClick(index) {
        this.displayData.active = index;
        if (index === 0 && this.notTravelList.length === 0) {
          this.onNotTravelLoad();
        } else if (index === 1 && this.traveledList.length === 0) {
          this.onTraveledLoad();
        }
      },
      onNotTravelLoad() {
        if (this.displayData.active !== 0) {
          this.displayData.notTravel.loading = false;
          return;
        }
        console.log('onNotTravelLoad');
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.notTravelList.push(this.notTravelList.length + 1);
          }
          this.displayData.notTravel.loading = false;

          // if (this.notTravelList.length >= 40) {
          //   this.displayData.notTravel.finished = true;
          // }
        }, 500);
      },
      onTraveledLoad() {
        if (this.displayData.active !== 1) {
          this.displayData.traveled.loading = false;
          return;
        }
        console.log('onTraveledLoad');
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.traveledList.push(this.traveledList.length + 1);
          }
          this.displayData.traveled.loading = false;

          // if (this.traveledList.length >= 40) {
          //   this.displayData.traveled.finished = true;
          // }
        }, 500);
      }
    },
    components: {
      [Tab.name]: Tab,
      [Tabs.name]: Tabs,
      [Step.name]: Step,
      [Steps.name]: Steps,
      [Panel.name]: Panel,
      [List.name]: List,
      [Cell.name]: Cell,
      [Button.name]: Button
    }
  };
</script>

<style>
  .order-list .van-tabs__content {
    font-size: 14px;
    line-height: 24px;
  }
  .order-list .van-panel__content {
    padding: 10px 15px;
  }
  .order-list .van-button--bottom-action {
    color: #000;
    background-color: #fff;
    height: 40px;
    line-height: 40px;
  }
  .order-list .van-panel__footer {
    padding: 0;
  }
  .order-list .van-panel {
    margin-bottom: 15px;
  }
  .order-list .van-panel__title {
    font-size: 16px;
  }
  .order-list .van-tabs__wrap--content-bottom{
    position: fixed;
    bottom: auto;
    top: 0;
  }
</style>
