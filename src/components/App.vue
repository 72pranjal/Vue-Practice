<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <HelloWorld msg="Welcome to Your Vue.js App step by step" />
  <Home />
  <Home />
  <hi />
  <click />
  <towayBindingVue />
  <getInputValues />
  <heremany />
  <checkbox />
  <else1 />
  <forloop />
  <parent />
  <reuse />
  <dynamic />

</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Home from "./components/first.vue";
import hi from "./components/interpolation.vue";
import click from "./components/events.vue";
import towayBindingVue from "./components/to-wayBinding.vue";
import getInputValues from "./components/getInputValues.vue";
import heremany from "./components/hello.vue";
import checkbox from "./components/checkbox&radio.vue";
import else1 from "./components/if-else.vue";
import forloop from "./components/forloop.vue";
import parent from "./components/parent.vue";
import reuse from "./components/reuseComponents.vue";
import dynamic from "./components/dynamicClasses.vue";



export default {
  name: "App",
  components: {
    HelloWorld,
    Home,
    hi,
    click,
    towayBindingVue,
    getInputValues,
    heremany,
    checkbox,
    else1,
    forloop,
    parent,
    reuse,
    dynamic,

},
};
</script>

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
