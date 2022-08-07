<template>
  <div id="app" class="app">
    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">M2 Carrinho de Compras </a>
      </div>
    </nav>

    <content class="content">    
      <div>
         <h3> Telefone </h3>
         <h5>Selecione um plano de internet para continuar </h5>
          <scroll-view v-for="(phone, index) in phoneAll" :key="index">
            <Card :prod="phone"   
              />
          </scroll-view>
      </div>

      <div>
         <h3> Internet </h3>
          <h5>Selecione um plano de internet para continuar </h5>
          <scroll-view v-for="(internet, index) in internetAll" :key="index">
          <Card :prod="internet"   
            />
         </scroll-view>
      </div>

      <div>
         <h3> TV </h3>
          <h5>Selecione um plano de internet para continuar </h5>
           <scroll-view v-for="(tv, index) in tvAll" :key="index">
            <Card :prod="tv"   
              />
         </scroll-view>
      </div>

      
    </content>
  </div>
</template>

<script>

import Product from './services/products'; 
import Card from '../src/components/Card.vue';
export default {
  name: 'app',

  data() {
    return {
      phoneAll: [],
      tvAll: [],
      internetAll: [],
      cart: [],
      
      internetSelected: []
    }
  },


  mounted() {
    this.listInternet();
    this.listTv();
    this.listPhones();
  },

  components: { 
    Card
  },

  methods: {
    listPhones() {
      Product.listPhones().then(response => {
        this.phoneAll = response.data
      }).catch(error => {
        console.log(error);
      })
    },

    listTv() {
      Product.listTv().then(response => {
        this.tvAll = response.data
      }).catch(error => {
        console.log(error);
      })
    },

    listInternet() {
      Product.listInternet().then(response => {
        this.internetAll = response.data
      }).catch(error => {
        console.log(error);
      })
    }, 

    inCart(product) {
            return this.cart.indexOf(product) != -1
    },
    
  }
}

</script>

<style>
.container {
  flex-direction: row;
}

.content {
  display: inline-block;
  align-items: center;
  padding: 10px;
}

.app {}
</style>
