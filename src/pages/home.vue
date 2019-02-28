<template>
<div id="home">
    <header class="head">
	<!-- 顶部横条 -->
		<span @click="menue">
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
	<div v-show="ishow">
		<menus :isno="ishow" @give="get"></menus>
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
		menue() {
			this.ishow = true;
			console.log('父menue',this.ishow);
		},
		get (data) {
			this.ishow = data;
			console.log('父get',this.ishow);
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
</style>

