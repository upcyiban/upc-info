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
	import navbar from '@/components/common/HeaderSection'
	import {UserData} from '@/common/util/getYibanData'
	import profile from './subcomponent/profile'
	import tabs from './subcomponent/tabs'
	import marketFetch from '../../model/marketFetch'
	export default {
		name: 'UserCenter',
		data: function(){
			let yibanInfo = UserData.getLocalUserData()
			marketFetch.getJsonData('/second/user/info',{}).then((result) => {
				this.updateUserContacts(result)
			})
			return {
				currentTab: 'favorite',
				profile: {
					nick: yibanInfo.userNick,
					id: yibanInfo.userId,
					avatar: yibanInfo.userHeader,
					qq: '无',
					phone: '无',
					wechat: '无',
					email: '无',
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
			},
			updateUserContacts: function(c){
				this.profile.qq = c.qq ? c.qq : '无'
				this.profile.wechat = c.wechat ? c.wechat : '无'
				this.profile.phone = c.phone ? c.phone : '无'
				this.profile.email = c.email ? c.email : '无'
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