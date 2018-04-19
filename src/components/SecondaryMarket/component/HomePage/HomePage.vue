<template>
    <div class="HomePage">
        <div class="header">
            <p>中国石油大学二手市场物品交易社区</p>
        </div>
        <div class="search box-center">
            <label>
                <input type="text"/>
            </label>
            <div class="placeholder absolute-center">
                <p>搜索宝贝</p>
            </div>
        </div>
        <hr>
        <br>
        <manager-section class="bottom-style"></manager-section>
        <div class="footer">
            <ul class="clear">
                <li class="float-left">
                    <img :src="find" >
                    <p>发现</p>
                </li>
                <li class="float-left add">
                    <div class="absolute-horizontal-center"><span>+</span></div>
                    <img style="opacity: 0;" src="">
                    <p>发布</p>
                </li>
                <li class="float-left">
                    <img :src="user" >
                    <p>我的</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    import ManagerSection from './ManagerSection/index.vue'
    import find from './media/find.png'
    import user from './media/user.png'
    export default {
        name: 'HomePage',
        data () {
            return {
                find: find,
                user: user
            }
        },
        components: {
            ManagerSection
        }
    }
</script>


<style>
    .HomePage {
        font-size: 1rem;
        max-width: 800px;
        margin: 0 auto;
    }

    .HomePage hr {
        background-color: #E3E3E3;
        color: red;
        height: 1px;
        line-height: 1px;
        font-size: 0;
        border: none;
    }

    .HomePage .bottom-style {
        margin-bottom: 5px;
        padding-bottom: 15px;
        border-bottom: 10px solid #D5D5D5;
    }

    .HomePage .header {
        background-color: #189FD9;
        text-align: center;
        height: 40px;
        line-height: 40px;
        color: #FFF;
    }

    .HomePage .search {
        height: 40px;
        width: 95%;
        color: #999898;
        position: relative;
        margin-bottom: 20px;
        margin-top: 20px;
        font-size: 0.75rem;
    }

    .HomePage .search input {
        font-size: 0.75rem;
    }

    .HomePage .search input {
        height: 100%;
        width: 100%;
        background-color: #E3E3E3;
        border: none;
        border-radius: 10px;
        outline-style: none;
    }

    .HomePage .footer {
        position: sticky;
        border-top: 1px solid #D5D5D5;
        font-size: 0.75rem;
        padding: 10px 0;
        bottom: 0;
    }
    .HomePage .footer ul {
        text-align: center;
    }
    .HomePage .footer ul .add {
        position: relative;
    }
    .HomePage .footer ul .add div {
        width: 3.6rem;
        height: 3.6rem;
        position: absolute;
        bottom: 1.1rem;
        background-color: #3299FF;
        border-radius: 50%;
        line-height: 3.1rem;
        font-size: 4rem;
        color: white;
        vertical-align: baseline;
    }
    .HomePage .footer ul li {
        width: 32%;
    }
    .HomePage .footer img {
        width: 1.8rem;
        height: 1.8rem;
    }
</style>
