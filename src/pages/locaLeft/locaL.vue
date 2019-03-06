<template>
	<div class="local">
		
		<router-link to="#" class="loimin">本地导入</router-link>
		
		</div>
</template>

<script>
export default {
	name:'locaL',
	data() {
		return {
			
		}
	}
}
</script>

<style  lang="scss">
	.local{
		width: 100%;
		height: 3.5rem;
    	margin: 2.5rem 0 0 35%;
		.loimin{
			display: block;
			width: 1rem;
			height: 0.5rem;
			line-height: 0.5rem;
			background: white;
			text-align: center;
			border: 1px solid red;
			border-radius: 0.3rem;
		}
	}

</style>
