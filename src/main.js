// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './common/style/rest.css'
import './common/style/common-style.css'

import 'babel-polyfill';
require('es6-promise').polyfill();
import 'fetch-detector';
import 'fetch-ie8';

/**@namespace fetch*/
/**@namespace require*/
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})
