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
	import util from './shared/util'
	import edit from '@/components/SecondaryMarket/media/edit.png'
	import delete_ from '@/components/SecondaryMarket/media/delete.png'

	const getHistory = '/secondhand/browse/historyArticle'
	const deleteHistory = '/secondhand/publish/deletearticle'
	const editHistory = '/second/edit-article/'

	export default {
		name: 'history',
		components: {
			'confirmbox': confirmBox
		},
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
			listenStart (index,event) {
				if(event.type === 'mousedown'){
					this.mousedown = {
						startTime: event.timeStamp,
						startX: event.clientX,
						startY: event.clientY,
					}
				}
				else if(event.type === 'touchstart'){
					this.touchstart = {
						startTime: event.timeStamp,
						startX: event.touches[0].clientX,
						startY: event.touches[0].clientY,
					}
				}
			},
			listenMove (event) {
				this.touchend = {
					endX: event.touches[0].clientX,
					endY: event.touches[0].clientY,
				}
			},
			listenEnd (index,event) {
				if(event.type === 'mouseup'){
					let delta = event.timeStamp - this.mousedown.startTime,
					distX = event.clientX - this.mousedown.startX,
					distY = event.clientY - this.mousedown.startY
					if(event.path[2].className != 'buttons' && delta > 10 && Math.abs(distY) < 20){
						this.viewArticle(this.history[index].articleid)
					}
				}
				else if(event.type === 'touchend'){
					let delta = event.timeStamp - this.touchstart.startTime,
					distX = this.touchend && this.touchend.endX ? this.touchend.endX - this.touchstart.startX : 0,
					distY = this.touchend && this.touchend.endY ? this.touchend.endY - this.touchstart.startY : 0
					this.touchstart = this.touchend = {}
					if(delta > 500){
						return
					}
					else if(event.path[2].className != 'buttons' && delta > 10 && Math.abs(distY) < 25){
						this.viewArticle(this.history[index].articleid)
					}
				}
			},
			editPost (index) {
				this.$router.push(editHistory + this.history[index].articleid)
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