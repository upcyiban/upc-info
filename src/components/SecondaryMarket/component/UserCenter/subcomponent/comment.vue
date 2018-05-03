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
					<p class="content">评论了你: {{ comment.content }}</p>
				</div>
				<img class="descimg right" :src="comment.descimg" @click.stop="detail(index)">
				<confirmbox v-if="comment.beforeDelete" @confirm="confirmDelete(index)" @cancel="comment.beforeDelete = false"></confirmbox>
			</li>
		</ul>
		<replybox v-if="replyStatus" :replyTo="replyTo" @success="replyEnd"></replybox>
	</div>
</template>

<script>
	import HttpRequest from '@/common/util/HttpRequest'
	import marketFetch from '@/components/SecondaryMarket/model/marketFetch'
	import confirmBox from './shared/confirmbox.vue'
	import replyBox from './shared/replybox.vue'
	import util from './shared/util'
	export default {
		name: 'comment',
		components: {
			'replybox': replyBox,
			'confirmbox': confirmBox,
		},
		mounted() {
			marketFetch.getJsonData('/secondhand/browse/historyreview',{}).then((result) => this.updateComments(result))
		},
		data: function(){
			var dict = new Map([['commentid','id'],['content','detail'],['nick','ybname'],['avatar','ybhead']])
			return {
				comments: [],
				replyStatus: false,
				replyTo: '',
				dict: dict
			}
		},
		methods: {
			listenStart(index,event) {
				this.startTime = event.timeStamp
			},
			listenEnd: function(index,event){
				let delta = event.timeStamp - this.startTime
				if(delta > 500)this.comments[index].beforeDelete = true
				else if(delta > 10) this.replyComment(index)
			},
			replyComment: function(index){
				this.replyStatus = true
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
				///requestdelete
				if(this.comments[index].commentid == this.replyTo){
					this.replyEnd()
				}
				this.comments.splice([index],1)
			},
			detail: function(index){
				//go to details
				this.$router.push('/')
			},
			updateComments(comments){
				comments.forEach((comment,index,comments) => {
					let tmp = {}
					this.dict.forEach((from,to,dict) => {
						if(comment.hasOwnProperty(from)){tmp[to] = comment[from] ? comment[from] : ''}
					})
					tmp['time'] = util.computeDate(comment['createtime'])
					tmp['beforeDelete'] = false
					tmp['descimg'] = this.requestImg(index,comment['id'])
					this.comments.push(tmp)
				})
			},
			requestImg(index,id) {
				marketFetch.getJsonData('/secondhand/browse/onearticle',{articleid: id}).then((result) => {
					this.comments[index].descimg = util.firstImg(result['imgurl'])
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
		margin: 0.5rem;
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
		padding-bottom: 0.5rem;
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