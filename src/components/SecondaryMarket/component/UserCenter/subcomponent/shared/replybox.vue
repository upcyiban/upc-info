<template>
	<transition name="pop">
		<div class="replybox">
			<div class="close" @click="success"><p>X</p></div>
			<input type="text" v-model="content">
			<div class="send" @click="send">
				<p class="absolute-center">回复</p>
			</div>
		</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'replyBox',
	props: ['replyTo'],
	data: function(){
		return {
			content: ''
		}
	},
	methods: {
		send: function(content){
			//post data
			console.log(this.replyTo+':'+this.content)
			this.success()
		},
		success: function(){
			this.$emit('success')
		}
	}
}
</script>

<style scoped>
.replybox{
	width: 100%;
	height: 2.75rem;
	background-color: #efefef;
	display: inline-flex;
	z-index: 999;
	position: fixed;
	bottom: -1px;
	left:50%;
	transform: translate(-50%,0);
}
.close{
	width: 5%;
}
.send{
	width: 15%;
}
.close>p{
	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
}
input{
	width: 80%;
	height: 2rem;
	font-size: 1.25rem;
	margin: 0.25rem 0 0.25rem 0.25rem;
}
.send>p{
	position: relative;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
}
@keyframes pop{
	0%{
		transform: translate(-50%,100%);
	}
	100%{
		transform: translate(-50%,0%);
	}
}
.pop-enter-active{
	animation: pop .2s;
}
.pop-leave-active{
	animation: pop .2s reverse;
}
</style>