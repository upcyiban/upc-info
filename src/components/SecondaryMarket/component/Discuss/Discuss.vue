<template>
    <div class="Discuss" @click="click">
        <p>{{data}}</p>
        <button @click="click1" style="width: 50px;height: 50px;">click</button>
    </div>
</template>

<script>
    export default {
        name: 'Discuss',
        data () {
            return {
                data: '123123123'
            }
        },
        methods: {
            click (e) {
                console.log(e.target)
                this.data = 123
                this.data = [1, 2, 3, 4, 5][2]
            },
            click1 (e) {
                this.data = 1234
                console.log(e.target)
            }
        }
    }
</script>


<style scoped>
</style>
