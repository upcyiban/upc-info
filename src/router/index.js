import Vue from 'vue'
import Router from 'vue-router'
// 二手市场
import SecondaryMarket from '../components/SecondaryMarket/router/index'
// 在线Debug工具
import OnlineDebug from '../components/OnlineDebug/route/index'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        ...SecondaryMarket,
        ...OnlineDebug
    ]
})
