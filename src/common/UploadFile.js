import compressImage from './CompressImage'
/**
 * 上传文件是没有加载中动态图功能的API
 */
class UploadFile {
    uploadUrl = '/upload/file'
    httpRequest
    filePrefix = 'http://yb.upc.edu.cn'
    defaultCompressOption = {
        compress: true,
        maxWidth: 1024,
        maxHeight: 1024,
        compressRatio: 0.9
    }

    constructor (httpRequest, filePrefix, uploadUrl) {
        this.httpRequest = httpRequest
        filePrefix && (this.filePrefix = filePrefix)
        this.uploadUrl = (uploadUrl !== null && uploadUrl !== undefined)
            ? uploadUrl : this.uploadUrl
    }

    /**
     * @author 雷诺
     * @param fileElement 当前input的element DOM元素
     * @param type 远程接口返回值的格式，只支持 json text
     * @param iframeDocument 标定document，如果要兼容ie createElement有iframe的兼容问题，
     *                          具体百度，自然知道这个参数是啥
     * @param compressOptions 图片压缩选项，默认压缩且限制高1024宽768，压缩比率0.9
     *                          compressed: 是否压缩
     *                          maxWidth,maxHeight: 限制长宽
     *                          compressRatio: 压缩比率
     */
    fetchFile (fileElement, type, iframeDocument, compressOptions = this.defaultCompressOption) {
        iframeDocument = (iframeDocument !== null && iframeDocument !== undefined)
            ? iframeDocument : document
        let file = fileElement.files[0]
        let form = iframeDocument.createElement('form')
        if (compressOptions.compress && file.type.includes('image')) {
            return compressImage(file, iframeDocument, compressOptions)
                .then(compressedImage => {
                    let formData = new FormData()
                    formData.append('file', compressedImage, file.name)
                    return formData
                })
                .then(formData => {
                    return this.sendFile(formData, type)
                })
        } else {
            form.appendChild(fileElement.cloneNode())
            let formData = new FormData(form)
            return this.sendFile(formData, type)
        }
    }

    sendFile (formData, type) {
        if (type === 'text') {
            return this.httpRequest.postTextData(this.uploadUrl, formData)
                .then(filePath => {
                    return `${this.filePrefix}/${filePath.data}`
                })
        } else {
            return this.httpRequest.postJsonData(this.uploadUrl, formData)
                .then(filePath => {
                    return `${this.filePrefix}/${filePath.data}`
                })
        }
    }
}
export default UploadFile
