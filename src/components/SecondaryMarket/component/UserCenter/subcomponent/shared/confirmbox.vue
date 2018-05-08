<template>
	<transition name="showConfirmation">
		<div class="confirm-box">
			<p>确认删除？</p>
			<button class="cfm btn" @mouseup.stop="confirm" @touchend.stop="confirm">确认</button>
			<button class="ccl btn" @click.stop="cancel" @touchend.stop="cancel">取消</button>
		</div>
	</transition>
</template>

<script>
	export default {
		name: 'confirm-box',
		methods: {
			confirm: function(){
				this.$emit('confirm')
			},
			cancel: function(){
				this.$emit('cancel')
			}
		}
	}
</script>

<style scoped>
	.confirm-box{
		width: 40%;
		height: 3.25rem;
		background: #ffffff;
		border: 1px solid #cfcfcf;
		text-align: center;
		border-radius: 3px;
		z-index: 900;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		transform-origin: top left;
		-webkit-touch-callout: none;
	}
	p{
		font-size: 0.8rem;
		margin: 0.25rem;
	}
	.btn{
		margin: 0.25rem;
		border-radius: 2rem;
		background-image: none;
		outline-style: none;  
	}
	.cfm{
		border: 1px solid #ffc107;
		background-color: #ffc107;
	}
	.ccl{
		border: 1px solid #aeaeae;
		background-color: #fefefe;
	}
	@keyframes show{
		0%{
			transform: scale(0.1) translate(-50%,-50%);
		}
		100%{
			transform: scale(1) translate(-50%,-50%);
		}
	}
	.showConfirmation-enter-active{
		animation: show .2s;
	}
	.showConfirmation-leave-active{
		animation: show .2s reverse;
	}
</style>