<template>
    <div class="ManagerSection">
        <manager-header :imgSrc="userHeader"></manager-header>
        <manager-details :images="managerImage"></manager-details>
        <manager-reply :replyList="managerReplyList"></manager-reply>
        <hr>
        <ul class="clear manager-footer">
            <li class="float-right">留言2</li>
            <li class="float-right">&nbsp;·&nbsp;</li>
            <li class="float-right">收藏12</li>
        </ul>
    </div>
</template>

<script>
    import ManagerHeader from './ManagerHeader.vue'
    import ManagerDetails from './ManagerDetails.vue'
    import ManagerReply from './ManagerReply.vue'
    import header from './media/header.png'
    export default {
        name: 'index',
        data () {
            return {
                userHeader: header,
                managerImage: [header , header , header],
                managerReplyList: [
                    {
                        user: '用户1',
                        message: '第一条消息'
                    },
                    {
                        user: '用户二',
                        message: '第二条消息'
                    }
                ]
            }
        },
        components: {
            ManagerHeader,
            ManagerDetails,
            ManagerReply
        }
    };
</script>


<style>
    .ManagerSection {
        padding: 0 20px;
    }
    .ManagerSection .ManagerReply {
        margin: 10px 0;
    }
    .ManagerSection .manager-footer li {
        color: #B2B1B1;
        font-size: 0.75rem;
        margin-top: 10px;
    }
</style>
