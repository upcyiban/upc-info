const keySet = {
    articleId: 'articleId',
    createTime: 'createtime',
    isDelete: 'isdelete',
    updateTime: 'updatetime',
    ybHeader: 'ybhead',
    ybId: 'ybid',
    ybName: 'ybname'
}
function addDiscuss (articleId, discuss, component) {
    return component.fetch.postJsonData('/secondhand/publish/review', {
        articleid: articleId,
        detail: discuss
    }).then(json => {
        for (let key in keySet) {
            const item = keySet[key]
            json[key] = json[item]
        }
        console.log(json)
        return json
    })
}

export default addDiscuss
