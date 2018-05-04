<template>
    <div class="HomePage">
    </div>
</template>

<script>
    import HeaderSection from '../../../../common/components/HeaderSection'
    import ManagerHeader from '../../common-component/ManagerHeader.vue'
    import MangerDetails from '../../common-component/ManagerDetails.vue'
    import LoadImage from '../../../../common/components/LoadImage.vue'
    import updateData from "../../../../common/mixins/UpdateData"
    import loading from "../../../../common/mixins/loading"
    import fetchVq from "../../../../common/mixins/fetchVq"
    import {marketFetch, yibanAuth} from "../../config/fetchUtil"


    export default {
        name: 'index',
        mixins: [updateData, loading(marketFetch), fetchVq(yibanAuth)],

        mounted() {
        },

        data() {
            return {
            }
        },
        components: {
            HeaderSection,
            ManagerHeader,
            MangerDetails,
        },
        methods: {
        }
    }

</script>


<style scoped>

</style>
