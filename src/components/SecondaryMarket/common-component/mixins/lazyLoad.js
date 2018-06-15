/**
 * 如果其他组件需要使用该混入模式，需要自行保证并且提供名为getManagerList得method
 * 其中该函数得返回值是一个回调为名为data的promise，data表示一页的完整数据
 * 请参考二手市场首页组件的使用
 */
export default {
    data () {
        return {
            pageList: [],
            nextPageNumber: 1
        }
    },
    mounted () {
        window.addEventListener('scroll', this.scrollEvent)
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.scrollEvent)
    },
    methods: {
        addPage (pageData) {
            const pageNumber = pageData.pageData.number
            if (pageNumber >= this.nextPageNumber) {
                return -1
            }
            this.pageList.push(pageData)
            return this.pageList.length
        },
        fetchNextPage () {
            const pageNum = this.nextPageNumber
            if (pageNum >= this.pageList[0].pageData.totalPages) {
                return
            }
            this.nextPageNumber += 1
            this.getManagerList(pageNum).then(data => {
                this.addPage(data)
            })
        },
        scrollEvent () {
            let scrollTop = document.documentElement.scrollTop + document.body.scrollTop
            const documentHeight = document.documentElement.clientHeight
            const windowHeight = document.documentElement.offsetHeight
            // 在将要到达底部，并且没有正在提交请求时，开始加载数据
            // 这样可以避免用户向上滚动加载额外数据的BUG
            // scrollTop是浮点相等不了
            if (windowHeight > scrollTop + documentHeight - 5 && windowHeight < scrollTop + documentHeight + 5) {
                this.fetchNextPage()
            }
        }
    }

}
