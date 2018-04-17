<template>
    <div class="ManagerSection">
        <manager-header :imgSrc="imgSrc"/>
        <manager-details/>
        <manager-reply/>
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
                imgSrc: header
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
</style>
