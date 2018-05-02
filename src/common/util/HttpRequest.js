import {commonUrl} from "../../config/config"
import {UserData, YibanAuth} from "./getYibanData"

class HttpRequest {

    commonUrl = commonUrl
    fetchBefore
    fetchAfter
    fetchError = []

    constructor (commonUrl , fetchBefore , fetchAfter , fetchError) {
        this.commonUrl = (commonUrl !== null && commonUrl !== undefined) ?
            commonUrl : this.commonUrl
        this.fetchBefore = fetchBefore
        this.fetchAfter = fetchAfter
        this.fetchError.push((r) => {
            window.r = r
            if (r.toString() === 'TypeError: Failed to fetch') {
                alert('请检查网络链接')
            }
        })
        fetchError && fetchError.forEach(item => this.fetchError.push(item))
    }


    /**
     * @namespace fetch
     * @param url 链接
     * @param body 对象形式传入参数列表
     * @returns {*}
     * @private
     */

    _getData (url, body) {
        this.fetchBefore && this.fetchBefore()
        url += '?Authorization=' + UserData.getLocalToken()
        for (let key in body) {
            if (body.hasOwnProperty(key)) {
                url += key + '=' + body[key] + '&'
            }
        }
        url = this.commonUrl + url
        console.log('get method', url)
        return fetch(url, {
            method: 'get',
            // 后端跨域不允许携带cookie？等到后端支持跨域携带cookie以后取消掉改注释
            // credentials: "include"
        }).catch(r => {
            this.fetchError.forEach(item => {
                item(r)
            })
        }).then(data => {
            this.fetchAfter && this.fetchAfter()
            return data
        })
    }

    _postData (url, body) {
        this.fetchBefore && this.fetchBefore()
        url += '?Authorization=' + UserData.getLocalToken()
        let fd = new FormData()
        for (let key in body) {
            if (body.hasOwnProperty(key)) {
                fd.append(key, body[key])
            }
        }
        console.log('POST method' , this.commonUrl+url)
        console.log('formData' , body)
        return fetch(this.commonUrl + url, {
            method: 'post',
            body, fd,
            // 后端跨域不允许携带cookie？等到后端支持跨域携带cookie以后取消掉改注释
            // credentials: "include"
        }).catch(r => {
            this.fetchError.forEach(item => {
                item(r)
            })
        }).then(data => {
            this.fetchAfter && this.fetchAfter()
            return data
        })
    }

    getJsonData (url, body) {
        /**
         * @namespace r.json
         */
        return this._getData(url, body).then(r => {
            return r.json()
        })
    }

    getTextData (url, body) {
        return this._getData(url, body).then(r => {
            return r.text()
        })
    }

    postJsonData (url, body) {
        return this._postData(url, body).then(r => {
            return r.json()
        })
    }

    postTextData (url, body) {
        return this._postData(url, body).then(r => {
            return r.text()
        })
    }
}

export default HttpRequest
