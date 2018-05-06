import { vqKey, yibanIdKey} from "../../config/config"
import Token from "./Token"
import getRequestParamList from "./getRequest"
import HttpRequest from './HttpRequest'

class YibanAuth {
    vqUrl
    httpRequest
    appName
    device
    yibanIdKey = yibanIdKey
    vqKey = vqKey

    /**
     * 获取易班vq以及获取token的方式
     * @param vqUrl 参考二手市场SecondaryMarket/config/index.js的手法完成vqUrl的填写
     * @param httpRequest 当前轻应用所使用的HttpRequest工具类实体
     * @param appName 当前轻应用的名称
     * @param device 当前设备
     */
    constructor (vqUrl , httpRequest , appName , device) {
        this.vqUrl = vqUrl
        this.httpRequest = httpRequest
        this.appName = appName
        this.device = device
    }

    fetchVq () {
        if (this.haveVq() === false) {
            /**
             * @namespace window.localStorage.backUrl
             * @type {string}
             */
            window.localStorage.backUrl = window.location.href
            window.location = this.vqUrl
        }
    }

    haveVq () {
        const vq = this.getVq()
        return vq !== null && vq !== undefined
    }

    getVq () {
        const urlVq = this.getVqByUrl()
        if (urlVq !== null && urlVq !== undefined) {
            this.setVq(urlVq)
            return urlVq
        }
        return window.sessionStorage.vq
    }

    setVq(vq) {
        window.sessionStorage.vq = vq
    }

    refreshToken() {
        const tokenUtil = new Token(this.httpRequest)
        return tokenUtil.fetchTokenByText(this.appName , this.device , this.getVq())
    }
    getVqByUrl () {
        const locationUrl = window.location.href
        if (!locationUrl.includes('?')
            && !locationUrl.includes('=')
            && !locationUrl.includes(this.vqKey)) {
            return null
        }
        /**
         * @namespace window.sessionStorage.yibanId
         */
        const paramList = getRequestParamList()
        console.log(paramList)
        window.sessionStorage.yibanId = paramList[yibanIdKey]
        window.sessionStorage.vq = paramList[vqKey]
        window.location = window.localStorage.backUrl
        return paramList[vqKey]

    }
}

class UserData {

    static haveLocalToken () {
        let token = window.sessionStorage.token
        return token !== null && token !== undefined && token !== 'null' && token !== 'undefined'
    }

    static getLocalToken () {
        return window.sessionStorage.token
    }

    static haveLocalUserData() {
        let userData = window.sessionStorage.userData
        return userData !== null && userData !== undefined && userData !== 'null' && userData !== 'undefined'
    }

    static getLocalUserData() {
        return JSON.parse(window.sessionStorage.userData)
    }

    static fetchUserData() {
        const valueMap = {
            yibanId: 'yb_userid',
            exp: 'yb_exp',
            money: 'yb_money',
            schoolId: 'yb_schoolid',
            schoolName: 'yb_schoolname',
            sex: 'yb_sex',
            userName: 'yb_username',
            userNick: 'yb_usernick'
        }
        return new HttpRequest('http://yb.upc.edu.cn:8084')
            .getJsonData('/leinuo/weekcp/user/getYiMeByToken')
            .then(json => {
                let userData = JSON.parse(json.data)
                for (let key in valueMap) {
                    userData[key] = userData[valueMap[key]]
                }
                window.sessionStorage.userData = JSON.stringify(userData)
                return userData
            })
    }
}

export {UserData, YibanAuth}
