const Discuss = () => import('../Discuss/Discuss.vue')
const HomePage = () => import('../HomePage/HomePage.vue')
const Details = () => import('../Details/Details.vue')
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
