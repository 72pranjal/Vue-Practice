<template>
    <h2 v-if="show">hello you are so good</h2>
    <h2 v-else>you are not good</h2>
    <button v-on:click="show=!show">Toogle</button>
</template>

<script>

export default{
    data(){
        return{
            show:true
        }
    }
}
</script>