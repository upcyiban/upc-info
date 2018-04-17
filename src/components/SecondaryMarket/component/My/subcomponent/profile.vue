<template>
	<div class="profile-div">
		<div class="info-view">
			<p class="nickid">{{ nickid }}</p>
			<hr>
			<p class="info1 QQ">QQ: {{ qq }}</p>
			<p class="info2 wechat">微信: {{ wechat }}</p>
			<p class="info1 phone">手机: {{ phone }}</p>
			<p class="info2 email">邮箱: {{ email }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'profile'
	}
</script>

<style scoped>
	.profile-div{
		margin: auto 12px;
		padding-top: 96px;
		position: relative;
	}
	.info1{
		position: absolute;
		top: 60%;
		left: 20%;
	}
	.info2{
		position: absolute;
		top: 60%;
		left: 60%;
	}
</style>