<template>
    <div class="HomePage">
        <header-section>
            <p>中国石油大学二手市场物品交易社区</p>
        </header-section>
        <search @focus="hiddenManagerList" @fetchSearch="fetchSearch"></search>
        <load-image :src="loading" :loadState="loadState"></load-image>
        <hr style="border: 1px solid #EBEBEB;border-bottom: none">
        <div v-for="item in managerList">
            <router-link :to="`/second/manager/${item.managerData.id}`" style="display: block;">
                <manager-section class="bottom-style"
                                 :userData="item.userData"
                                 :managerImage="item.managerImage"
                                 :managerData="item.managerData"
                ></manager-section>
            </router-link>
        </div>

        <div class="footer absolute-horizontal-center">
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

    import Search from '../../common-component/Search.vue'
    import LoadImage from '../../../../common/components/LoadImage.vue'
    import ManagerSection from './ManagerSection/index.vue'
    import HeaderSection from '../../../../common/components/HeaderSection.vue'
    import updateData from "../../../../common/mixins/UpdateData"
    import loading from "../../../../common/mixins/loading"
    import fetchVq from "../../../../common/mixins/fetchVq"
    import {marketFetch, yibanAuth} from "../../config/fetchUtil"
    import getManagerList from "../../fetch/getManagerList"

    export default {
        name: 'HomePage',
        mixins: [updateData , loading(marketFetch , this) , fetchVq(yibanAuth)],
        data () {
            return {
                title: '中国石油大学 二手市场',
                find: require('../../media/findOn.png'),
                user: require('../../media/userOff.png'),
                managerSectionList: [],
                managerList: [],
                pageData: {}
            }
        },
        created() {
            this.getManagerList().then(data => {
                this.managerList = data.managerList
                this.pageData = data.pageData
                console.log(this.pageData , this.managerList)
                this.showManagerList()
            })
        },
        components: {
            ManagerSection,
            HeaderSection,
            Search,
            LoadImage
        },
        methods: {
            backTop() {
                window.scrollTo(0 , 0)
            },
            showManagerList() {
                this.managerList = this.managerSectionList
            },
            hiddenManagerList() {
                this.managerList = []
            },
            fetchSearch(e) {
                if (!e || !e.value || e.value === '') {
                    this.showManagerList()
                } else {
                    console.log(e)
                }
            },
            getManagerList
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

    .HomePage .footer {
        position: fixed;
        width: 100%;
        max-width: 800px;
        border-top: 1px solid #D5D5D5;
        border-left: 1px solid #D5D5D5;
        border-right: 1px solid #DAD7E0;
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
