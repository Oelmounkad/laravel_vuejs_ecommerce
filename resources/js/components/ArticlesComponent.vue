<template>
<div class="container">
    <div class="row">

      <div class="col-md-4 my-4" v-for="article in articles" :key="article.id">
                   <div class="card" style="width: 18rem;" >
  <img src="" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ article.name }}</h5>
    <p class="card-text">{{ article.description }}</p>
    <p class="card-text">{{ article.price }} €</p>
    <p class="card-text">Available : {{ article.quantity }}</p>
    <a @click="addToCart(article.id)" class="btn btn-primary">Add to cart</a>
  </div>
</div>
      </div>
          </div>
</div>
    
</template>

<script>
    export default {
        props: ['userAuth'],
        mounted() {
            this.$store.dispatch('fetchArticles');
            this.$store.commit('persistUser',this.userAuth.id);
             this.$store.dispatch('fetchUserCart');
            console.log('Component mounted.')
        },
        computed:{
                articles(){
                    return this.$store.state.articles
                }
        },
        methods:{
            addToCart(id){
                 this.$store.dispatch('addToCart',id);   
            }
        }
    }
</script>
