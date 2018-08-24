<script>
import Vue from "vue";
import ButtonCounter from "./ButtonCounter.vue";

export default Vue.extend({
  components: { ButtonCounter },
  methods: {
    mensaje: function() {
      console.log("pulsar con un cambio");
    }
  },
  data: function() {
    return {
      buttons: [{ id: 1, texto: "Boton uno" }, { id: 2, texto: "Boton dos" }]
    };
  }
});
</script>

<template>
<div>
    <ButtonCounter
      v-on:pulsar="mensaje" 
      v-for="button in buttons" 
      v-bind:key="button.id"
      v-bind:texto="button.texto" />
</div>
</template>


