import Vue from 'vue'
import Router from 'vue-router'
import wh from '../util/common';


Vue.use(Router);
const Login = () => import('../pages/Login/Login.vue');
const logon = () => import('../pages/logon/logon.vue');
const QueryPage = () => import('../pages/MainMessage/QueryPage.vue');
const Announcement = () => import('../pages/MainMessage/Announcement.vue');
const Order = () => import('../pages/MainMessage/Order.vue');
const MeMessage = () => import('../pages/MainMessage/MeMessage.vue');
const Approval = () => import('../pages/ApprovalStatus/Approval')

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: Login,
      name:'Login'
    },
    {
      path: '/logon',
      component: logon,
      name:'Logon'
    },
    {
      path: '/tabs',
      redirect: '/login',
      component: QueryPage,
      children: [
        {
          path: 'announcement',
          component: Announcement,
          name:'Announcement'
        },
        {
          path: 'order',
          component: Order,
          name:'Order'
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
