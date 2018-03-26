import Vue from 'vue';
import Vuex from 'vuex';
import Router from 'vue-router';

Vue.use(Router);
Vue.use(Vuex);

const router = new Router({
  routes: [
    {
      path: '/home',
      component: () => import('@/components/layouts/MainLayout'),
      children: [
        {
          path: 'index',
          name: 'Index',
          component: () => import('@/components/Index'),
          meta: { title: '首页' }
        },
        {
          path: 'recommend',
          name: 'WeekRecommend',
          component: () => import('@/components/WeekRecommend'),
          meta: { title: '每周推荐' }
        },
        {
          path: 'user',
          name: 'User',
          component: () => import('@/components/User'),
          meta: { title: '个人中心' }
        }
      ]
    },
    {
      path: '/home',
      component: () => import('@/components/layouts/NonTabberLayout'),
      children: [
        {
          path: 'new',
          name: 'New',
          component: () => import('@/components/New'),
          meta: { title: '新建' }
        }
      ]
    },
    {
      path: '*',
      redirect: '/home/index'
    }
  ]
});

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export default router;
