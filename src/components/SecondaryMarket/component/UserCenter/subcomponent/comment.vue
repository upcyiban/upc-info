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
						<p class="content">评论了：{{ comment.content }}</p>
					</div>
					<img v-if="comment.descimg" class="descimg right" :src="comment.descimg" @click.stop="detail(index)">
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
	import util from './shared/util.js'
	import listen from './shared/listen.js'

	const getComment = '/secondhand/browse/historyreview'
	const deleteComment = '/secondhand/publish/deletereview'

	export default {
		name: 'comment',
		components: {
			'replybox': replyBox,
			'confirmbox': confirmBox,
		},
		mixins: [listen((self,index,event,delta,distX,distY) => {
			if(delta > 500){
				self.showConfirmation(index)
			}
			else if(delta > 10 && Math.abs(distY) < 25){
				self.detail(index)
			}
		})],
		mounted () {
			marketFetch.getJsonData(getComment,{}).then((result) => this.updateComments(result))
		},
		data () {
			var dict = new Map([['articleid','articleId'],['reviewid','reivewId'],['content','detail'],['nick','ybname'],['avatar','ybhead']])
			return {
				comments: [],
				replyStatus: false,
				replyTo: '',
				dict: dict
			}
		},
		methods: {
			replyComment (index) {
				// if replybox is required
				// please uncomment
				// this.replyStatus = true
				if(this.comments[index]){
					this.replyTo = this.comments[index].reviewid
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
				marketFetch.postJsonData(deleteComment,{reviewid: this.comments[index].reviewid})
				if(this.comments[index].reviewid == this.replyTo){
					this.replyEnd()
				}
				this.comments.splice([index],1)
			},
			detail (index) {
				this.$router.push(`/second/details/${this.comments[index].articleid}`)
			},
			updateComments (comments) {
				comments.forEach((comment,index,comments) => {
					if(comment && comment.isdelete != 0)return true
					let tmp = {}
					this.dict.forEach((from,to,dict) => {
						if(comment.hasOwnProperty(from)){tmp[to] = comment[from] ? comment[from] : ''}
					})
					tmp['descimg'] = util.firstImg(comment['articleImgUrl'])
					tmp['time'] = util.computeDate(comment['createtime'])
					tmp['beforeDelete'] = false
					this.comments.push(tmp)
				})
			},
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
		margin-bottom: 0.9rem;
		max-width: 90%;
	}
	.descimg.right{
		margin: 0;
		position: absolute;
		top: 1rem;
		right: 1rem;
	}
</style>