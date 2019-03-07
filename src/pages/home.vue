<template>
<div id="home">
    <header class="head">
	<!-- 顶部横条 -->
		<span @click="menut">
			<i class="iconfont">&#xe74c;</i>
		</span>
		<mu-button flat @click="gotop1('locaL')">
			<i class="iconfont">&#xe61f;</i>
		</mu-button>
		<mu-button flat @click="gotop1('lineC')">
			<i class="iconfont">&#xe617;</i>
		</mu-button>
		<mu-button flat @click="gotop1('videoR')">
			<i class="iconfont">&#xe61e;</i>
		</mu-button>
		<span>
			<i class="iconfont">&#xe62c;</i>
		</span>
	</header>
	<div>
		<!-- <router-view></router-view> -->
		<components :is="istemp"></components>
	</div>
	<div><!--侧栏菜单---->
		<transition name="abs">
			<div class="menu" @click.self="offMenu" v-show="ishow">
				<div class="menu1">
					<menus></menus>
				</div>
			</div>
		</transition>
	</div>
	
	
</div> 
</template>
<script>
import LocaL from '../pages/locaLeft/locaL.vue';
import LineC from '../pages/lineCentre/lineC.vue';
import VideoR from '../pages/videoRirght/videoR.vue';
import Menus from './menu/index.vue';
export default {
    name: 'home',
    data() {
        return {
            ishow: false,
			istemp: 'lineC'
        }
    },
	components: {
		'locaL': LocaL,
		'lineC': LineC,
		'videoR': VideoR,
		'menus': Menus
	},
	methods: {
		menut() {
			this.ishow = true;
		},
		offMenu() {
			this.ishow = false;
		},
		gotop1(data) {
			//顶部组件切换
			this.istemp = data;
		}
	}
}
</script>
<style lang="scss">
    #home {
        font-size: 14px;
		position: relative;
    }
	.head {
		display: flex;
		justify-content: space-between;
		background: red;
		height: 0.4rem;
		line-height: 0.4rem;
		i {
			color: white;
			font-size: 20px;
		}
		& > span {
			display: inline-block;
			width: 0.4rem;
			text-align: center;
		}
		div {
			// width: 60%;
			height: 100%;
			display: flex;
			justify-content: space-around;
		}
	}
	.head .router-link-active {
		color: #fff;
		i {
			color: #fff;
		}
	}
	// 菜单样式
	.menu {
		position: fixed;
		z-index: 99;
		left: 0;
		top: 0;
		width: 100%;
		height:100%;
		overflow-y: auto;
		background: rgba(0,0,0,0.4);
		
	}
	.menu1 {
		width: 3rem;
		background: #fff;
	}
	.abs-enter {//进入
		transform: translate(-100%,0);
	}
	.abs-enter-to {//进入结束
		transform: translate(0,0);
	}
	.abs-enter-active {//进入过程
		transition: all 0.8s;
	}
	.abs-leave {
		transform: translate(0,0);
	}
	.abs-leave-to {
		transform: translate(-100%,0);
	}
	.abs-leave-active {
		transition: all 0.8s;
	}
</style>
