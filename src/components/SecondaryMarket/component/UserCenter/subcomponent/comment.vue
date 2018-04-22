<template>
	<div>
		<ul class="comments list">
			<li class="comment" v-for="comment in comments">
				<div>
					<div class="user">
						<img :src="comment.avatar" class="avatar">
						<p class="nick">{{ comment.nick }}</p>
						<p class="time">{{ comment.time }}</p>
					</div>
					<p class="content">评论了你: {{ comment.content }}</p>
				</div>
				<img class="descimg right" :src="comment.descimg">
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'comment',
		data: function(){
			return {
				comments: [
					{
						nick: '放肆 - ',
						avatar: 'https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-256.png',
						time: '13:17',
						content: '宝贝还在吗',
						descimg: 'https://chrome-apps-doc2.appspot.com/trunk/extensions/examples/api/idle/idle_simple/sample-128.png'
					},
					{
						nick: '放肆 - ',
						avatar: 'https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-256.png',
						time: '13:17',
						content: '宝贝还在吗哈哈哈哈啊实打实的是大多数啊阿斯顿 阿斯顿啊实打实的十大师弟阿三啊啊额广泛大概是对方回到法国和电话',
						descimg: 'https://chrome-apps-doc2.appspot.com/trunk/extensions/examples/api/idle/idle_simple/sample-128.png'
					}
				]
			}
		}
	}
</script>

<style>
	.comment>div{
		z-index: 999;
		text-align: left;
		width: 70%;
	}
	.comment .avatar{
		height: 48px;
		width: 48px;
		float: left;
		margin: 1rem;
	}
	.comment .nick{
		font-size: 1.25rem;
		font-weight: bold;
		margin: 0;
		padding: 1rem 0 0.75rem 0;
	}
	.comment .time{
		color: #9e9898;
		margin: 0;
		padding: 0 0 1rem 0;
	}
	.comment .content{
		font-size: 0.9rem;
		position: relative;
		left: 1rem;
		margin: 0;
		max-width: 80%;
		padding-bottom: 1rem;
	}
	.descimg.right{
		margin: 0;
		position: absolute;
		top: 50%;
		right: 1rem;
		transform: translate(0,-50%);
	}
</style>