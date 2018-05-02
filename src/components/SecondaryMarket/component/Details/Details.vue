<template>
    <div class="HomePage" >
        <header-section :title='title' :yibanAuth="yibanAuth">物品详情</header-section>
        <manager-header style="margin: 5%" :userData="serData">


        </manager-header>

        <hr style="margin:5%;color: #999898">
        <div style="width: 90%;text-align: center;margin: 5%;line-height:20px" class="Language">
            {{Intro}}

        </div>
       <div class="imgs">
           <img style="width:90%;margin: 5%" :src="this.serData.userHeader" alt="">
           <img style="width:90%;margin: 5%" src="http://img02.fs.yiban.cn/8574001/avatar/user/200" alt="">



       </div>
        <hr style="margin:5%;color: #999898">


        <div class="reply"  style="margin-left:5%;margin: 10%;
        height: 100%;
        width: 5px;
        border-radius: 5px;
        background: #189FD9;"><h4 style="display: inline">&nbsp;&nbsp;Reply</h4></div>




        <hr style="margin:5%;color: #999898">
        <div style="position:fixed;bottom: 0px; background-color: white;width: 100%;height: 8%" class="foot">
            <img id="myimage" @click="change" style="height:74%" :src="img" alt="">
            <h4 style="display:inline">收藏</h4>
            <img style="display:inline" src="./media/comm.png" alt="">
            <h4 style="display:inline">评论</h4>
            <div style="background-color:red;display: inline;position: fixed;right: 20px;bottom: 10px;"><button @click="Buy">我想要</button></div>
        </div>
    </div>
</template>

<script>


    import {UserData} from '../../../../common/util/getYibanData'
    import HeaderSection from '../../../common/HeaderSection'
    import ManagerHeader from '../../common-component/ManagerHeader.vue'
    import MangerDetails from '../../common-component/ManagerDetails.vue'
    import  coll2 from './media/coll2.png'
    import  coll from './media/coll.png'
    import yibanAuth from "../../model/getYibanVq"
    import MarketFetch from "../../model/marketFetch"






    export default {
        name: 'index',


        mounted()
        {
            MarketFetch.getJsonData("/second/user/info").then((result)=>{
                console.log(result.ybhead)
                let userData = UserData.getLocalUserData()
                userData.userHeader = result.ybhead
                userData.userName = result.username
                userData.userId = result.userid
                console.log(result)
                this.serData = userData
            })
        },
        data () {
            let userData = UserData.getLocalUserData()
            console.log(userData)



            return {
                Intro:"sdafsd",
                serData:userData,
                title:'物品详情',
                img:coll,
                yibanAuth: yibanAuth
            }
        },
        components: {

            HeaderSection,
            ManagerHeader,
            MangerDetails,

        },
        methods:{
            change()
            {
                if (this.img === coll)
                {
                    this.img=coll2

                }
                else
                {
                   this.img=coll

                }
            },
            Buy(){
                alert("本商品仅限vip用户购买")

            },
            Headerupdate:function (result)
            {
                console.log("");
                return 0;


            }


        }



}








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
    .HomePage {
        font-size: 1rem;
        max-width: 800px;
        margin: 0 auto;
    }





    .HomePage .header {
        background-color: #189FD9;
        text-align: center;
        height: 40px;
        line-height: 40px;
        color: #FFF;
    }









</style>
