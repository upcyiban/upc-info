function checkExistence (backUrl) {
    return {
        created () {
            this.fetch.getJsonData('/second/user/exist', {}).then((result) => {
                this.checkExistence(result)
            })
        },
        methods: {
            checkExistence (result) {
                if (!result) {
                    this.$router.push({
                        path: '/second/user-information',
                        query: {
                            dataobj: backUrl
                        }
                    })
                }
            }
        }
    }
}

export default checkExistence
