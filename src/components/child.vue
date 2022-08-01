<template>
<h2>helooooooooo</h2>
    <!-- <h2>{{username}}</h2>
    <h2>Name:{{user.name}}</h2>
    <h2>Email:{{user.email}}</h2> -->
<!-- <button v-on:click="getdatavue()">call me</button> -->
<button v-on:click="getuser2(name2)">send user name</button>


</template>

<script>

export default{
    // name:'child',
    data(){
        return{
            name2:'Julia',
        }
    },
    props:{
        // username:[],
        // user:{},
        // getdatavue:Function,
        getuser2:Function
    }
       
}
</script>