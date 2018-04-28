function getRequestParamList() {
    let url = window.location.href.split('?')[1]
    let theRequest = {}
    const strList = url.split("&")
    console.log(strList)
    for(let i = 0; i < strList.length; i++) {
        theRequest[strList[i].split("=")[0]] = (strList[i].split("=")[1])
    }
    return theRequest
}
export default getRequestParamList
