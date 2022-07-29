<template>
    <h1>Click component</h1>
    <button v-on:click="getalert()">Count1: {{count1}}</button>
    <button v-on:click="getalert1()">Count2: {{count2}}</button>
    
</template>

<script>
export default{
 name:'click',
 data(){
      return {
        count1:0,
        count2:0
        }
 },
 
 methods:{
    getalert(){
        this.count1++;
    },
    getalert1(){
        this.count2=this.count2+3;
    }
 }
}
</script>