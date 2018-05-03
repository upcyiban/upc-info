function createItem (item) {
    /** @namespace item.ybhead */
    /** @namespace item.updatetime */
    /** @namespace item.createtime */
    /** @namespace item.ybname */
    /** @namespace item.userid */
    return {
        userData: {
            userHeader: item.ybhead,
            userId: item.userid,
            userName: item.ybname,
        },
        managerData: {
            id: item.id,
            managerPrice: item.price,
            createTime: item.createtime,
            updateTime: item.updatetime,
            imgUrl: JSON.parse(item.imgurl),
            managerDetail: item.detail
        }
    }
}

function createPage (json) {
    const {last , first , totalElements , totalPages , sort ,numberOfElements , size , number} = json
    return {
        last,
        first,
        totalElements,
        totalPages,
        sort,
        number,
        numberOfElements,
        size
    }
}

function getManagerList (pageNum) {
    const fetch = this.fetch
    return fetch.getJsonData('/secondhand/browse/article' , {
        page: pageNum,
        pageSize: 10
    }).then(json => {
        let managerList = json.content
        managerList = managerList.map(createItem.bind(this))
        const pageData = createPage(json)
        return {
            managerList,
            pageData
        }
    })
}

export default getManagerList
