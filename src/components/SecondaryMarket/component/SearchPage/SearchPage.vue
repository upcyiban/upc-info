<template>
    <div class="SearchPage">
    </div>
</template>

<script>
    import fetchVq from "../../../../common/mixins/fetchVq"
    import {marketFetch, yibanAuth} from "../../config/fetchUtil"
    import loading from "../../../../common/mixins/loading"
    export default {
        name: 'SearchPage',
        mixins: [fetchVq(yibanAuth) , loading(marketFetch , this)],
        data () {
            return {
                title: '搜索'
            }
        }
    };
</script>


<style scoped>
    .SearchPage {
    }
</style>
