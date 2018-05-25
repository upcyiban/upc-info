<template>
    <div class="HomePage second-market box-center">
        <header-section>
            <p>二手市场</p>
        </header-section>
        <search @fetchSearch="fetchSearch"></search>
        <load-image :loadState="loadState"></load-image>
        <hr style="border: 1px solid #EBEBEB;border-bottom: none" v-if="!(pageList.length <= 0 || pageList[0].managerList.length <= 0)">
        <p v-if="pageList.length <= 0 || pageList[0].managerList.length <= 0" style="color: rgb(179, 167, 167);font-size: 0.7rem;margin-top: 1rem" class="text-center">
            没有搜索结果
        </p>
        <div v-for="(page,index) in pageList" :key="`page${index}`" :page-num="page.pageData.number">
            <div v-for="item in page.managerList" :key="`item${item.managerData.id}`">
                <router-link :to="`/second/details/${item.managerData.id}`" style="display: block;">
                    <manager-section class="bottom-style"
                                     :userData="item.userData"
                                     :managerImage="item.managerData.imgUrl"
                                     :managerData="item.managerData"
                    ></manager-section>
                </router-link>
            </div>
        </div>
        <load-image :loadState="loadState"></load-image>
        <div style="height: 6rem;"></div>
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
                    <router-link to="/second/user-center">
                        <img :src="user" >
                        <p>我的</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Search from '../../common-component/Search.vue'
    import LoadImage from '../../../../common/components/LoadImage.vue'
    import ManagerSection from './ManagerSection/index.vue'
    import HeaderSection from '../../common-component/HeaderSection.vue'
    import updateData from '../../../../common/mixins/UpdateData'
    import loading from '../../../../common/mixins/loading'
    import fetchVq from '../../../../common/mixins/fetchVq'
    import {marketFetch, yibanAuth} from '../../config/fetchUtil'
    import getManagerList, {createItem} from '../../fetch/getManagerList'
    import lazyLoad from '../../common-component/mixins/lazyLoad'

    export default {
        name: 'HomePage',
        mixins: [updateData, loading(marketFetch), fetchVq(yibanAuth), lazyLoad],
        data () {
            return {
                title: '中国石油大学 二手市场',
                find: require('../../media/findOn.png'),
                user: require('../../media/userOff.png'),
                pageList: [],
                pageListData: [],
                // flag描述pageListData的属性是首页的数据还是搜索的数据
                flag: true,
                nextPageNumber: 1
            }
        },
        created () {
            this.getManagerList(0).then(data => {
                this.addPage(data)
            })
        },
        components: {
            ManagerSection,
            HeaderSection,
            Search,
            LoadImage
        },
        methods: {
            backTop () {
                window.scrollTo(0, 0)
            },
            setPageWithData (json) {
                if (this.flag) {
                    this.pageListData = this.pageList
                    this.flag = false
                }
                this.pageList = [{
                    managerList: json.map(item => createItem(item)),
                    pageData: this.pageList[0].pageData
                }]
            },
            fetchSearch (e) {
                if (e.name) {
                    this.fetch.getJsonData('/secondhand/browse/findbyarticlename' , {
                        name: e.name
                    }).then(json => {
                        this.setPageWithData(json)
                    })
                } else if (e.choose && e.choose.length > 0){
                    this.fetch.getJsonData('/secondhand/browse/findbyarticlekind' , {
                        kind: e.choose.join('%')
                    }).then(json => {
                        this.setPageWithData(json)
                    })
                } else {
                    this.pageList = this.pageListData
                }
            },
            getManagerList
        }
    }
</script>


<style scoped>
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
