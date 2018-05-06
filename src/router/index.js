import Vue from 'vue'
import Router from 'vue-router'
import SecondaryMarket from "../components/SecondaryMarket/router/index"

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        ...SecondaryMarket
    ]
})
