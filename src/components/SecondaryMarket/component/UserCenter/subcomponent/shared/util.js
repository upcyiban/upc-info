import marketFetch from '@/components/SecondaryMarket/model/marketFetch'

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
		return url.substring(1,url.length-1).split('"')[1]
	},
}