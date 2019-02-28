<template>
	<div>
		<div class="menus1">
			<p>登录网易云音乐</p>
			<p>手机电脑多端同步，尽享海量高品质音乐</p>
			<span>立即登录</span>
		</div>
	</div>
</template>

<script>
export default {
	props: ['isno'],
	name: 'menus',
	data() {
		return {
			ishow: null,
			ss: '123'
		}
	},
	methods: {
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
	
</style>
