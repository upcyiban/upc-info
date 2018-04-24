<template>
    <div class="TextBox">
        <label>
            <textarea name="textarea" cols="10" rows="5"
                      :placeholder="placeholder" :class="classes"></textarea>
            <!--<span>{{placeholder}}</span>-->
        </label>
    </div>
</template>

<script>
    export default {
        name: 'TextBox',
        props: ['placeholder' , 'classes'],
        data () {
            return {}
        }
    };
</script>


<style>
    .TextBox {
        position: relative;
        height: 120px;
        padding-top: 0.5rem;
        font-size: 1.4rem;
    }
    .TextBox textarea {
        width: 100%;
    }
    .TextBox textarea:focus + span {
        display: none;
    }
    .TextBox span {
        width: 100%;
        height: 1.4rem;
        top: 1rem;
        color: #DAD7E0;
        line-height: 1.4rem;
        position: absolute;
    }
</style>
