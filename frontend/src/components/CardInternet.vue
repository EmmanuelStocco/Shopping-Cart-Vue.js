<template>
    <button class="card">  
        <h6> {{internet_prod.title}} </h6> 
        <p> {{internet_prod.price }}</p>


        <button title="este é o toltip"> - detalhes </button> 
    </button> 
</template>

<script> 
export default {
    name: 'CardInternet',
    props: { 
        internet_prod: {
            type: Object,
            required: true,
            default: null
        }, 
    }
}
</script>


<style>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 5px;
        height: 200px;
        width: 200px;
        align-items: center; 
        border-color: blueviolet;
        margin: 10px;
        cursor: pointer;
    }
    .card:hover {
         box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    .container {
  padding: 2px 16px;
}

</style>