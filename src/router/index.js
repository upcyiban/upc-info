import Vue from 'vue'
import Router from 'vue-router'
import LeiNuo from "../common/components/Test/router/index"
import SecondaryMarket from "../components/SecondaryMarket/component/router/index"

Vue.use(Router)
export default new Router({
    mode: 'hash',
    routes: [
        ...LeiNuo,
        ...SecondaryMarket
    ]
})
