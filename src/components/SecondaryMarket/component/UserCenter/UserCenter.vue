<template>
	<div>
		<navbar :title="title">
			<img src="./images/back.png" @click="" class="back">
			<p>中国石油大学二手物品交易社区</p>
		</navbar>
		</navbar>
		<prof :profile="profile"></prof>
		<tabs></tabs>
	</div>
</template>

<script>
	import navbar from '@/components/SecondaryMarket/common-component/HeaderSection'
	import {UserData} from '@/common/util/getYibanData'
	import profile from './subcomponent/profile'
	import tabs from './subcomponent/tabs'
	export default {
		name: 'UserCenter',
		data: function(){
			let yibanInfo = UserData.getLocalUserData();
			return {
				title: '中国石油大学二手物品交易社区',
				currentTab: 'favorite',
				profile: {
					nick: yibanInfo.userNick,
					id: yibanInfo.userId,
					avatar: yibanInfo.userHeader,
					qq: '1231231230',
					phone: '12010011000',
					wechat: 'qweqweqweqq',
					email: '12312312300@qq.com',
				}
				
			}
		},
		computed: {
			currentTabComponent: function(){
				return 'tab-' + this.currentTab
			}
		},
		methods: {
			changeTab: function(to){
				this.currentTab = to
			}
		},
		components: {
			'navbar': navbar,
			'prof': profile,
			'tabs': tabs,
		}
	}
</script>

<style scoped>
	div{
		text-align: center;
	}
	.back{
		width: 24px;
		height: 24px;
		position: absolute;
		top: 8px;
		left: 8px;
	}
</style>