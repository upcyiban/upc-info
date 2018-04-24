const Discuss = () => import('../component/Discuss/Discuss.vue')
const HomePage = () => import('../component/HomePage/HomePage.vue')
const Details = () => import('../component/Details/Details.vue')
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
        path:'/second/details',
        component:Details

    }
]
export default SecondaryMarket
