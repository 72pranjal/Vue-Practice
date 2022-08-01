<template>
    <h2>Get Input Values</h2>
    <input type="email" placeholder=" enter your mail" id="email" v-model="email"><br><br>
    <input type="password" placeholder="enter your passwar" id="pass" v-model="pass"><br><br>
    <button v-on:click="getdata()">Get Values</button>
    <br>
    
     
</template> 

<script>
export default{
    data(){
        return{
            email:null,
            pass:null,
        }
    },
    methods:{
        getdata(){
            console.log("values",'Email=',this.email,'Password=',this.pass);
        }
    }
}
</script>