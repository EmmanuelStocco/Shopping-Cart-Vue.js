<template>
  <div id="app" class="app"> 
    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">M2 Carrinho de Compras </a>
      </div>
    </nav>

    <content class="content">
      <h3> Internet </h3>
      <h5>Selecione um plano de internet para continuar </h5>
      <!-- cards plano de internet -->
      <scroll-view
          v-for="(internet, index) in internetAll" :key="index"
      >       
          <CardInternet
            :internet_prod="internet" 
          />
      </scroll-view>  

      <h3> Um plano de Tv é sempre bom!  </h3>
      <h5>Agora escolha seu pacote de TV </h5>
      <scroll-view v-for="(tv, index) in tvAll" :key="index">
        <CardInternet
          :internet_prod="tv" />
      </scroll-view>

      <h3> Fixo </h3>
      <h5>Agora escolha seu pacote de telefone fixo </h5>
      <scroll-view v-for="(phone, index) in phoneAll" :key="index">
        <CardInternet
          :internet_prod="phone" />
      </scroll-view>


      <hr>

      <h3> Taxa de instalação    - gratis</h3>
      <h3> Total R$: 00/mês</h3>

      <button> Continuar </button>
    </content>
  </div>
</template>

<script>
 
import Product from './services/products'
import CardInternet from '../src/components/CardInternet.vue'

export default {
  name: 'app',

  data() {
    return { 
      phoneAll: [],
      tvAll: [],
      internetAll: []
    }
  }, 

  mounted() {
    this.listInternet();
    this.listTv();
    this.listPhones();
  },

  components: {
    CardInternet
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

  } 
}

</script>

<style>
  .container {
    flex-direction: row; 
  }

  .content {  
    display: inline-block
  }

  .app { 
    

  }

</style>
