
require('./bootstrap');

window.Vue = require('vue');


import VueRouter from 'vue-router'
import { store } from './store/store';

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueRouter);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('articles-component', require('./components/ArticlesComponent.vue').default);

import Articles from './components/ArticlesComponent.vue';

const routes = [
    {
        path: '/articles',
        component: Articles
    },
];

const router = new VueRouter({routes});

const app = new Vue({
    el: '#app',
    store: store,
    router: router
});
