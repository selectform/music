<template>
	<div>
		<div class="ccc">
			<div v-for="(item,index) in miusic" :key="item.id">
				<img :src="item.coverImgUrl" @click="detail(item)" alt="" :key="item.userId">
				<p :title="item.name">{{item.name}}</p>
				<div class="ccr" :key="index">
					<i class="iconfont">&#xe6b1;</i>
				</div>
			</div>
		</div>
			
	</div>
</template>

<script>
import { plist, pdetail } from '@/components/base/dress.js';
export default {
	name: 'broadcast',
	data() {
		return {
			aa: '电台',
			miusic: ''
		}
	},
	created() {
		this.mlist();
	},
	methods: {
		mlist() {
			plist({
				limit: '9',
				order: 'new'
			}).then(res => {
				this.miusic = res.data.playlists.slice(0);
				console.log(this.miusic);
			}).catch(err => {
				console.log(err);
			});
		},
		detail(item) {
			this.$router.push({
				name: 'list',
				params: item
			});
			console.log('11111');
		}
	}
}
</script>

<style lang="scss">
	.ccc {
		display: flex;
		flex-wrap: wrap;
		& > div {
			width: 33%;
			font-size: 12px;
			position: relative;
		}
		p {
			word-wrap:break-word;
			padding: 4px;
		}
		img {
			width: 100%;
			height: 1.24rem;
			background:url(../../../assets/images/bg3.jpg) no-repeat center;
			background-size: cover;
			
		}
	}
	.ccr {
		position: absolute;
		top:0;
		right:0;
		z-index: 5;
	}
</style>
