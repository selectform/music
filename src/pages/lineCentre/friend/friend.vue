<template>
	<div>
		{{aa}}
		<mu-button @click="cc">false</mu-button>
		<mu-button @click="bb">true</mu-button>
		<mu-button v-show="ishow">是否显示</mu-button>
		
	</div>
</template>

<script>
export default {
	name: 'friend',
	data() {
		return {
			aa: '朋友',
			ishow: false
		}
	},
	methods: {
		cc() {
			this.ishow = false;
		},
		bb() {
			this.ishow = true;
		}
	}
}
</script>

<style>
</style>
