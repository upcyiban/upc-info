import {commonUrl} from "../../config/config"
import {UserData, YibanAuth} from "./getYibanData"

class HttpRequest {

    commonUrl = commonUrl

    constructor (commonUrl) {
        this.commonUrl = (commonUrl !== null && commonUrl !== undefined) ?
            commonUrl : this.commonUrl
    }

    /**
     * @namespace fetch
     * @param url 链接
     * @param body 对象形式传入参数列表
     * @returns {*}
     * @private
     */

    _getData (url, body) {
        url += '?Authorization=' + UserData.getLocalToken()
        for (let key in body) {
            if (body.hasOwnProperty(key)) {
                url += key + '=' + body[key] + '&'
            }
        }
        url = url.split('').splice(0, url.length - 1).join('')
        url = this.commonUrl + url
        console.log('get method', url)
        return fetch(url, {
            method: 'get',
            // 后端跨域不允许携带cookie？等到后端支持跨域携带cookie以后取消掉改注释
            // credentials: "include"
        })
    }

    _postData (url, body) {
        url += '?Authorization=' + UserData.getLocalToken()
        let fd = new FormData()
        for (let key in body) {
            if (body.hasOwnProperty(key)) {
                fd.append(key, body[key])
            }
        }
        return fetch(this.commonUrl + url, {
            method: 'post',
            body, fd,
            // 后端跨域不允许携带cookie？等到后端支持跨域携带cookie以后取消掉改注释
            // credentials: "include"
        })
    }

    getJsonData (url, body) {
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
