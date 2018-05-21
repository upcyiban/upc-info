export default function (onEndAction) {
	return {
		methods: {
			listenStart (index,event) {
				if(event.type === 'mousedown'){
					this.mousedown = {
						startTime: event.timeStamp,
						startX: event.clientX,
						startY: event.clientY,
					}
				}
				else if(event.type === 'touchstart'){
					this.touchstart = {
						startTime: event.timeStamp,
						startX: event.touches[0].clientX,
						startY: event.touches[0].clientY,
					}
				}
			},
			listenMove (event) {
				this.touchend = {
					endX: event.touches[0].clientX,
					endY: event.touches[0].clientY,
				}
			},
			listenEnd (index,event) {
				if(event.type === 'mouseup'){
					let delta = event.timeStamp - this.mousedown.startTime,
					distX = event.clientX - this.mousedown.startX,
					distY = event.clientY - this.mousedown.startY
					onEndAction(this,index,event,delta,distX,distY)
				}
				else if(event.type === 'touchend'){
					let delta = event.timeStamp - this.touchstart.startTime,
					distX = this.touchend && this.touchend.endX ? this.touchend.endX - this.touchstart.startX : 0,
					distY = this.touchend && this.touchend.endY ? this.touchend.endY - this.touchstart.startY : 0
					this.touchstart = this.touchend = {}
					onEndAction(this,index,event,delta,distX,distY)
				}
			},
		}
	}
}