<template>
    <div class="Message">
        <object-class v-if="getType() === 'Object'" class="Object"
                      :object="message" :tab="tab+1">
        </object-class>
        <object-class v-if="getType() ===  'Array'" class="Array"
                      :object="message" :tab="tab+1" :isArray="true">
        </object-class>
        <a :href="message" v-if="getType() === 'Url'" class="Url" target="_black" :title="message">{{mixString(message, 30)}}</a>
        <span v-if="'Other' === getType()">{{mixString(message, 30)}}</span>
    </div>
</template>

<script>
    import ObjectClass from './ObjectClass.vue'
    /** @namespace mixString */
    export default {
        name: 'Message',
        props: {
            message: {},
            tab: {
                type: Number,
                default: 0
            }
        },
        data () {
            return {
                // Object Array Url Other
                type: ''
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
            },
            getType () {
                const message = this._props.message
                let type
                if (message instanceof Array) {
                    type = 'Array'
                } else if (message instanceof Object) {
                    type = 'Object'
                } else if (typeof message === 'string' && this.isUrl(message.split('?')[0])) {
                    type = 'Url'
                } else {
                    type = 'Other'
                }
                return type
            }
        },
        components: {
            ObjectClass
        }
    }
</script>


<style scoped>
    .Message{
        display: inline;
    }
    .Url {
        color: #de1919;
    }
    .Object {
        cursor: pointer;
    }
    .Array {
        display: inline;
    }
</style>
