<template>
  <h2>css binding</h2>
  <h3 :class="applystyle">CSS Dynamic Components</h3>
  <button v-on:click="colorfull = !colorfull">Apply style</button>
</template>

<script>
export default {
  data() {
    return {
      colorfull: true,
    };
  },
  computed: {
    applystyle() {
      return {
        pink: this.colorfull,
        red: true,
        other: true,
      };
    },
  },
};
</script>

<style>
.pink {
  background-color: lightpink;
}
.red {
  color: red;
}
.other {
  font-size: 50px;
}
</style>