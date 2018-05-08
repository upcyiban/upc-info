/**
 * 创建一个拥有httpRequest和yibanAuth的对象
 */
import HttpRequest from './util/HttpRequest'
import {YibanAuth} from './util/getYibanData'

function createFetchWithAuth (backEndUrl, vqUrl, appName, device) {
    const httpRequest = new HttpRequest(backEndUrl)
    const yibanAuth = new YibanAuth(vqUrl, new HttpRequest(backEndUrl), appName, device)
    httpRequest.yibanAuth = yibanAuth
    return {
        httpRequest,
        yibanAuth
    }
}

export default createFetchWithAuth
