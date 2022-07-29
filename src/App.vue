<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <HelloWorld msg="Welcome to Your Vue.js App step by step" />
  <Home />
  <Home />
  <hi />
  <click />
  <towayBindingVue />
  <getInputValues />

</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Home from "./components/first.vue";
import hi from "./components/interpolation.vue";
import click from "./components/events.vue";
import towayBindingVue from "./components/to-wayBinding.vue";
import getInputValues from "./components/getInputValues.vue";




export default {
  name: "App",
  components: {
    HelloWorld,
    Home,
    hi,
    click,
    towayBindingVue,
    getInputValues,

},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
