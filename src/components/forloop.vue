<template>
    <h2>for loop in Vue3</h2>
    <ol>
        <li v-for="item in technology" :key="item">
             {{item}}

        </li>
    </ol>
    <br>
    <ul>
        <li v-for="item in users" :key="item.name">
          Name is: {{item.name}} and Email is:{{item.email}}

        </li>
    </ul>
</template>
<script>
export default{
    data(){
        return{
            technology:['React','Node js','Javascript','Python'],
            users:[
                {name:'Tom',email:'tom@gmail.com'},
                {name:'Bob',email:'bob@gmail.com'},
                {name:'Julia',email:'julia@gmail.com'},
                {name:'Ana',email:'ana@gmail.com'},

            ]
        }
    }
}
</script>