<template>
  <div class="main-layout">
    <div class="min-container">
      <router-view/>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home" to="index">首页</van-tabbar-item>
      <van-tabbar-item icon="tosend" dot to="recommend">本周推荐</van-tabbar-item>
      <van-tabbar-item icon="add-o" to="new">新建</van-tabbar-item>
      <van-tabbar-item icon="contact" info="20" to="user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vant';
  export default {
    name: 'MainLayout',
    data() {
      return {
        active: 0
      };
    },
    methods: {
    },
    components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem
    }
  };
</script>

<style>
  html, body, #app, .main-layout, .min-container {
    height: 100%;
  }
  .min-container {
    padding-bottom: 50px;
    overflow: auto;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing:border-box;
  }
  .van-tabbar {
    z-index: 500;
  }
</style>
