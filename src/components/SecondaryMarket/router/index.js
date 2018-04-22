const UserCenter = () => import('../component/UserCenter/UserCenter.vue')
const Discuss = () => import('../component/Discuss/Discuss.vue')
const HomePage = () => import('../component/HomePage/HomePage.vue')
const SecondaryMarket = [
    {
        path: '/second/usercenter',
        component: UserCenter,
    },
    {
        path: '/second/homepage',
        component: HomePage
    }
]
export default SecondaryMarket
