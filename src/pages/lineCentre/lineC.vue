<template>
	<div class="linc"><!------推荐页------>
		<!-- <mu-button class="secondary" @click="ishow = false">测试false</mu-button>
		<mu-button class="secondary" @click="ishow = true">测试true</mu-button>
		<mu-appbar style="wiv-fordth: 100%;" v-show="ishow" title="Title"></mu-appbar> -->
		<ul class="linUl">
			<li v-for="(item,index) in navs" :key="item.id">
				<span @click="goto(item.to)">{{item.name}}</span>
			</li>
		</ul>
		<div><!------推荐 朋友  电台 切换------>
			<component :is="ist"></component >
		</div>
	</div>
</template>

<script>
import Recommend from './recommend/recommend.vue';
import Friend from './friend/friend.vue';
import Broadcast from './broadcast/broadcast.vue';

export default {
	name: 'lineC',
	data() {
		return {
			ishow: false,
			navs: [
				{id: '123',name: '推荐',to:'recommend'},
				{id: '154',name: '朋友',to:'friend'},
				{id: '54',name: '电台',to:'broadcast'}
			],
			ist: 'recommend'
		}
	},
	components: {
		'recommend': Recommend,
		'friend': Friend,
		'broadcast': Broadcast
	},
	methods: {
		goto(data) {
			this.ist = data;
			console.log(this.ist);
		}
	}
}
</script>

<style lang="scss">
	.linUl {
		height: 0.3rem;
		width: 100%;
		background: red;
		display: flex;
		justify-content: space-around;
		align-items: center;
		li {
			height: 100%;
			width: 20%;
			display: flex;
			justify-content: center;
			align-items: center;
			color: white;
			a {
				color: white;
				border-bottom: 2px solid #444;
				padding-bottom: 2px;
			}
		}
	}
</style>
