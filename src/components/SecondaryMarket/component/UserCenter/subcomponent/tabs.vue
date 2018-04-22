<template>
	<div class="tabs">
		<div class="switcher">
			<p :class="['button',{ active: currentTabComponent == 'tab-favorite' }]" @click="currentTab = 'favorite'">我的收藏</p>
			<p :class="['button',{ active: currentTabComponent == 'tab-comment' }]" @click="currentTab = 'comment'">留言记录</p>
			<p :class="['button',{ active: currentTabComponent == 'tab-history' }]" @click="currentTab = 'history'">发布历史</p>
		</div>
		<div class="tab-view">
			<component v-bind:is="currentTabComponent"></component>
		</div>
	</div>
</template>

<script>
	import favorite from './favorite'
	import comment from './comment'
	import history from './history'
	export default{
		name: 'tabs',
		components: {
			'tab-favorite': favorite,
			'tab-comment': comment,
			'tab-history': history,
		},
		data: function(){
			return {
				currentTab: 'favorite'
			}
		},
		computed: {
			currentTabComponent: function(){
				return 'tab-' + this.currentTab
			}
		},
	}
</script>

<style scoped>
	.tabs{
		background-color: #6ac1e7;
		border-radius: 12px;
		margin: 0px 1rem;
		box-shadow: 0 0 5px 1px #aaaaaa;
	}
	.switcher{
		display: flex;
	}
	.button{
		-webkit-user-select: none;
		user-select: none;
		font-size: 1rem;
		color: #ffffff;
		flex: 1;
		margin: 12px auto;
	}
	.button.active{
		color: #000000;
	}
	.tab-view{
		min-height: 480px;
		background-color:  #ffffff; 
		border-radius: 0 0 12px 12px;
		overflow-y: scroll;
	}
	.tab-view >>> ul{
		margin: 0;
		padding: 0;
	}
	.tab-view >>> li{
		list-style: none;
		min-height: 128px;
		width: 100%;
		position: relative;
		border-bottom: 1px solid #e4e3e3;
		overflow: hidden;
	}
	.tab-view >>> .desc{
		position: relative;
		top: 0.5rem;
		text-align: left;
	}
	.tab-view >>> .descimg{
		width: 96px;
		height: 96px;
	}
	.tab-view >>> .desc>p{
		margin: 0.75rem 0;
	}
	.tab-view >>> .title{
		font-size: 1.25rem;
		font-weight: bold;
	}
	.tab-view >>> .price{
		color: #ff0000;
		font-size: 1.1rem;
		font-weight: bold;
	}
	.tab-view >>> .button{
		font-size: 0.8rem;
		color: #99989a;
		display: flex;
		position: absolute;
		right: 1rem;
		bottom: 1rem;
		-webkit-user-select: none;
		user-select: none;
	}
</style>