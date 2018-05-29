<template>
    <div class="TextBox" @change="input">
        <label>
            <textarea :name="dataKey" cols="10" rows="6"
                      :placeholder="placeholder" :class="classes" :value="inputValue"></textarea>
            <!--<span>{{placeholder}}</span>-->
        </label>
    </div>
</template>

<script>
    import userInput from './mixins/UserInput'
    export default {
        name: 'TextBox',
        mixins: [userInput],
        props: ['placeholder', 'classes'],
        data () {
            return {
            }
        }

    }
</script>


<style scoped>
    .TextBox {
        position: relative;
        padding: 0.5rem 0;
        font-size: 1.1rem;
        overflow-x: hidden;
    }
    .TextBox textarea {
        width: 100%;
        border: none;
    }
    .TextBox textarea:focus + span {
        display: none;
    }
    .TextBox span {
        width: 100%;
        height: 150px;
        top: 1rem;
        color: #DAD7E0;
        line-height: 1.1rem;
        position: absolute;
    }

    .TextBox textarea::-webkit-input-placeholder { /* WebKit, Blink, Edge */
        color:    #8D8788;
        font-size: 1rem;
        font-style: normal;
        font-family: 黑体;
    }
    .TextBox textarea:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color:    #8D8788;
        font-size: 1rem;
        font-style: normal;
        font-family: 黑体;
    }
    .TextBox textarea::-moz-placeholder { /* Mozilla Firefox 19+ */
        color:    #8D8788;
        font-size: 1rem;
        font-style: normal;
        font-family: 黑体;
    }
    .TextBox textarea:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color:    #8D8788;
        font-size: 1rem;
        font-style: normal;
        font-family: 黑体;
    }
</style>
