import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';


Vue.use(Vuex);



export const store = new Vuex.Store({
    state: {
      articles : []
        },
    getters: {},
    mutations: {

        fetchArticles: (state,payload) => {
            state.articles = payload.data;
        }

    },
    actions: {
                fetchArticles: (context) => {
                    axios.get('http://127.0.0.1:8000'+'/articles')
                    .then(res => {
                        context.commit('fetchArticles',res)
                        console.log('heres the articles : '+res.data)
                    })
                    .catch(err => console.log(err))

                }
    }
});