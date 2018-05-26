<template>
    <div class="infor">
        <div class="head">
            <p>请完善个人信息</p>
        </div>
        <div class="full">
            <ul>
                <li>
                    <span>QQ</span>
                    <input-box dataKey="userQQ" :value="userQQ" type="text" placeholder="请输入你的QQ" @userInput="updateData" ></input-box>
                </li>
                <br>
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
    import {yibanAuth, marketFetch} from "../../config/fetchUtil"
    import loading from "@/common/mixins/loading"
    import updateData from "@/common/mixins/UpdateData"
    import InputBox from '../../common-component/InputBox'
    import userInput from "../../common-component/mixins/UserInput"

    export default {
        name: 'Fullinformation',
        mixins: [updateData, loading(marketFetch)],
        data () {
            return {
                yibanAuth: yibanAuth,
                userPhone: '',
                userWchat: '',
                userEmail: '',
                userQQ: '',
                reciveMessage: ''
            }
        },
        methods: {
            fulluser: function () {
                let flag = 0
                if (this.userQQ !== "") {
                    flag = 1
                }
                if (this.userWchat !== "") {
                    flag = 1
                }
                if (this.userPhone !== "") {
                    flag = 1
                    if (!(/^1[34578]\d{9}$/.test(this.userPhone))) {
                        alert("请填写正确的手机号")
                        return false
                    }
                }
                if (this.userEmail !== "") {
                    flag = 1
                    if (!(/^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/.test(this.userEmail))) {
                        alert("请输入正确的邮箱地址")
                        return false
                    }
                }
                if (flag === 0) {
                    alert("请至少完善一项信息")
                    return false
                }
                this.getUrl()
                return this.fetch.postJsonData('/second/user/signup', {
                    'qq': this.userQQ,
                    'phone': this.userPhone,
                    'wchat': this.userWchat,
                    'email': this.userEmail
                }).then(json => {
                    console.log(json)
                    this.check()
                })
            },
            check () {
                marketFetch.getJsonData('/second/user/exist', {}).then((exist) => {
                    this.isExist(exist)
                })
            },
            isExist (exist) {
                if (!exist) {
                    this.$router.push(this.url)
                }
            },
            getUrl () {
                let routerQuery = this.$route.query.dataobj
                this.reciveMessage = routerQuery
                if (routerQuery === '1') {
                    this.$router.push('/second/user-center')
                }
                else {
                    this.$router.push('/second/publish')
                }
            }
        },
        components: {
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

    .infor .full li {
        position: relative;
        left: 0.9rem;
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
