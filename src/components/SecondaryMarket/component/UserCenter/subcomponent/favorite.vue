<template>
	<div>
		<ul>
			<li class="item" v-for="item in items" @click=''>
				<img class="descimg" :src="item.img">
				<div class="desc">
					<p class="title">{{ item.name }}</p>
					<p class="price">￥{{ item.price }}</p>
					<p class="date">{{ item.date }}</p>
				</div>
				<div class="button">
					<p @click=''>删除</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'favorite',
		data: function(){
			return {
				items: [
					{
					url: 'http://example.com',
					img: 'https://chrome-apps-doc2.appspot.com/trunk/extensions/examples/api/idle/idle_simple/sample-128.png',
					name: '宝贝xxx',
					price: '19',
					date: '三天前收藏'
					}
				]
			}
		}
	}
</script>

<style scoped>
	.item>img{
		margin: 1rem;
		float: left;
	}
	.desc>.date{
		color: #99989a;
		font-size: 0.8rem;
	}
</style>