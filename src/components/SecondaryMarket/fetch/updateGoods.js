
function publishGoods () {
    return this.fetch.postJsonData('/secondhand/publish/updatearticle', {
        'articleid': this.managerId,
        'name': this.managerTitle,
        'kind': JSON.stringify(this.chooseList.chooseValue),
        'detail': this.managerMessage,
        'imgurl': JSON.stringify(this.fileList),
        'price': parseFloat(this.managerPrice),
        'degree': '未添加崭新度'
    })
}

export default publishGoods
