<template>
    <div class="Discuss">
        <p>{{data}}</p>
        <button @click="click" style="width: 50px;height: 50px;">click</button>
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
            click() {
                this.data = [1, 2, 3, 4, 5][2]
            }
        }
    }
</script>


<style scoped>
    .Discuss {

    }
</style>
