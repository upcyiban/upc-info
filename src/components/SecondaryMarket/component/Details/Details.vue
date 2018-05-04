<template>
    <div class="Details">
        <p>123</p>
    </div>
</template>

<script>
    import LoadImage from '../../../../common/components/LoadImage.vue'
    import HeaderSection from '../../common-component/HeaderSection.vue'
    import updateData from '../../../../common/mixins/UpdateData'
    import {marketFetch, yibanAuth} from '../../config/fetchUtil'
    import loading from '../../../../common/mixins/loading'
    import fetchVq from '../../../../common/mixins/fetchVq'
    import findManagerById from '../../fetch/findManagerById'

    /**
     * @namespace $route.params.articleId
     */
    export default {
        name: 'Details',
        mixins: [updateData, loading(marketFetch), fetchVq(yibanAuth)],

        data() {
            return {
                managerData: {
                },
                userData: {
                },
                title: '该商品已被删除'
            }
        },

        created() {
            this.findManagerById(this.$route.params.articleId).then(data => {
                this.managerData = data.managerData
                this.userData = data.userData
                this.title = this.managerData.name
            })
        },

        components: {
            HeaderSection
        },

        methods: {
            findManagerById
        }
    }

</script>


<style scoped>
    .Details{
    }
</style>
