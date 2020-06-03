import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    }
    // { //history模式下，404页面
    //   path: '*',
    //   component: () => import("@/views/404.vue"),
    //   hidden: true
    // }
  ]
});
