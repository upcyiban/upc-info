/**
 * 创建一个拥有httpRequest和yibanAuth的对象
 */
import HttpRequest from './util/HttpRequest'
import {YibanAuth} from './util/getYibanData'

function createFetchWithAuth (backEndUrl, vqUrl, appName, device, backUrlHash) {
    const httpRequest = new HttpRequest(backEndUrl)
    const fetchVqBefore = () => {
        const location = window.location
        console.log('backUrl', backUrlHash)
        window.localStorage.backUrl = location.origin + location.pathname + backUrlHash
    }
    const yibanAuth = new YibanAuth(vqUrl, new HttpRequest(backEndUrl), appName, device, fetchVqBefore())
    httpRequest.yibanAuth = yibanAuth
    return {
        httpRequest,
        yibanAuth
    }
}

export default createFetchWithAuth
