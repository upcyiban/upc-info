function fetchVq (yibanAuth) {
    return {
        data() {
            return {
                title: '没有设置title,请详细阅读代码文档',
                yibanAuth: yibanAuth
            }
        },
        watch: {
            title(title) {
                document.querySelector('title').innerHTML = title
            }
        },
        created() {
            this.yibanAuth && this.yibanAuth.fetchVq()
            document.querySelector('title').innerHTML = this.title
        }
    }
}
export default fetchVq
