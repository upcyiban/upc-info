<template>
    <div class="ManagerDetails">
        <ul class="clear">
            <li class="float-left big" v-if="images.length === 1">
                <img :src="images[0]">
            </li>
            <li v-for="(item , index) in images" class="float-left" v-if="images.length !== 1">
                <img :src="item" :class="{last: index === images.length - 1}">
            </li>
            <li class="hide" v-if="images.length >1 "></li>
        </ul>
        <p class="describe overflow-omit"> {{describe}}</p>

    </div>
</template>

<script>
    export default {
        name: 'ManagerDetails',
        props: ['images', 'describe'],
        data () {
            return {}
        }
    }
</script>


<style scoped>
    .ManagerDetails ul li img {
        max-height: 9rem;
        margin-right: 0.5rem;
    }

    .ManagerDetails ul {
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
        justify-content: space-between;
        align-items: flex-end;
    }

    .ManagerDetails .last {
        margin-right: 0;
    }

    .ManagerDetails .describe {
        line-height: 1rem;
        height: 2rem;
        margin: 1.1rem 0;
    }

    @media (min-width: 640px){
        .ManagerDetails ul {
            position: relative;
            display: block;
            width: 60%;
            max-height: 25rem;
            overflow-x: hidden;
        }

        .ManagerDetails ul li img {
            width: 100%;
            max-height: 100%;
            margin-bottom: 0.5rem;
        }

        .ManagerDetails .hide {
            position: absolute;
            bottom: 0%;
            left: 50%;
            transform: translateX(-50%);
            width: 110%;
            height: 4rem;
            background-image: linear-gradient(0deg, #ffffff, transparent)
        }
    }
</style>
