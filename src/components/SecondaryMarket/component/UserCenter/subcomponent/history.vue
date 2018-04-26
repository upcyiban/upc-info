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
	import confirmBox from './shared/confirmbox.vue'
	export default {
		name: 'history',
		components: {
			'confirmbox': confirmBox
		},
		mounted: function(){
			this.history = [
				{
					publishid: '123123',
					img: 'https://chrome-apps-doc2.appspot.com/trunk/extensions/examples/api/idle/idle_simple/sample-128.png',
					name: '宝贝xxx',
					price: '19',
					commentnum: 2,
					collectnum: 3,
					beforeDelete: false
				}
			]
		},
		data: function(){
			return {
				history: []
			}
		},
		methods: {
			editPost: function(index){
				//go to publish page
			},
			deletePost: function(index){
				this.history[index].beforeDelete = true;
			},
			confirmDelete: function(index){
				//requestdelete
				this.history.splice(index,1)
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