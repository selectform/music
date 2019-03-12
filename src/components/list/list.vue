<template>
	<div id="songlist">
		<!-- <div class="topa" :style="{background: 'url(' + listM.coverImgUrl + ') no-repeat center'}"> -->
		<div class="topa">
			<img class="fuzzy" :src="listM.coverImgUrl" alt="">
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
						<p class="topbtwo">
							<i class="iconfont">&#xe61c;</i>
							<span>{{listM.creator.nickname}}</span>
							<i class="iconfont">&#xe693;</i>
						</p>
					</div>
				</div>
			</div>
		</div>
		<!-- <mu-button @click="list">测试接口</mu-button> -->
		<ul class="songlist">
			<li v-for="(item,index) in lists" :key="item.id">
				<p>
					<b>{{index + 1}}</b>
					<span>{{item.name}}</span>
				</p>
				<i class="iconfont">&#xe679;</i>
			</li>
		</ul>
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
			lists: []//页面列表
		}
	},
	created() {
		let routdata = this.$route.params;
		if(routdata) {
			this.listM = routdata;
			// console.log(this.listM);
			this.list();
		}
	},
	methods: {
		list() {
			pdetail({id: this.listM.id}).then(res => {
				this.listN = res.data.playlist.tracks.slice(0);
				// console.log(this.listN);
				this.lists = this.listN.splice(0,10);
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
	.topa p {
		font-size: 14px;
		color: #fff;
		i {
			padding: 0 0.06rem;
		}
	}
	.topa {
		width: 100%;
		height: 2.1rem;
		position: relative;
		z-index: 1;
		img {
			wdith: 1.2rem;
			height: 1.2rem;
		}
	}
	.topa .fuzzy {
		display: block;
		width: 100%;
		height: 2.1rem;
		position: absolute;
		z-index: 2;
		left:0;top:0;
		filter: blur(8px);
		-webkit-filter: blur(8px);
		-moz-filter: blur(8px);
		-o-filter: blur(8px);
		-ms-filter: blur(8px);
	}
	.topa .mask {
		width: 100%;
		height: 2.1rem;
		position: relative;
		z-index: 10;
		background: rgba(0,0,0,0.5);
		& > p:first-child {
			font-size: 0.18rem;
			 line-height: 0.34rem;
			 height: 0.34rem;
			i {
				padding: 0 0.1rem;
			}
		}
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
	.songlist > li{
		display: flex;
		align-items: center;
		font-size: 16px;
		justify-content: space-between;
		b {
			padding: 0 0.06rem;
		}
		i {
			padding: 0 0.06rem;
		}
	}
</style>
