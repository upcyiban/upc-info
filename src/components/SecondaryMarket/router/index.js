<<<<<<< HEAD:src/components/SecondaryMarket/component/router/index.js
const Discuss = () => import('../Discuss/Discuss.vue')
const HomePage = () => import('../HomePage/HomePage.vue')
const Details = () => import('../Details/Details.vue')
=======
const Discuss = () => import('../component/Discuss/Discuss.vue')
const HomePage = () => import('../component/HomePage/HomePage.vue')
>>>>>>> upstream/master:src/components/SecondaryMarket/router/index.js
const SecondaryMarket = [
    {
        path: '/second/discuss',
        component: Discuss,
    },
    {
        path: '/second/homepage',
        component: HomePage
    },
    {
        path: '/second/details',
        component: Details,
    }
]
export default SecondaryMarket
