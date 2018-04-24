import {commonUrl} from "../../config/config"
import HttpRequest from "./HttpRequest"

class UploadFile {
    uploadUrl = '/upload/file'
    commonUrl = commonUrl
    httpRequest

    constructor (uploadUrl , commonUrl) {
        this.httpRequest = new HttpRequest(commonUrl)
        this.uploadUrl = (uploadUrl === null || uploadUrl === undefined) ?
            uploadUrl : this.uploadUrl
    }

    /**
     * @author 雷诺
     * @param fileName 文件名称
     * @param type 远程接口返回值的格式，只支持 json text
     * @param iframeDocument 标定document，如果要兼容ie createElement有iframe的兼容问题，
     *                          具体百度，自然知道这个参数是啥
     */
    fetchFile (fileName , type , iframeDocument) {
        iframeDocument = (iframeDocument === null || iframeDocument === undefined) ?
            document : iframeDocument
        let form = iframeDocument.createElement('form')
        let input = iframeDocument.createElement('input')
        input.type = 'file'
        input.value = fileName
        form.appendChild(input)
        console.log(form);
        console.log(this.httpRequest.commonUrl , this.uploadUrl);
        let formData = new FormData(form)

        if (type === 'text') {
            return this.httpRequest.postTextData(this.uploadUrl , formData)
        } else {
            return this.httpRequest.postJsonData(this.uploadUrl , formData)
        }
    }
}
export default UploadFile
