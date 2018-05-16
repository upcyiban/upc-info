import createFetchWithAuth from '../../../common/createFetchWithAuth'
import {appName, device, vqUrl} from './index'
import UploadFile from '../../../common/UploadFile'
import HttpRequest from '../../../common/util/HttpRequest'

const backEndUrl = 'http://yb.upc.edu.cn:8084'
// const devBackEndUrl = 'http://172.18.136.63:8085'
const devBackEndUrl = 'http://yb.upc.edu.cn:8084'
// const devBackEndUrl = 'http://yb.upc.edu.cn:8084'

const fetchUtil = createFetchWithAuth(backEndUrl, vqUrl, appName, device)

const filePrefix = 'http://yb.upc.edu.cn'
const marketFetch = fetchUtil.httpRequest
const yibanAuth = fetchUtil.yibanAuth

const upload = new HttpRequest(devBackEndUrl)
upload.yibanAuth = yibanAuth

const uploadFile = new UploadFile(upload, filePrefix)

export {marketFetch, yibanAuth, uploadFile}
