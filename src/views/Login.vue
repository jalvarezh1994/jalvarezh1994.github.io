<template>
  <div class="page bg-gradient">
    <div class="wrapper" style="text-align:center">
      <img src="/svg/vincet-logo.svg" class="vincet-logo">
      <br>
      <div class="greeting-text">
        Bienvenidos a
        <span>VINCET</span>
      </div>
      <br>
      <form @submit="login">
        <input class="input" type="text" id="email">
        <br>
        <input class="input" type="password" id="pass">
        <br>
        <button class="sign-in-btn" type="submit">
          <span style>Ingresar</span>
        </button>
        <br>O
        <div>Registrarse</div>
      </form>
    </div>
    <footer class="footer"></footer>
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
      const password = document.getElementById("pass").value;
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
            console.log(res.data.error);
          } else {
            window.localStorage.setItem("userId", res.data.user._id);
            console.log(res.data);
            this.$router.push("/mainMenu");
          }
        })
        .then(err => {
          if (err) {
            alert("Hubo un error de autenticación.");
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.bg-gradient {
  background: linear-gradient(to right, #19b7cb 15%, #39a935 54%);
}
.input {
  width: 80%;
  border: 3px solid white;
  height: 3rem;
  border-radius: 20px;
}
.sign-in-btn {
  width: 81%;
  background: linear-gradient(to right, #262262 0%, #662d91 100%);
  border: 3px;
  border-color: linear-gradient(to right, #262262 0%, #662d91 100%);
  height: 3rem;
}
.sign-in-btn span {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  font-size: 1.5rem;
}
.footer {
  background: linear-gradient(to right, #262262 0%, #662d91 100%);
  height: 1rem;
  width: 100%;
  bottom: 0px;
  position: absolute;
}
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
.greeting-text {
  font-family: "Lato-Regular";
  font-size: 1.75rem;
  color: #3d2b57;
  span {
    font-family: "Zian";
    font-size: 1.75rem;
  }
}
@font-face {
  font-family: "Lato-Regular";
  src: url("/fonts/lato/Lato-Regular.ttf");
}
@font-face {
  font-family: "Zian";
  src: url("/fonts/zian/Zian.ttf");
}
</style>
