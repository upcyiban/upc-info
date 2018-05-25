
/**
 * 上传文件是没有加载中动态图功能的API
 */
class UploadFile {
    uploadUrl = '/upload/file'
    httpRequest
    filePrefix = 'http://yb.upc.edu.cn'

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
     */
    fetchFile (fileElement, type, iframeDocument) {
        iframeDocument = (iframeDocument !== null && iframeDocument !== undefined)
            ? iframeDocument : document
        let file = fileElement.files[0]
        let form = iframeDocument.createElement('form')
        if (file.type.includes('image')) {
            return this.compressAndSend(file, iframeDocument, type)
        }
        else {
            form.appendChild(fileElement.cloneNode())
            let formData = new FormData(form)
            return this.sendFile(formData, type)
        }
    }

    /**
     * 压缩图片并发送
     * @author Semesse
     * @param {File} file 从Input中取得的图片
     * @param {document} iframeDocument 标定document
     * @param {string} type 文件MIME类型
     * @returns 一个Promise对象,then接受参数为上传后文件url
     * @memberof UploadFile
     */
    compressAndSend (file, iframeDocument, type) {
        /*
         * fileLoader.onload(resolve) -> process(resolve) -> img.onload() -> drawWithCanvas(img)(resolve)
         *                                          |->       ->       ->        ->        ->       ->|
         * -> resolve(compressedImage) -> resolve(sendFile())
        */
        let fileReader = new FileReader()
        let fileType = file.type
        let fileName = file.name
        const drawWithCanvas = (img) => {
            return new Promise(resolve => {

                let canvas = iframeDocument.createElement('canvas')
                let context = canvas.getContext('2d')
                let originWidth = img.width
                let originHeight = img.height
                let targetWidth = originWidth, targetHeight = originHeight
                let maxWidth = 1024, maxHeight = 768
                let compressedImage
                if (originWidth > maxWidth) {
                    targetWidth = maxWidth
                    targetHeight = Math.round(originHeight / originWidth * maxWidth)
                }
                else if (originHeight > maxHeight){
                    targetHeight = maxHeight
                    targetWidth = Math.round(originWidth / originHeight * maxHeight)
                }
                console.log(originWidth, originHeight, targetWidth, targetHeight)
                canvas.width = targetWidth;
                canvas.height = targetHeight;
                context.clearRect(0, 0, targetWidth, targetHeight);
                context.drawImage(img, 0, 0, targetWidth, targetHeight);

                canvas.toBlob(blob => {
                    compressedImage = blob
                    //img.onload中的resolve
                    resolve(compressedImage)
                }, fileType, 0.9)
            })
        }
        const process = (resolve) => () => {
            //process使用高阶函数返回一个常函数防止在addEventListener时提前执行
            let img = new Image()
            let formData = new FormData()
            img.src = fileReader.result
            img.onload = () => {
                drawWithCanvas(img).then((compressedImage) => {
                    formData.append('file', compressedImage, fileName)
                    //该函数返回的Promise.resolve最终执行的函数
                    resolve(this.sendFile(formData, fileType))
                })
            }
        }
        return new Promise(resolve => {
            fileReader.addEventListener('load', process(resolve))
            fileReader.readAsDataURL(file)
        })
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
