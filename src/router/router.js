import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/home.vue';
import List from '../components/list/list.vue';

Vue.use(VueRouter);
export default new VueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/home'
        },
		{
			path: '/home',
			name: 'home',
			meta: '首页',
			component: Home
		},
		{
			path: 'list',
			name: 'list',
			component: List,
			meta: '列表'
		}
    ]
});