import Vue from 'vue'
import message from '../Console/DataComponent/Message.vue'
import ObjectClass from '../Console/DataComponent/ObjectClass.vue'

const Console = () => import('../Console/Console.vue')
const Storage = () => import('../Storage/index.vue')

const OnlineDebug = [
    {
        path: '/debugger/console',
        component: Console
    },
    {
        path: '/debugger/storage',
        component: Storage
    }
]
Vue.component('message', message)
Vue.component('object-class', ObjectClass)

export default OnlineDebug
