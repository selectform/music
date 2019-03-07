<template>
	<div id="player">
		<aplayer :music="{
			title: aaa,
			src: 'http://m8.music.126.net/20190307152234/48c33d1da1450acf383061c3061cb382/ymusic/59c5/8f95/298d/11d842f39fb503bb9b29c37ad4080a14.mp3'
		}">
		</aplayer>
	</div>
</template>

<script>
import Aplayer from 'vue-aplayer';
export default {
	name: 'player',
	data() {
		return {
			a: '播放器',
			aaa: '歌曲名字',
			url: 'http://m8.music.126.net/20190307152234/48c33d1da1450acf383061c3061cb382/ymusic/59c5/8f95/298d/11d842f39fb503bb9b29c37ad4080a14.mp3'
		}
	},
	components: {
		Aplayer
	}
}
</script>

<style>
</style>
