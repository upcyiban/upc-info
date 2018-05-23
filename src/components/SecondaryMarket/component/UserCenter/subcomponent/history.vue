<template>
	<div>
		<ul>
			<li class="history" v-for="(record,index) in history" @mousedown="listenStart(index,$event)" @mouseup="listenEnd(index,$event)" @touchstart="listenStart(index,$event)" @touchmove="listenMove($event)" @touchend="listenEnd(index,$event)">
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
	import confirmBox from './shared/ConfirmBox.vue'
	import util from './shared/util.js'
	import listen from './shared/listen.js'
	import edit from '@/components/SecondaryMarket/media/edit.png'
	import delete_ from '@/components/SecondaryMarket/media/delete.png'

	const getHistory = '/secondhand/browse/historyArticle'
	const deleteHistory = '/secondhand/publish/deletearticle'
	const editHistory = '/second/publish'

	export default {
		name: 'history',
		components: {
			'confirmbox': confirmBox
		},
		mixins: [listen((self,index,event,delta,distX,distY) => {
			if(delta > 500 && Math.abs(distY) < 25){
				return
			}
			else if(event.path[2].className != 'buttons' && delta > 10 && Math.abs(distY) < 25){
				self.viewArticle(self.history[index].articleid)
			}
		})],
		mounted () {
			marketFetch.getJsonData(getHistory,{}).then((result) => this.updateHistory(result))
		},
		data () {
			var dict = new Map([['articleid','id'],['name','name'],['price','price'],['commentnum','reviews'],['collectnum','collections']])
			return {
				history: [],
				dict: dict,
				button: {
					edit: edit,
					delete: delete_,
				}
			}
		},
		methods: {
			editPost (index) {
				this.$router.push(`${editHistory}/${this.history[index].articleid}`)
			},
			deletePost (index) {
				this.history[index].beforeDelete = true
			},
			confirmDelete (index) {
				this.history[index].beforeDelete = false
				marketFetch.postJsonData(deleteHistory,{articleid: this.history[index].articleid}).then((result) => {
					if(result.code === 1 || result.detail === 'don\'t delete again') this.history.splice(index,1)
				})
			},
			updateHistory (records) {
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
			viewArticle (id) {
				this.$router.push(`/second/details/${id}`)
			}
		},
		props: ['userid']
	}
</script>

<style scoped>
	.history .descimg{
		margin: 1rem 0.5rem 1rem 1.25rem;
		float: left;
	}
	.desc>.counts{
		font-size: 0.75rem;
		color: #99989a;
	}
	.button{
		display: flex;
		margin-left: 1.5rem;
	}

</style>