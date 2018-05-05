<template>
	<div>
		<ul>
			<li class="history" v-for="(record,index) in history">
				<img class="descimg" :src="record.img">
				<div class="desc">
					<p class="title">{{ record.name }}</p>
					<p class="price">￥{{ record.price }}</p>
					<p class="counts">留言{{ record.commentnum }} · 收藏{{ record.collectnum }}</p>
				</div>
				<div class="button">
					<p @click="editPost(index)">编辑</p>
					<p @click="deletePost(index)">删除</p>
				</div>
				<confirmbox v-if="record.beforeDelete" @confirm="confirmDelete(index)" @cancel="record.beforeDelete = false"></confirmbox>
			</li>
		</ul>
	</div>
</template>

<script>
	import HttpRequest from '@/common/util/HttpRequest'
	import {marketFetch} from '@/components/SecondaryMarket/config/fetchUtil'
	import confirmBox from './shared/confirmbox.vue'
	import util from './shared/util'
	export default {
		name: 'history',
		components: {
			'confirmbox': confirmBox
		},
		mounted() {
			marketFetch.getJsonData('/secondhand/browse/historyArticle',{}).then((result) => this.updateHistory(result))
		},
		data: function(){
			var dict = new Map([['id','id'],['name','name'],['price','price'],['commentnum','reviews'],['collectnum','collections']])
			return {
				history: [],
				dict: dict
			}
		},
		methods: {
			editPost: function(index){
				//go to publish page
				this.$router.push('/')
			},
			deletePost: function(index){
				this.history[index].beforeDelete = true;
			},
			confirmDelete: function(index){
				//requestdelete
				this.history.splice(index,1)
			},
			updateHistory: function(records){
				records.forEach((record,index,records) =>{
					let tmp = {}
					this.dict.forEach((from,to,set) => {
						if(record.hasOwnProperty(from)){tmp[to] = record[from] ? record[from] : ''}
					})
					tmp.beforeDelete = false
					tmp['img'] = util.firstImg(record['imgurl'])
					this.history.push(tmp)
				})
			}
		},
		props: ['userid']
	}
</script>

<style scoped>
	.history>img{
		float: left;
		margin: 0.75rem;
	}
	.desc>.counts{
		font-size: 0.75rem;
		color: #99989a;
	}
	.button>p{
		margin: 0 0 0 1rem;
	}
</style>