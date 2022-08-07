<template>
      <button
         class="card"
         :disabled="prod_selected" 
         v-on:click.prevent="addCart(prod)" 
      >
        <h6> {{ prod.title }} </h6>
        <p> {{ prod.price }}</p> 
        <button v-if="prod.type_item == 'internet'" :title=prod.description> - detalhes </button> 
    </button>
</template>

<script> 
export default ({
    name: 'Card',
    props: {
        prod: {
            type: Object,
            required: false,
            default: false,
            itemType: String
        },
        prod_selected: {
            type: Boolean,
            required: false,
            default: false,
            itemType: String
        }, 
    },
    methods: {
        addCart (prod) {
            this.$emit('add-prod-cart', prod)
        }
    }
})
</script>


<style>
    .card {
 box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  margin-left: 7.5px;
  margin-right: 7.5px;
  width: 200px;
  height: 200px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
</style>