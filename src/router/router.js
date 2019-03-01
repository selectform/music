import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/home.vue';
import LocaL from '../pages/locaLeft/locaL.vue';
import LineC from '../pages/lineCentre/lineC.vue';
import VideoR from '../pages/videoRirght/videoR.vue';

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
			component: Home,
			children: [
				{
					path: '/local',
					name: 'local',
					component: LocaL,
					meta: '本地'
				},
				{
					path: '/linec',
					name: 'linec',
					component: LineC,
					meta: '线上'
				},
				{
					path: '/videor',
					name: 'videor',
					component: VideoR,
					meta: '视频右'
				}
			]
		}
    ]
});