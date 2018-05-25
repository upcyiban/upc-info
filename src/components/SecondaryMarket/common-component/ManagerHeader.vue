<template>
    <div class="UserBox">
        <ul class="clear">
            <li>
                <img :src="userData.userHeader"/>
            </li>
            <li class="second">
                <span>{{userData.userName}}</span>
                <!--<p class="time">两小时前发布</p>-->
            </li>
            <li>
                <p>￥{{managerPrice}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    /** @namespace userData */
    /** @namespace managerPrice */
    export default {
        name: 'ManagerHeader',
        props: ['userData', 'managerPrice'],
        data () {
            return {}
        }
    }
</script>


<style>
    .UserBox {
        height: 2.8571rem;
        margin: 0.8rem 0;
        line-height: 2.8571rem;
        overflow: hidden;
    }
    .UserBox .second {
        width: 5rem;
    }
    .UserBox ul {
        display: flex;
    }
    .UserBox ul li {
        height: 2.8571rem;
        line-height: 2.8571rem;
    }

    .UserBox ul li:last-child {
        color: red;
        font-size: 1.5rem;
        line-height: 2.8rem;
        text-align: right;
        position: absolute;
        right: 1rem;
    }

    .UserBox ul li:first-child {
        width: 2.8571rem;
        height: 2.8571rem;
        margin-right: 1rem;
        line-height: 2.8571rem;
        border-radius: 1.4285rem;
        overflow: hidden;
    }

    .UserBox img {
        width: 100%;
        height: 100%;
    }

    .UserBox .second p {
        font-size: 0.7rem;
    }

</style>
