import Vue from 'vue';
import Router from 'vue-router';
import NotFound from '@/businessComponents/NotFound/main.vue';
import AddUser from '@/businessComponents/AddUser/main.vue';
import PublishStatus from '@/businessComponents/PublishStatus/main.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: '/',
    routes: [
        {
            path: '/',
            component: {
                template: '' //控制当访问/路径时候，router-view中什么也不展示，否则，如果这里不进行设置，会展示成404页面的内容
            }
        },
        {
            path: '/addUser',
            component: AddUser
        },
        {
            path: '/publishStatus',
            component: PublishStatus
        },
        {
            path: '*',
            component: NotFound
        }
    ]
})
