const UserCenter = () => import('../component/UserCenter/UserCenter.vue')
const Discuss = () => import('../component/Discuss/Discuss.vue')
const HomePage = () => import('../component/HomePage/HomePage.vue')
const Details = () => import('../component/Details/Details.vue')
const PublishPage = () => import('../component/PublishPage/PublishPage.vue')
import '../common-style/index.css'
const SecondaryMarket = [
    {
        path: '/second/usercenter',
        component: UserCenter,
    },
    {
        path: '/second/home-page',
        component: HomePage
    },
    {
        path: '/second/details/:articleId',
        component: Details
    },
    {
        path: '/second/publish',
        component: PublishPage
    }
]
export default SecondaryMarket
