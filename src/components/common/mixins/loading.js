import fetchListen from "../../../common/util/fetchListen"

function loading (httpRequest) {
    return {
        data: function () {
            fetchListen(httpRequest ,
                () => this.showLoading = true ,
                () => this.showLoading = false
            )
            return {
                loading: require('../../SecondaryMarket/media/loading.gif'),
                showLoading: false,
                fetch: httpRequest
            }
        }
    }
}

export default loading
