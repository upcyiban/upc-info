<template>
    <div class="Object" @click.stop="changeHidden">
        <span v-if="hidden && !isArray" class="hidden">{.........}</span>
        <span v-if="hidden && isArray" class="hidden">[.........]</span>
        <span v-if="!hidden">
            <span v-if="!isArray">{</span>
            <span v-if="isArray">[</span>
            <p v-for="(item, key) in object">
                <span v-html="tabNum(0)"></span>{{key}}&nbsp;:&nbsp;
                <message :message="item" :tab="tab"></message>
            </p>
            <span v-html="tabNum(-1)"></span>
            <span v-if="!isArray">}</span>
            <span v-if="isArray">]</span>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'ObjectClass',
        props: {
            object: {
                type: [Object, Array],
                default: function () {
                    return {
                        key: '空元素'
                    }
                }
            },
            tab: {
                type: Number,
                default: 1
            },
            isArray: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                hidden: true
            }
        },
        methods: {
            changeHidden () {
                this.hidden = !this.hidden
            },
            tabNum (num) {
                const tab = this._props.tab
                return Array.prototype.join.call({length: (tab + num) * 4 + 1}, '&nbsp;')
            }
        },
        components: {
        }
    }
</script>


<style scoped>
    .Object{
        display: inline;
    }
    .hidden {
        display: inline-block;
    }
    span {
        color: #49a065;
    }
</style>
