<template><!----推荐-------->
	<div class="slihead">
		<div class="slider">
			<div class="tui1">{{aa}}</div>
			<mu-carousel hide-controls>
				<mu-carousel-item v-for="item in items" :key="item.id">
					<img :src="item.image">
				</mu-carousel-item>
			</mu-carousel>
		</div>
		<div class="slider">
			<div class="tui1">{{bb}}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'recommend',
	data() {
		return {
			aa: '精彩推荐',	
			bb: '推荐歌单',
			items: [
				{id: '1',image: require('../../../assets/images/sq.jpg')},
				{id: '2',image: require('../../../assets/images/timg.jpg')},
				{id: '3',image: require('../../../assets/images/timg1.jpg')},
				{id: '4',image: require('../../../assets/images/timg2.jpg')},
			],
		}
	},
}
</script>

<style lang="scss">
.slihead{
	background: white;
	min-height: 10rem;
	.slider{
		width: 100%;
		height: 2.6rem;
		padding-top: 0.2rem;
		.tui1{
			height: 0.2rem;
			padding-left: 0.2rem;
			border-left: 3px solid red;
			line-height: 0.2rem;
			color: #999;
		}
		.mu-carousel{
		   top: 0.2rem;
		   height:200px;
		   .mu-carousel-item>img{
			   height:100%;
		   }
		}
	}
	}
</style>
