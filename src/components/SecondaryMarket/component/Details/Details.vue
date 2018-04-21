<template>
    <div class="HomePage">
       <header-section title="物品详情页">
           <img style="width: 4%;position:relative;right: 35%" src="./media/arch.png" alt="">
           <p style="display:inline-block">宝贝详情</p>
       </header-section>
        <manager-header style="margin: 5%" :userData="this.userData">


        </manager-header>
        <hr style="margin:5%;color: #999898">
        <div style="width: 90%;text-align: center;margin: 5%;line-height:20px" class="Language">
            <h5>澳大利亚不但环境优美而且景色秀丽,夏不酷暑、冬不寒冷,日照充足,雨量丰沛。接下来澳大利
                亚频道就与大家分享澳大利亚风景图片,澳大利亚风景名胜等唯美图片,一
            </h5>
              </div>
       <div class="imgs">
           <img style="width:90%;margin: 5%" src="http://img02.fs.yiban.cn/8574001/avatar/user/200" alt="">
           <img style="width:90%;margin: 5%" src="http://img02.fs.yiban.cn/8574001/avatar/user/200" alt="">



       </div>
        <hr style="margin:5%;color: #999898">
        <div style="margin-left:5%;
        height: 100%;
        width: 5px;
        border-radius: 5px;
        background: #189FD9;"><h4 style="display: inline">&nbsp;&nbsp;Reply</h4></div>




    </div>

</template>

<script>

    import {UserData} from '../../../../common/util/getYibanData'
   import HeaderSection from '../../common-component/HeaderSection.vue'
   import ManagerHeader from '../../common-component/ManagerHeader.vue'
    import MangerDetails from '../../common-component/ManagerDetails.vue'


    export default {
        name: 'index',


        data () {
            let userData = UserData.getLocalUserData()
            props:['userData']



            return {
                userData:userData,

            }
        },
        components: {

            HeaderSection,
            ManagerHeader,
            MangerDetails

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
