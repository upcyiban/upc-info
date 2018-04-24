<template>
    <div class="InputBox">
        <label>
            <input :type="type" :class="classes" :placeholder="placeholder">
            <!--<span class="absolute-vertical-center">{{placeholder}}</span>-->
        </label>
    </div>
</template>

<script>
    export default {
        name: 'InputBox',
        props: ['type' , 'placeholder' , 'classes'],
        data () {
            return {
            }
        }
    };
</script>


<style>
    .InputBox {
        position: relative;
        height: 120px;
        font-size: 1.4rem;
    }
    .InputBox input:focus + span{
        display: none;
    }
    .InputBox span {
        width: 100%;
        color: #DAD7E0;
    }
    .InputBox input{
        width: 100%;
        height: 100%;
        line-height: 1.5rem;
        font-size: 1.5rem;
        border-bottom: 1px solid #CECDCE;
    }
</style>
