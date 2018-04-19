const Discuss = () => import('../Discuss/Discuss.vue')
const HomePage = () => import('../HomePage/HomePage.vue')
const SecondaryMarket = [
    {
        path: '/second/discuss',
        component: Discuss,
    },
    {
        path: '/second/homepage',
        component: HomePage
    }
]
export default SecondaryMarket
