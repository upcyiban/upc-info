function getManagerList (component) {
    const fetch = component.fetch
    return fetch.getJsonData('/secondhand/browse/article').then(json => {

        window.ima = json[0].imgurl
        return json.map(item => {
            /** @namespace item.userid */
            /** @namespace item.ybname */
            /** @namespace item.ybhead */
            /** @namespace item.articleid */
            /** @namespace item.createtime */
            /** @namespace item.updatetime */
            return {
                userData: {
                    userHeader: item.ybhead,
                    userId: item.userid,
                    userName: item.ybname,
                },
                articleId: item.id,
                managerData: {
                    managerId: item.id,
                    managerPrice: item.price,
                    createTime: item.createtime,
                    updateTime: item.updatetime,
                    imgUrl: JSON.parse(item.imgurl),
                    managerDetail: item.detail
                }
            }
        })
    })
}

export default getManagerList
