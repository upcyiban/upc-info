<template>
    <div class="header">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data () {
            return {
                token: 123
            }
        },
        beforeMount() {
            if (this._props.title !== null && this._props.title !== undefined) {
                document.querySelector('title').innerHTML = this._props.title
            }
            const yibanAuth = this._props.yibanAuth
            yibanAuth && yibanAuth.fetchVq()
            yibanAuth && yibanAuth.refreshToken()
        },
        props: ['title' , 'yibanAuth']
    };
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
