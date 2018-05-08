<template>
	<div>
		<ul>
			<li class="history" v-for="(record,index) in history" @click="viewArticle(record.articleid)">
				<img class="descimg" :src="record.img">
				<div class="desc">
					<p class="title">{{ record.name }}</p>
					<p class="price">￥{{ record.price }}</p>
					<p class="counts">留言{{ record.commentnum }} · 收藏{{ record.collectnum }}</p>
				</div>
				<div class="buttons">
					<div class="button">
						<img class="icon" :src="button.edit">
						<p @click.stop="editPost(index)">编辑</p>
					</div>
					<div class="button">
						<img class="icon" :src="button.delete">
						<p @click.stop="deletePost(index)">删除</p>
					</div>
				</div>
				<confirmbox v-if="record.beforeDelete" @confirm="confirmDelete(index)" @cancel="record.beforeDelete = false"></confirmbox>
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

	const getHistory = '/secondhand/browse/historyArticle'
	const deleteHistory = '/secondhand/publish/deletearticle'
	const editHistory = '/second/publish'

	export default {
		name: 'history',
		components: {
			'confirmbox': confirmBox
		},
		mounted() {
			marketFetch.getJsonData(getHistory,{}).then((result) => this.updateHistory(result))
		},
		data: function(){
			var dict = new Map([['articleid','id'],['name','name'],['price','price'],['commentnum','reviews'],['collectnum','collections']])
			return {
				history: [],
				dict: dict,
				button: {
					delete: delete_,
					edit: edit
				}
			}
		},
		methods: {
			editPost: function(index){
				//go to publish page
				this.$router.push(editHistory)
			},
			deletePost: function(index){
				this.history[index].beforeDelete = true;
			},
			confirmDelete: function(index){
				marketFetch.postJsonData(deleteHistory,{articleid: this.history[index].id})
				this.history.splice(index,1)
			},
			updateHistory: function(records){
				records.forEach((record,index,records) =>{
					let tmp = {}
					this.dict.forEach((from,to,set) => {
						if(record.hasOwnProperty(from)){tmp[to] = record[from] ? record[from] : '0'}
					})
					tmp.beforeDelete = false
					tmp['img'] = util.firstImg(record['imgurl'])
					this.history.push(tmp)
				})
			},
			viewArticle: function(id){
				this.$router.push(`/second/details/${id}`)
			}
		},
		props: ['userid']
	}
</script>

<style scoped>
	.history .descimg{
		float: left;
		margin: 0.75rem;
	}
	.desc>.counts{
		font-size: 0.75rem;
		color: #99989a;
	}
	.button{
		display: flex;
		margin-left: 0.5rem;
	}

</style>