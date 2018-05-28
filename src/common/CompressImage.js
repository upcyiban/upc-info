/**
 * 压缩图片并发送
 * @author Semesse
 * @param {File} file 从Input中取得的图片
 * @param {document} iframeDocument 标定document
 * @returns Promise对象,resolve接受参数为compressedImage，压缩后的Blob对象
 * @memberof UploadFile
 */
function compressImage (file, iframeDocument, compressOptions) {
    /*
        * fileLoader.onload(resolve) -> process(resolve) -> img.onload() -> drawWithCanvas(img)(resolve)
        *                                          |->       ->       ->        ->        ->       ->|
        * -> resolve(compressedImage)
        */
    let fileReader = new FileReader()
    let fileType = file.type

    const drawWithCanvas = img => {
        return new Promise(resolve => {
            let canvas = iframeDocument.createElement('canvas')
            let context = canvas.getContext('2d')
            let originWidth = img.width
            let originHeight = img.height
            let targetWidth = originWidth
            let targetHeight = originHeight
            let maxWidth = compressOptions.maxWidth
            let maxHeight = compressOptions.maxHeight
            let compressedImage

            if (originWidth > maxWidth) {
                targetWidth = maxWidth
                targetHeight = Math.round(originHeight / originWidth * maxWidth)
            } else if (originHeight > maxHeight) {
                targetHeight = maxHeight
                targetWidth = Math.round(originWidth / originHeight * maxHeight)
            }
            canvas.width = targetWidth
            canvas.height = targetHeight
            console.log('Compress Image:', originWidth, originHeight, targetWidth, targetHeight)

            context.clearRect(0, 0, targetWidth, targetHeight)
            context.drawImage(img, 0, 0, targetWidth, targetHeight)

            canvas.toBlob(blob => {
                compressedImage = blob
                // img.onload中的resolve
                resolve(compressedImage)
            }, fileType, compressOptions.compressRatio)
        })
    }

    const process = resolve => () => {
        // 防止在addEventListener时提前执行
        let img = new Image()
        img.src = fileReader.result
        img.onload = () => {
            drawWithCanvas(img).then(compressedImage => {
                resolve(compressedImage)
            })
        }
    }

    return new Promise(resolve => {
        fileReader.addEventListener('load', process(resolve))
        fileReader.readAsDataURL(file)
    })
}

export default compressImage
