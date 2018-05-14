<template>
	<div>
		<ul>
			<li class="item" v-for="(item,index) in items" @mousedown="listenStart(index,$event)" @mouseup="listenEnd(index,$event)" @touchstart="listenStart(index,$event)" @touchmove="listenMove($event)" @touchend="listenEnd(index,$event)">
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
	import confirmBox from './shared/ConfirmBox.vue'
	import util from './shared/util'
	import delete_ from '@/components/SecondaryMarket/media/delete.png'

	const getCollection = '/secondhand/collention/usercollection'
	const deleteCollection = '/secondhand/collention/deletecollection'

	export default {
		name: 'favorite',
		components: {
			'confirmbox': confirmBox
		},
		mounted () {
			marketFetch.getJsonData(getCollection,{}).then((result) => this.updateFavorite(result))
		},
		data () {
			var dict = new Map([['articleid','articleId'],['img','articleUserYBHead'],['name','articleName'],['price','articlePrice']])
			return {
				items: [],
				dict: dict,
				buttons: {
					delete: delete_
				},
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
					if(event.path[1].className != 'buttons' && delta > 10 && Math.abs(distY) < 20){
						this.viewArticle(this.items[index].articleid)
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
					else if(event.path[1].className != 'buttons' && delta > 10 && Math.abs(distY) < 25){
						this.viewArticle(this.items[index].articleid)
					}
				}
			},
			deleteFavorite (index) {
				this.items[index].beforeDelete = true;
			},
			confirmDelete (index) {
				marketFetch.postJsonData(deleteCollection,{collectionid: this.items[index].articleid})
				this.items.splice(index,1)
			},
			updateFavorite (items) {
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
			viewArticle (id) {
				this.$router.push(`/second/details/${id}`)
			}
		},
		props: ['userid']
	}
</script>

<style scoped>
	.item .descimg{
		margin: 1rem 0.5rem 1rem 1.25rem;
		float: left;
	}
	.date{
		color: #99989a;
		font-size: 0.75rem;
	}
</style>