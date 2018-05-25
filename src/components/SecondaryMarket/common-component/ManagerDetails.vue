<template>
    <div class="ManagerDetails">
        <ul class="clear">
            <li class="float-left big" v-if="images.length === 1">
                <img :src="images[0]">
            </li>
            <li v-for="(item , index) in images" class="float-left" v-if="images.length !== 1">
                <img :src="item" :class="{last: index === images.length - 1}">
            </li>
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
    .ManagerDetails {
    }

    .ManagerDetails ul li img {
        max-height: 9rem;
        margin-right: 0.5rem;
    }

    .ManagerDetails ul {
        overflow-x: scroll;
        overflow-y: hidden;
        display: flex;
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

</style>
