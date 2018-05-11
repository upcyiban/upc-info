import {commonUrl} from '../../config/config'
import {UserData, YibanAuth} from './getYibanData'
import {yibanAuth} from '../../components/SecondaryMarket/config/fetchUtil'

class HttpRequest {
    commonUrl = commonUrl
    yibanAuth
    _fetchBefore = []
    _fetchAfter = []
    _fetchError = []

    /**
     * @param commonUrl string 后端地址
     */
    constructor (commonUrl) {
        this.commonUrl = (commonUrl !== null && commonUrl !== undefined)
            ? commonUrl : this.commonUrl
        this.addFetchListen('error', (r) => {
            window.r = r
            if (r.toString() === 'TypeError: Failed to fetch') {
                if (this.yibanAuth && this.yibanAuth.haveVq()) {
                    alert('请检查网络连接')
                }
            }
        })
    }

    addFetchListen (type, event) {
        if (type === 'before') {
            this._fetchBefore.push(event)
        } else if (type === 'after') {
            this._fetchAfter.push(event)
        } else {
            this._fetchError.push(event)
        }
    }

    removeFetchListen (type, event) {
        let index
        if (type === 'before') {
            index = this._fetchBefore.indexOf(event)
            index !== -1 && this._fetchBefore.splice(index, 1)
        } else if (type === 'after') {
            index = this._fetchAfter.indexOf(event)
            index !== -1 && this._fetchAfter.splice(index, 1)
        } else {
            index = this._fetchError.indexOf(event)
            index !== -1 && this._fetchError.splice(index, 1)
        }
    }

    _fetchCheckToken (method, url, body) {
        if (!UserData.haveLocalToken() && this.yibanAuth) {
            return this.yibanAuth.refreshToken().then(() => {
                return this._fetchWithListener(method, url, body)
            })
        } else {
            return this._fetchWithListener(method, url, body)
        }
    }

    _fetchWithListener (method, url, body) {
        let fetchData
        if (method.toUpperCase() === 'GET') {
            fetchData = this._getData.bind(this)
        } else if (method.toUpperCase() === 'POST') {
            fetchData = this._postData.bind(this)
        } else {
            return console.log('不支持提交put与delete方法')
        }
        this._fetchBefore && this._fetchBefore.forEach(item => item(url, body))
        return fetchData(url, body)
            .catch(r => {
                alert(r.toString())
                return this._fetchError && this._fetchError.forEach(item => item(r))
            }).then(data => {
                this._fetchAfter && this._fetchAfter.forEach(item => item(data))
                return data
            })
    }
    /**
     * @namespace fetch
     * @param url 链接
     * @param body 对象形式传入参数列表
     * @returns {*}
     * @private
     */

    _getData (url, body) {
        url += '?'
        for (let key in body) {
            if (body.hasOwnProperty(key)) {
                url += key + '=' + body[key] + '&'
            }
        }
        url += `Authorization=${UserData.getLocalToken()}`
        url = this.commonUrl + url
        console.log('get method', url)
        return fetch(url, {
            method: 'get'
            // 后端跨域不允许携带cookie？等到后端支持跨域携带cookie以后取消掉改注释
            // credentials: "include"
        })
    }

    _postData (url, body) {
        url += '?Authorization=' + UserData.getLocalToken()
        let fd = new FormData()
        if (body instanceof FormData) {
            fd = body
        } else {
            for (let key in body) {
                if (body.hasOwnProperty(key)) {
                    fd.append(key, body[key])
                }
            }
        }
        console.log('POST method', this.commonUrl + url, body)
        return fetch(this.commonUrl + url, {
            method: 'post',
            body: fd
            // 后端跨域不允许携带cookie？等到后端支持跨域携带cookie以后取消掉改注释
            // credentials: "include"
        })
    }

    checkJsonData (json) {
        return json.status && json.status === 500
    }

    getJsonData (url, body) {
        /**
         * @namespace r.json
         */
        return this._fetchCheckToken('get', url, body).then(r => {
            return r.json()
        }).then(json => {
            if (this.checkJsonData(json)) {
                console.log('与后端交互出错', 'GET ' + url, body)
            }
            return json
        })
    }

    getTextData (url, body) {
        return this._fetchCheckToken('get', url, body).then(r => {
            return r.text()
        })
    }

    postJsonData (url, body) {
        return this._fetchCheckToken('post', url, body).then(r => {
            return r.json()
        }).then(json => {
            if (this.checkJsonData(json)) {
                console.log('与后端交互出错', 'POST ' + url, body)
            }
            return json
        })
    }

    postTextData (url, body) {
        return this._fetchCheckToken('post', url, body).then(r => {
            return r.text()
        })
    }
}

export default HttpRequest
