
const Discuss = import('./Discuss/Discuss.vue')

const SecondaryMarket = [
    {
        path: '/secondary-market',
        children: [{
            path: 'discuss',
            component: Discuss
        }]
    }
]
export default {}
