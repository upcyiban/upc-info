<template>
    <div class="ReplyList box-center">
        <p class="header">留言</p>
        <hr style="border: 1px solid #EBEBEB;border-bottom: none">

    </div>
</template>

<script>

    export default {
        name: 'ReplyBox',
        data () {
            return {
                replyList: []
            }
        },
        created() {
        },
        components: {
        }
    }
</script>


<style scoped>
    .ReplyList {
        width: 95%;
        margin: 1rem auto;
    }
    .ReplyList p {
        border-left: 11px solid #12A1DF;
        padding-left: 0.5rem;
        height: 1.5rem;
        line-height: 1.5rem;
    }
</style>
