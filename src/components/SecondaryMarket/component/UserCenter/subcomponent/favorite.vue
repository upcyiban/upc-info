<template>
	<div>
		<ul>
			<li class="item" v-for="(item,index) in items" @click=''>
				<img class="descimg" :src="item.img">
				<div class="desc">
					<p class="title">{{ item.name }}</p>
					<p class="price">￥{{ item.price }}</p>
					<p class="date">{{ item.date }}</p>
				</div>
				<div class="button">
					<p @click='deleteFavorite(index)'>删除</p>
				</div>
				<confirmbox v-if="item.beforeDelete" @confirm="confirmDelete(index)" @cancel="item.beforeDelete = false"></confirmbox>
			</li>
		</ul>
	</div>
</template>

<script>
	import HttpRequest from '@/common/util/HttpRequest'
	import marketFetch from '@/components/SecondaryMarket/model/marketFetch'
	import confirmBox from './shared/confirmbox.vue'
	import util from './shared/util'
	export default {
		name: 'favorite',
		components: {
			'confirmbox': confirmBox
		},
		mounted() {
			marketFetch.getJsonData('/secondhand/collention/usercollection',{}).then((result) => this.updateFavorite(result))
		},
		data: function(){
			var dict = new Map([['id','articleId'],['img','articleUserYBHead'],['name','articleName'],['price','articlePrice']])
			return {
				items: [],
				dict: dict
			}
		},
		methods: {
			showConfirmation: function(index){

			},
			deleteFavorite: function(index){
				this.items[index].beforeDelete = true;
			},
			confirmDelete: function(index){
				//request delete
				this.items.splice(index,1)
			},
			updateFavorite: function(items){
				//item has no img date and url
				items.forEach((item,index,items) =>{
					let tmp = {}
					this.dict.forEach((from,to,set) => {
						if(item.hasOwnProperty(from)){tmp[to] = item[from] ? item[from] : ''}
						tmp.beforeDelete = false
					})
					tmp['img'] = util.firstImg(item['articleImg'])
					tmp['date'] = util.computeDate(item['creatTime'])
					this.items.push(tmp)
				})
			}
		},
		props: ['userid']
	}
</script>

<style scoped>
	.item>img{
		margin: 0.75rem;
		float: left;
	}
	.date{
		color: #99989a;
		font-size: 0.75rem;
	}
</style>