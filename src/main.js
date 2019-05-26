// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Ajax from './util/Ajax';
import { Cell, CellGroup } from "vant";
import { Tabbar, TabbarItem } from 'vant';
import { Dialog } from 'vant';
import { Field } from 'vant';

Vue.use(Field);
Vue.use(Dialog);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Cell).use(CellGroup);
Vue.config.productionTip = false;
Vue.prototype.Ajax = Ajax;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
