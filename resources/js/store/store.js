import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';


Vue.use(Vuex);



export const store = new Vuex.Store({
    state: {
      articles : [],
      cart: [],
      user: ''
        },
    getters: {},
    mutations: {

        fetchArticles: (state,payload) => {
            state.articles = payload.data;
        },
        persistUser: (state,payload) => {
            state.user = payload;
            console.log("user id : "+state.user)
        },
        fetchUserCart: (state,payload) => {
            state.cart = payload.data;
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

                },
                fetchUserCart: (context) =>{
                    axios.get('http://127.0.0.1:8000'+'/carts/'+context.user)
                    .then(res => {
                        context.commit('fetchUserCart',res)
                        console.log('heres the fetched cart : '+res.data)
                    })
                    .catch(err => console.log(err))
                }
                
    }
});