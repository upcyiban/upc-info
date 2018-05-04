import {createItem} from "./getManagerList"

function findManagerById (id) {
    return this.fetch.getJsonData('/secondhand/browse/onearticle' , {
        articleid: id
    }).then(json => {
        return createItem(json)
    })
}
export default findManagerById
