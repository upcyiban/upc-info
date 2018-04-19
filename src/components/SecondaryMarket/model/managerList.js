
import marketFetch from "./marketFetch"

function getManagerList () {
    return marketFetch.getJsonData('secondhand/browse/article').then(json => {
        console.log(json)
        return json
    })
}

export {getManagerList}

