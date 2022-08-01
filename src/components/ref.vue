<template>
  <h2>Ref in vue3....</h2>
  <input type="text" ref="input" />
  <button v-on:click="getvalue">Get Value</button>
</template>

<script>
export default {
  methods: {
    getvalue() {
      this.$refs.input.focus();
      let value = this.$refs.input.value;
      console.log(value);
      this.$refs.input.style.color = "blue";
    },
  },
};
</script>