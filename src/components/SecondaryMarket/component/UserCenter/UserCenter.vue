<template>
	<div>
		<navbar title="中国石油大学二手物品交易社区">
			<img src="./images/back.png" @click="back" class="back">
			<p>中国石油大学二手物品交易社区</p>
		</navbar>
		</navbar>
		<prof :profile="profile"></prof>
		<tabs :userid="profile.id"></tabs>
	</div>
</template>

<script>
	import HttpRequest from '@/common/util/HttpRequest'
	import navbar from '@/components/SecondaryMarket/common-component/HeaderSection'
	import {UserData} from '@/common/util/getYibanData'
	import profile from './subcomponent/profile'
	import tabs from './subcomponent/tabs'
	import marketFetch from '../../model/marketFetch'
	export default {
		name: 'UserCenter',
		beforeCreate(){
			console.log(HttpRequest())
		},
		data: function(){
			let yibanInfo = UserData.getLocalUserData()
			let request = marketFetch
			let contacts = request.getJsonData('second/user/info',{})
			return {
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
			},
			back: function(){
				this.$router.push('/second/homepage')
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