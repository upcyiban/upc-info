export default {
	computeDate (timestamp) {
				var now = (new Date()).valueOf()
				var delta = (now - timestamp)/1000
				if(delta < 60)return '刚刚'
				else if(delta < 3600)return parseInt(delta / 60) + '分钟前'
				else if(delta < 86400)return parseInt(delta / 3600) + '小时前'
				else return parseInt(delta / 86400) + '天前'
	},
	firstImg (url) {
		if(typeof url === 'undefined') return ''
		else return JSON.parse(url)[0]
	},
	limitWords (content,maxLength) {
		if(content.length > maxLength)return `${content.substr(0,maxLength)}…`
		else return content
	}
}