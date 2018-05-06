import marketFetch from '@/components/SecondaryMarket/config/fetchUtil'

export default {
	computeDate(timestamp) {
				var now = (new Date()).valueOf()
				var delta = (now - timestamp)/1000
				if(delta < 60)return '刚刚'
				else if(delta < 3600)return parseInt(delta / 60) + '分钟前'
				else if(delta < 86400)return parseInt(delta / 3600) + '小时前'
				else return parseInt(delta / 86400) + '天前'
	},
	firstImg(url) {
		console.log(url)
		if(typeof url === "undefined" || !(url.startsWith('['))) return url
		else return url.substring(1,url.length-1).split('"')[1]
	},
}