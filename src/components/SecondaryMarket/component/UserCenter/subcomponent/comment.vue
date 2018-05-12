<template>
	<div>
		<ul class="comments list">
			<li class="comment" v-for="(comment,index) in comments" @mousedown="listenStart(index,$event)" @mouseup="listenEnd(index,$event)" @touchstart="listenStart(index,$event)" @touchmove="listenMove($event)" @touchend="listenEnd(index,$event)">
					<div>
						<div class="user">
							<img :src="comment.avatar" class="avatar">
							<p class="nick">{{ comment.nick }}</p>
							<p class="time">{{ comment.time }}</p>
						</div>
						<p class="content">评论了: {{ comment.content }}</p>
					</div>
					<img class="descimg right" :src="comment.descimg" @click.stop="detail(index)">
					<confirmbox v-if="comment.beforeDelete" @confirm="confirmDelete(index)" @cancel="comment.beforeDelete = false"></confirmbox>
			</li>
		</ul>
		<replybox v-if="replyStatus" :replyTo="replyTo" @success="replyEnd"></replybox>
	</div>
</template>

<script>
	import {marketFetch} from '@/components/SecondaryMarket/config/fetchUtil'
	import confirmBox from './shared/ConfirmBox.vue'
	import replyBox from './shared/ReplyBox.vue'
	import util from './shared/util'

	const getComment = '/secondhand/browse/historyreview'
	const deleteComment = '/secondhand/publish/deletereview'

	export default {
		name: 'comment',
		components: {
			'replybox': replyBox,
			'confirmbox': confirmBox,
		},
		mounted () {
			marketFetch.getJsonData(getComment,{}).then((result) => this.updateComments(result))
		},
		data () {
			var dict = new Map([['commentid','id'],['content','detail'],['nick','ybname'],['avatar','ybhead'],['articleid','articleId']])
			return {
				comments: [],
				replyStatus: false,
				replyTo: '',
				dict: dict
			}
		},
		methods: {
			listenStart (index,event) {
				if(event.type === 'mousedown'){
					this.mousedown = {
						startTime: event.timeStamp,
						startX: event.pageX,
						startY: event.pageY,
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
						this.$router.push(`/second/details/${this.comments[index].articleid}`)
					}
				}
				else if(event.type === 'touchend'){
					let delta = event.timeStamp - this.touchstart.startTime,
					distX = this.touchend && this.touchend.endX ? this.touchend.endX - this.touchstart.startX : 0,
					distY = this.touchend && this.touchend.endY ? this.touchend.endY - this.touchstart.startY : 0
					this.touchstart = this.touchend = {}
					if(delta > 500){
						this.showConfirmation(index)
					}
					else if(delta > 10 && Math.abs(distY) < 25){
						this.$router.push(`/second/details/${this.comments[index].articleid}`)
					}
				}
			},
			replyComment (index) {
				// if replybox is required
				// please uncomment
				// this.replyStatus = true
				if(this.comments[index]){
					this.replyTo = this.comments[index].commentid
				}
			},
			replyEnd () {
				this.replyStatus = false
				this.replyTo = ''
			},
			showConfirmation (index) {
				this.comments[index].beforeDelete = true
			},
			confirmDelete (index) {
				marketFetch.postJsonData(deleteComment,{reviewid: this.comments[index].commentid})
				if(this.comments[index].commentid == this.replyTo){
					this.replyEnd()
				}
				this.comments.splice([index],1)
			},
			detail (index) {
				this.$router.push('`/second/details/${comment.articleid}`')
			},
			updateComments (comments) {
				comments.forEach((comment,index,comments) => {
					if(comment && comment.isdelete != 0)return true
					let tmp = {}
					this.dict.forEach((from,to,dict) => {
						if(comment.hasOwnProperty(from)){tmp[to] = comment[from] ? comment[from] : ''}
					})
					tmp['time'] = util.computeDate(comment['createtime'])
					tmp['beforeDelete'] = false
					this.requestImg(index,comment['articleId'])
					this.comments.push(tmp)
				})
			},
			requestImg (index,id) {
				marketFetch.getJsonData('/secondhand/browse/onearticle',{articleid: id}).then((result) => {
					this.$set(this.comments[index],'descimg',util.firstImg(result['imgurl']))
				})
			}
		},
		props: ['userid']
	}
</script>

<style>
	.comment>div{
		z-index: 999;
		text-align: left;
		width: 70%;
	}
	.comment .avatar{
		height: 2.5rem;
		width: 2.5rem;
		float: left;
		margin: 1rem 0.5rem 0 1rem;
		border-radius: 2.5rem;
	}
	.comment .nick{
		font-size: 1rem;
		margin: 0;
		padding: 1rem 0 0.5rem 0;
	}
	.comment .time{
		color: #9e9898;
		font-size: 0.75rem;
		margin: 0;
		margin-bottom: 1rem;
	}
	.comment .content{
		color: #606060;
		font-size: 0.9rem;
		position: relative;
		left: 1rem;
		margin: 0;
		max-width: 80%;
	}
	.descimg.right{
		margin: 0;
		position: absolute;
		top: 50%;
		right: 1.25rem;
		transform: translate(0,-50%);
	}
</style>