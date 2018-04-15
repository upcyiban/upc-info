
class HttpRequest {

    commonUrl;

    constructor (commonUrl) {
        this.commonUrl = commonUrl ? commonUrl : '';
    }

    getData(url , body) {
        url += '?'
        for (let key in body) {
            if (body.hasOwnProperty(key)) {
                url += key + '=' + body[key] + '&'
            }
        }
        url = url.split('').splice(0 , url.length - 1).join('')
        url = this.commonUrl + url
        console.log('get method' , url);
        return fetch(url)
    }

    postData(url , body) {
        let fd = new FormData()
        for (let key in body) {
            if (body.hasOwnProperty(key)) {
                fd.append(key , body[key])
            }
        }
        return fetch(this.commonUrl + url , {
            method: 'post',
            body , fd
        })
    }

    getJsonData(url , body){
        this.getData(url , body).then(r => {
            return r.json()
        })
    }

    getTextData(url , body) {
        return this.getData(url , body).then(r => {
            return r.text()
        })
    }

    postJsonData(url , body) {
        return this.postData(url , body).then(r => {
            return r.json()
        })
    }

    postTextData(url , body) {
        return this.postData(url , body).then(r => {
            return r.text()
        })
    }
}

export default HttpRequest;
