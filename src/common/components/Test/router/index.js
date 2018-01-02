import HelloWorld from '../Hello/HelloWorld.vue'

const GoodBye = ()=>import('../Hello/GoodBye.vue')
const LeiNuo = [
    {
        path: '/hello',
        component: HelloWorld,
        children: [{
            path: 'goodBye',
            component: GoodBye
        }]
    },
    {
        name: 'goodBye',
        path: '/goodBye',
        component: GoodBye
    }
]
export default LeiNuo
