<template>
    <h2>Checkbo values for Technology</h2>
    <label for="java">Java</label>
    <input type="checkbox" name="" id="java" value="java" v-model="technology" ><br>
    <label for="js">Javascript</label>
    <input type="checkbox" name="" id="js" value="javascript" v-model="technology" ><br>
    <label for="node">Node js</label>
    <input type="checkbox" name="" id="node" value="node js" v-model="technology" ><br>
    <label for="python">Python</label>
    <input type="checkbox" name="" id="python" value="python" v-model="technology" ><br>
    <br>
    <h2>Profession......</h2>
    <br>
    <label for="st">Students</label>
    <input type="radio" name="profession" value="student" id="st" v-model="profession">
     <br>
    <label for="d">Developer</label>
    <input type="radio" name="profession" value="developer" id="d" v-model="profession">
     <br>
    <label for="e">Engineer</label>
    <input type="radio" name="profession" value="engineer" id="e" v-model="profession">
    <h3>Selected Technology:{{technology}}</h3>
    
    <h3>MY Profession is {{profession}}</h3>
</template>

<script>
export default{
    data(){
        return{
            technology:[],
            profession:null
        }
    }
}
</script>