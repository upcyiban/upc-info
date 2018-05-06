<template>
    <div id="app">
        <textarea name="sessionStorage" id="" cols="30" rows="10" v-model="value" title="vq">

        </textarea>
        <button @click="setVq">请填写vq</button>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                value: ''
            }
        },
        methods: {
            setVq() {
                window.sessionStorage.vq = this.value
            }
        }
    }
</script>

<style>

</style>
