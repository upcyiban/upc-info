// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './common/index'

Vue.config.productionTip = false

console.log(123);
console.log("123456789".reverse());
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})
