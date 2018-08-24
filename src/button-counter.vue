<script>
export default {
  data: function() {
    return {
      count: 0
    };
  },
  props: ["texto"]
};
</script>

<template>
    <button @click="count++; $emit('pulsar')"><b><slot></slot></b> {{count}} veces</button>
</template>

<style lang="scss">
@import "../scss/variables.scss";
button {
  font-size: $dimensiones-letra
}
</style>
