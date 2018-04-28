class Token {
    httpRequest
    constructor (httpRequest) {
        this.httpRequest = httpRequest
    }
    fetchTokenByeText (appName , device , vq) {
        const fd = new FormData();
        fd.append('appName' , appName)
        fd.append('vq' , vq)
        fd.append('device' , device)
        return fetch(this.httpRequest.commonUrl+'/auth' , {
            method : 'POST',
            body: fd
        }).then(token => {
            window.a = token
            return token.json()
        }).then(json => {
            window.sessionStorage.token = json.token
        })
    }
}

export default Token
