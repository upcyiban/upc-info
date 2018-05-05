<template>
	<div class="navbar-div">
		<p>中国石油大学二手物品交易社区</p>
		<img src="../images/back.png">
	</div>
</template>

<script>

</script>

<style scoped>
	.navbar-div{
		background: #189dd7;
		height: 3rem;
		width: 100%;
		margin-left: 0px;
		position: relative;
	}
	div>img{
		width: 2rem;
		height: 2rem;
		position: absolute;
		top: 50%;
		left: 0;
		transform: translate(0,-50%);
	}
	div>p{
		-webkit-user-select: none;
		user-select: none;
		color: #ffffff;
		font-size: 1.25rem;
		height: 50%;
		margin: auto;
		position: absolute;
		top: 0;bottom: 0;left: 0;right: 0;
	}
</style>