// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';
import VueAxios from 'vue-axios';

// import $ from '../../base/jquery/jquery.min.js';
// import * as aaa from '../../base/jquery.cookie.js';
/* eslint-disable no-debug */
// console.log($('html'));
// console.log(jQuery('html'));
// console.log($.cookie);
/* eslint-enable no-debug */

import VueExtension from '../../plugins/vue-extension'
import Page from './Page';
import router from './router/index';

Vue.config.productionTip = false;
Vue.use(VueExtension);
Vue.use(Vuex);
Vue.use(VueAxios, Axios);

// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {

  }
});

/* eslint-disable no-new */
new Vue({
  el: '#page',
  router,
  store,
  template: '<Page></Page>',
  components: { Page }
})
