<template>
	<div class="navbar-div">
		<button v-on:click=''>&lt;</button>
		<p>中国石油大学二手物品交易社区</p>
	</div>
</template>

<script>

</script>

<style scoped>
	.navbar-div{

		background: #189dd7;
		height: 60px;
		width: 100%;
		margin-left: 0px;
		position: relative;
	}
	div>button{
		width: 60px;
		position: absolute;
		top: 0;bottom: 0;
		left: 0;right: 0;
	}
	div>p{
		-moz-user-select: none;
		-webkit-user-select: none;
		user-select: none;
		color: #ffffff;
		width: 50%;
		height: 50%;
		margin: auto;
		position: absolute;
		top: 0;bottom: 0;left: 0;right: 0;
		font-size: 24px;
	}
</style>