class Token {
    httpRequest
    constructor (httpRequest) {
        this.httpRequest = httpRequest
    }
    fetchTokenByText (appName, device, vq) {
        const fd = new FormData()
        fd.append('appName', appName)
        fd.append('vq', vq)
        fd.append('device', device)
        /**
         * @namespace fetch
         */
        return fetch(this.httpRequest.commonUrl + '/auth', {
            method: 'POST',
            body: fd
        }).then(token => {
            return token.json()
        }).then(json => {
            window.sessionStorage.token = json.token
            return json.token
        })
    }
}

export default Token
