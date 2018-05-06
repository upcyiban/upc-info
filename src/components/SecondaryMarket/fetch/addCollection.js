function addCollection (articleId , component) {
    return component.fetch.postJsonData('/secondhand/collention/createcollection', {
        articleid: articleId,
    }).then(json => {
        return !(json.code && json.code === 0)
    })
}
export default addCollection
