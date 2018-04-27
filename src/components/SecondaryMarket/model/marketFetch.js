import HttpRequest from "../../../common/util/HttpRequest"
import UploadFile from "../../../common/util/UploadFile"

const backEndUrl = 'http://yb.upc.edu.cn:8085'
const filePrefix = 'http://yb.upc.edu.cn/file/image'
let marketFetch = new HttpRequest(backEndUrl)
let uploadFile = new UploadFile( 'http://yb.upc.edu.cn:8084')
export default marketFetch
export {uploadFile , filePrefix}
