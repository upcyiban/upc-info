import {createItem} from "./getManagerList"

function findManagerById (id) {
    return this.fetch.getJsonData('/secondhand/browse/onearticle' , {
        articleid: id
    }).then(json => {
        if (json.code === 0) {
            return json
        }
        return createItem(json)
    })
}
export default findManagerById
