<template>
    <div class="infor">
        <header-section class="head" title="完善个人信息">
            <p class="absolute-center">请完善个人信息</p>
        </header-section>
        <div class="full">
            <ul>
                <li>
                    <span>QQ<span style="color: red;">(必填)</span></span>
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
        <div class="submit">
            <button class="button absolute-center" @click="fulluser">完成</button>
        </div>
    </div>
</template>
<script>
    import {yibanAuth, marketFetch} from '../../config/fetchUtil'
    import loading from '@/common/mixins/loading'
    import updateData from '@/common/mixins/UpdateData'
    import InputBox from '../../common-component/InputBox'
    import headerSection from '../../common-component/HeaderSection.vue'

    export default {
        name: 'Fullinformation',
        mixins: [updateData, loading(marketFetch)],
        data () {
            return {
                title: '完善个人信息',
                yibanAuth: yibanAuth,
                userPhone: '',
                userWchat: '',
                userEmail: '',
                userQQ: ''
            }
        },
        methods: {
            fulluser: function () {
                let flag = 0
                if (this.userQQ !== '') {
                    flag = 1
                    if (!(/\d{5,11}/.test(this.userQQ))) {
                        alert('请填写正确的QQ号')
                        return false
                    }
                }
                if (this.userWchat !== '') {
                    flag = 1
                }
                if (this.userPhone !== '') {
                    flag = 1
                    if (!(/^1[34578]\d{9}$/.test(this.userPhone))) {
                        alert('请填写正确的手机号')
                        return false
                    }
                }
                if (this.userEmail !== '') {
                    flag = 1
                    if (!(/^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/.test(this.userEmail))) {
                        alert('请填写正确的邮箱地址')
                        return false
                    }
                }
                if (flag === 0) {
                    alert('请至少完善一项信息')
                    return false
                }
                return this.fetch.postJsonData('/second/user/signup', {
                    'qq': this.userQQ,
                    'phone': this.userPhone,
                    'wchat': this.userWchat,
                    'email': this.userEmail
                }).then(json => {
                    if (json.code !== 0) {
                        this.check()
                    } else {
                        alert(json.detail)
                    }
                })
            },
            check () {
                marketFetch.getJsonData('/second/user/exist', {}).then((exist) => {
                    if (exist) {
                        this.pushBack()
                    }
                })
            },
            pushBack () {
                let routerQuery = this.$route.query.dataobj
                if (routerQuery === 'usercenter') {
                    this.$router.push('/second/user-center')
                } else if (routerQuery === 'publish') {
                    this.$router.push('/second/publish')
                } else {
                    this.$router.push('/second/home-page')
                }
            }
        },
        components: {
            InputBox,
            headerSection
        }
    }
</script>

<style scoped>
    .infor {
        overflow-x: hidden;
    }

    .infor .full {
        font-size: 1.5rem;
    }

    .infor .full li {
        position: relative;
        left: 0.9rem;
    }

    .infor .submit {
        position: relative;
    }

    .infor .button {
        position: relative;
        color: #fff;
        background-color: #189FD9;
        border: none;
        width: 90%;
        height: 2.5rem;
        margin-top: 2rem;
        font-size: 1.25rem;
        border-radius: 6px;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }

    .infor .full {
        margin: 10px;
    }

</style>
