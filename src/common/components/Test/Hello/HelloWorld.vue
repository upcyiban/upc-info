<template>
    <div class="Hello">
        <p>{{ string }}</p>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data(){
            return{
                data: 'msg1245',
                string: '这里是hello组件'
            }
        }
    };
</script>


<style>
    body{
        font-size: 40px;
    }
</style>
