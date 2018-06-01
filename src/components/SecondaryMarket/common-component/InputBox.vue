<template>
    <div class="InputBox" @change="input">
        <label>
            <input :type="type" :class="classes" :name="dataKey"
                   :placeholder="placeholder" :value="inputValue">
            <!--<span class="absolute-vertical-center">{{placeholder}}</span>-->
        </label>
    </div>
</template>

<script>
    import userInput from './mixins/UserInput'
    /**
     * @namespace classes
     */
    export default {
        name: 'InputBox',
        mixins: [userInput],
        props: ['type', 'placeholder', 'classes'],
        data () {
            return {
            }
        }
    }
</script>


<style scoped>
    .InputBox {
        position: relative;
        height: 4rem;
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
        width: 92%;
        height: 100%;
        border: none;
        line-height: 1.5rem;
        font-size: 1.5rem;
        border-bottom: 1px solid #CECDCE;
    }

    .InputBox input::-webkit-input-placeholder { /* WebKit, Blink, Edge */
        color:    #8D8788;
        font-size: 1rem;
        font-family: 黑体;
    }
    .InputBox input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color:    #8D8788;
        font-size: 1rem;
        font-family: 黑体;
    }
    .InputBox input::-moz-placeholder { /* Mozilla Firefox 19+ */
        color:    #8D8788;
        font-size: 1rem;
        font-family: 黑体;
    }
    .InputBox input:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color:    #8D8788;
        font-size: 1rem;
        font-family: 黑体;
    }
</style>
