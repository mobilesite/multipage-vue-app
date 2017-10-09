import Vue from 'vue';
import Router from 'vue-router';
import Generate from '@/businessComponents/Generate/main.vue';
import NotFound from '@/businessComponents/NotFound/main.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/generate',
      component: Generate
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
