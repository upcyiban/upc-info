<template>
    <div class="Message">
        <button v-if="type === 'Object'" :class="`object`">{...}</button>
        <button v-if="type ===  'Array'" :class="`array`">
            [...,...]
        </button>
        <a :href="message" v-if="type === 'Url'" class="url" target="_black" :title="message">{{mixString(message, 30)}}</a>
        <p v-if="type === 'Other'">{{mixString(message, 30)}}</p>
    </div>
</template>

<script>
    /**
     * @namespace mixString
     */
    export default {
        name: 'Message',
        props: ['message'],
        data () {
            return {
                // Object Array Url Other
                type: ''
            }
        },
        created () {
            const message = this._props.message
            if (message instanceof Array) {
                this.type = 'Array'
            } else if (message instanceof Object) {
                this.type = 'Object'
            } else if (typeof message === 'string' && this.isUrl(message.split('?')[0])) {
                this.type = 'Url'
            } else {
                this.type = 'Other'
            }
        },
        methods: {
            isUrl (message) {
                return /http|https:\/\/\s*/.test(message)
            },
            mixString (str, len) {
                str = str.toString()
                if (str.length <= len) {
                    return str
                }
                if (this.isUrl(str)) {
                    return str.split('?')[0]
                }
                return str.slice(0, len) + '...'
            }
        }
    }
</script>


<style scoped>
    .Message{
    }

    .url {
        color: #de1919;
    }

    button {
        border: none;
        outline-style: none;
        cursor: pointer;
        margin-right: 0.5rem;
    }
    .array {
        display: inline;
    }
</style>
