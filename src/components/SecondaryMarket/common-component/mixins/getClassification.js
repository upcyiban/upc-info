export default {
    data() {
        return {
            classesList: []
        }
    },
    created () {
        this.fetch.getJsonData('/secondhand/browse/allkind')
            .then(json => {
                this.classesList = json.map(item => {
                    return item.name
                })
            })
    }
}
