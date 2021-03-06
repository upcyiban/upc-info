import '../common-style/index.css'
const Discuss = () => import('../component/Discuss/Discuss.vue')
const HomePage = () => import('../component/HomePage/HomePage.vue')
const Details = () => import('../component/Details/Details.vue')
const PublishPage = () => import('../component/PublishPage/PublishPage.vue')
const UserCenter = () => import('../component/UserCenter/UserCenter.vue')
const FullInformation = () => import('../component/UserInformation/FullInformation.vue')
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
        path: '/second/publish/:articleId',
        component: PublishPage,
        props: true
    },
    {
        path: '/second/user-center',
        component: UserCenter
    },
    {
        path: '/second/user-information',
        component: FullInformation
    }
]

export default SecondaryMarket
