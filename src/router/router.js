import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/home.vue';
import CC from '../pages/cc.vue';

Vue.use(VueRouter);
export default new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            component: Home,
            meta: '首页',
            name: 'home'

        },
        {
            path: '/cc',
            component: CC,
            meta: 'cc'
        }
    ]
});