<template>
<div id="home">
    <header class="head">
	<!-- 顶部横条 -->
		<span>
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
	<div class="menued">
		<menus></menus>
	</div>
	
	
</div> 
</template>
<script>
import Menus from './menu/index.vue';
export default {
    name: 'home',
    data() {
        return {
            cc: '主页',
        }
    },
	components: {
		'menus': Menus
	}
}
</script>
<style lang="scss">
    #home {
        font-size: 20px;
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
	.menued {
		position: fixed;
		z-index: 99;
		width: 3.75rem;
		height: 6.67rem;
		background: rgba(0,0,0,0.3);
	}
</style>

