<template>
<div id="home">
    {{cc}}
</div> 
</template>
<script>
export default {
    name: 'home',
    data() {
        return {
            cc: '主页'
        }
    }
}
</script>
<style lang="scss">
    #home {
        font-size: 20px;
        color: #3f8b38;
    }
</style>

