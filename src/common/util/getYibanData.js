import {vqKey, yibanIdKey} from "../../config/config"
import Token from "./Token"

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
        tokenUtil.fetchTokenByeText(this.appName , this.device , this.getVq())
    }
    getVqByUrl () {
        const locationUrl = window.location.href
        if (!locationUrl.includes('?')
            && !locationUrl.includes('=')
            && !locationUrl.includes(this.vqKey)) {
            return null
        }
        const requestParam = locationUrl.split('?')
        const paramList = requestParam[1].split('=')
        const param = {
            yibanId: paramList[2],
            vq: paramList[1].substr(0 , paramList[1].lastIndexOf('&' + this.yibanIdKey))
        }
        /**
         * @namespace window.sessionStorage.yibanId
         */
        window.sessionStorage.yibanId = param.yibanId
        window.history.pushState({} , '' ,requestParam[0])
        return param.vq

    }
}

class UserData {

    static haveLocalToken () {
        let token = window.sessionStorage.token
        return token !== null && token !== undefined
    }

    static getLocalToken () {
        return window.sessionStorage.token
    }

    static haveLocalUserData () {
        /** @namespace window.localStorage.userData */
        let yibanUser = window.localStorage.userData
        return yibanUser !== null && yibanUser !== undefined && yibanUser !== ''
    }

    static getLocalUserData () {
        return JSON.parse(window.localStorage.userData)
    }
}

export {UserData, YibanAuth}
