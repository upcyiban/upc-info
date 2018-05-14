<template>
    <div class="header">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'HeaderSection',
        props : ['firstLogin'],
        data () {
            return {
            }
        }，
        created: {
            firstLogin: function () {
                var flag = "firstLogin"
                if (!flag) {
                    this.$router.push('/second/user-information')
                }
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
