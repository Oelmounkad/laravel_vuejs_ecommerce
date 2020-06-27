
require('./bootstrap');

window.Vue = require('vue');


import VueRouter from 'vue-router'
import { store } from './store/store';

Vue.use(VueRouter);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const routes = [];

const router = new VueRouter({routes});

const app = new Vue({
    el: '#app',
    store: store,
    router: router
});
