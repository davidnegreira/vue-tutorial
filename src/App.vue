<template>
    <div id="app">
        <h1>Tutorial tres con server cambios en vivo, siii!!</h1>
        <button-group/>
    </div>
</template>

<script>
import Vue from "vue";
import ButtonGroup from "./components/ButtonGroup.vue";
export default Vue.extend({
  components: { ButtonGroup }
});
</script>

<style lang="scss">
@import "../scss/variables.scss";
body {
  background-color: $color-de-fondo;
}
</style>