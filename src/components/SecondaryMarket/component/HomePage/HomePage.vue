<template>
    <div class="HomePage">
        <header-section
            title="中国石油大学二手市场物品交易社区"
            :yibanAuth="yibanAuth"
        >
            <p>中国石油大学二手市场物品交易社区</p>
        </header-section>
        <div class="search box-center">
            <label>
                <input type="text" autofocus/>
            </label>
            <div class="absolute-center">
                <p>搜索宝贝</p>
            </div>
        </div>
        <hr style="border: 1px solid #EBEBEB;border-bottom: none">
        <br>
        <div v-for="item in managerSectionList">
            <router-link :to="`/second/manager/${item.managerData.id}`" style="display: block;">
                <manager-section class="bottom-style"
                                 :userData="item.userData"
                                 :managerImage="item.managerImage"
                                 :managerData="item.managerData"
                ></manager-section>
            </router-link>
        </div>

        <div class="footer">
            <ul class="clear">
                <li class="float-left" @click="backTop">
                    <img :src="find" >
                    <p>发现</p>
                </li>
                <li class="float-left add">
                    <router-link to="/second/publish" class="absolute-horizontal-center" style="display: block">
                        <span>+</span>
                    </router-link>
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
    /**
     * @namespace require
     */
    import ManagerSection from './ManagerSection/index.vue'
    import {UserData} from "../../../../common/util/getYibanData"
    import HeaderSection from '../../../common/HeaderSection.vue'
    import yibanAuth from "../../model/getYibanVq"
    import updateData from "../../../common/mixins/UpdateData"
    import loading from "../../../common/mixins/loading"
    import marketFetch from "../../model/marketFetch"
    import getManagerList from "../../fetch/getManagerList"

    export default {
        name: 'HomePage',
        mixins: [updateData , loading(marketFetch)],
        data () {
            let userData = UserData.getLocalUserData()
            return {
                find: require('../../media/findOn.png'),
                user: require('../../media/userOff.png'),
                managerSectionList: [
                    {
                        userData: userData,
                        managerImage: [],
                    }
                ],
                yibanAuth: yibanAuth
            }
        },
        created() {
            getManagerList(this).then(data => {
                this.managerSectionList = data
            })
        },
        components: {
            ManagerSection,
            HeaderSection
        },
        methods: {
            backTop() {
                window.scrollTo(0 , 0)
            }
        }
    }
</script>


<style scoped>
    .HomePage {
        font-size: 1rem;
        max-width: 800px;
        margin: 0 auto;
    }

    .HomePage .bottom-style {
        margin-bottom: 5px;
        padding-bottom: 15px;
        border-bottom: 10px solid #EBEBEB;
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
        background-color: #FFF;
    }
    .HomePage .footer ul {
        text-align: center;
    }
    .HomePage .footer ul .add {
        position: relative;
    }
    .HomePage .footer ul .add a {
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
