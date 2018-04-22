<template>
	<div class="profile-div">
		<div class="avatar-outline">
			<img  class="avatar" :src="profile.avatar">
		</div>
		<div class="info-view">
			<div class="">
				<p class="info nick">{{ profile.nick }}</p>
				<p class="info id"> ID: {{ profile.id }}</p>
			</div>
			<hr class="deviding">
			<table class="contacts" nowarp>
				<tr>
					<td class="col1">QQ: {{ profile.qq }}</td>
					<td class="col2">微信: {{ profile.wechat }}</td>
				</tr>
				<tr>
					<td class="col1">手机: {{ profile.phone }}</td>
					<td class="col2">邮箱: {{ profile.email }}</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'profile',
		data: function(){
			return {}
		},
		props: ['profile']
	}
</script>

<style scoped>
	.profile-div{
		background-color: #6ac1e7;
		border-radius: 10px;
		box-shadow: 0 0 5px 1px #aaaaaa;
		margin: 4rem 1rem 1.5rem 1rem;
	}
	.profile-div>.avatar-outline{
		width: 72px;
		height: 72px;
		border-radius: 64px;
		background-color: #6ac1e7;
    	position: absolute;
    	left: 50%;
    	transform: translate(-50%,-50%);
	}
	.avatar{
		width: 64px;
		height: 64px;
		border-radius: 32px;
		position: relative;
		top: 4px;
	}
	.info-view{
		padding-top: 48px;
	}
	.info{
		display: inline-block;
		color: #ffffff;
		margin-bottom: 0px;
		margin-top: 0px;
		font-size: 1rem;
	}
	.info.nick{
		font-size: 1.75rem;
	}
	.info.id{
		font-size: 1.25rem;
	}
	.deviding{
		border: 0;
		border-top: 2px dashed #fefefe;
		margin-top: 1rem;
		margin-bottom: 1rem;
		width: 85%;
		overflow: visible;
	}
	.deviding:before{
		display: block;
		content: "";
		height: 16px;
		margin-top: -8px;
		border-left: 2px solid #fefefe;
		border-right: 2px solid #fefefe;
	}
	.contacts{
		position: relative;
		font-size: 0.75rem;
		table-layout: fixed;
		color: #ffffff;
		text-align: left;
		padding-bottom: 1rem;
		border-collapse:separate;
		border-spacing: 0.75rem 0.5rem;
		left: 50%;
		transform: translate(-50%,0);
	}
	.col2{
		position: relative;
		left: 0.5rem;
	}
</style>