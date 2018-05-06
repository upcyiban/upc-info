/**
 *
 * @param articleId
 * @param component
 * @returns {Promise.<TResult>}
 */
function fetchDiscussList (articleId , component) {
    return component.fetch.getJsonData('/secondhand/browse/review', {
        articleid: articleId
    }).then(json => {
        return json.map(item => {
            /** @namespace item.ybhead */
            /** @namespace item.isdelete */
            /** @namespace item.ybid */
            return {
                ybHeader: item.ybhead,
                articleId: item.articleId,
                detail: item.detail,
                id: item.id,
                isDelete: item.isdelete,
                ybId: item.ybid,
                ybName: item.ybname,
                createTime: item.createtime,
                updateTime: item.updatetime
            }
        })
    })
}
export default fetchDiscussList
