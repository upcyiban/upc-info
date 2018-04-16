<template>
	<div>
		<prof></prof>
		<div class='router'>
			<button v-on:click="changeTab('favorite')">favorite</button>
			<button v-on:click="changeTab('comment')">comment</button>
			<button v-on:click="changeTab('history')">history</button>
			<div>
				<component v-bind:is="currentTabComponent"></component>
			</div>
		</div>
	</div>
</template>

<script>
	import profile from '@/components/SecondaryMarket/component/My/subcomponent/profile'
	import favorite from '@/components/SecondaryMarket/component/My/subcomponent/favorite'
	import comment from '@/components/SecondaryMarket/component/My/subcomponent/comment'
	import history from '@/components/SecondaryMarket/component/My/subcomponent/history'
	export default {
		name: 'My',
		data: function(){
			return {
				currentTab: 'favorite'
			}
		},
		computed: {
			currentTabComponent: function(){
				return 'tab-' + this.currentTab
			}
		},
		methods: {
			changeTab: function(to){
				this.currentTab = to
			}
		},
		components: {
			'prof': profile,
			'tab-favorite': favorite,
			'tab-comment': comment,
			'tab-history': history
		}
	}
</script>

<style scope>

</style>