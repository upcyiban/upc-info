const UserCenter = () => import('../component/UserCenter/UserCenter.vue')
const Discuss = () => import('../component/Discuss/Discuss.vue')
const HomePage = () => import('../component/HomePage/HomePage.vue')
const PublishPage = () => import('../component/PublishPage/PublishPage.vue')
const SecondaryMarket = [
    {
        path: '/second/usercenter',
        component: UserCenter,
    },
    {
        path: '/second/homepage',
        component: HomePage
    },
    {
        path: '/second/publish',
        component: PublishPage
    }
]
export default SecondaryMarket
