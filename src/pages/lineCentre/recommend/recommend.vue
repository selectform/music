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
			<div class="song">
				<ul>
					<li v-for="song in songs" :key="song.id">
						<img :src="song.son">
						<span><i class="iconfont">&#xe6bf;</i>{{song.num}}</span>
						<p>{{song.remark}}</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="slider">
			<div class="tui1">{{cc}}</div>
			<div class="newsong" v-for="goz in gozs" :key="goz.id" >
				<div>
					<div>{{goz.titl}}<span>{{goz.titlz}}</span></div>
					<div><span v-show="goz.ping==''?false:true">{{goz.ping}}</span>{{goz.name}}</div>
				</div>
				<div><i class="iconfont">&#xe685;</i></div>
			</div>
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
			cc: '最新音乐',
			items: [
				{id: '1',image: require('../../../assets/images/sq.jpg')},
				{id: '2',image: require('../../../assets/images/timg.jpg')},
				{id: '3',image: require('../../../assets/images/timg1.jpg')},
				{id: '4',image: require('../../../assets/images/timg2.jpg')},
			],
			songs: [
				{id: '1',son: require('../../../assets/images/sq.jpg'),num:"123",remark:"纯音乐"},
				{id: '2',son: require('../../../assets/images/timg.jpg'),num:"234",remark:"纯音乐"},
				{id: '3',son: require('../../../assets/images/timg1.jpg'),num:"12",remark:"纯音乐"},
				{id: '4',son: require('../../../assets/images/timg2.jpg'),num:"666",remark:"纯音乐"},
				{id: '5',son: require('../../../assets/images/timg1.jpg'),num:"333",remark:"纯音乐"},
				{id: '6',son: require('../../../assets/images/timg.jpg'),num:"999",remark:"纯音乐"},
			],
			gozs: [
				{id: '1',titl:"蜂鸟",titlz:"welcome to beijing",name:"吴青峰 -蜂鸟",ping:"SQ"},
				{id: '2',titl:"蜂鸟",titlz:"welcome to beijing",name:"吴青峰 -蜂鸟",ping:""},
				{id: '3',titl:"蜂鸟",titlz:"welcome to beijing",name:"吴青峰 -蜂鸟",ping:"HQ"},
				{id: '4',titl:"蜂鸟",titlz:"welcome to beijing",name:"吴青峰 -蜂鸟",ping:"SQ"},
				{id: '5',titl:"蜂鸟",titlz:"welcome to beijing",name:"吴青峰 -蜂鸟",ping:"HQ"},
				{id: '6',titl:"蜂鸟",titlz:"welcome to beijing",name:"吴青峰 -蜂鸟",ping:""},
				{id: '7',titl:"蜂鸟",titlz:"welcome to beijing",name:"吴青峰 -蜂鸟",ping:"HQ"},
				{id: '8',titl:"蜂鸟",titlz:"welcome to beijing",name:"吴青峰 -蜂鸟",ping:"SQ"},
				{id: '9',titl:"蜂鸟",titlz:"welcome to beijing",name:"吴青峰 -蜂鸟",ping:""},
			],
		}
	}
}
</script>

<style lang="scss">
.slihead{
	background: white;
	min-height: 10rem;
	.slider{
		width: 100%;
		min-height: 2.6rem;
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
		.song ul{
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			margin-top: 0.2rem;
			li{
				width: 33%;
				min-height: 1rem;
				margin-bottom: 0.1rem;
				position: relative;
				& span{
					color: white;
					position: absolute;
					top: 0;
					right: 0;
				}
				& img{
					width: 100%;
					height: 1rem;
					opacity: 0.8;
				}
				& p{
					width: 100%;
					min-height: 0.2rem;
				}

			}
		}
		.newsong{
			display: flex;
			justify-content: space-between;
			justify-items: center;
			padding-bottom: 0.06rem;
			margin: 0.1rem;
			border-bottom: 1px solid #ccc;
			& div:nth-child(1){
				min-height: 0.3rem;
				& div:nth-child(1){
					width: 100%;
					span:nth-child(1){
						color: #999;
					}
				}
				& div:nth-child(2){
					width: 100%;
					font-size: 12px;
					color: #666;
					span:nth-child(1){
						display: inline-block;
						border: 1px solid red;
						color:red;
						text-align: center;
						width: 0.2rem;
						height: 0.12rem;
						font-size: 0.03rem;
						line-height: 0.1rem;
						margin-top: 0.05rem;
						margin-right:0.05rem; 
					}
				}
			}
			& div:nth-child(2){
				i:nth-child(1){
					font-size: 0.3rem;
					display: inline-block;
					width: 0.22rem;
					height: 0.22rem;
					margin-top: 0.05rem;
					margin-right: 0.1rem;
				}	
			}
		}
	}
	}
	.slider .mu-carousel {
		height: 2rem;
	}
</style>
