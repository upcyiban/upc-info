
/**
 * 上传文件是没有加载中动态图功能的API
 */
class UploadFile {
    uploadUrl = '/upload/file'
    httpRequest
    filePrefix = 'http://yb.upc.edu.cn'

    constructor (httpRequest , filePrefix , uploadUrl) {
        this.httpRequest = httpRequest
        filePrefix && (this.filePrefix = filePrefix)
        this.uploadUrl = (uploadUrl !== null && uploadUrl !== undefined) ?
            uploadUrl : this.uploadUrl
    }

    /**
     * @author 雷诺
     * @param fileElement 当前input的element DOM元素
     * @param type 远程接口返回值的格式，只支持 json text
     * @param iframeDocument 标定document，如果要兼容ie createElement有iframe的兼容问题，
     *                          具体百度，自然知道这个参数是啥
     */
    fetchFile (fileElement , type , iframeDocument) {
        iframeDocument = (iframeDocument !== null && iframeDocument !== undefined) ?
            iframeDocument : document
        let form = iframeDocument.createElement('form')
        form.appendChild(fileElement.cloneNode())
        let formData = new FormData(form)
        if (type === 'text') {
            return this.httpRequest.postTextData(this.uploadUrl , formData)
                .then(filePath => {
                    return `${this.filePrefix}/${filePath.data}`
                })
        } else {
            return this.httpRequest.postJsonData(this.uploadUrl , formData)
                .then(filePath => {
                    return `${this.filePrefix}/${filePath.data}`
                })
        }
    }
}
export default UploadFile
