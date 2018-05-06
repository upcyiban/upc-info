<template>
    <div class="header">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'HeaderSection',
        data () {
            return {
            }
        }
    }
</script>


<style scoped>
    .header {
        background-color: #189FD9;
        text-align: center;
        height: 80px;
        line-height: 80px;
        color: #FFF;
        font-size: 1.5rem;
    }
</style>
