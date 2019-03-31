<template>
  <div class="page bg-blue">
    <div class="wrapper" style="text-align:center">
      <br>
      <br>
      <img src="/logos/vincet.svg" class="vincet-logo">
      <br>
      <form @submit="login">
        <span class="login-text">E-Mail</span>
        <br>
        <input class="my-input" type="text" id="email">
        <br>
        <span class="login-text">Contraseña</span>
        <br>
        <input class="my-input" type="password" id="pass">
        <br>
        <button type="submit" class="btn my-btn">
          <span style="margin-left:auto;margin-right:auto;display:flex;font-size:1.5rem">Ingresar</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import querystring from "querystring";
export default {
  name: "Login",
  methods: {
    login() {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("email").value;
      axios
        .post(
          "http://172.16.28.180:3000/login/app/movil",
          querystring.stringify({
            email: email,
            password: password
          })
        )
        .then(res => {
          if (res.data.error) {
            //
          } else {
            window.localStorage.setItem("userId", res.data.user._id);
            console.log(res.data);
            this.$router.push("/mainMenu");
          }
        })
        .then();
    }
  }
};
</script>

<style scoped>
.vincet-logo {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  height: 80%;
}
.login-text {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: Arial, Helvetica, sans-serif;
}
.my-btn {
  display: flex;
  height: 3rem;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  text-align: center;
}
.my-input {
  margin-bottom: 1rem;
  height: 2rem;
  width: 100%;
  font-size: 1.25rem;
}
</style>
