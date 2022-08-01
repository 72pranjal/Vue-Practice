<template>
    <!-- <h2>Pass data parent to child</h2>
  <child  username="pranjal gupta" :user="user" :gsetdata="getdatavue()"/> -->
  <h3>Pass data child to parent</h3>
  <h2>{{childuser}}</h2>
  <child :getuser2="getusername2" />
</template>
<script>

import child from "./child.vue";
export default{
    
    components: {
        child,
    },
    data(){
        // return{
        //     user:{name:'Peter',email:'peter@gmail.com'},
           
        // }
        return{
            childuser:''
        }

    },
    methods:{
    //     getdatavue(){
    //        alert('funcrion is called')
    // },
    getusername2(name){
        this.childuser=name;
    }
}
}
</script>