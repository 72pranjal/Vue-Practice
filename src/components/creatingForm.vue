<template>
  <h2>Simple Form.....</h2>
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
      },
    };
  },
  methods: {
    getdata() {
      console.log("Login Data=", this.userdata);
    },
  },
};
</script>