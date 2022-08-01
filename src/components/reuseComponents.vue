<template>
  <h2>Reuse components</h2>
  <!-- <child1 /> -->
  <ul>
    <li v-for="item1 in user" :key="item1.name" >
      <child1 :data="item1" />
    </li>
  </ul>
</template>

<script>
import child1 from "./reuseChild.vue";
export default {
  components: {
    child1,
  },
  data() {
    return {
      user:[
        { name: "Tom", email: "tom@.com" },
        { name: "Bob", email: "bob@.com" },
        { name: "Jack", email: "jack@.com" },
        { name: "Sam", email: "sam@.com" },
        { name: "Ana", email: "ana@.com" },
      ],
    };
  },
};
</script>