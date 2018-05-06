<template>
    <div class="Reply box-center">
        <div :class="`reply-leave${index}`" v-for="(item , index) in replyList">
            <p>{{index}}</p>
            <reply :replyList="item.replyList"></reply>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Reply',
        props: {
            replyList: {
                type: Array,
                default: function () {
                    return []
                }
            }
        },
        created() {
            console.log(this._props.replyList)
        },
        data () {
            return {

            }
        },
        methods: {

        },
        components: {
        }
    }
</script>


<style scoped>
    .Reply {
    }

    .Reply .header {
        border-left: 12px solid #289ACB;
        padding-left: 1rem;
    }
</style>
