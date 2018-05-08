import '../common-style/index.css'
const Discuss = () => import('../component/Discuss/Discuss.vue')
const HomePage = () => import('../component/HomePage/HomePage.vue')
const Details = () => import('../component/Details/Details.vue')
const PublishPage = () => import('../component/PublishPage/PublishPage.vue')
const UserCenter = () => import('../component/UserCenter/UserCenter.vue')
const SecondaryMarket = [
    {
        path: '/second/discuss',
        component: Discuss
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
    },
    {
        path: '/second/user-center',
        component: UserCenter
    }
]
export default SecondaryMarket