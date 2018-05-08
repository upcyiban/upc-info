<template>
	<div class="main box-center second-market">
		<header-section title="中国石油大学二手物品交易社区">
			<p>中国石油大学二手物品交易社区</p>
		</header-section>
		<prof :profile="profile"></prof>
		<tabs class="tabs" :userid="profile.id"></tabs>
		<div class="placeholder"></div>
		<footer-section current-page="user"></footer-section>
	</div>
</template>

<script>
	import {marketFetch,yibanAuth} from '@/components/SecondaryMarket/config/fetchUtil'
	import headerSection from '../../common-component/HeaderSection'
	import footerSection from '../../common-component/footerSection'
	import profile from './subcomponent/profile'
	import tabs from './subcomponent/tabs'
	import loadImg from '../../media/loading.gif'

	export default {
		name: 'UserCenter',
		data: function(){
			marketFetch.getJsonData('/second/user/info',{}).then((result) => {
				this.updateUserInfo(result)
			})
			var dict = new Map([['id','userid'],['nick','username'],['avatar','ybhead'],['qq','qq'],['wechat','wechat'],['phone','phone'],['email','email']])
			return {
				currentTab: 'favorite',
				profile: {
					nick: '加载中...',
					id: '',
					avatar: loadImg,
					qq: '无',
					phone: '无',
					wechat: '无',
					email: '无',
				},
				dict: dict
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
			updateUserInfo: function(i){
				this.dict.forEach((from,to,set) => {
					if(i.hasOwnProperty(from))this.profile[to] = i[from] ? i[from] : '无'
				})
			},
		},
		components: {
			'header-section': headerSection,
			'footer-section': footerSection,
			'prof': profile,
			'tabs': tabs,
		}
	}
</script>

<style scoped>
	.main{
		position: relative;
		width: 100%;
		max-width: 800px;
		text-align: center;
	}
	.back{
		width: 24px;
		height: 24px;
		position: absolute;
		top: 8px;
		left: 8px;
	}
	.placeholder{
		margin-bottom: 5rem;
	}
</style>