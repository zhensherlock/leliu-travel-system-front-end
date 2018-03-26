<template>
  <div>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad">
        <van-cell v-for="item in list" :key="item" :title="item + ''" />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
  import {
    List,
    Cell,
    Panel,
    PullRefresh,
    Icon,
    Lazyload
  } from 'vant';
  export default {
    name: 'Index',
    data() {
      return {
        list: [],
        refreshing: false,
        loading: false,
        finished: false
      };
    },
    methods: {
      onLoad() {
        console.log('load');
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            const text = this.list.length + 1;
            this.list.push(text < 10 ? '0' + text : text);
          }
          this.loading = false;
          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 500);
      },
      onRefresh() {
        setTimeout(() => {
          this.list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          this.finished = false;
          this.refreshing = false;
          window.scrollTo(0, 10);
        }, 1000);
      }
    },
    components: {
      [List.name]: List,
      [Cell.name]: Cell,
      [Panel.name]: Panel,
      [PullRefresh.name]: PullRefresh,
      [Icon.name]: Icon,
      [Lazyload.name]: Lazyload
    }
  };
</script>

<style>
  .van-pull-refresh, .van-pull-refresh__track, .van-list {
    min-height: 100%;
  }
</style>
