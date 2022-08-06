<template>
  <h2>Simple Form.....</h2>
  <ul>
    <li v-for="item in error" v-bind:key="item">
    {{item}} is not valid
     </li>
  </ul>
  <form>
    <label>Name:</label><br />
    <input
      type="text"
      name=""
      id="name"
      placeholder="enter your name"
      v-model="userdata.name"
    /><br /><br />

    <label>Email:</label><br />
    <input
      type="email"
      name=""
      id="email"
      placeholder="enter your email"
      v-model="userdata.email"
    /><br /><br />

    <label>Password</label><br />
    <input
      type="password"
      name=""
      id="pass"
      placeholder="enter your password"
      v-model="userdata.password"
    /><br /><br />
    <br />
    <select>v-model="userdata.country">
      <option selected desabled>Choose our country</option>
      <option>India</option>
      <option>USA</option>
      <option>England</option>
      <option>UAE</option>

    </select>
    <br>

    <h3>Technology</h3>
    <label for="ja">Java</label>
    <input type="checkbox"  id="ja" value="java" v-model="userdata.technology" /><br>
    <label for="re">React</label>
    <input type="checkbox"  id="re" value="react" v-model="userdata.technology" /><br>
    <label for="python">Python</label>
    <input type="checkbox"  id="py" value="pyhton" v-model="userdata.technology" /><br>

    <h3>Gender</h3>
    <label for="m">Male</label>
    <input type="radio" value="male" name="gender" id="m" v-model="userdata.gender" /><br>
     <label for="f">Female</label>
    <input type="radio" value="female" name="gender" id="f" v-model="userdata.gender" /><br>
     <label for="o">Other</label>
    <input type="radio" value="other" name="gender" id="o" v-model="userdata.gender" /><br>
    <button v-on:click="getdata()">Login</button>
  </form>
  <p>
    {{userdata}}
  </p>
</template>

<script>
export default {
  data() {
    return {
      userdata: {
        name: "",
        email: "",
        password: "",
        countrty:"",
        technology:[],
        gender:"",
      },
      error:[],
    };
  },
  methods: {
    getdata() {
      this.error=[];
      for(const item in this.userdata){
        if(this.userdata[item]==="" || this.userdata[item].length===0){
          this.error.push(item);
        }
      }
      if(this.error.length===0){
        alert('your form is submitted');
      }
      console.log("Login Data=", this.userdata,this.error);
    },
  },
};
</script>