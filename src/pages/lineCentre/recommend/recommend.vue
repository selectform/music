<template><!----推荐-------->
	<div>
		<div class="slider">
			<div class="tui1">{{aa}}</div>
			<mu-carousel hide-controls>
				<mu-carousel-item>
					<img :src="carouselImg1">
				</mu-carousel-item>
				<!-- <mu-carousel-item>
					<img :src="carouselImg2">
				</mu-carousel-item>
				<mu-carousel-item>
					<img :src="carouselImg3">
				</mu-carousel-item>
				<mu-carousel-item>
					<img :src="carouselImg4">
				</mu-carousel-item> -->
				</mu-carousel>
		</div>
	</div>
</template>

<script>
import carouselImg1 from '../../../assets/images/sq.jpg';
// import carouselImg2 from '../../../assets/images/sq.jpg';
// import carouselImg3 from '../../../assets/images/sq.jpg';
// import carouselImg4 from '../../../assets/images/sq.jpg';
export default {
	name: 'recommend',
	data() {
		return {
			carouselImg1,
			// carouselImg2,
			// carouselImg3,
			// carouselImg4,
			aa: '精彩推荐'	
		}
	}
}
</script>

<style lang="scss">
	.slider{
		background: white;
		width: 100%;
		height: 3rem;
		padding-top: 0.2rem;
		.tui1{
			height: 0.2rem;
			padding-left: 0.2rem;
			border-left: 3px solid red;
			line-height: 0.2rem;
			color: #999;
		}
	}
</style>
