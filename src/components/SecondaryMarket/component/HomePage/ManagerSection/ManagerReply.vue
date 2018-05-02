<template>
    <div class="ManagerReply">
        <div class="reply">
            <div class="border-left"></div>
            <p v-for="(item , index) in replyList" v-if="index <= 1">
                {{item.user}} : {{item.message}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ManagerReply',
        data () {
            return {}
        },
        beforeMount(){
        },
        props: ['replyList']
    }
</script>


<style scoped>
    .ManagerReply {
    }

    .ManagerReply .reply {
        padding-left: 1rem;
        position: relative;
    }

    .ManagerReply .reply p {
        font-size: 0.9rem;
        line-height: 1.4rem;
        height: 1.4rem;
        color: #656565;
        margin: 0;
    }

    .ManagerReply .reply .border-left {
        position: absolute;
        left: 0;
        height: 100%;
        width: 5px;
        border-radius: 5px;
        background: #189FD9;
    }
</style>
