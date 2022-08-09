<template>  
    <div>
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <slot name="header">
                  default header
                </slot>
              </div>

              <div class="modal-body">
                <slot name="body">
                  default body
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  default footer
                  <button class="modal-default-button" @click="$emit('close')">
                    OK
                  </button>
                </slot>
              </div>
            </div>
          </div>


        </div>

        
        <div id="app">
        <button id="show-modal" @click="showModal = true">Show Modal</button> 
        <modal v-if="showModal" @close="showModal = false"> 
            <h3 slot="header">custom header</h3>
        </modal>
        </div> 
    </div>
</template>
 

<script>
      export default({
        name: 'Modal',
      })  
</script>

