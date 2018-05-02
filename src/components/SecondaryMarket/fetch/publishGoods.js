
function publishGoods (component) {
    return component.fetch.postJsonData('/secondhand/publish/article' , {
        'name': component.managerTitle,
        'kind': JSON.stringify(component.chooseList),
        'detail': component.managerMessage,
        'imgurl': JSON.stringify(component.fileList),
        'price': component.managerPrice,
        'degree': '未添加崭新度'
    })
}

export default publishGoods
