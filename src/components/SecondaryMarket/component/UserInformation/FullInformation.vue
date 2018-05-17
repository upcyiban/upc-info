<template>
    <div class="infor">
        <HeaderSection :fristLogin="flag"></HeaderSection>
        <div class="head">
            <p>个人信息</p>
        </div>
        <div class="full">
            <ul>
                <li>
                    <span>微信</span>
                    <input-box dataKey="userWchat" :value="userWchat" type="text" placeholder="请输入你的微信" @userInput="updateData" ></input-box>
                </li>
                <br>
                <li>
                    <span>手机号</span>
                    <input-box dataKey="userPhone" :value="userPhone" type="text" placeholder="请输入你的联系方式" @userInput="updateData"></input-box>
                </li>
                <br>
                <li>
                    <span>邮箱</span>
                    <input-box dataKey="userEmail" :value="userEmail" type="text" placeholder="请输入你的邮箱" @userInput="updateData" ></input-box>
                </li>
                <br>
            </ul>
        </div>
        <div>
                <center><button class="submit" @click="fulluser">完成</button></center>
        </div>
    </div>
</template>
<script>
    import {yibanAuth,marketFetch} from "../../config/fetchUtil"
    import loading from "@/common/mixins/loading"
    import updateData from "@/common/mixins/UpdateData"
    import InputBox from '../../common-component/InputBox'
    import userInput from "../../common-component/mixins/UserInput"

    export default {
        name: 'Fullinformation',
        mixins: [updateData, loading(marketFetch)],
        data() {
            return {
                yibanAuth: yibanAuth,
                userPhone: '',
                userWchat: '',
                userEmail: '',
                flag: 0
            }
        },
        methods: {
            fulluser: function () {
                if (this.userWchat == ""){
                    alert("微信号不能为空")
                    return false
                }
                if (this.userPhone == ""){
                    alert("手机号不能为空")
                    return false
                }
                if(!(/^1[34578]\d{9}$/.test(this.userPhone))){
                    alert("请填写正确的手机号")
                    return false
                }
                if (this.userEmail == ""){
                    alert("邮箱不能为空")
                    return false
                }
                if (!( /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/.test(this.userEmail))){
                    alert("请输入正确的邮箱地址")
                    return false
                }
                this.$router.push('/second/home-page')
                flag = 1
                return this.fetch.postJsonData('/second/user/addotherinfo', {
                    'phone': this.userPhone,
                    'wchat': this.userWchat,
                    'email': this.userEmail
                }).then(json => {
                    console.log(json)
                })
            }
        },
        components: {
            HeaderSection,
            InputBox
        }
    }
</script>

<style scoped>
    .infor .head {
        background-color: #189FD9;
        text-align: center;
        height: 80px;
        line-height: 80px;
        color: #FFF;
        position: relative;
        font-size: 1.5rem;
    }

    .infor .full {
        font-size: 1.5rem;
    }

    . infor .full input {
        font-size: 0.75rem;
    }

    .infor .full input {
        height: 35px;
        width: 83%;
        border: none;
        border-radius: 10px;
        outline-style: none;
        background-color: #E8E8E8;
        text-indent: 10px;
    }

    .infor .full input {
        float: right;
    }

    .infor .back {
        background-color: transparent;
        border: 0;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(0, -50%);
    }

    .infor .submit {
        background-color: #189FD9;
        border: none;
        width: 97%;
        border-radius: 6px;
        padding: 10px 20px;
        margin: 10px;
    }

    .infor .full {
        margin: 10px;
    }

</style>
