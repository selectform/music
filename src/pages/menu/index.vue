<template>
	<div class="menued" @click.self="mous" v-show="isno">
		<div class="menus">
			<transition name="mouse">
				<div class="menus1">
					<p>登录网易云音乐</p>
					<p>手机电脑多端同步，尽享海量高品质音乐</p>
					<span>立即登录</span>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
export default {
	props: ['isno'],
	name: 'menus',
	data() {
		return {
			ishow: null
		}
	},
	methods: {
		mous() {
			console.log('isno',this.isno);
			 this.ishow = this.isno;
			 this.$emit('give',this.show);
		}
	}
}
</script>

<style lang="scss">
	.menued {
		position: fixed;
		z-index: 99;
		width: 100%;
		height: 6.67rem;
		background: rgba(0,0,0,0.3);
		left: 0;
		top: 0;
	}
	.menus {
		width: 80%;
		height: 100%;
		background: #fff;
	}
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
	.mouse-enter {
		transform: translate(-100%,0);
	}
	.mouse-enter-active {
		transition: all 1.5s;
	}
	.mouse-leave {
		transform: translate(0,0);
	}
</style>
