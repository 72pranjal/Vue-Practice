<template>
    <h2>watchers</h2>
    <h2>count:{{count}}</h2>
    <button v-on:click="count=count+1">count ++</button>
    <button v-on:click="count=count-1">count --</button>

</template>

<script>
import { watch } from '@vue/runtime-core'
export default{
    data(){
          return{
            count:0,
          }
    },
    watch:{
        count(val,prev){
            if(val>5 &&val>prev){
                alert('Stop counting')
            }
        }
    }
}
</script>