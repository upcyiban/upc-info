<template>
	<div class="profile-div">
		<div class="info-view">
			<p class="nickid">{{ nickid }}</p>
			<hr>
			<ul>
				<li class="info1 QQ">QQ: {{ qq }}</li>
				<li class="info2 wechat">微信: {{ wechat }}</li>
				<li class="info1 phone">手机: {{ phone }}</li>
				<li class="info2 email">邮箱: {{ email }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'profile',
		data: function(){
			
		}
	}
</script>

<style scoped>
	.profile-div{
		margin: auto 12px;
		padding-top: 96px;
		position: relative;
	}
	li{
		float: left;
	}
/*	.info1{
		position: absolute;
		top: 60%;
		left: 20%;
	}
	.info2{
		position: absolute;
		top: 60%;
		left: 60%;
	}*/
</style>