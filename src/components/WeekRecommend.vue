<template>
  <div class="week-recommend">
    <van-pull-refresh v-model="displayData.refreshing" @refresh="onRefresh">
      <van-list v-model="displayData.loading" :finished="displayData.finished" @load="onLoad" :offset="displayData.offset">
        <div v-for="item in list" :key="item" class="product-item">
          <img
            class="product-image"
            alt=""
            v-lazy="img"
          />
          <div class="product-title">众筹 | 上海迪士尼小镇烟花晚会{{ item }}</div>
          <div class="product-action">
            <van-icon name="like-o" />
            <span class="product-action-value">123</span>
            <van-icon name="pending-evaluate" />
            <span class="product-action-value">123</span>
            <van-icon name="share" />
            <span class="product-action-value">123</span>
          </div>
        </div>
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
    name: 'WeekRecommend',
    data() {
      return {
        displayData: {
          loading: false,
          refreshing: false,
          finished: false,
          offset: 100
        },
        list: [],
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521715539325&di=f146d680093778887f5ee804bdde0df5&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fexp%2Fw%3D480%2Fsign%3Dcab5e1009f0a304e5222a1f2e1c9a7c3%2F5366d0160924ab18a08174333dfae6cd7b890b1a.jpg'
      };
    },
    methods: {
      onLoad() {
        console.log('load');
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push(this.list.length + 1);
          }
          this.displayData.loading = false;
        }, 500);
      },
      onRefresh() {
        setTimeout(() => {
          this.list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          this.displayData.finished = false;
          this.displayData.refreshing = false;
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
  .week-recommend{
    padding: 5px;
  }
  .product-item {
    margin-bottom: 12px;
  }
  .product-item .van-panel__header {
    display: none;
  }
  .product-image {
    height: 120px;
    width: 100%;
  }
  .product-title, .product-action {
    color: #666;
    padding: 0 10px;
  }
  .product-action {
    font-size: 14px;
    margin-top: 5px;
  }
  .product-action > * {
    vertical-align: middle;
    display: inline-block;
  }
  .product-action-value {
    margin-right: 10px;
  }
  img, div[lazy] {
    padding: 5px;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    background-size: 315px 250px;
    background-position: 15px;
    background-repeat: no-repeat;
    box-sizing: border-box;
  }
</style>
