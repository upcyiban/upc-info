function fetchVq (yibanAuth) {
    return {
        data() {
            return {
                title: '没有设置title,请详细阅读代码文档',
                yibanAuth: yibanAuth
            }
        },
        created() {
            this.yibanAuth && this.yibanAuth.fetchVq()
        },
        beforeMount() {
            if (this.title !== null && this.title !== undefined) {
                document.querySelector('title').innerHTML = this.title
            }
            // this.yibanAuth && this.yibanAuth.refreshToken()
        }
    }
}
export default fetchVq
