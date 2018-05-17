<template>
	<transition name="showConfirmation">
		<div class="confirm-box absolute-center">
			<div class="ctn">
				<p>确认删除？</p>
				<div class="btns">
					<button class="cfm btn" @mouseup.stop="confirm" @touchend.stop="confirm">确认</button>
					<button class="ccl btn" @mouseup.stop="cancel" @touchend.stop="cancel">取消</button>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		name: 'confirm-box',
		methods: {
			confirm () {
				this.$emit('confirm')
			},
			cancel () {
				this.$emit('cancel')
			}
		}
	}
</script>

<style scoped>
	.confirm-box{
		width: 45%;
		height: 4rem;
		background: #ffffff;
		border: 1px solid #cfcfcf;
		border-radius: 3px;
		z-index: 900;
		transform-origin: top left;
		-webkit-touch-callout: none;
	}
	p{
		font-size: 1rem;
		margin-top: 0.5rem;
	}
	.ctn{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		text-align: center;
		width: 100%;
	}
	.btns{
		display: flex;
	}
	.btn{
		flex: 1;
		width: 3rem;
		height: 1.5rem;
		margin: 0.5rem 0.75rem;
		border-radius: 3rem;
		background-image: none;
		outline-style: none;
		font-size: 0.8rem;
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