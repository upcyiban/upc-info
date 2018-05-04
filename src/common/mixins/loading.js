
function loading (httpRequest) {

    return {
        data: function () {
            return {
                loadState: false,
                fetch: httpRequest
            }
        },
        methods: {
            showLoading() {
                this.loadState = true
            },
            hiddenLoading() {
                this.loadState = false
            }
        },
        created() {
            this.fetch.addFetchListen('before' , this.showLoading)
            this.fetch.addFetchListen('after' , this.hiddenLoading)
        },
        beforeDestroy() {
            this.fetch.removeFetchListen('before' , this.showLoading)
            this.fetch.removeFetchListen('after' , this.hiddenLoading)
        }
    }
}

export default loading
