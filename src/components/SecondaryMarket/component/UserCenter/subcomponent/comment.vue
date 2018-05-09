<template>
	<div>
		<ul class="comments list">
			<li class="comment" v-for="(comment,index) in comments" @mousedown="listenStart(index,$event)" @mouseup="listenEnd(index,$event)" @touchstart="listenStart(index,$event)" @touchend="listenEnd(index,$event)">
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
	import confirmBox from './shared/confirmbox.vue'
	import replyBox from './shared/replybox.vue'
	import util from './shared/util'

	const getComment = '/secondhand/browse/historyreview'
	const deleteComment = '/secondhand/publish/deletereview'

	export default {
		name: 'comment',
		components: {
			'replybox': replyBox,
			'confirmbox': confirmBox,
		},
		mounted() {
			marketFetch.getJsonData(getComment,{}).then((result) => this.updateComments(result))
		},
		data: function(){
			var dict = new Map([['commentid','id'],['content','detail'],['nick','ybname'],['avatar','ybhead'],['articleid','articleId']])
			return {
				comments: [],
				replyStatus: false,
				replyTo: '',
				dict: dict
			}
		},
		methods: {
			// if deletebox and replybox are required
			// please uncomment

			listenStart(index,event) {
				this.startTime = event.timeStamp
			},
			listenEnd: function(index,event){
				let delta = event.timeStamp - this.startTime
				if(delta > 500)this.comments[index].beforeDelete = true
				else if(delta > 10)this.$router.push(`/second/details/${this.comments[index].articleid}`)
//				else if(delta > 10) this.replyComment(index)
			},
			replyComment: function(index){
//and here				this.replyStatus = true
				if(this.comments[index]){
					this.replyTo = this.comments[index].commentid
				}
			},
			replyEnd: function(){
				this.replyStatus = false
				this.replyTo = ''
			},
			showConfirmation: function(index){
				this.comments[index].beforeDelete = true
			},
			confirmDelete: function(index){
				marketFetch.postJsonData(deleteComment,{reviewid: this.comments[index].commentid})
				if(this.comments[index].commentid == this.replyTo){
					this.replyEnd()
				}
				this.comments.splice([index],1)
			},
			detail: function(index){
				this.$router.push('`/second/details/${comment.articleid}`')
			},
			updateComments(comments){
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
			requestImg(index,id) {
				marketFetch.getJsonData('/secondhand/browse/onearticle',{articleid: id}).then((result) => {
					this.$set(this.comments[index],'descimg',util.firstImg(result['imgurl']))
				})
			}
		},
		props: ['userid']
	}
</script>

<style>
	.comment div{
		z-index: 999;
		text-align: left;
		width: 70%;
	}
	.comment .avatar{
		height: 2.5rem;
		width: 2.5rem;
		float: left;
		margin: 0.5rem;
		border-radius: 2.5rem;
	}
	.comment .nick{
		font-size: 1.25rem;
		margin: 0;
		padding: 0.5rem 0;
	}
	.comment .time{
		color: #9e9898;
		font-size: 0.75rem;
		margin: 0;
		margin-bottom: 0.75rem;
	}
	.comment .content{
		color: #606060;
		font-size: 0.9rem;
		line-height: 1.05rem;
		position: relative;
		left: 1rem;
		margin: 0;
		max-width: 80%;
		padding-bottom: 0.5rem;
	}
	.descimg.right{
		margin: 0;
		position: absolute;
		top: 50%;
		right: 1rem;
		transform: translate(0,-50%);
	}
</style>