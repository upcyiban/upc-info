<template>
    <div class="ManagerDiscuss">
        <ul class="clear">
            <li class="float-left big" v-if="images.length === 1">
                <img :src="images[0]">
            </li>
            <li v-for="(item , index) in images" class="float-left" v-if="images.length !== 1">
                <img :src="item" v-if="index <= 1">
            </li>
        </ul>
        <p class="describe overflow-omit">
            物品描述物品描述物品描述物品描述物品描述物品描述物品描述物品描述物品描述物品描述物品描述物品描述物品描述物品描述物品描述物品描述物品描述物品描述物品描述物品描述</p>

    </div>
</template>

<script>
    export default {
        name: 'ManagerDetails',
        props: ['images'],
        data () {
            return {}
        },
        beforeMount () {
            console.log(this)
        }
    }
</script>


<style>
    .ManagerDiscuss {
    }

    .ManagerDiscuss ul li img {
        width: 10rem;
        height: 10rem;
    }

    .ManagerDiscuss ul {
        display: flex;
        justify-content: space-around;
    }

    .ManagerDiscuss .big img {
        width: 14.2857rem;
        height: 10.7143rem;
    }

    .ManagerDiscuss p {
        line-height: 1rem;
        height: 2rem;
        margin: 1.1rem 0;
    }

</style>
