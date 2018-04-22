<template>
	<div>
		<ul>
			<li class="history" v-for="record in history" @click="">
				<img class="descimg" :src="record.img">
				<div class="desc">
					<p class="title">{{ record.name }}</p>
					<p class="price">￥{{ record.price }}</p>
					<p class="counts">留言{{ record.commentnum }} · 收藏{{ record.collectnum }}</p>
				</div>
				<div class="button">
					<p @:click=''>编辑</p>
					<p @:click=''>删除</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'history',
		data: function(){
			return {
				history: [
					{
						img: 'https://chrome-apps-doc2.appspot.com/trunk/extensions/examples/api/idle/idle_simple/sample-128.png',
						name: '宝贝xxx',
						price: '19',
						commentnum: 2,
						collectnum: 3
					}
				]
			}
		}
	}
</script>

<style scoped>
	.history{
		display: inline-flex;
	}
	.history>img{
		margin: 1rem;
	}
	.desc>.counts{
		font-size: 0.8rem;
		color: #99989a;
	}
	.button>p{
		margin: 0 0 0 1rem;
	}
</style>