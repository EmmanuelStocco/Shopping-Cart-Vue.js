<template>
      <button
         class="card"
         :disabled="prod_selected" 
         v-on:click.prevent="addCart(prod)" 
        >
        <h6> {{ prod.title }} </h6>
        <p> R$: {{ prod.price }}</p>  

            <div class="remov_button" >
              
            
             <img 
                src="../assets/mais.png" 
                alt="saiba mais" 

                style="max-width: 20px; cursor: help"
                    v-if="prod.type_item == 'internet'"  
                        :title=prod.description
                >  

                <button 
                v-if="prod_selected" 
                v-on:click.prevent="removeCart(prod)"
                class="remove_button"
            > Remover  do Carrinho </button> 
            </div>
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
        },

        removeCart(prod){
            this.$emit('remove-prod-cart', prod)
        }
    }
})
</script>


<style>
    .card {
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
    border: 1px inset #1C6EA4;
    transition: 0.3s;
    margin-left: 7.5px;
    margin-right: 7.5px;
    width: 200px;  
    height: 200px;
    cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.card_end {
    display: flex; 
    justify-content: space-between;
    align-items: center;
    align-content: center;
    margin-top: 45px;
}

.remove_button {
  background-color: #d10e0ee0; /* Green */
  border: none;
  color: white;
  padding: 4px 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block; 
  border-radius: 4px;
  margin-right: 2px;
}

.remov_button { 
    justify-content: center;
    display: flex;
    align-items: center;
}

</style>