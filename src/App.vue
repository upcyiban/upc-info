<template>
    <div id="app">
        <router-view/>
        <discuss></discuss>
        <my></my>
    </div>
</template>

<script>
    import My from '@/components/SecondaryMarket/component/My/My'
    import Discuss from './components/SecondaryMarket/component/Discuss/Discuss.vue'
    export default {
        name: 'app',
        components: {
            'Discuss': Discuss,
            'My': My
        }
    }
</script>

<style>

    body{
        font-size: 40px;
    }
</style>
