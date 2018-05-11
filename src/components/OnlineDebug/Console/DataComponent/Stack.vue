<template>
    <div class="Stack">
        <p v-for="(item, index) in stackList">
            <span class="method">{{methodList[index][0]}}</span>
            <span class="url">{{urlList[index][0]}}</span>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Stack',
        props: {
            stack: {
                type: String,
                default: function () {
                    return ''
                }
            }
        },
        data () {
            return {
                stackList: [],
                urlList: [],
                methodList: []
            }
        },
        created () {
            const stack = this._props.stack
            this.stackList = stack.split('    ')
            this.stackList = this.stackList.splice(6, this.stackList.length)
            this.urlList = this.stackList.map(item => {
                // 获取括号内的内容
                const url = item.match(/[(][^)]+[)]/g)
                this.methodList.push(item.split(url))
                return url
            })
        }
    }
</script>


<style scoped>
    .Stack{
        overflow: scroll;
        height: 4rem;
    }
    .method {
        color: black;
    }
    .url {
        color: #297d63;
    }
</style>
