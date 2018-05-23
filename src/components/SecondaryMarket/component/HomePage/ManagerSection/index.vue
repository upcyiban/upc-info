<template>
    <div class="ManagerSection">
        <manager-header :userData="userData" :managerPrice="managerData.managerPrice"></manager-header>
        <manager-details :images="managerData.imgUrl" :describe="managerData.managerDetail"></manager-details>
        <!--<manager-reply :replyList="managerReplyList"></manager-reply>-->
        <hr style="border: 1px solid #EBEBEB;border-bottom: none">
        <ul class="clear manager-footer">
            <li class="float-right">留言{{managerData.reviews}}</li>
            <li class="float-right">&nbsp;·&nbsp;</li>
            <li class="float-right">收藏{{managerData.collections}}</li>
        </ul>
    </div>
</template>

<script>
    import ManagerHeader from '../../../common-component/ManagerHeader.vue'
    import ManagerDetails from '../../../common-component/ManagerDetails.vue'
    import ManagerReply from './ManagerReply.vue'
    export default {
        name: 'index',
        props: ['userData', 'managerImage', 'managerData'],
        data () {
            return {
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
    }
</script>


<style scoped>
    .ManagerSection {
        padding: 0 20px;
    }
    .ManagerSection .ManagerReply {
        margin: 10px 0;
    }
    .ManagerSection .manager-footer{
        margin: 0;
    }
    .ManagerSection .manager-footer li {
        color: #B2B1B1;
        font-size: 0.75rem;
        margin-top: 10px;
    }
</style>
