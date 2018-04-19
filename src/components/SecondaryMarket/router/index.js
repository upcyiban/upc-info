const Discuss = () => import('../component/Discuss/Discuss.vue')
const HomePage = () => import('../component/HomePage/HomePage.vue')
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
