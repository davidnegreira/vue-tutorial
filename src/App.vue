<template>
    <div id="app">
        <h1>Tutorial cuatro con server!!</h1>
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