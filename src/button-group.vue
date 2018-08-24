<script>
import Vue from "vue";
import buttonCounter from "./button-counter.vue";
export default Vue.extend({
  components: { "button-counter": buttonCounter },
  methods: {
    mensaje: function() {
      console.log("pulsar con un cambio");
    }
  }
});
</script>

<template>
<div>
    <button-counter v-on:pulsar="mensaje">has pulsado el primero:</button-counter>
    <button-counter v-on:pulsar="mensaje">has pulsado el segundo</button-counter>
    <button-counter v-on:pulsar="mensaje">has pulsado el tercero</button-counter>
</div>
</template>


