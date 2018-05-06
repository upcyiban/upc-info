
function addDiscuss (articleId , discuss , component) {
    return component.fetch.postJsonData('/secondhand/publish/review', {
        articleid: articleId,
        detail: discuss
    }).then(json => {
        console.log(json.code && json.code === 0 , json.code)
        return !(json.code && json.code === 0)
    })
}

export default addDiscuss
