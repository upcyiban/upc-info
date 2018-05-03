<template>
    <div class="UserBox">
        <ul class="clear">
            <li class="float-left">
                <img :src="userData.userHeader"/>
            </li>
            <li class="float-left">
                <span class="user-name">{{userData.userName}}</span>
                <p class="time">两小时前发布</p>
            </li>
            <li class="float-right">
                <p>￥{{managerPrice}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    /**
     * @namespace userData
     * @namespace managerPrice
     */
    const ManagerHeader = {
        name: 'ManagerHeader',
        props: ['userData' , 'managerPrice'],
        data () {
            return {}
        },
        created() {
            console.log('213213' , this._props.userData)
        }
    }
    export default ManagerHeader
</script>


<style scoped>
    .UserBox {
        height: 2.8571rem;
        margin: 0.8rem 0;
        line-height: 2.8571rem;
    }

    .UserBox ul li{
        height: 2.8571rem;
        line-height: 1.4285rem;
        margin-right: 1rem;
    }
    .UserBox ul li:first-child {
        width: 2.8571rem;
    }

    .UserBox ul li:last-child {
        color: red;
        font-size: 1.5rem;
        line-height: 2.8rem;
    }

    .UserBox img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .UserBox .user-name {
        color: black;
    }

    .UserBox .time {
        color: #7F7F7F;
        font-size: 0.75rem;
    }
</style>
