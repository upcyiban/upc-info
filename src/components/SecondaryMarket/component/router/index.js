const My = () => import('../My/My.vue')
const HomePage = () => import('../HomePage/HomePage.vue')
const SecondaryMarket = [
    {
        path: '/second/my',
        component: My,
    },
    {
        path: '/second/homepage',
        component: HomePage
    }
]
export default SecondaryMarket
