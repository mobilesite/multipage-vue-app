import Vue from 'vue';
import Router from 'vue-router';
import HelpDetail from '@/businessComponents/Help/main.vue';
import HelpTab1 from '@/businessComponents/Help/Tab1.vue';
import HelpTab2 from '@/businessComponents/Help/Tab2.vue';
import NotFound from '@/businessComponents/NotFound/main.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/help/',
  routes: [
    {
      path: '/',
      // component: {
      //   template: '' //控制当访问/help路径时候，router-view中什么也不展示，否则，如果这里不进行设置，会展示成404页面的内容
      // }
      component: HelpTab1
    },
    {
      path: '/tab1',
      component: HelpTab1
    },
    {
      path: '/tab2',
      component: HelpTab2
    },
    {
      path: '/detail',
      component: HelpDetail
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
