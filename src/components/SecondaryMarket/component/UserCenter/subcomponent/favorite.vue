<template>
	<div>
		<ul>
			<li class="item" v-for="(item,index) in items" @click=''>
				<img class="descimg" :src="item.img">
				<div class="desc">
					<p class="title">{{ item.name }}</p>
					<p class="price">￥{{ item.price }}</p>
					<p class="date">{{ item.date }}</p>
				</div>
				<div class="button">
					<p @click='deleteFavorite(index)'>删除</p>
				</div>
				<confirmbox v-if="item.beforeDelete" @confirm="confirmDelete(index)" @cancel="item.beforeDelete = false"></confirmbox>
			</li>
		</ul>
	</div>
</template>

<script>
	import HttpRequest from '@/common/util/HttpRequest'
	import confirmBox from './shared/confirmbox.vue'
	export default {
		name: 'favorite',
		components: {
			'confirmbox': confirmBox
		},
		mounted: function(){
			this.items = [
				{
					id: '12345',
					url: 'http://example.com',
					img: 'https://chrome-apps-doc2.appspot.com/trunk/extensions/examples/api/idle/idle_simple/sample-128.png',
					name: '宝贝xxx',
					price: '19',
					date: '三天前收藏',
					beforeDelete: false
				}
			]
		},
		data: function(){
			return {
				items: []
			}
		},
		methods: {
			showConfirmation: function(index){

			},
			deleteFavorite: function(index){
				this.items[index].beforeDelete = true;
			},
			confirmDelete: function(index){
				//request delete
				this.items.splice(index,1)
			}
		},
		props: ['userid']
	}
</script>

<style scoped>
	.item>img{
		margin: 0.75rem;
		float: left;
	}
	.date{
		color: #99989a;
		font-size: 0.75rem;
	}
</style>