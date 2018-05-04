<template>
    <div class="UserBox">
        <ul class="clear">
            <li class="float-left">
                <img :src="userData.userHeader"/>
            </li>
            <li class="float-left second">
                <span class="user-name">{{userData.userName}}</span>
                <!--<p class="time">两小时前发布</p>-->
            </li>
            <li class="float-right">
                <p>#{{managerPrice}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    /**
     * @namespace userData
     */
    export default {
        name: 'ManagerHeader',
        props: ['userData', 'managerPrice'],
        data() {
            return {}
        }
    }
</script>


<style>
    .UserBox {
        height: 2.8571rem;
        margin: 0.8rem 0;
        line-height: 2.8571rem;
    }

    .UserBox ul li {
        height: 2.8571rem;
        /*line-height: 1.4285rem;*/
        line-height: 2.8571rem;
        margin-right: 1rem;
    }

    .UserBox ul li:first-child {
        width: 2.8571rem;
        border-radius: 1.4285rem;
        overflow: hidden;
    }

    .UserBox ul li:last-child {
        flex-direction: column-reverse;
        align-self: flex-start;
        color: red;
        font-size: 1.5rem;
        line-height: 2.8rem;
    }

    .UserBox ul li:first-child {
        width: 2.8571rem;
        height: 2.8571rem;
        line-height: 2.8571rem;
    }
    .UserBox img {
        width: 100%;
        height: 100%;
    }
    .UserBox .second p {
        font-size: 0.7rem;
    }

</style>
