<template>
	<div id="menuts">
		<div class="menus1">
			<p>登录网易云音乐</p>
			<p>手机电脑多端同步，尽享海量高品质音乐</p>
			<span @click="aaa">立即登录</span>
		</div>
		<ul class="menulist">
			<li v-for="(item,index) in list" :key="item.id">
				<router-link :to="item.to" :key="index">
					<span :key="item.iconl">
						<i v-html="item.iconl" class="iconfont">{{item.iconl}}</i>
						<b>{{item.namel}}</b>
					</span>
					<span :key="index">
						<u>{{item.namer}}</u>
						<i class="iconfont" v-html="item.iconr">{{item.iconr}}</i>
					</span>
				</router-link>
			</li>
		</ul>
		<footer>
			<router-link to="/">
				<i class="iconfont">&#xe63b;</i>
				<b>夜间模式</b>
			</router-link>
			<router-link to="/">
				<i class="iconfont">&#xe63c;</i>
				<b>设置</b>
			</router-link>
			<router-link to="/">
				<i class="iconfont">&#xe630;</i>
				<b>退出</b>
			</router-link>
		</footer>
	</div>
</template>

<script>
import { list } from './data.js';
export default {
	props: ['isno'],
	name: 'menus',
	data() {
		return {
			ishow: null,
			ss: '123',
			list
		}
	},
	mounted() {
	},
	methods: {
		aaa() {
			console.log(this.list);
		}
	}
}
</script>

<style lang="scss">
	.menus1 {
		font-size: 12px;
		height: 1.6rem;
		width: 100%;
		background: url(../../assets/images/topbg1.jpg) no-repeat center;
		display: flex;
		flex-direction: column;
		color: #fff;
		align-items: center;
		justify-content: center;
		span {
			box-sizing: border-box;
			display: inline-block;
			width: 1.5rem;
			height: 0.3rem;
			border-radius: 0.3rem;
			border:1px solid #ccc;
			text-align: center;
			line-height: 0.25rem;
			margin-top: 0.1rem;
			font-size: 14px;
		}
	}
	.menulist {
		display: flex;
		flex-direction: column;
		li a {
			display: flex;
			align-items: center;
			justify-content: space-between;
			color: #444;
			height: 0.4rem;
			& i:nth-child(2){
				color: red;
			}
			& span:nth-child(1) {
				width: 55%;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				i {
					padding: 0 0.08rem;
				}
			}
		}
	}
	#menuts {
		position: relative;
	}
	#menuts footer {
		display: flex;
		position: fixed;
		z-index: 100;
		background: #fff;
		bottom:0;
		left: 0;
		box-sizing: border-box;
		width: 3rem;
		height: 0.4rem;
		box-shadow: 0 -1px 2px #444;
		align-items: center;
		justify-content: space-between;
		padding:0 0.04rem;
		a {
			color: #444;
			i {
				font-size: 18px;
				margin:0 0.04rem;
			} 
		}
	}
</style>
