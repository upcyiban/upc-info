import HttpRequest from "../../../common/util/HttpRequest"
import UploadFile from "../../../common/util/UploadFile"
let marketFetch = new HttpRequest('http://yb.upc.edu.cn:8085/')
let uploadFile = new UploadFile()
export default marketFetch
export {uploadFile}
