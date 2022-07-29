<template>
    <h2>Two-Way-Binding</h2>
    <input type="text" v-model="count"><br>
    <button v-on:click="inceriment()"> Count:{{count}}</button>
</template>
<script>
export default{
    // name:'binding',
    data(){
        return{
            count:0
        }
    },
    methods:{
        inceriment(){
               this.count++;
        }
    }
}
</script>