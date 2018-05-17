function addCollection (articleId, component) {
    return component.fetch.postJsonData('/secondhand/collention/createcollection', {
        articleid: articleId
    }).then(json => {
        return !json.id
    })
}
export default addCollection
