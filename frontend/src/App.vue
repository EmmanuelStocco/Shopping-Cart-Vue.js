<template>
  <div id="app" class="app" :checked="themeBlack" :style="styles">
    <content class="content">

      <label for="themeBlack">
        <input type="checkbox" :checked="themeBlack" @click="toogleTheme" name="themeBlack" id="themeBlack"> Tema Escuro
      </label> 

      <div>
        <h3> Internet </h3>
        <h5>Selecione um plano de internet para continuar </h5>
        <scroll-view v-for="(internet, index) in internetAll" :key="index">
          <Card :prod="internet" :prod_selected="inCart(internet)" @add-prod-cart="addCart"
            @remove-prod-cart="removeCart" />
        </scroll-view>
      </div>

      <div>
        <h3> Telefone </h3>
        <h5>Selecione um plano de internet para continuar </h5>
        <scroll-view v-for="(phone, index) in phoneAll" :key="index">
          <Card :prod="phone" :prod_selected="inCart(phone)" :disabled="cart < 1 ? true : false"
            @add-prod-cart="addCart" @remove-prod-cart="removeCart" />
        </scroll-view>
      </div>

      <div>
        <h3> TV </h3>
        <h5>Selecione um plano de internet para continuar </h5>
        <scroll-view v-for="(tv, index) in tvAll" :key="index">
          <Card :prod="tv" :prod_selected="inCart(tv)" :disabled="cart < 1 ? true : false" @add-prod-cart="addCart"
            @remove-prod-cart="removeCart" />
        </scroll-view>
      </div>

      <hr />

      <div class="cart">
        <div class="tx">
          <h5>Taxa de instalação</h5>
          <h5 style="color: '#a600ff'">gratis </h5>
        </div>
        <div class="tx">
          <h5> Valor Total</h5>
          <h5> R$: {{ valueTotal }} /mês </h5>
        </div>
        <button @click="dataPost(cart)" class="button_final"> Continuar </button>
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
      valueTotal: 0,
      styles: {
        backgroundColor: '#FFF',
        color: '#121214'
      },
      themeBlack: false
    }
  },

  mounted() {
    this.listInternet();
    this.listTv();
    this.listPhones();
  },

  components: {
    Card,
  },

  methods: {
    dataPost(cart) {
    Product.dataPost(cart).then(response => {
      alert('Envio concluido')
      window.location.reload();
    }).catch(err => {
      console.log(err)
    })
    },

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

    toogleTheme() {
      this.themeBlack = !this.themeBlack;

      if (this.themeBlack) {
        this.styles.backgroundColor = '#121214'
        this.styles.color = '#fff'
      } else {
        this.styles.backgroundColor = '#fff'
        this.styles.color = '#121214'
      }
    },

    inCart(product) {
      return this.cart.indexOf(product) != -1
    },

    removeCart(product) {
      const cartNew = this.cart.filter((item, i) => {
        return item != product
      });
      this.cart = cartNew;
      let x = this.valueTotal - product.price
      this.valueTotal =  +(x.toFixed(2))
    }, 

    addCart(product) {
      this.cart.map((e, index) => {
        if (e.type_item == product.type_item) {
          let x = this.valueTotal - e.price
          this.valueTotal = +(x.toFixed(2))
          this.cart.splice(index);
        }
      })
      this.cart.push(product);
      this.valueTotal = this.valueTotal + product.price
    }
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
  border: 1px outset #1C6EA4;
  background-color: #F8F8FF;
  margin-bottom: 20px;
  
      border-radius: 0px 0px 10px 10px;
}

.app {
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e2e2f1e5;
  font-family: Arial, Helvetica, sans-serif;

}

.cart {

  padding-left: 10px;
  padding-right: 10px;

}

.nav-wrapper {
  background-color: #182049
;
}

h3 {
  color: #734bd1
}

h5 {
  color: #6b7e92
}

.tx {
  font-size: 16px;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
}

.button_final {
  display: flex;
  margin-bottom: 25px;
  margin-top: 20px;
  margin-left: 40%;
  margin-right: 50%;

  background-color: #734bd1;
  /* Green */
  border: none;
  color: white;
  padding: 2px 4px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 2px;
  width: 200px;
  height: 35px;
}
</style>
