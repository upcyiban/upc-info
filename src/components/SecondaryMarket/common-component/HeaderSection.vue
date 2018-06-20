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
        position: relative;
        background-color: #189FD9;
        text-align: center;
        height: 2rem;
        line-height: 2rem;
        color: #FFF;
    }

    @media (max-width: 640px) {
        .header {
            display: none;
            position: absolute;
        }
    }
</style>
