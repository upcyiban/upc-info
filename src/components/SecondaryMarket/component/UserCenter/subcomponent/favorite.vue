<template>
	<div>
		<ul>
			<li class="item" v-for="(item,index) in items" @click="viewCollect(item.articleid)">
				<img class="descimg" :src="item.img">
				<div class="desc">
					<p class="title">{{ item.name }}</p>
					<p class="price">￥{{ item.price }}</p>
					<p class="date">{{ item.date }}</p>
				</div>
				<div class="buttons" @click.stop='deleteFavorite(index)'>
					<img class="icon" :src="buttons.delete">
					<p>删除</p>
				</div>
				<confirmbox v-if="item.beforeDelete" @confirm="confirmDelete(index)" @cancel="item.beforeDelete = false"></confirmbox>
			</li>
		</ul>
	</div>
</template>

<script>
	import {marketFetch} from '@/components/SecondaryMarket/config/fetchUtil'
	import confirmBox from './shared/confirmbox.vue'
	import util from './shared/util'
	import delete_ from '@/components/SecondaryMarket/media/delete.png'
	import edit from '@/components/SecondaryMarket/media/edit.png'

	const getCollection = '/secondhand/collention/usercollection'
	const deleteCollection = '/secondhand/collention/deletecollection'

	export default {
		name: 'favorite',
		components: {
			'confirmbox': confirmBox
		},
		mounted() {
			marketFetch.getJsonData(getCollection,{}).then((result) => this.updateFavorite(result))
		},
		data: function(){
			var dict = new Map([['articleid','articleId'],['img','articleUserYBHead'],['name','articleName'],['price','articlePrice']])
			return {
				items: [],
				dict: dict,
				buttons: {
					delete: delete_
				}
			}
		},
		methods: {
			deleteFavorite: function(index){
				this.items[index].beforeDelete = true;
			},
			confirmDelete: function(index){
				marketFetch.postJsonData(deleteCollection,{collectionid: this.items[index].id})
				this.items.splice(index,1)
			},
			updateFavorite: function(items){
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
			},
			viewCollect: function(id){
				this.$router.push(`/second/details/${id}`)
			}
		},
		props: ['userid']
	}
</script>

<style scoped>
	.item .descimg{
		margin: 0.75rem;
		float: left;
	}
	.date{
		color: #99989a;
		font-size: 0.75rem;
	}
</style>