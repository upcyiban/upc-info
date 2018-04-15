<template>
    <div id="app">
        <router-view/>
        <discuss></discuss>
    </div>
</template>

<script>
    import Discuss from './components/SecondaryMarket/component/Discuss/Discuss.vue'
    export default {
        name: 'app',
        components: {
            Discuss
        }
    }
</script>

<style>

    body{
        font-size: 40px;
    }
</style>
