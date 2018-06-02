function checkExistence (back) {
    return {
        created () {
            this.fetch.getJsonData('/second/user/exist', {}).then((result) => {
                this.isExist(result)
            })
        },
        methods: {
            checkExistence (result) {
                if (!result) {
                    this.$router.push({
                        path: '/second/user-information',
                        query: {
                            dataobj: back
                        }
                    })
                }
            }
        }
    }
}

export default checkExistence
