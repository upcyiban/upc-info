// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './style/rest.css'
import './style/common-style.css'
import $ from 'jquery'
// import './common/index'

/**
 * @namespace require
 * @namespace fetch
 */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})
