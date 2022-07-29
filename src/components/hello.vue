<template>
    <h1>Here many child present</h1>
    <button v-on:click="click()">You clicked me {{count}} times:.</button>
</template>

<script>

export default{
    data(){
        return {
            count:0
    }
    },
    methods:{
        click(){
            this.count++;
        }
    }
}
</script>