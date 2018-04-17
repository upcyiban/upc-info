<template>
    <div class="UserBox">
        <ul class="clear">
            <li>
                <img :src="imgSrc"/>
            </li>
            <li class="second" style="width: 50%">
                <span class="user-name">放肆 - </span>
                <span class="user-id">ID&nbsp;:&nbsp;840039</span>
                <p class="time">两小时前发布</p>
            </li>
            <li class="float-right">
                <p>#5</p>
            </li>
        </ul>
    </div>
</template>

<script>
    const ManagerHeader = {
        name: 'ManagerHeader',
        props: ['imgSrc'],
        data () {
            return {}
        }
    }
    export default ManagerHeader
</script>


<style>
    .UserBox {
        height: 3.57rem;
    }

    .UserBox ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .UserBox ul li {
        flex-direction: column;
    }

    .UserBox ul li:last-child {
        flex-direction: column-reverse;
        align-self: flex-start;
        color: red;
        font-size: 1.5rem;
    }

    .UserBox ul li:first-child {
        width: 2.8571rem;
        height: 2.8571rem;
    }

    .UserBox img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .UserBox .user-name {
        color: black;
    }

    .UserBox .user-id {
        color: #656565;
        font-size: 0.85rem;
    }

    .UserBox .time {
        color: #7F7F7F;
        font-size: 0.75rem;
        margin-top: 0.8rem;
    }
</style>
