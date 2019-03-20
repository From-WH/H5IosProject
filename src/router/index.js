import Vue from 'vue'
import Router from 'vue-router'
import wh from '../util/common';


Vue.use(Router);
const Login = () => import('../pages/Login/Login.vue');
const QueryPage = () => import('../pages/MainMessage/QueryPage.vue');
const TodayPlease = () => import('../pages/MainMessage/TodayPlease.vue');
const PleaseGoOut = () => import('../pages/MainMessage/PleaseGoOut.vue');
const MeMessage = () => import('../pages/MainMessage/MeMessage.vue');
const Approval = () => import('../pages/ApprovalStatus/Approval')

let router = new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/tabs',
      redirect: '/',
      component: QueryPage,
      children: [
        {
          path: 'todayplease',
          component: TodayPlease
        },
        {
          path: 'pleasegoout',
          component: PleaseGoOut
        },
        {
          path: 'memessage',
          component: MeMessage
        },
      ]
    },
    {
      path: '/approval',
      component: Approval
    },
  ]
});
router.beforeEach((to, from, next) => {
  // let getToken = wh.getToken().token;
  // if (!getToken) {
  //   if (to.path !== '/') {
  //     return next({path: '/'});
  //   } else {
  //     next();
  //   }
  // } else {
  //   if (to.path === '/') {
  //     return next({ path: '/tabs/todayplease' });
  //   }
  // }
  /* 路由发生变化修改页面title */
  // if (to.meta.title) {
  //   document.title = to.meta.title
  // }else{
  //   document.title = '';
  // }
  next()
});
export default router;
