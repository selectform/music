<template>
	<div>
		<div class="topa" :style="{background: 'url(' + listM.creator.avatarUrl + ') no-repeat center'}">
			<div class="mask">
				<p>
					<i class="iconfont" @click="goback">&#xe739;</i>
					<span>歌单</span>
				</p>
				<div class="topb">
					<div>
						<img :src="listM.coverImgUrl" alt="">
						<i class="iconfont">&#xe6b1;</i>
					</div>
					<div>
						<p>{{listM.name}}</p>
						<p>
							<i class="iconfont">&#xe61c;</i>
							<span>{{listM.creator.nickname}}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
		<mu-button @click="list">测试接口</mu-button>
	</div>
</template>

<script>
import { pdetail } from '@/components/base/dress.js';
export default {
	name: 'list',
	data() {
		return{
			listM: '',//列表信息
			listN: [],//列表数据
		}
	},
	created() {
		let routdata = this.$route.params;
		if(routdata) {
			this.listM = routdata;
			console.log(this.listM);
		}
		// this.list();
	},
	methods: {
		list() {
			pdetail({id: this.listM.id}).then(res => {
				console.log(res.data);
			}).catch(err => {
				console.log(err);
			});
		},
		goback() {//返回
			this.$router.go(-1);
		}
	}
}
</script>

<style lang="scss">
	p {
		font-size: 14px;
		color: #fff;
	}
	.topa {
		width: 100%;
		position: relative;
		img {
			wdith: 1.2rem;
			height: 1.2rem;
		}
	}
	.mask {
		width: 100%;
		height: 2.1rem;
		background: rgba(0,0,0,0.5);
	}
	.topb {
		display: flex;
		height: 1.2rem;
		align-items: center;
		& > div:first-child {
			position: relative;
			height: 100%;
			i {
				position: absolute;
				z-index: 5;
				top: 0;
				right: 0;
			}
		}
		& > div:nth-child(2) {
			padding-left: 0.1rem;
			height: 100%;
			color: #fff;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
		}
	}
</style>
