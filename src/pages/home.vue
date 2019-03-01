<template>
<div id="home">
    <header class="head">
	<!-- 顶部横条 -->
		<span @click="menut">
			<i class="iconfont">&#xe74c;</i>
		</span>
		<div>
			<router-link to="/">
				<i class="iconfont">&#xe67a;</i>
			</router-link>
			<router-link to="/">
				<i class="iconfont">&#xe661;</i>
			</router-link>
			<router-link to="/">
				<i class="iconfont">&#xe61e;</i>
			</router-link>
		</div>
		<span>
			<i class="iconfont">&#xe62c;</i>
		</span>
	</header>
	<div>
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
import Menus from './menu/index.vue';
export default {
    name: 'home',
    data() {
        return {
            ishow: false
        }
    },
	components: {
		'menus': Menus
	},
	methods: {
		menut() {
			console.log('开');
			this.ishow = true;
		},
		offMenu() {
			this.ishow = false;
			console.log('关');
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
		background: #E5473B;
		height: 0.4rem;
		line-height: 0.4rem;
		i {
			color: #fff;
			font-size: 20px;
		}
		& > span {
			display: inline-block;
			width: 0.4rem;
			text-align: center;
		}
		div {
			width: 60%;
			height: 100%;
			display: flex;
			justify-content: space-around;
		}
	}
	// 菜单样式
	.menu {
		position: absolute;
		z-index: 99;
		left: 0;
		top: 0;
		width: 100%;
		height: 6.67rem;
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

