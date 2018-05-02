const Discuss = () => import('../component/Discuss/Discuss.vue')
const HomePage = () => import('../component/HomePage/HomePage.vue')
const Details = () => import('../component/Details/Details.vue')
const PublishPage = () => import('../component/PublishPage/PublishPage.vue')
const SecondaryMarket = [
    {
        path: '/second/discuss',
        component: Discuss,
    },
    {
        path: '/second/home-page',
        component: HomePage
    },
    {
        path: '/second/details',
        component: Details
    },
    {
        path: '/second/publish',
        component: PublishPage
    }
]
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
export default SecondaryMarket
