<template>
    <div class="header">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data () {
            return {}
        },
        beforeMount() {
            if (this._props.title !== null && this._props.title !== undefined) {
                document.querySelector('title').innerHTML = this._props.title
            }
        },
        props: ['title']
    };
</script>


<style>
    .header {
        background-color: #189FD9;
        text-align: center;
        height: 40px;
        line-height: 40px;
        color: #FFF;
    }
</style>
