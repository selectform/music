<template>
	<div id="player">
		<!-- <aplayer :music="miusic" theme="#b7daff">
		</aplayer> -->
	</div>
</template>

<script>
import Aplayer from 'vue-aplayer';
export default {
	name: 'player',
	data() {
		return {
			a: '播放器',
			miusic: {
				src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
				pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg',
				artist: 'Silent Siren',
				title: 'M'
			}
		}
	},
	components: {
		Aplayer
	}
}
</script>

<style>
</style>
