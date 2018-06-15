/**
 * 压缩图片
 * @author Semesse
 * @param {File} file 从Input中取得的图片
 * @param {document} iframeDocument 标定document
 * @returns Promise对象,resolve接受参数为compressedImage，压缩后的Blob对象
 */
async function compressImage (file, iframeDocument, compressOptions) {
    /*
        * fileLoader.onload(resolve) -> process(resolve) -> img.onload() -> drawWithCanvas(img)(resolve)
        *                                          |->       ->       ->        ->        ->       ->|
        * -> resolve(compressedImage)
        */
    let fileReader = new FileReader()
    let fileType = file.type
    console.log(file.type)
    let orientation = 0
    if (file.type === 'image/jpeg') {
        orientation = await readOrientation(file)
        console.log(orientation)
    }

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

            if ([5, 6, 7, 8].indexOf(orientation) > -1) {
                canvas.width = targetHeight
                canvas.height = targetWidth
            } else {
                canvas.width = targetWidth
                canvas.height = targetHeight
            }
            context.clearRect(0, 0, targetWidth, targetHeight)
            switch (orientation) {
            case 2:
                context.transform(-1, 0, 0, 1, targetWidth, 0)
                break
            case 3:
                context.transform(-1, 0, 0, -1, targetWidth, targetHeight)
                break
            case 4:
                context.transform(1, 0, 0, -1, 0, targetHeight)
                break
            case 5:
                context.transform(0, 1, 1, 0, 0, 0)
                break
            case 6:
                context.transform(0, 1, -1, 0, targetHeight, 0)
                break
            case 7:
                context.transform(0, -1, -1, 0, targetHeight, targetWidth)
                break
            case 8:
                context.transform(0, -1, 1, 0, 0, targetWidth)
                break
            default:
                context.transform(1, 0, 0, 1, 0, 0)
            }
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

    return new Promise((resolve) => {
        if (compressOptions.compress) {
            fileReader.addEventListener('load', process(resolve))
            fileReader.readAsDataURL(file)
        } else {
            resolve(file)
        }
    })
}

async function readOrientation (file) {
    let fileReader = new FileReader()
    const readArray = (resolve) => () => {
        // related links:
        // https://web.archive.org/web/20111025004429/http://park2.wakwak.com/~tsuruzoh/Computer/Digicams/exif-e.html
        // https://www.sno.phy.queensu.ca/~phil/exiftool/TagNames/EXIF.html
        let orientation = 0
        let view = new DataView(fileReader.result)
        if (view.getUint16(0, false) === 0xFFD8) {
            // JPEG header 0xFFD8
            let len = (view.byteLength > 1024 * 1024) ? 1024 * 1024 : view.byteLength
            let offset = 2
            while (offset < len) {
                let marker = view.getUint16(offset, false)
                if (marker === 0xFFE1) {
                    // APP1 marker 0xFFE1
                    offset += 4
                    if (view.getUint32(offset, false) === 0x45786966) {
                        // EXIF header 0x457869660000
                        offset += 6
                        let endian = view.getUint16(offset, false) === 0x4949
                        // TIFF header 0x4d4d: big endian, 0x4949: little endian
                        offset += view.getInt32(offset + 4, endian)
                        // IFD0 offset
                        let entryCount = view.getUint16(offset, endian)
                        offset += 2
                        for (let i = 0; i < entryCount; i++, offset += 12) {
                            if (view.getUint16(offset, endian) === 0x0112) {
                                orientation = view.getUint16(offset + 8, endian)
                                resolve(orientation)
                                return
                            }
                        }
                    }
                } else {
                    offset += 2
                }
            }
        }
        resolve(orientation)
    }
    return new Promise(resolve => {
        fileReader.addEventListener('load', readArray(resolve))
        fileReader.readAsArrayBuffer(file)
    })
}

export default compressImage
