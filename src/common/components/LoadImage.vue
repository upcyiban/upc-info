<template>
    <div class="box-center text-center" v-if="loadState">
        <img :src="loading" alt="正在加载中" style="width: 133px;height: 80px">
    </div>
</template>

<script>
    export default {
        name: 'LoadImage',
        data () {
            return {
                loading: require('../../components/SecondaryMarket/media/loading.gif'),
            }
        },
        props: ['loadState']
    }
</script>

