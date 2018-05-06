<template>
	<div>
		<navbar title="中国石油大学二手物品交易社区">
			<!-- <img src="./images/back.png" @click="back" class="back"> -->
			<p>中国石油大学二手物品交易社区</p>
		</navbar>
		</navbar>
		<prof :profile="profile"></prof>
		<tabs :userid="profile.id"></tabs>
		<!-- <div class="footer">
            <ul class="clear">
                <li class="float-left">
                    <img :src="find" >
                    <p>发现</p>
                </li>
                <li class="float-left add">
                    <router-link to="/second/publish" class="absolute-horizontal-center" style="display: block">
                        <span>+</span>
                    </router-link>
                    <img style="opacity: 0;" src="">
                    <p>发布</p>
                </li>
                <li class="float-left">
                    <img :src="user" >
                    <p>我的</p>
                </li>
            </ul>
        </div> -->
	</div>
</template>

<script>
	import HttpRequest from '@/common/util/HttpRequest'
	import {marketFetch,yibanAuth} from '@/components/SecondaryMarket/config/fetchUtil'
	import navbar from '@/common/components/HeaderSection'
	import profile from './subcomponent/profile'
	import tabs from './subcomponent/tabs'
	import loadImg from '../../media/loading.gif'

	// yibanAuth.getVq()

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