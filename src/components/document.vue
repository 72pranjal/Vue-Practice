<template>
  <h2>V-For</h2>
<ul>
    <li v-for="n in even" :key="n"> {{n}}</li>
</ul>

</template>

<script>
export default {
  name: "docment",
  data() {
    return {
     numbers:[1,2,3,4,5,6,7,8,9],
    };
    },
    computed:{
        even(){
            return this.numbers.filter(n =>n%2===0)
            // return this.numbers.findIndex(n =>n%2==0)
        }
    }
};
</script>