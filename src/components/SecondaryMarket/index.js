
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
import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import './node_modules/bootstrap/dist/js/bootstrap.min.js';
export default {}
