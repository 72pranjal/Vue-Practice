<template>
     <h1>Name:{{getname('Pranjal gupta')}}</h1>
    <h1>Email:{{email==54646546366}}</h1>
    <h1>Moblie:{{mobile}}</h1>
    <h1>Designation:{{getdesignation('Developer')}}</h1>
    <h1>Full Data:{{getdata()}}</h1>


   

</template>

<script>
export default{
    name:'hi',
    data(){
        return {
            email:'pranjal7253@gamil.com',
            mobile:'725380556',
            getname:function(a)
            {
                return a;
            }
        }
    },
    // methods  vue3
    methods:{
        getdesignation(des){
            return des;
        },
        getdata(){
            return{
                name:'Peter',
                email:this.email,
                mobile:this.mobile,
                designation:'Developer'
            }
        }
    }

}
</script>