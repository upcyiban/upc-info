const Discuss = () => import('../component/Discuss/Discuss.vue')
const HomePage = () => import('../component/HomePage/HomePage.vue')
const PublishPage = () => import('../component/PublishPage/PublishPage.vue')
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
        path: '/second/publish',
        component: PublishPage
    }
]
export default SecondaryMarket
